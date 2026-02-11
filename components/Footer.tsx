import React from 'react';
import { Facebook, Linkedin, Mail, MessageCircle } from 'lucide-react';
import logoLightBg from './Exploge Logo/Exploge-header-logo-01-for-light-background.png';
import logoDarkBg from './Exploge Logo/Exploge-header-logo-01-for-dark-background.png';

interface FooterProps {
  onNavigate: (page: 'home' | 'about' | 'services' | 'casestudies' | 'service' | 'contact') => void;
  currentPage?: string;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, currentPage }) => {
  return (
    <footer 
      className="pt-16 md:pt-20 pb-10 border-t border-primary/10" 
      style={{ background: 'linear-gradient(to bottom, rgba(32, 188, 97, 0.08) 0%, rgba(32, 188, 97, 0) 100%)' }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 mb-16">
          {/* Brand Column */}
          <div className="lg:w-1/3 space-y-6 flex flex-col items-start text-left pr-0 lg:pr-12">
            <div className="flex flex-col items-start cursor-pointer group" onClick={() => { onNavigate('home'); window.scrollTo(0,0); }}>
              <img 
                src={logoLightBg} 
                alt="Exploge Logo" 
                className="w-36 xs:w-40 md:w-48 h-auto object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <p className="text-gray-500 max-w-xs text-xs md:text-sm leading-relaxed pt-2">
              We help businesses grow by building simple and effective automation systems.
            </p>
            <div className="flex items-center gap-5">
              <a href="https://www.facebook.com/share/1AhWpk9Hwq/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/exploge/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Vertical Divider */}
          <div className="hidden lg:block w-[3px] bg-secondary self-stretch my-2"></div>
          
          {/* Right Sections Group */}
          <div className="lg:w-2/3 lg:pl-12 grid grid-cols-1 sm:grid-cols-2 gap-10 md:gap-12">
            <div className="space-y-4 flex flex-col items-start text-left">
              <h4 className="font-semibold text-[20px] md:text-[22px] text-secondary">Expertise</h4>
              <ul className="space-y-3 text-xs md:text-sm text-gray-500">
                <li><button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">Business Automation</button></li>
                <li><button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">Web Development</button></li>
                <li><button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">API Systems</button></li>
                <li><button onClick={() => onNavigate('services')} className="hover:text-primary transition-colors">Optimized CRM Architecture</button></li>
              </ul>
            </div>
            
            <div className="space-y-4 flex flex-col items-start text-left">
              <h4 className="font-semibold text-[20px] md:text-[22px] text-secondary">Contact</h4>
              <ul className="space-y-3 text-xs md:text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-primary" />
                  <a href="mailto:contact@exploge.com" className="hover:text-primary transition-colors">contact@exploge.com</a>
                </li>
                <li className="flex items-center gap-2">
                  <svg 
                    viewBox="0 0 24 24" 
                    className="w-4 h-4 fill-primary"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  <a href="https://wa.me/923004056378" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+92 300 4056378</a>
                </li>
              </ul>
            </div>
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
