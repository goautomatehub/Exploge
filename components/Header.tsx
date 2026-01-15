import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';

interface HeaderProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'casestudies') => void;
  currentPage: 'home' | 'about' | 'services' | 'casestudies';
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const HEADER_OFFSET = 50;

  // Determine if we should use light text (e.g., on About/Services/Portfolio page before scrolling)
  const isLightMode = currentPage !== 'home' && !isScrolled && !isMenuOpen;

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
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPage]);

  const navLinks = [
    { name: 'Home', href: '/', id: 'home', type: 'page' },
    { name: 'About', href: '/about', id: 'about', type: 'page' },
    { name: 'Services', href: '/services', id: 'services', type: 'page' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-white/70 backdrop-blur-md py-1.5 shadow-sm' : 'bg-transparent py-3 md:py-6'
      }`}
    >
      {/* Bottom Border - controlled separately for instant removal on scroll up */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-[1px] bg-black/5 transition-opacity duration-150 ${
          isScrolled || isMenuOpen ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigate('home'); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex flex-col items-start group relative"
        >
          <div className={`relative transition-all duration-500 transform group-hover:scale-105 flex items-center justify-center ${
            isScrolled 
              ? 'w-24 h-8 xs:w-28 h-9 md:w-36 md:h-11 lg:w-40 lg:h-12' 
              : 'w-28 h-10 xs:w-32 xs:h-11 sm:w-36 sm:h-12 md:w-48 md:h-16 lg:w-52 lg:h-20'
          }`}>
            <img 
              src={isLightMode ? "/logo-light.svg" : "/logo.svg"} 
              alt="Exploge Logo" 
              className="w-full h-full object-contain object-left"
            />
          </div>
          <span className={`text-[5px] xs:text-[6px] md:text-[7px] lg:text-[8px] font-black tracking-[0.3em] transition-all duration-500 leading-none -mt-1 md:-mt-2 ${
              isLightMode ? 'text-white/50' : 'text-secondary/40'
            } ${
              isScrolled 
                ? 'w-24 xs:w-28 md:w-36 lg:w-40 opacity-100 translate-y-0' 
                : 'w-28 xs:w-32 sm:w-36 md:w-48 lg:w-52 opacity-0 -translate-y-2 pointer-events-none'
            } block text-left whitespace-nowrap overflow-hidden`}>
              Exploration & Growth
            </span>
        </a>

        <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-xs lg:text-sm font-bold tracking-[0.2em] transition-all duration-500 mono relative py-2 ${
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

        <div className="flex items-center gap-4 lg:gap-6">
          <a 
            href="#contact" 
            onClick={handleConnect}
            className={`hidden md:flex px-6 py-3 lg:px-8 lg:py-3.5 text-xs lg:text-sm font-bold tracking-widest transition-all duration-300 mono items-center gap-3 group rounded-md ${
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
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 transition-colors duration-500 rounded-md"
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2 bg-black' : isLightMode ? 'bg-white' : 'bg-black'}`}></span>
            <span className={`w-4 h-0.5 transition-all duration-300 ${isMenuOpen ? 'opacity-0 bg-black' : isLightMode ? 'bg-white' : 'bg-black'}`}></span>
            <span className={`w-6 h-0.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 bg-black' : isLightMode ? 'bg-white' : 'bg-black'}`}></span>
          </button>
        </div>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-black/5 transition-all duration-500 overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col p-8 space-y-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link)}
              className={`text-2xl font-black tracking-tighter flex justify-between items-center group ${
                (link.type === 'page' && currentPage === link.id) || activeSection === link.id ? 'text-primary' : 'text-secondary'
              }`}
            >
              {link.name}
              <svg className="w-6 h-6 transform -rotate-45 opacity-20 group-hover:rotate-0 group-hover:opacity-100 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          ))}
          <div className="pt-6 border-t border-black/5">
            <a 
              href="#contact" 
              onClick={handleConnect}
              className="w-full bg-primary text-white text-center py-5 font-bold tracking-widest text-sm mono flex items-center justify-center gap-4 rounded-md"
            >
              Connect With Us
              <Icons.Send className="w-4 h-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};