
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Visibility check
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Progress calculation
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`fixed bottom-8 right-8 z-[60] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-50 pointer-events-none'}`}>
      <button
        onClick={scrollToTop}
        className="group relative w-14 h-14 bg-white border border-black/5 flex items-center justify-center transition-all duration-500 hover:-translate-y-2 rounded-md shadow-[0_10px_30px_rgba(0,0,0,0.05)] overflow-hidden"
        aria-label="Scroll to top"
      >
        {/* Progress Background */}
        <div 
          className="absolute bottom-0 left-0 w-full bg-primary/10 transition-all duration-150 ease-out"
          style={{ height: `${scrollProgress}%` }}
        ></div>

        {/* Hover Background */}
        <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <ArrowUp className="w-5 h-5 text-secondary group-hover:text-white transition-colors duration-300 group-hover:animate-bounce-short" />
          <span className="text-[8px] font-black uppercase tracking-tighter text-secondary group-hover:text-white transition-colors mt-0.5">TOP</span>
        </div>

        {/* Corner Decor */}
        <div className="absolute top-0 right-0 w-4 h-4 overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full border-t border-r border-primary/20 group-hover:border-white/40 transition-colors"></div>
        </div>
      </button>
    </div>
  );
};
