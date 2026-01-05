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

  const HEADER_OFFSET = 80;

  // Determine if we should use light text (e.g., on About/Services/Portfolio page before scrolling)
  const isLightMode = currentPage !== 'home' && !isScrolled && !isMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (currentPage === 'home') {
        const sections = ['services', 'features', 'pricing', 'faq'];
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isMenuOpen ? 'bg-white/90 backdrop-blur-md py-3 shadow-sm' : 'bg-transparent py-8'
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
          className="flex items-center group relative"
        >
          <div className="relative w-40 h-20 md:w-52 md:h-24 flex items-center justify-center transition-all duration-500 transform group-hover:scale-105 overflow-hidden">
            <img 
              src={isLightMode ? "/logo-light.svg" : "/logo.svg"} 
              alt="Exploge Logo" 
              className="w-full h-full object-contain object-left"
            />
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-10">
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
          <a 
            href="#contact" 
            onClick={handleConnect}
            className={`px-8 py-3.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 mono flex items-center gap-3 group rounded-md ${
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
            className={`md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 border transition-colors duration-500 rounded-md ${
              isLightMode ? 'border-white/20' : 'border-black/5'
            }`}
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
              className={`text-2xl font-black uppercase tracking-tighter flex justify-between items-center group ${
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
              className="w-full bg-primary text-white text-center py-5 font-bold uppercase tracking-widest text-xs mono flex items-center justify-center gap-4 rounded-md"
            >
              Get Started
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};