
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

export type Page = 'home' | 'about' | 'services' | 'casestudies' | 'service';

const App: React.FC = () => {
  const getInitialRoute = () => {
    const segments = window.location.pathname.split('/').filter(Boolean);
    if (segments[0] === 'services' && segments[1]) {
      return { page: 'service' as Page, slug: segments[1] };
    }
    if (segments[0] === 'about') return { page: 'about' as Page, slug: null };
    if (segments[0] === 'services') return { page: 'services' as Page, slug: null };
    if (segments[0] === 'casestudies') return { page: 'casestudies' as Page, slug: null };
    return { page: 'home' as Page, slug: null };
  };

  const initialRoute = getInitialRoute();
  const [currentPage, setCurrentPage] = useState<Page>(initialRoute.page);
  const [currentServiceSlug, setCurrentServiceSlug] = useState<string | null>(initialRoute.slug);

  useEffect(() => {
    const handlePopState = () => {
      const segments = window.location.pathname.split('/').filter(Boolean);
      if (segments[0] === 'services' && segments[1]) {
        setCurrentPage('service');
        setCurrentServiceSlug(segments[1]);
      } else if (segments[0] === 'about') {
        setCurrentPage('about');
        setCurrentServiceSlug(null);
      } else if (segments[0] === 'services') {
        setCurrentPage('services');
        setCurrentServiceSlug(null);
      } else if (segments[0] === 'casestudies') {
        setCurrentPage('casestudies');
        setCurrentServiceSlug(null);
      } else {
        setCurrentPage('home');
        setCurrentServiceSlug(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page: Page, slug?: string) => {
    setCurrentPage(page);
    setCurrentServiceSlug(slug ?? null);
    const path = page === 'service' && slug ? `/services/${slug}` : page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

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
