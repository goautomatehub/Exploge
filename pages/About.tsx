import React, { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { AmbientGroup, AmbientBlobs } from '../components/AmbientBlobs';
import { Icons } from '../components/Icons';
import { FloatingDecorations } from '../components/FloatingDecorations';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { Stats } from '../components/Stats';
import { Comparison } from '../components/Comparison';

interface AboutProps {
  onNavigate: (page: 'home' | 'about') => void;
}

const CEO_IMAGE = "https://i.ibb.co/FbMtD7tT/Whats-App-Image-2025-12-30-at-8-30-26-PM.jpg";

const SpotlightWrapper = ({ children, className = "", spotlightColor = "rgba(32,188,97,0.12)" }: { children: React.ReactNode, className?: string, spotlightColor?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className={`relative group overflow-hidden ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 hidden lg:block"
        style={{
          background: useMotionTemplate`radial-gradient(350px circle at ${mouseXSpring}px ${mouseYSpring}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-48 md:pb-32 bg-premium-dark text-white relative overflow-hidden">
        <AmbientGroup variant="dark" />
        <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
        
        {/* Floating Elements */}
        <FloatingDecorations.Plus className="top-40 right-20 text-primary hidden md:block" delay={0.6} />
        <FloatingDecorations.Dot className="bottom-20 left-1/3 hidden md:block" delay={1.8} />
        <FloatingDecorations.Triangle className="top-20 left-1/4 hidden md:block" delay={0.9} />
        <FloatingDecorations.Cross className="bottom-40 right-1/3 hidden md:block" delay={1.4} />
        <FloatingDecorations.GridDots className="top-1/3 right-10 hidden md:block" delay={2.5} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Reveal direction="left">
              <span className="text-primary mono text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Our Identity</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="text-3xl xs:text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                The <span className="text-primary italic">Architects</span> of Agency Efficiency.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed border-l-2 border-primary pl-6 md:pl-8 max-w-2xl">
                Founded on the principle that complexity is the enemy of growth, Exploge was built to bridge the gap between creative vision and operational reality.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Bento Grid */}
      <section className="py-20 md:py-24 bg-white border-b border-black/5 relative overflow-hidden">
        <AmbientBlobs color="bg-primary" size="w-96 h-96" className="-top-48 -left-48" opacity="opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <Reveal direction="left">
            <div className="mb-12 md:mb-16">
              <span className="text-primary mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">The Advantage</span>
              <h2 className="text-3xl xs:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Why Agencies <br/>Choose Exploge.</h2>
            </div>
          </Reveal>

          {/* Master Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6 min-h-auto md:min-h-[700px]">
            
            {/* LARGE HERO CARD: The Mindset */}
            <Reveal direction="up" className="md:col-span-2 md:row-span-2">
              <SpotlightWrapper className="h-full">
                <div className="relative bg-zinc-50 h-full border border-black/5 rounded-md p-6 xs:p-8 md:p-12 flex flex-col justify-between hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl">
                  <div className="relative z-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 text-primary flex items-center justify-center rounded-md mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Icons.Workflow className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <h4 className="text-2xl xs:text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4 md:mb-6 leading-none">
                      The Engineering <br/> <span className="text-primary italic">Mindset</span>.
                    </h4>
                    <p className="text-gray-500 text-base md:text-xl leading-relaxed max-w-sm">
                      We don't just build automations; we engineer business freedom. Our systems are built to endure, scale, and evolve alongside your agency's highest ambitions.
                    </p>
                  </div>
                  
                  <div className="relative z-10 pt-10 md:pt-12 flex items-center gap-4 text-[10px] font-bold mono uppercase tracking-widest text-secondary group-hover:text-primary transition-colors">
                    <div className="w-8 h-px bg-zinc-300 group-hover:bg-primary group-hover:w-12 transition-all duration-500"></div>
                    Technical Precision First
                  </div>

                  {/* Background Decor */}
                  <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all duration-700"></div>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none">
                    <Icons.Cpu size={400} strokeWidth={0.5} className="w-[200px] md:w-[400px]" />
                  </div>
                </div>
              </SpotlightWrapper>
            </Reveal>

            {/* STAT CARD: Efficiency Boost */}
            <Reveal direction="up" delay={0.1} className="md:col-span-2">
              <SpotlightWrapper className="h-full" spotlightColor="rgba(32,188,97,0.25)">
                <div className="relative bg-premium-dark h-full border border-white/5 rounded-md p-6 xs:p-8 text-white flex items-center justify-between hover:shadow-[0_0_40px_rgba(32,188,97,0.15)] transition-all duration-500">
                  <div className="relative z-10">
                    <div className="text-5xl xs:text-6xl lg:text-7xl font-black text-primary mb-2 tracking-tighter group-hover:scale-105 transition-transform duration-500 origin-left">65%</div>
                    <div className="text-[10px] font-bold uppercase tracking-[0.4em] mb-4 text-white/50">Efficiency Multiplier</div>
                    <p className="text-gray-400 text-sm italic leading-relaxed max-w-[200px]">
                      "Average time saved for project management teams across our partners."
                    </p>
                  </div>
                  
                  <div className="relative z-10 hidden xs:block">
                    <div className="w-20 h-20 md:w-24 md:h-24 border-2 border-primary/20 rounded-full flex items-center justify-center animate-spin-slow">
                      <Icons.Zap className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                    </div>
                  </div>

                  {/* Background Grid Accent */}
                  <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none"></div>
                </div>
              </SpotlightWrapper>
            </Reveal>

            {/* SMALL CARD 1: Zero Manual */}
            <Reveal direction="up" delay={0.2} className="md:col-span-1">
              <SpotlightWrapper className="h-full">
                <div className="relative h-full bg-white border border-black/5 rounded-md p-6 xs:p-8 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
                  <div className="relative z-10">
                    <div className="p-3 bg-zinc-50 border border-black/5 w-fit rounded-md mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Icons.Check className="w-5 h-5" />
                    </div>
                    <h5 className="font-black text-sm uppercase tracking-widest mb-3">Manual Zero</h5>
                    <p className="text-gray-500 text-[13px] leading-relaxed">We eliminate the repetitive to focus on the creative.</p>
                  </div>
                  <div className="relative z-10 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icons.ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </SpotlightWrapper>
            </Reveal>

            {/* SMALL CARD 2: Scale Ready */}
            <Reveal direction="up" delay={0.3} className="md:col-span-1">
              <SpotlightWrapper className="h-full">
                <div className="relative h-full bg-white border border-black/5 rounded-md p-6 xs:p-8 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between">
                  <div className="relative z-10">
                    <div className="p-3 bg-zinc-50 border border-black/5 w-fit rounded-md mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      <Icons.Layers className="w-5 h-5" />
                    </div>
                    <h5 className="font-black text-sm uppercase tracking-widest mb-3">Scale Core</h5>
                    <p className="text-gray-500 text-[13px] leading-relaxed">Architecture built for 10x growth without overhead.</p>
                  </div>
                  <div className="relative z-10 mt-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Icons.ArrowRight className="w-4 h-4 text-primary" />
                  </div>
                </div>
              </SpotlightWrapper>
            </Reveal>

          </div>
        </div>
        
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Comparison Section */}
      <Comparison />

      {/* Our Commitment */}
      <section className="py-20 md:py-24 bg-gray-50 overflow-hidden relative">
        <AmbientBlobs color="bg-primary" size="w-[800px] h-[800px]" className="-bottom-[400px] -right-[400px]" opacity="opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 border-y border-black/10 py-12 md:py-16">
            <Reveal direction="up" className="w-full md:w-1/2">
              <h3 className="text-[10px] font-bold text-primary mono uppercase tracking-[0.4em] mb-4">Our Commitment</h3>
              <p className="text-2xl xs:text-3xl font-black uppercase tracking-tighter leading-tight">
                To provide <span className="italic">engineering excellence</span> that scales your business, not just another bill.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2} className="w-full md:w-1/2">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                We are committed to technical precision, reliable delivery, and transparent communication. Our approach is driven by the real-world operational needs of the world's most demanding businesses.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-20 md:py-24 bg-white border-b border-black/5 relative overflow-hidden">
        <AmbientBlobs color="bg-primary" size="w-96 h-96" className="top-1/2 right-0 -translate-y-1/2 translate-x-1/2" opacity="opacity-[0.03]" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-stretch">
            <div className="w-full lg:w-1/2">
              <Reveal direction="left">
                <div className="relative h-full">
                  <div className="aspect-[4/5] bg-gray-100 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden border border-black/5 rounded-md h-full shadow-2xl">
                    <img 
                      src={CEO_IMAGE} 
                      alt="CEO Portrait" 
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 bg-primary p-4 md:p-6 shadow-2xl border border-black/5 rounded-md">
                    <div className="text-white font-black uppercase text-xl md:text-2xl italic tracking-tighter">Haroon Taj</div>
                    <div className="text-white/70 font-bold uppercase text-[8px] md:text-[10px] tracking-[0.3em] mono">Founder & CEO</div>
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-center space-y-8 md:space-y-10">
              <Reveal direction="right">
                <div className="inline-block bg-secondary text-white px-3 py-1 text-[10px] font-bold mono uppercase mb-4 tracking-[0.3em] rounded-sm">Executive Vision</div>
                <h3 className="text-3xl xs:text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] mb-6 md:mb-8">"Most businesses are running on <span className="text-primary italic">hope</span> and spreadsheets. We engineer the cure."</h3>
                <div className="space-y-6 md:space-y-8 text-gray-500 leading-relaxed text-base md:text-lg">
                  <p>
                    I spent a decade in the operational trenches. I saw firsthand how great talent was being crushed by the weight of administrative chaos. We were losing 30% of our capacity just trying to figure out what was happening in our own business.
                  </p>
                  <p>
                    Exploge wasn't born in a boardroom. It was born out of frustration. We design systems for the people who actually do the work—the managers, the developers, and the directors who need a source of truth that doesn't get in their way.
                  </p>
                  <div className="pt-6 border-t border-black/5">
                    <p className="font-bold text-secondary italic text-xl md:text-2xl tracking-tighter">
                      "Our mission is to give you back your time so you can focus on what actually matters: your clients and your craft."
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact" className="py-20 md:py-24 bg-premium-dark text-white relative overflow-hidden">
        <AmbientGroup variant="dark" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Reveal direction="none">
                <h2 className="text-[10px] font-bold text-primary mono uppercase tracking-[0.4em] mb-4">Partner Inquiry</h2>
                <h3 className="text-3xl xs:text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Direct Connection.</h3>
                <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                  Have a specific question about our implementation or enterprise capabilities? Our leadership team is ready to discuss your agency's future.
                </p>
              </Reveal>
            </div>

            <div className="bg-white p-6 xs:p-8 md:p-12 border-t-8 border-primary relative overflow-hidden rounded-md">
              <div className="absolute top-0 left-0 w-full h-1 bg-primary/20"></div>
              {submitted ? (
                <div className="py-16 md:py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icons.Check className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-secondary text-2xl md:text-3xl font-black uppercase tracking-tighter mb-2">Message Sent</h4>
                  <p className="text-gray-500 uppercase font-bold text-[10px] md:text-xs tracking-widest">We will respond within 120 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Principal Name</label>
                      <input required type="text" className="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-sm text-secondary focus:border-primary focus:outline-none transition-all placeholder:text-gray-300" placeholder="Haroon Taj" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Professional Email</label>
                      <input required type="email" className="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-sm text-secondary focus:border-primary focus:outline-none transition-all placeholder:text-gray-300" placeholder="principal@agency.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Inquiry Type</label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                      {[
                        { name: 'Automation', icon: Icons.Zap },
                        { name: 'Migration', icon: Icons.Workflow },
                        { name: 'Custom Build', icon: Icons.Plus },
                        { name: 'Consulting', icon: Icons.MessageSquare }
                      ].map(type => (
                        <label key={type.name} className="flex flex-col items-center gap-3 p-4 bg-gray-50 cursor-pointer hover:bg-gray-100 transition-colors border border-transparent has-[:checked]:border-primary has-[:checked]:bg-primary/5 group rounded-md">
                          <input type="radio" name="inquiry" className="hidden" />
                          <type.icon className="w-5 h-5 text-gray-400 group-has-[:checked]:text-primary transition-colors" />
                          <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{type.name}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Detailed Context</label>
                    <textarea rows={5} className="w-full bg-gray-50 border-b-2 border-gray-100 p-4 text-sm text-secondary focus:border-primary focus:outline-none transition-all resize-none placeholder:text-gray-300" placeholder="Briefly describe your agency size and primary operational bottleneck..."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-primary text-white font-black py-5 hover:bg-secondary transition-all duration-300 text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-4 shadow-[0_10px_30px_rgba(32,188,97,0.3)] hover:shadow-none hover:-translate-y-1 group rounded-md">
                    Send Direct Inquiry
                    <Icons.ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              )}
            </div>
            
            <div className="mt-12 text-center">
              <button 
                onClick={() => onNavigate('home')} 
                className="text-[10px] font-bold text-gray-500 hover:text-white uppercase tracking-[0.4em] transition-colors"
              >
                Back To Home
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};