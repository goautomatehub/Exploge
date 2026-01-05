
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ReviewSlider } from './components/ReviewSlider';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesPage } from './pages/ServicesPage';
import { CaseStudiesPage } from './pages/CaseStudiesPage';
import { PageTransition } from './components/PageTransition';
import { AnimatePresence } from 'framer-motion';

export type Page = 'home' | 'about' | 'services' | 'casestudies';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(() => {
    const path = window.location.pathname.replace('/', '');
    if (path === 'about') return 'about';
    if (path === 'services') return 'services';
    if (path === 'casestudies') return 'casestudies';
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.replace('/', '');
      if (path === 'about') setCurrentPage('about');
      else if (path === 'services') setCurrentPage('services');
      else if (path === 'casestudies') setCurrentPage('casestudies');
      else setCurrentPage('home');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (page: Page) => {
    setCurrentPage(page);
    const path = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({}, '', path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <PageTransition key="home">
            <Home />
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
            <ServicesPage />
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
      <ReviewSlider />
      <Footer onNavigate={navigate} />
      <ScrollToTop />
    </div>
  );
};

export default App;
