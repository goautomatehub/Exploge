import React, { useState, useEffect } from 'react';
import { Icons } from './Icons';
import { servicesData } from '../data/servicesData';
import logoDarkBg from './Exploge Logo/Exploge-header-logo-01-for-dark-background.png';
import logoLightBg from './Exploge Logo/Exploge-header-logo-01-for-light-background.png';

interface HeaderProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'casestudies' | 'service' | 'contact', slug?: string) => void;
  currentPage: 'home' | 'about' | 'services' | 'casestudies' | 'service' | 'contact';
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const HEADER_OFFSET = 50;

  const isServicePage = currentPage === 'service';
  const isLightMode = currentPage !== 'home' && currentPage !== 'service' && !isScrolled && !isMenuOpen;
  const isStickyMode = isScrolled || isMenuOpen || isServicePage;

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

  const serviceImages: Record<string, string> = {
    "automation-service": "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
    "crm-setup-optimized": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    "voice-ai-chat-bots": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    "self-selling-ai": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
    "web-development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    "saas-integration": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    "third-party-syncronization": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    "api-integration": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800"
  };
  const servicesLeft = servicesData.slice(0, 4);
  const servicesRight = servicesData.slice(4);

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
    onNavigate('contact');
    setIsMenuOpen(false);
  };

  const handleServicesRoot = () => {
    onNavigate('services');
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isStickyMode ? 'bg-white/95 backdrop-blur-md py-2 shadow-[0_10px_30px_rgba(0,0,0,0.06)]' : 'bg-transparent py-4 md:py-6'
      }`}
    >
      {/* Bottom Border - controlled separately for instant removal on scroll up */}
      <div 
        className={`absolute bottom-0 left-0 right-0 h-[1px] bg-black/5 transition-opacity duration-150 ${
          isStickyMode ? 'opacity-100' : 'opacity-0'
        }`} 
      />
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); onNavigate('home'); setIsMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex flex-col items-start group relative"
        >
          <div className={`relative transition-all duration-500 transform group-hover:scale-105 flex items-center justify-center ${
            isStickyMode 
              ? 'w-24 h-8 xs:w-28 h-9 md:w-36 md:h-11 lg:w-40 lg:h-12' 
              : 'w-28 h-10 xs:w-32 xs:h-11 sm:w-36 sm:h-12 md:w-48 md:h-16 lg:w-52 lg:h-20'
          }`}>
            <img 
              src={
                currentPage === 'home'
                  ? logoLightBg
                  : (['about', 'services', 'casestudies', 'contact', 'service'].includes(currentPage)
                      ? (isStickyMode ? logoLightBg : logoDarkBg)
                      : logoLightBg)
              } 
              alt="Exploge Logo" 
              className="w-full h-full object-contain object-left"
            />
          </div>
        </a>

        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => {
            const isActive = (link.type === 'page' && (currentPage === link.id || (link.id === 'services' && currentPage === 'service'))) || activeSection === link.id;
            if (link.id === 'services') {
              return (
                <div key={link.name} className="relative group">
                  <button
                    onClick={handleServicesRoot}
                    className={`text-xs lg:text-sm font-bold tracking-[0.2em] transition-all duration-300 mono relative py-2 flex items-center gap-2 ${
                      isActive ? 'text-primary' : isLightMode ? 'text-white/60 hover:text-white' : 'text-secondary/60 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    <Icons.ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isActive ? 'text-primary' : ''} group-hover:rotate-180`} />
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-500 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </button>
                  <div className="absolute left-1/2 top-full -translate-x-1/2 pt-4 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="w-[720px] rounded-2xl border border-black/5 bg-white shadow-[0_30px_70px_rgba(0,0,0,0.12)] overflow-hidden">
                      <div className="p-5">
                        <div className="flex gap-6">
                          <div className="flex-1 space-y-2">
                            {servicesLeft.map((service) => (
                              <button
                                key={service.slug}
                                onClick={() => { onNavigate('service', service.slug); }}
                                className="group/item flex items-start gap-3 rounded-lg border border-transparent p-2 text-left transition-all duration-300 hover:border-black/5 hover:bg-zinc-50"
                              >
                                <div className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-lg border border-black/5 bg-zinc-100">
                                  <img
                                    src={serviceImages[service.slug] ?? serviceImages["workflow-automation"]}
                                    alt={service.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                                  />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-[13px] font-semibold text-secondary">{service.title}</div>
                                  <div className="text-[11px] text-secondary/60 leading-snug">{service.shortDesc}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                          <div className="flex-1 space-y-2">
                            {servicesRight.map((service) => (
                              <button
                                key={service.slug}
                                onClick={() => { onNavigate('service', service.slug); }}
                                className="group/item flex items-start gap-3 rounded-lg border border-transparent p-2 text-left transition-all duration-300 hover:border-black/5 hover:bg-zinc-50"
                              >
                                <div className="h-11 w-11 flex-shrink-0 overflow-hidden rounded-lg border border-black/5 bg-zinc-100">
                                  <img
                                    src={serviceImages[service.slug] ?? serviceImages["workflow-automation"]}
                                    alt={service.title}
                                    className="h-full w-full object-cover transition-transform duration-300 group-hover/item:scale-105"
                                  />
                                </div>
                                <div className="space-y-0.5">
                                  <div className="text-[13px] font-semibold text-secondary">{service.title}</div>
                                  <div className="text-[11px] text-secondary/60 leading-snug">{service.shortDesc}</div>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="border-t border-black/5 bg-zinc-50 px-5 py-3 flex items-center justify-between">
                        <span className="text-[11px] font-semibold text-secondary/60">Explore all automation solutions</span>
                        <button
                          onClick={() => onNavigate('services')}
                          className="text-[11px] font-semibold text-secondary hover:text-primary transition-colors"
                        >
                          View All Services
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return (
              <a 
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-xs lg:text-sm font-bold tracking-[0.2em] transition-all duration-300 mono relative py-2 ${
                  isActive ? 'text-primary' : isLightMode ? 'text-white/60 hover:text-white' : 'text-secondary/60 hover:text-primary'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-500 ${
                  isActive ? 'w-full' : 'w-0'
                }`}></span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4 lg:gap-6">
          <a 
            href="/contact" 
            onClick={handleConnect}
            className={`hidden md:flex px-6 py-3 lg:px-8 lg:py-3.5 text-xs lg:text-sm font-bold tracking-widest transition-all duration-300 mono items-center gap-3 group rounded-full ${
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
              href="/contact" 
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
