import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Reveal } from './Reveal';
import { AmbientGroup, AmbientBlobs } from './AmbientBlobs';
import { Icons } from './Icons';
import { FloatingDecorations } from './FloatingDecorations';
import { AnimatedText } from './AnimatedText';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useLayoutEffect(() => {
    const section = containerRef.current;
    if (!section) return;
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const text = section.querySelector<HTMLElement>('[data-hero-text]');
      if (text) {
        gsap.fromTo(
          text,
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: text,
              start: 'top 85%',
              once: true
            }
          }
        );
        gsap.to(text, {
          y: -60,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.4
          }
        });
      }

      const blobs = section.querySelector<HTMLElement>('[data-hero-blobs]');
      if (blobs) {
        gsap.to(blobs, {
          y: 80,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.5
          }
        });
      }

      const cards = gsap.utils.toArray<HTMLElement>('[data-hero-card]');
      if (cards.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 20, scale: 0.98 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.9,
            ease: 'power2.out',
            stagger: 0.1,
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
              once: true
            }
          }
        );
      }

      const gauge = section.querySelector<SVGCircleElement>('[data-hero-gauge]');
      if (gauge) {
        gsap.fromTo(
          gauge,
          { strokeDashoffset: 150.8 },
          {
            strokeDashoffset: 0,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: gauge,
              start: 'top 85%',
              once: true
            }
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <section ref={containerRef} className="relative pt-24 pb-12 xs:pt-28 sm:pt-32 md:pt-40 md:pb-20 lg:pt-56 lg:pb-40 bg-zinc-50 overflow-hidden bg-grid">
      {/* Background Radial Glow for Mobile - Adds depth without clutter */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(32,188,97,0.08),transparent_70%)] lg:hidden pointer-events-none" />

      {/* Floating Elements - Adjusted for better responsiveness */}
      <FloatingDecorations.Plus className="top-20 left-[10%] text-primary hidden lg:block" delay={0.2} />
      <FloatingDecorations.Dot className="top-40 right-[15%] hidden lg:block" delay={0.5} />
      <FloatingDecorations.Triangle className="bottom-[30%] left-[5%] hidden lg:block" delay={0.8} />
      <FloatingDecorations.Circle className="bottom-20 right-[10%] hidden lg:block" delay={1.1} />
      <FloatingDecorations.GridDots className="top-1/2 left-[15%] hidden lg:block" delay={1.4} />
      <FloatingDecorations.Zigzag className="top-[25%] right-[5%] hidden lg:block" delay={1.7} />

      <div data-hero-blobs className="absolute inset-0 pointer-events-none">
        <AmbientGroup />
        
        {/* Additional Greenish Blobs - Optimized for Mobile */}
        <div className="hidden lg:block">
          <AmbientBlobs color="bg-primary" size="w-[500px] h-[500px]" className="-top-24 -right-24" opacity="opacity-[0.12]" animation="animate-blob-slow" />
          <AmbientBlobs color="bg-primary" size="w-[400px] h-[400px]" className="top-1/2 -left-48" opacity="opacity-[0.15]" animation="animate-blob" />
          <AmbientBlobs color="bg-primary" size="w-[600px] h-[600px]" className="-bottom-48 right-1/4" opacity="opacity-[0.10]" animation="animate-blob-spin" />
        </div>
      </div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-zinc-200/50 hidden xl:block"></div>
      
      {/* Smooth Transition Fader to next section - Hidden on mobile/tablet to avoid "blur" feel */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent z-20 pointer-events-none hidden lg:block"></div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Relevant Automation Elements - Responsive & Polished */}
        <div className="hidden xl:block absolute inset-0 pointer-events-none overflow-visible">
          {/* Background Ambient Glows */}
          <div className="absolute top-[15%] left-[5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />
          <div className="absolute bottom-[15%] right-[5%] w-[300px] h-[300px] bg-primary/5 rounded-full blur-[100px] -z-10" />

          {/* Top Left - Lead Flow / CRM Sync - Hidden on small tablets */}
          <div 
            data-hero-card
            className="absolute top-[12%] lg:top-[18%] left-[2%] lg:left-[4%] bg-white/70 backdrop-blur-md border border-zinc-200/50 p-3 lg:p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center gap-3 lg:gap-4 group pointer-events-auto cursor-default hidden xl:flex transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-white shadow-sm flex items-center justify-center p-1.5 lg:p-2 border border-zinc-100">
              <Icons.HubSpot className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] lg:text-[10px] font-black tracking-widest text-secondary font-satoshi leading-none mb-1 lg:mb-1.5">Lead Capture</span>
              <div className="flex items-center gap-2">
                <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-primary" />
                <span className="text-[8px] lg:text-[9px] font-bold text-zinc-500 font-satoshi">New lead sent to CRM</span>
              </div>
            </div>
          </div>

          {/* Top Right - Integration Cluster */}
          <div 
            data-hero-card
            className="absolute top-[10%] lg:top-[15%] right-[2%] lg:right-[6%] flex flex-col items-center gap-2 lg:gap-3 pointer-events-auto cursor-default transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex -space-x-2 lg:-space-x-3">
              {[
                { Icon: Icons.Zapier, color: "bg-[#FF4A00]/5" },
                { Icon: Icons.Make, color: "bg-[#7B3FE4]/5" },
                { Icon: Icons.Slack, color: "bg-[#4A154B]/5" }
              ].map((tool, i) => (
                <div key={i} className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl lg:rounded-2xl ${tool.color} backdrop-blur-md border border-zinc-200/50 p-2 lg:p-2.5 shadow-sm flex items-center justify-center bg-white/90`}>
                  <tool.Icon className="w-full h-full" />
                </div>
              ))}
            </div>
            <div className="bg-secondary px-3 py-1 lg:px-4 lg:py-1.5 rounded-full shadow-lg border border-white/5">
              <span className="text-[7px] lg:text-[8px] font-black text-white tracking-[0.2em]">Systems Active</span>
            </div>
          </div>

          {/* Bottom Left - Automated Task Feed */}
          <div 
            data-hero-card
            className="absolute bottom-[20%] lg:bottom-[22%] left-[4%] lg:left-[8%] bg-white/70 backdrop-blur-md border border-zinc-200/50 p-4 lg:p-5 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] w-48 lg:w-56 pointer-events-auto cursor-default hidden lg:block transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-3 lg:mb-4">
              <span className="text-[9px] lg:text-[10px] font-black tracking-widest text-secondary opacity-40">Task Progress</span>
              <Icons.Activity className="w-3 h-3 text-primary" />
            </div>
            <div className="space-y-2 lg:space-y-3">
              {[
                { text: "Auto-reply sent to client", status: "complete" },
                { text: "Data added to spreadsheet", status: "complete" },
                { text: "Team notified on Slack", status: "complete" }
              ].map((task, i) => (
                <div key={i} className="flex items-center gap-2 lg:gap-3">
                  <div className="w-3.5 h-3.5 lg:w-4 lg:h-4 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                    <Icons.Check className="w-1.5 h-1.5 lg:w-2 lg:h-2 text-primary" />
                  </div>
                  <span className="text-[9px] lg:text-[10px] font-bold text-secondary/70 font-satoshi">{task.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Right - Efficiency Gauge */}
          <div 
            data-hero-card
            className="absolute bottom-[15%] lg:bottom-[18%] right-[4%] lg:right-[10%] bg-secondary text-white p-4 lg:p-6 rounded-2xl lg:rounded-3xl shadow-2xl border border-white/5 flex flex-col items-center gap-2 lg:gap-3 pointer-events-auto cursor-default hidden lg:flex transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="relative w-10 h-10 lg:w-14 lg:h-14 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle cx="28" cy="28" r="24" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-white/10" />
                <circle 
                  data-hero-gauge
                  cx="28" cy="28" r="24" stroke="#20BC61" strokeWidth="4" fill="transparent"
                  strokeDasharray="150.8"
                />
              </svg>
              <span className="absolute text-[8px] lg:text-[10px] font-black text-primary">100%</span>
            </div>
            <div className="text-center">
              <span className="text-sm lg:text-[18px] font-black font-urbanist tracking-tighter block leading-none text-primary mb-0.5 lg:mb-1">100% Accuracy</span>
              <span className="text-[7px] lg:text-[8px] font-bold tracking-widest opacity-40">Zero manual errors</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center max-w-6xl mx-auto">
          <div data-hero-text className="w-full space-y-6 sm:space-y-8 md:space-y-10" style={{ willChange: "transform" }}>
            {/* SaaS Style Subheading */}
            <Reveal direction="down" delay={0.1}>
              <div className="inline-flex items-center gap-2 sm:gap-3 px-4 py-2 sm:py-2.5 rounded-full border border-primary/20 bg-primary/5 text-secondary font-bold tracking-wide">
                <span className="hidden sm:inline-block bg-primary text-white px-2.5 py-0.5 rounded-full text-[10px] md:text-xs tracking-wider font-black">Result</span>
                <span className="text-secondary sub-heading text-sm sm:text-base md:text-lg lg:text-xl">Modern Automation for Growing Businesses</span>
              </div>
            </Reveal>

            {/* Main Heading - Responsive Sizes */}
            <div className="flex flex-col items-center w-full space-y-1 sm:space-y-2 md:space-y-4 px-2">
              <AnimatedText 
                text="We Help Your Business"
                className="text-[32px] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[90px] font-black leading-[1.1] tracking-tight sm:tracking-normal text-secondary font-urbanist justify-center"
                delay={0.2}
              />
              <AnimatedText 
                text="Run on Autopilot"
                className="text-[32px] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[90px] font-black leading-[1.1] tracking-tight sm:tracking-normal text-secondary font-urbanist justify-center"
                delay={0.4}
                highlightWords={["Autopilot"]}
                highlightClassName="text-primary"
              />
            </div>
            
            {/* Centered Description */}
            <div className="max-w-2xl mx-auto px-4 sm:px-0">
              <Reveal direction="up" delay={0.6} duration={1.2}>
                <p className="text-sm sm:text-base md:text-lg text-zinc-600 leading-relaxed font-medium font-satoshi">
                  Stop wasting time on repetitive manual tasks. We create simple systems that connect your tools and handle your daily work for you, so you can focus on what matters most.
                </p>
              </Reveal>
            </div>
            
            <Reveal direction="up" delay={0.8} duration={1.2}>
              <div className="flex flex-col items-center space-y-10">
                {/* Simplified Trusted By */}
                <div className="flex flex-col items-center gap-4">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                    ].map((url, i) => ( 
                      <div key={i} className="relative w-10 h-10 rounded-full border-4 border-zinc-50 overflow-hidden bg-zinc-100 shadow-sm">
                        <img src={url} alt="Client" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="relative w-10 h-10 rounded-full border-4 border-zinc-50 bg-black flex items-center justify-center text-white text-[10px] font-bold shadow-sm">
                      3+
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-zinc-600 tracking-widest font-satoshi">Helping Businesses Save Time</span>
                </div>

                {/* Two Centered Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4 sm:pt-6">
                  <a 
                    href="#contact"
                    onClick={(e) => scrollToSection(e, 'contact')}
                    className="w-full sm:w-auto bg-primary text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black tracking-widest text-xs sm:text-sm flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_10px_30px_rgba(32,188,97,0.3)] hover:shadow-none hover:-translate-y-1 group"
                  >
                    Start Your Transformation
                    <Icons.ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1.5" />
                  </a>
                  <a 
                    href="#services"
                    onClick={(e) => scrollToSection(e, 'services')}
                    className="w-full sm:w-auto bg-white text-secondary px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black tracking-widest text-xs sm:text-sm flex items-center justify-center gap-3 border border-zinc-200 hover:bg-zinc-50 transition-all duration-300 hover:-translate-y-1"
                  >
                    Explore Capabilities
                    <Icons.ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1.5" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
