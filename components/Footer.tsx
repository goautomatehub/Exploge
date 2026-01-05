import React from 'react';
import { Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'casestudies') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-white pt-12 md:pt-16 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="space-y-6 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center cursor-pointer" onClick={() => { onNavigate('home'); window.scrollTo(0,0); }}>
              <img 
                src="/logo.svg" 
                alt="Exploge Logo" 
                className="w-36 xs:w-40 md:w-48 h-auto object-contain"
              />
            </div>
            <p className="text-gray-500 max-w-xs text-xs md:text-sm leading-relaxed">
              Bespoke automation & engineering for high-growth businesses. We architect the future of your operations.
            </p>
            <div className="flex items-center gap-5">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="X (Twitter)">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-secondary">Expertise</h4>
            <ul className="space-y-3 text-xs md:text-sm text-gray-500">
              <li><button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">Business Automation</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">Web Development</button></li>
              <li><button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">API Systems</button></li>
            </ul>
          </div>
          
          <div className="space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-secondary">Company</h4>
            <ul className="space-y-3 text-xs md:text-sm text-gray-500">
              <li><button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors">Haroon Taj (Founder)</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-primary transition-colors">Our Approach</button></li>
              <li><button onClick={() => onNavigate('casestudies')} className="hover:text-primary transition-colors">Case Studies</button></li>
            </ul>
          </div>
          
          <div className="space-y-4 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-secondary">Contact</h4>
            <ul className="space-y-3 text-xs md:text-sm text-gray-500">
              <li><a href="#contact" className="hover:text-primary transition-colors">Project Inquiry</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Email Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-400 text-center md:text-left uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} Exploge Engineering Group.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-secondary transition-colors">Privacy</a>
            <a href="#" className="hover:text-secondary transition-colors">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};