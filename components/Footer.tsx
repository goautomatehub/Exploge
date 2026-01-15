import React from 'react';
import { Facebook, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'casestudies') => void;
  currentPage?: string;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentPage }) => {
  const isAboutPage = currentPage === 'about';
  
  return (
    <footer 
      className={`${isAboutPage ? 'pt-20 md:pt-24' : 'pt-56 md:pt-72'} pb-10 border-t border-primary/10`} 
      style={{ background: 'linear-gradient(to bottom, rgba(32, 188, 97, 0.08) 0%, rgba(32, 188, 97, 0) 100%)' }}
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="space-y-6 flex flex-col items-start text-left">
            <div className="flex flex-col items-start cursor-pointer group" onClick={() => { onNavigate('home'); window.scrollTo(0,0); }}>
              <img 
                src="/logo.svg" 
                alt="Exploge Logo" 
                className="w-36 xs:w-40 md:w-48 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
              <span className="text-[7px] xs:text-[8px] md:text-[9px] font-black uppercase tracking-[0.3em] text-secondary/40 leading-none mt-1 md:mt-2 w-36 xs:w-40 md:w-48 block text-left whitespace-nowrap overflow-hidden">
                EXPLORATION & GROWTH
              </span>
            </div>
            <p className="text-gray-500 max-w-xs text-xs md:text-sm leading-relaxed pt-2">
              We help businesses grow by building simple and effective automation systems.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4 flex flex-col items-start text-left">
            <h4 className="font-bold text-[10px] uppercase text-secondary">Expertise</h4>
            <ul className="space-y-3 text-xs md:text-sm text-gray-500">
              <li><button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">Business Automation</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">Web Development</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">API Systems</button></li>
            </ul>
          </div>
          
          <div className="space-y-4 flex flex-col items-start text-left">
            <h4 className="font-bold text-[10px] uppercase text-secondary">Company</h4>
            <ul className="space-y-3 text-xs md:text-sm text-gray-500">
              <li><button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors">Haroon Taj (Founder)</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors">Our Approach</button></li>
            </ul>
          </div>
          
          <div className="space-y-4 flex flex-col items-start text-left">
            <h4 className="font-bold text-[10px] uppercase text-secondary">Contact</h4>
            <ul className="space-y-3 text-xs md:text-sm text-gray-500">
              <li><a href="mailto:contact@exploge.com" className="hover:text-primary transition-colors">contact@exploge.com</a></li>
              <li><span className="text-gray-400">Pakistan</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-[10px] text-gray-400 text-center uppercase font-medium">
            &copy; 2026 Exploge. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};