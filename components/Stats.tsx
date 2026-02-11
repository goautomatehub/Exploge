
import React, { useLayoutEffect, useRef } from 'react';
import { Reveal } from './Reveal';
import { Counter } from './Counter';
import drivenImg from './Images/assest images/driven-img.png';
import { FloatingDecorations } from './FloatingDecorations';

export const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === 'undefined') return;
    const image = imageRef.current;
    if (!image) return;
    const easing = 'cubic-bezier(0.16, 1, 0.3, 1)';
    image.style.opacity = '0';
    image.style.setProperty('--stats-scale', '0.98');
    image.style.setProperty('--stats-parallax', '0px');
    image.style.transition = `opacity 1s ${easing}, transform 1s ${easing}`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        image.style.opacity = '1';
        image.style.setProperty('--stats-scale', '1');
        observer.disconnect();
      },
      { threshold: 0.1, rootMargin: '0px 0px -20% 0px' }
    );
    observer.observe(image);

    let rafId = 0;
    const handleParallax = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const rect = section.getBoundingClientRect();
        const viewport = window.innerHeight || 0;
        const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (rect.height + viewport)));
        const offset = -30 * progress;
        image.style.setProperty('--stats-parallax', `${offset}px`);
      });
    };

    handleParallax();
    window.addEventListener('scroll', handleParallax, { passive: true });
    window.addEventListener('resize', handleParallax);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleParallax);
      window.removeEventListener('resize', handleParallax);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section className="pt-24 bg-soft overflow-hidden relative" ref={sectionRef}>
      {/* Floating Elements */}
      <FloatingDecorations.Dot className="top-20 left-[10%] hidden md:block" delay={0.2} />
      <FloatingDecorations.Plus className="bottom-40 right-[5%] text-primary hidden md:block" delay={0.5} />
      <FloatingDecorations.Box className="top-1/2 left-[5%] hidden md:block" delay={0.8} />
      <FloatingDecorations.GridDots className="top-[30%] right-[15%] hidden md:block" delay={1.1} />

      <div className="container mx-auto px-4 md:px-6">
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <Reveal direction="up">
            <span className="text-primary sub-heading text-2xl font-medium mb-4 inline-block tracking-wide">
              Real results for real businesses
            </span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.1] tracking-tight">
              Making Your <span className="text-primary">Business</span> <br />
              Work Better.
            </h2>
          </Reveal>
        </div>

        {/* Stats Grid */}
        <div className="relative border-y border-zinc-100 py-12 mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">
            {/* Stat 1 */}
            <div className="text-center md:border-r border-zinc-100 px-8">
              <Reveal direction="up" delay={0.2}>
                <div className="text-5xl md:text-6xl font-extrabold text-secondary mb-4 tracking-tighter">
                  <Counter value={5000} suffix="+" />
                </div>
                <div className="text-xl sub-heading text-secondary">
                  Hours Saved Every Month
                </div>
              </Reveal>
            </div>

            {/* Stat 2 */}
            <div className="text-center md:border-r border-zinc-100 px-8">
              <Reveal direction="up" delay={0.3}>
                <div className="text-5xl md:text-6xl font-extrabold text-secondary mb-4 tracking-tighter">
                  <Counter value={40} suffix="+" />
                </div>
                <div className="text-xl sub-heading text-secondary">
                  Systems Built for Clients
                </div>
              </Reveal>
            </div>

            {/* Stat 3 */}
            <div className="text-center px-8">
              <Reveal direction="up" delay={0.4}>
                <div className="text-5xl md:text-6xl font-extrabold text-secondary mb-4 tracking-tighter">
                  <Counter value={98} suffix="%" />
                </div>
                <div className="text-xl sub-heading text-secondary">
                  Success Rate
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Bottom Image */}
        <div className="relative mt-0 flex justify-center">
          <div
            className="w-full max-w-5xl"
            ref={imageRef}
            style={{ transform: "translate3d(0, var(--stats-parallax, 0px), 0) scale(var(--stats-scale, 1))" }}
          >
            <div className="relative">
              <img 
                src={drivenImg} 
                alt="Happy Users" 
                className="w-full h-auto object-contain relative z-10"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fcfcfc] to-transparent z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
