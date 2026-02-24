
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import ServiceDetail from './pages/ServiceDetail';
import CaseStudyDetail from './pages/CaseStudyDetail';
import { PageTransition } from './components/PageTransition';
import { AnimatePresence } from 'framer-motion';
import { ContactPage } from './pages/ContactPage';

export type Page = 'home' | 'about' | 'services' | 'casestudies' | 'service' | 'case' | 'contact';

const App: React.FC = () => {
  const getInitialRoute = () => {
    try {
      const path = window.location.pathname;
      const segments = path.split('/').filter(Boolean);

      if (segments.length >= 2 && segments[segments.length - 2].toLowerCase() === 'services') {
        return { page: 'service' as Page, serviceSlug: segments[segments.length - 1], caseSlug: null };
      }

      if (segments.length >= 2 && segments[segments.length - 2].toLowerCase() === 'cases') {
        return { page: 'case' as Page, serviceSlug: null, caseSlug: segments[segments.length - 1] };
      }
      
      const lowerSegments = segments.map(s => s.toLowerCase());
      if (lowerSegments.includes('about')) return { page: 'about' as Page, serviceSlug: null, caseSlug: null };
      if (lowerSegments.includes('services')) return { page: 'services' as Page, serviceSlug: null, caseSlug: null };
      if (lowerSegments.includes('casestudies') || lowerSegments.includes('case-studies')) {
        return { page: 'casestudies' as Page, serviceSlug: null, caseSlug: null };
      }
      if (lowerSegments.includes('contact')) return { page: 'contact' as Page, serviceSlug: null, caseSlug: null };
      
      return { page: 'home' as Page, serviceSlug: null, caseSlug: null };
    } catch (error) {
      console.error('Error parsing initial route:', error);
      return { page: 'home' as Page, serviceSlug: null, caseSlug: null };
    }
  };

  const initialRoute = getInitialRoute();
  const [currentPage, setCurrentPage] = useState<Page>(initialRoute.page);
  const [currentServiceSlug, setCurrentServiceSlug] = useState<string | null>(initialRoute.serviceSlug ?? null);
  const [currentCaseSlug, setCurrentCaseSlug] = useState<string | null>(initialRoute.caseSlug ?? null);

  useEffect(() => {
    const handlePopState = () => {
      const segments = window.location.pathname.split('/').filter(Boolean);
      const lowerSegments = segments.map(s => s.toLowerCase());

      if (segments.length >= 2 && segments[segments.length - 2].toLowerCase() === 'services') {
        setCurrentPage('service');
        setCurrentServiceSlug(segments[segments.length - 1]);
        setCurrentCaseSlug(null);
      } else if (segments.length >= 2 && segments[segments.length - 2].toLowerCase() === 'cases') {
        setCurrentPage('case');
        setCurrentCaseSlug(segments[segments.length - 1]);
        setCurrentServiceSlug(null);
      } else if (lowerSegments.includes('about')) {
        setCurrentPage('about');
        setCurrentServiceSlug(null);
        setCurrentCaseSlug(null);
      } else if (lowerSegments.includes('services')) {
        setCurrentPage('services');
        setCurrentServiceSlug(null);
        setCurrentCaseSlug(null);
      } else if (lowerSegments.includes('casestudies') || lowerSegments.includes('case-studies')) {
        setCurrentPage('casestudies');
        setCurrentServiceSlug(null);
        setCurrentCaseSlug(null);
      } else if (lowerSegments.includes('contact')) {
        setCurrentPage('contact');
        setCurrentServiceSlug(null);
        setCurrentCaseSlug(null);
      } else {
        setCurrentPage('home');
        setCurrentServiceSlug(null);
        setCurrentCaseSlug(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = React.useCallback((page: Page, slug?: string) => {
    setCurrentPage(page);

    if (page === 'service') {
      setCurrentServiceSlug(slug ?? null);
      setCurrentCaseSlug(null);
    } else if (page === 'case') {
      setCurrentCaseSlug(slug ?? null);
      setCurrentServiceSlug(null);
    } else {
      setCurrentServiceSlug(null);
      setCurrentCaseSlug(null);
    }

    let path = '/';
    if (page === 'service' && slug) {
      path = `/services/${slug}`;
    } else if (page === 'case' && slug) {
      path = `/cases/${slug}`;
    } else if (page === 'casestudies') {
      path = '/case-studies';
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
            <CaseStudiesPage onNavigate={navigate} />
          </PageTransition>
        );
      case 'case':
        return (
          <PageTransition key={`case-${currentCaseSlug ?? 'unknown'}`}>
            {currentCaseSlug ? (
              <CaseStudyDetail slug={currentCaseSlug} onNavigate={navigate} />
            ) : (
              <CaseStudiesPage onNavigate={navigate} />
            )}
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
