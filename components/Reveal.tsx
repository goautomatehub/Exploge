
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  width?: 'fit-content' | '100%';
  className?: string;
  duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  width = '100%',
  className = "",
  duration = 0.8
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const element = elementRef.current;
    if (!element || typeof window === 'undefined') return;
    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      element.style.opacity = '1';
      element.style.transform = 'none';
      return;
    }
    const offset = 30;
    const initialX = direction === 'left' ? -offset : direction === 'right' ? offset : 0;
    const initialY = direction === 'up' ? offset : direction === 'down' ? -offset : 0;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, x: initialX, y: initialY },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            once: true
          }
        }
      );
    }, element);

    return () => ctx.revert();
  }, [delay, direction, duration]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{ width, willChange: "transform, opacity" }}
    >
      {children}
    </div>
  );
};
