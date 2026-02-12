
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import ServiceDetail from './pages/ServiceDetail';
import { PageTransition } from './components/PageTransition';
import { AnimatePresence } from 'framer-motion';
import { ContactPage } from './pages/ContactPage';

export type Page = 'home' | 'about' | 'services' | 'casestudies' | 'service' | 'contact';

const App: React.FC = () => {
  const getInitialRoute = () => {
    try {
      const path = window.location.pathname;
      const segments = path.split('/').filter(Boolean);
      
      // If we're on a subpath, we need to be careful about the base path
      // This handles both /services/slug and services/slug
      if (segments.length >= 2 && segments[segments.length - 2] === 'services') {
        return { page: 'service' as Page, slug: segments[segments.length - 1] };
      }
      
      if (segments.includes('about')) return { page: 'about' as Page, slug: null };
      if (segments.includes('services')) return { page: 'services' as Page, slug: null };
      if (segments.includes('casestudies')) return { page: 'casestudies' as Page, slug: null };
      if (segments.includes('contact')) return { page: 'contact' as Page, slug: null };
      
      return { page: 'home' as Page, slug: null };
    } catch (error) {
      console.error('Error parsing initial route:', error);
      return { page: 'home' as Page, slug: null };
    }
  };

  const initialRoute = getInitialRoute();
  const [currentPage, setCurrentPage] = useState<Page>(initialRoute.page);
  const [currentServiceSlug, setCurrentServiceSlug] = useState<string | null>(initialRoute.slug);

  useEffect(() => {
    const handlePopState = () => {
      const segments = window.location.pathname.split('/').filter(Boolean);
      if (segments.length >= 2 && segments[segments.length - 2] === 'services') {
        setCurrentPage('service');
        setCurrentServiceSlug(segments[segments.length - 1]);
      } else if (segments.includes('about')) {
        setCurrentPage('about');
        setCurrentServiceSlug(null);
      } else if (segments.includes('services')) {
        setCurrentPage('services');
        setCurrentServiceSlug(null);
      } else if (segments.includes('casestudies')) {
        setCurrentPage('casestudies');
        setCurrentServiceSlug(null);
      } else if (segments.includes('contact')) {
        setCurrentPage('contact');
        setCurrentServiceSlug(null);
      } else {
        setCurrentPage('home');
        setCurrentServiceSlug(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = React.useCallback((page: Page, slug?: string) => {
    setCurrentPage(page);
    setCurrentServiceSlug(slug ?? null);
    
    let path = '/';
    if (page === 'service' && slug) {
      path = `/services/${slug}`;
    } else if (page !== 'home') {
      path = `/${page}`;
    }
    
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <PageTransition key="home">
            <Home onNavigate={navigate} />
          </PageTransition>
        );
      case 'about':
        return (
          <PageTransition key="about">
            <About onNavigate={navigate} />
          </PageTransition>
        );
      case 'services':
        return (
          <PageTransition key="services">
            <ServicesPage onNavigate={navigate} />
          </PageTransition>
        );
      case 'service':
        return (
          <PageTransition key={`service-${currentServiceSlug ?? 'unknown'}`}>
            {currentServiceSlug ? (
              <ServiceDetail slug={currentServiceSlug} onNavigate={navigate} />
            ) : (
              <ServicesPage onNavigate={navigate} />
            )}
          </PageTransition>
        );
      case 'casestudies':
        return (
          <PageTransition key="casestudies">
            <CaseStudiesPage />
          </PageTransition>
        );
      case 'contact':
        return (
          <PageTransition key="contact">
            <ContactPage />
          </PageTransition>
        );
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={navigate} currentPage={currentPage} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderPage()}
        </AnimatePresence>
      </main>
      <Footer onNavigate={navigate} currentPage={currentPage} />
      <ScrollToTop />
    </div>
  );
};

export default App;
