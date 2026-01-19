import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface CounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const Counter: React.FC<CounterProps> = ({ 
  value, 
  duration = 2, 
  suffix = "", 
  className = "" 
}) => {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;
    gsap.registerPlugin(ScrollTrigger);
    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value,
        duration,
        ease: 'power2.out',
        onUpdate: () => {
          if (ref.current) {
            ref.current.textContent = Intl.NumberFormat('en-US').format(
              Math.floor(counter.value)
            );
          }
        },
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          once: true
        }
      });
    }, element);

    return () => ctx.revert();
  }, [value, duration]);

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};
