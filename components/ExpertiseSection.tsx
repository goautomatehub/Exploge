
import React, { useLayoutEffect, useRef } from 'react';
import { Icons } from './Icons';
import { FloatingDecorations } from './FloatingDecorations';

export const ExpertiseSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === 'undefined') return;
    const easing = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const items = section.querySelectorAll<HTMLElement>('[data-reveal]');
    items.forEach((item) => {
      const delay = Number(item.dataset.delay ?? 0);
      item.style.opacity = '0';
      item.style.transform = 'translate3d(0, 24px, 0)';
      item.style.transition = `opacity 0.9s ${easing} ${delay}s, transform 0.9s ${easing} ${delay}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.style.opacity = '1';
          target.style.transform = 'translate3d(0, 0, 0)';
          observer.unobserve(target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20% 0px' }
    );

    items.forEach((item) => observer.observe(item));

    const parallaxTarget = section.querySelector<HTMLElement>('[data-parallax]');
    let rafId = 0;
    const handleParallax = () => {
      if (!parallaxTarget) return;
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        rafId = 0;
        const rect = section.getBoundingClientRect();
        const viewport = window.innerHeight || 0;
        const progress = Math.min(1, Math.max(0, (viewport - rect.top) / (rect.height + viewport)));
        parallaxTarget.style.transform = `translate3d(0, ${-30 * progress}px, 0)`;
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
    <section ref={sectionRef} className="pt-12 pb-16 md:py-24 bg-white overflow-hidden relative">
      {/* Floating Elements */}
      <FloatingDecorations.Dot className="top-20 right-[5%] hidden md:block" delay={0.3} />
      <FloatingDecorations.Box className="bottom-[20%] left-[2%] hidden md:block" delay={0.7} />
      <FloatingDecorations.Cross className="top-[40%] left-[10%] hidden md:block" delay={1.1} />
      <FloatingDecorations.Plus className="bottom-10 right-[15%] hidden md:block" delay={1.5} />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div data-reveal data-delay="0.1">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-2xl -z-10 animate-pulse"></div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/5 rounded-full -z-10"></div>
                
                <div className="relative rounded-md overflow-hidden shadow-2xl border border-black/5 aspect-[4/3] md:aspect-[16/10] lg:aspect-square" data-parallax>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                    alt="Team working on automation strategy" 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-md shadow-xl border border-white/20 max-w-[200px] hidden md:block">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white">
                        <Icons.Zap className="w-5 h-5" />
                      </div>
                      <span className="font-black text-sm uppercase tracking-tighter">Reliability</span>
                    </div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest leading-tight">
                      Built for consistent performance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="flex flex-col">
              <div data-reveal data-delay="0.2">
                <div className="inline-block text-2xl font-bold text-primary sub-heading mb-4">
                  What we do best
                </div>
              </div>
              
              <div data-reveal data-delay="0.3">
                <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-secondary">
                  Helping Your <span className="text-primary">Business Grow</span>.
                </h2>
              </div>

              <div data-reveal data-delay="0.4">
                <p className="text-gray-500 text-base md:text-lg leading-relaxed mb-8">
                  We handle the manual work so you don't have to. Our team creates simple solutions that connect your tools and help you save time every single day.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
                <div data-reveal data-delay="0.5">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 border border-primary/20 rounded-md flex items-center justify-center text-primary bg-primary/5">
                      <Icons.Workflow className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase mb-1 text-secondary">Personal Setup</h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed">Systems built exactly for your needs.</p>
                    </div>
                  </div>
                </div>
                
                <div data-reveal data-delay="0.6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 border border-primary/20 rounded-md flex items-center justify-center text-primary bg-primary/5">
                      <Icons.Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase mb-1 text-secondary">Total Connection</h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed">Your apps finally talk to each other.</p>
                    </div>
                  </div>
                </div>

                <div data-reveal data-delay="0.7">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 border border-primary/20 rounded-md flex items-center justify-center text-primary bg-primary/5">
                      <Icons.Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase mb-1 text-secondary">Secure Data</h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed">Your information is always kept safe.</p>
                    </div>
                  </div>
                </div>

                <div data-reveal data-delay="0.8">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 border border-primary/20 rounded-md flex items-center justify-center text-primary bg-primary/5">
                      <Icons.Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm uppercase mb-1 text-secondary">Hours Saved</h4>
                      <p className="text-[11px] text-gray-400 leading-relaxed">Get more time to focus on your goals.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div data-reveal data-delay="0.9">
                <div className="pt-10">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center gap-3 w-full sm:w-auto bg-primary text-white px-12 py-5 font-black uppercase text-[10px] hover:bg-secondary transition-all duration-300 shadow-[0_10px_30px_rgba(32,188,97,0.3)] hover:shadow-none hover:-translate-y-1 text-center rounded-md group"
                  >
                    Automate My Business
                    <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};
