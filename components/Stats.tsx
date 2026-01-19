
import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from './Reveal';
import { Counter } from './Counter';
import drivenImg from './Images/assest images/driven-img.png';
import { FloatingDecorations } from './FloatingDecorations';

export const Stats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { opacity: 0, y: 24, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: imageRef.current,
              start: 'top 85%',
              once: true
            }
          }
        );

        gsap.to(imageRef.current, {
          y: -30,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6
          }
        });
      }
    }, section);

    return () => ctx.revert();
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
                  <Counter value={250} suffix="+" />
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
          <div className="w-full max-w-5xl" ref={imageRef}>
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
