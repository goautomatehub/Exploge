import React, { useLayoutEffect, useRef } from 'react';

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
    if (!element || typeof window === 'undefined') return;
    let rafId = 0;
    let startTime: number | null = null;
    const durationMs = duration * 1000;

    const formatValue = (val: number) =>
      Intl.NumberFormat('en-US').format(Math.floor(val));

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = value * eased;
      if (ref.current) {
        ref.current.textContent = formatValue(current);
      }
      if (progress < 1) {
        rafId = window.requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        rafId = window.requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.1, rootMargin: '0px 0px -15% 0px' }
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, [value, duration]);

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};
