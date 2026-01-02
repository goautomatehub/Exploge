import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'casestudies') => void;
  currentPage: 'home' | 'about' | 'services' | 'casestudies';
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const HEADER_OFFSET = 60;

  // Determine if we should use light text (e.g., on About/Services/Portfolio page before scrolling)
  const isLightMode = currentPage !== 'home' && !isScrolled && !isMenuOpen;

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (currentPage === 'home') {
        const sections = ['features', 'pricing', 'faq'];
        const scrollPosition = window.scrollY + HEADER_OFFSET + 20;

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
              break;
            }
          }
        }
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check on mount
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home', type: 'page' },
    { name: 'About', href: '/about', id: 'about', type: 'page' },
    { name: 'Services', href: '/services', id: 'services', type: 'page' },
    { name: 'Case Studies', href: '/casestudies', id: 'casestudies', type: 'page' },
  ];

  const handleLinkClick = (e: React.MouseEvent, link: typeof navLinks[0]) => {
    e.preventDefault();
    if (link.type === 'page') {
      onNavigate(link.id as 'home' | 'about' | 'services' | 'casestudies');
    } else {
      if (currentPage !== 'home') {
        onNavigate('home');
        setTimeout(() => {
          const element = document.getElementById(link.id);
          if (element) {
            window.scrollTo({ top: element.offsetTop - HEADER_OFFSET, behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(link.id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - HEADER_OFFSET, behavior: 'smooth' });
        }
      }
    }
    setIsMenuOpen(false);
  };

  const handleConnect = (e: React.MouseEvent) => {
    e.preventDefault();
    const targetId = 'contact';
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({ top: element.offsetTop - HEADER_OFFSET, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        isMenuOpen ? 'bg-white py-2 shadow-none' : isScrolled ? 'bg-white/90 backdrop-blur-md py-2 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      {/* Bottom Border */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-[1px] bg-black/5 transition-opacity duration-150 ${
          isMenuOpen ? 'opacity-0' : isScrolled ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div className="container mx-auto px-6 flex items-center justify-between relative z-[101]">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigate('home'); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center group relative"
        >
          <div className="relative w-32 h-16 md:w-52 md:h-24 flex items-center justify-center transition-all duration-500 transform group-hover:scale-105 overflow-hidden">
            <img 
              src={isLightMode ? "/logo-light.svg" : "/logo.svg"} 
              alt="Exploge Logo" 
              className="w-full h-full object-contain object-left"
            />
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 mono relative py-2 ${
                (link.type === 'page' && currentPage === link.id) || activeSection === link.id 
                  ? 'text-primary' 
                  : isLightMode 
                    ? 'text-white/60 hover:text-white' 
                    : 'text-secondary/60 hover:text-primary'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-500 ${
                (link.type === 'page' && currentPage === link.id) || activeSection === link.id ? 'w-full' : 'w-0'
              }`}></span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          {/* Hide button on mobile and tablets, show on desktop */}
          <a 
            href="#contact" 
            onClick={handleConnect}
            className={`hidden lg:flex px-8 py-3.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 mono items-center gap-3 group rounded-md ${
              isLightMode 
                ? 'bg-white text-black hover:bg-primary hover:text-white' 
                : 'bg-black text-white hover:bg-primary shadow-[0_4px_15px_rgba(32,188,97,0.2)] hover:shadow-none hover:-translate-y-1'
            } ${isScrolled ? 'scale-90' : 'scale-100'}`}
          >
            Connect With Us
            <Icons.Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 transition-all duration-300 rounded-[4px] border outline-none focus:outline-none ${
              isMenuOpen 
                ? 'bg-primary border-primary' 
                : isLightMode 
                  ? 'border-white/20 hover:bg-white/10 active:bg-white/20' 
                  : 'border-black/5 hover:bg-black/5 active:bg-black/10'
            }`}
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-6 flex flex-col items-center justify-center">
              <span className={`absolute w-6 h-0.5 transition-all duration-500 ${isMenuOpen ? 'rotate-45 bg-white' : isLightMode ? 'bg-white -translate-y-1.5' : 'bg-black -translate-y-1.5'}`}></span>
              <span className={`absolute w-6 h-0.5 transition-all duration-500 ${isMenuOpen ? 'opacity-0' : isLightMode ? 'bg-white' : 'bg-black'}`}></span>
              <span className={`absolute w-6 h-0.5 transition-all duration-500 ${isMenuOpen ? '-rotate-45 bg-white' : isLightMode ? 'bg-white translate-y-1.5' : 'bg-black translate-y-1.5'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Premium Full-screen Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-white flex flex-col pt-24"
          >
            <div className="container mx-auto px-6 flex-1 flex flex-col justify-between py-12">
              <nav className="space-y-1 md:space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a 
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link)}
                      className={`group flex items-center justify-between py-2.5 border-b border-black/5 ${
                        (link.type === 'page' && currentPage === link.id) || activeSection === link.id ? 'text-primary' : 'text-secondary'
                      }`}
                    >
                      <span className="text-xl md:text-2xl font-black uppercase tracking-tight italic transition-all duration-300 group-hover:pl-4">
                        {link.name}
                      </span>
                      <motion.div 
                        whileHover={{ rotate: 45, scale: 1.1 }}
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-black/5 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300"
                      >
                        <Icons.ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                      </motion.div>
                    </a>
                  </motion.div>
                ))}
              </nav>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-gray-400 mono">Get in touch</span>
                  <a href="mailto:contact@exploge.com" className="text-lg md:text-xl font-bold hover:text-primary transition-colors">contact@exploge.com</a>
                </div>
                
                <button 
                  onClick={handleConnect}
                  className="w-full bg-primary text-white py-5 md:py-6 font-black uppercase tracking-widest text-xs md:text-sm flex items-center justify-center gap-4 group rounded-lg"
                >
                  Start Your Project
                  <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};