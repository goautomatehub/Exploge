
import React, { useLayoutEffect, useRef } from 'react';

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
    const easing = 'cubic-bezier(0.16, 1, 0.3, 1)';
    element.style.opacity = '0';
    element.style.transform = `translate3d(${initialX}px, ${initialY}px, 0)`;
    element.style.transition = `opacity ${duration}s ${easing} ${delay}s, transform ${duration}s ${easing} ${delay}s`;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.style.opacity = '1';
          element.style.transform = 'translate3d(0, 0, 0)';
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -20% 0px' }
    );
    observer.observe(element);
    return () => observer.disconnect();
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
