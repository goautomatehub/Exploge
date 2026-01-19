
import React from 'react';
import { Reveal } from './Reveal';
import { Icons } from './Icons';
import { FloatingDecorations } from './FloatingDecorations';

export const Comparison: React.FC = () => {
  const comparisons = [
    { 
      title: 'Project Tracking', 
      before: 'Scattered across 5+ tools and messy spreadsheets.', 
      after: 'One unified source of truth with real-time sync.',
      icon: Icons.Layers
    },
    { 
      title: 'Daily Operations', 
      before: 'Hours lost to manual data entry and follow-ups.', 
      after: 'Automated workflows that handle the heavy lifting.',
      icon: Icons.Workflow
    },
    { 
      title: 'Client Onboarding', 
      before: 'Slow, manual emails and disconnected systems.', 
      after: 'Seamless, instant onboarding with zero friction.',
      icon: Icons.Users
    },
    { 
      title: 'Business Intelligence', 
      before: 'Guesswork based on outdated, fragmented data.', 
      after: 'Clear visibility with automated custom reporting.',
      icon: Icons.Activity
    }
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <Reveal direction="up">
              <span className="text-primary sub-heading text-lg mb-3 block">The Transformation</span>
              <h3 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[0.95] text-secondary">
                Stop Managing Chaos. <br/>Start <span className="text-primary">Scaling Systems.</span>
              </h3>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {comparisons.map((item, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <div className="group relative bg-zinc-50 rounded-xl p-6 md:p-8 border border-zinc-100 hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5">
                  <div className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-lg bg-white shadow-sm border border-zinc-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 flex-shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 space-y-5">
                      <h4 className="text-xl font-black tracking-tight text-secondary">{item.title}</h4>
                      
                      <div className="space-y-3">
                        {/* Before */}
                        <div className="flex gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0"></div>
                          <div className="space-y-1">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-red-500/70 block">The Old Way</span>
                            <p className="text-zinc-500 text-sm leading-relaxed">{item.before}</p>
                          </div>
                        </div>

                        {/* After */}
                        <div className="flex gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                          <div className="space-y-1">
                            <span className="text-[9px] font-bold uppercase tracking-widest text-primary block">The Exploge Way</span>
                            <p className="text-zinc-800 font-bold text-sm leading-relaxed">{item.after}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom Trust/Result Card */}
          <Reveal direction="up" delay={0.5}>
            <div className="mt-12 md:mt-16 bg-secondary rounded-2xl p-8 md:p-12 relative overflow-hidden group">
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
                <div className="max-w-xl text-center lg:text-left">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-4">
                    <Icons.Zap className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-bold tracking-[0.3em] text-white/80 uppercase">Efficiency Standard</span>
                  </div>
                  <h4 className="text-white text-3xl md:text-4xl font-black tracking-tighter leading-tight mb-4">
                    Ready to reclaim <span className="text-primary">30% of your capacity?</span>
                  </h4>
                  <p className="text-white/50 text-base md:text-lg leading-relaxed">
                    Most businesses are limited by their manual processes. We remove those limits.
                  </p>
                </div>
                
                <div className="flex-shrink-0">
                  <a 
                    href="#contact"
                    className="group/btn relative inline-flex items-center gap-4 bg-primary hover:bg-white text-white hover:text-secondary px-8 py-5 rounded-xl font-black tracking-tighter text-lg transition-all duration-500 overflow-hidden shadow-2xl shadow-primary/20 hover:shadow-none"
                  >
                    <span className="relative z-10">Scale Your Business</span>
                    <Icons.ArrowRight className="w-5 h-5 relative z-10 transition-transform group-hover/btn:translate-x-2" />
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
              <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
