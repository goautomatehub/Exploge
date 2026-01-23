import React, { useLayoutEffect, useRef } from 'react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  highlightWords = [],
  highlightClassName = "text-primary"
}) => {
  const words = text.split(" ");
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = containerRef.current;
    if (!element || typeof window === 'undefined') return;
    const targets = element.querySelectorAll<HTMLElement>('[data-word]');
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      targets.forEach((target) => {
        target.style.opacity = '1';
        target.style.transform = 'none';
      });
      return;
    }
    const easing = 'cubic-bezier(0.16, 1, 0.3, 1)';
    targets.forEach((target) => {
      target.style.opacity = '0';
      target.style.transform = 'translate3d(0, 20px, 0)';
    });
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        targets.forEach((target, index) => {
          const wordDelay = delay + index * 0.05;
          target.style.transition = `opacity 0.5s ${easing} ${wordDelay}s, transform 0.5s ${easing} ${wordDelay}s`;
          target.style.opacity = '1';
          target.style.transform = 'translate3d(0, 0, 0)';
        });
        observer.disconnect();
      },
      { threshold: 0.1, rootMargin: '0px 0px -15% 0px' }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={containerRef} className={`flex flex-wrap ${className}`}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(h => 
          word.toLowerCase().includes(h.toLowerCase())
        );
        
        return (
          <span
            key={index}
            data-word
            className={`mr-[0.08em] relative inline-block ${isHighlighted ? "px-2 py-1 " + highlightClassName : ""}`}
          >
            <span className="relative z-10">{word}</span>
            {isHighlighted && (
              <>
                <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px] rounded-xl -z-10 border border-primary/20" />
                <div className="absolute -top-1 -right-1 pointer-events-none">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(32,188,97,0.6)]" />
                </div>
              </>
            )}
          </span>
        );
      })}
    </div>
  );
};
