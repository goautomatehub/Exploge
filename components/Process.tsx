
import React, { useLayoutEffect, useRef } from 'react';
import { Reveal } from './Reveal';
import { ClipboardList, Layers, Settings2, Rocket, CheckCircle2 } from 'lucide-react';
import { FloatingDecorations } from './FloatingDecorations';

const steps = [
  {
    icon: ClipboardList,
    title: "Spotting the Bottlenecks",
    desc: "We look at your daily work to find exactly which manual tasks are wasting your time and slowing you down.",
    color: "bg-blue-500"
  },
  {
    icon: Layers,
    title: "Building the Blueprint",
    desc: "We design a custom plan to link your favorite apps together and create a workflow that makes sense for you.",
    color: "bg-purple-500"
  },
  {
    icon: Settings2,
    title: "Setting Up the System",
    desc: "Our team handles all the technical setup and testing to make sure everything works perfectly from the very first day.",
    color: "bg-primary"
  },
  {
    icon: Rocket,
    title: "Growth on Autopilot",
    desc: "We launch your new automated system so you can watch your business grow while you save hours of work every day.",
    color: "bg-orange-500"
  }
];

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === 'undefined') return;
    const container = containerRef.current;
    if (!container) return;
    const easing = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const icons = section.querySelectorAll<HTMLElement>('[data-step-icon]');
    const stepContent = section.querySelectorAll<HTMLElement>('[data-step-content]');

    icons.forEach((icon, index) => {
      icon.style.opacity = '0';
      icon.style.transform = 'scale(0.9)';
      icon.style.transition = `opacity 0.6s ${easing} ${index * 0.08}s, transform 0.6s ${easing} ${index * 0.08}s`;
    });

    stepContent.forEach((content, index) => {
      content.style.opacity = '0';
      content.style.transform = 'translate3d(0, 18px, 0)';
      content.style.transition = `opacity 0.8s ${easing} ${index * 0.1}s, transform 0.8s ${easing} ${index * 0.1}s`;
    });

    if (progressRef.current) {
      progressRef.current.style.transform = 'scaleY(0)';
      progressRef.current.style.transition = `transform 1s ${easing}`;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        icons.forEach((icon) => {
          icon.style.opacity = '1';
          icon.style.transform = 'scale(1)';
        });
        stepContent.forEach((content) => {
          content.style.opacity = '1';
          content.style.transform = 'translate3d(0, 0, 0)';
        });
        if (progressRef.current) {
          progressRef.current.style.transform = 'scaleY(1)';
        }
        observer.disconnect();
      },
      { threshold: 0.1, rootMargin: '0px 0px -20% 0px' }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" className="pt-12 pb-16 md:py-24 bg-white relative overflow-hidden" ref={sectionRef}>
      {/* Floating Elements */}
      <FloatingDecorations.Triangle className="top-10 left-[5%] hidden md:block" delay={0.2} />
      <FloatingDecorations.Dot className="bottom-20 right-[10%] hidden md:block" delay={0.6} />
      <FloatingDecorations.Zigzag className="top-1/2 right-[5%] hidden md:block" delay={1.0} />
      <FloatingDecorations.GridDots className="bottom-1/4 left-[15%] hidden md:block" delay={1.4} />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-16 items-start">
          
          {/* Left Side: Sticky Content (No Background) */}
          <div className="w-full lg:w-1/2 lg:sticky lg:top-32 space-y-6 md:space-y-8 py-4">
            <div>
              <Reveal direction="left">
                <span className="text-2xl font-bold text-primary sub-heading mb-4 inline-block">The Process</span>
                <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] mb-6 text-secondary">
                  Our Simple 4-Step <br/> <span className="text-primary">Process</span>.
                </h2>
              </Reveal>
              <Reveal direction="left" delay={0.2}>
                <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-xl font-normal">
                  Many business owners spend hours every day moving data between apps and doing the same manual tasks over and over. We follow a clear, proven plan to take that weight off your shoulders. From our very first chat to the moment your new system goes live, we handle all the difficult work so you can finally get back to growing your business without the stress of manual paperwork.
                </p>
              </Reveal>
            </div>

            {/* CTA Card */}
            <Reveal direction="up" delay={0.3}>
              <div className="bg-zinc-50 p-6 md:p-8 border border-zinc-100 rounded-[14px] relative overflow-hidden group">
                <h4 className="text-xl md:text-2xl font-extrabold mb-3 relative z-10 text-secondary">Your Future is Automatic</h4>
                <p className="text-gray-500 text-sm mb-6 relative z-10 font-normal">Don't let your growth be limited by how many manual tasks you can handle in a day. Our custom-built systems are designed to scale with you, giving you the freedom to take on more clients without doing more work.</p>
                
                <a href="#contact" className="flex items-center gap-4 group/btn cursor-pointer relative z-10">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center group-hover/btn:bg-secondary transition-all duration-300 shadow-lg shadow-primary/20">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold mono uppercase tracking-widest text-secondary">Claim Your Strategy</div>
                    <div className="text-[10px] text-primary uppercase font-bold">Reserve your consultation</div>
                  </div>
                </a>
              </div>
            </Reveal>
          </div>
          
          {/* Right Side: Animated Steps (With Dark Background) */}
          <div className="w-full lg:w-1/2 relative bg-secondary rounded-[14px] p-6 md:p-10 lg:p-12 text-white overflow-hidden shadow-2xl" ref={containerRef}>
            {/* Subtle decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="relative z-10 flex gap-6 md:gap-10 lg:gap-12">
              {/* Column 1: Icons & Lines */}
              <div className="flex flex-col items-center flex-shrink-0 relative">
                {steps.map((step, index) => (
                  <React.Fragment key={index}>
                    {/* Icon Circle */}
                    <div 
                      data-step-icon
                      className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-zinc-900 border-2 border-white/30 rounded-[4px] flex items-center justify-center z-10 relative overflow-hidden flex-shrink-0 shadow-lg"
                    >
                      <step.icon className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 text-white transition-transform group-hover:scale-110 relative z-10" />
                      <div className="absolute -top-1 -right-1 bg-primary text-white text-[8px] font-bold w-5 h-5 flex items-center justify-center rounded-bl-lg">
                        0{index + 1}
                      </div>
                    </div>

                    {/* Vertical Line Segment (Static) */}
                    {index < steps.length - 1 && (
                      <div className="w-[2px] flex-grow bg-white/20" />
                    )}
                  </React.Fragment>
                ))}

                {/* Animated Progress Line */}
                <div className="absolute top-[20px] md:top-[24px] lg:top-[28px] bottom-[20px] md:bottom-[24px] lg:bottom-[28px] w-[2px] z-0">
                  <div 
                    ref={progressRef}
                    className="absolute inset-0 bg-primary shadow-[0_0_15px_rgba(32,188,97,0.5)]"
                    style={{ transform: 'scaleY(0)', transformOrigin: 'top' }}
                  />
                </div>
              </div>

              {/* Column 2: Content */}
              <div className="flex flex-col flex-grow">
                {steps.map((step, index) => (
                  <div key={index} className={`${index < steps.length - 1 ? 'pb-12 md:pb-16' : 'pb-0'}`} data-step-content>
                    <div>
                      <h4 className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight mb-3 text-white transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl">
                        {step.desc}
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[10px] font-bold mono text-primary">
                        <CheckCircle2 className="w-3 h-3" />
                        READY TO SCALE
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
