
import React from 'react';
import { Reveal } from './Reveal';
import { Icons } from './Icons';
import { FloatingDecorations } from './FloatingDecorations';

export const Comparison: React.FC = () => {
  const tools = [
    { name: 'Tracking Projects', old: 'Many Different Tools', exploge: true },
    { name: 'Daily Work', old: 'Manual Steps', exploge: true },
    { name: 'Managing Clients', old: 'Multiple Systems', exploge: true },
    { name: 'Keeping Files', old: 'Separate Files', exploge: true },
    { name: 'Talking to Team', old: 'Too Many Channels', exploge: true },
  ];

  return (
    <section className="py-16 md:py-24 bg-zinc-50 border-y border-zinc-200/50 overflow-hidden relative">
      <FloatingDecorations.Dot className="bottom-10 left-1/4" delay={1.5} />
      <FloatingDecorations.Square className="top-1/2 right-10" delay={0.7} />
      <FloatingDecorations.Zigzag className="bottom-20 left-10" delay={2.1} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <Reveal direction="none">
            <span className="text-2xl font-bold text-primary sub-heading mb-4 inline-block">Why We Are Different</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h3 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter">Exploge vs. The Old Way</h3>
          </Reveal>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Table Container */}
          <div className="relative w-full overflow-hidden border border-black rounded-[4px] shadow-sm bg-white">
            <div className="overflow-x-auto">
              <div className="min-w-[500px]">
                <Reveal direction="up" delay={0.2}>
                  <div className="grid grid-cols-3 border-b border-black text-center divide-x divide-black bg-zinc-100">
                    <div className="p-3 md:p-4 mono text-[8px] md:text-[10px] font-bold uppercase text-zinc-600">Feature</div>
                    <div className="p-3 md:p-4 mono text-[8px] md:text-[10px] font-bold uppercase text-zinc-400">Manual Work</div>
                    <div className="p-3 md:p-4 mono text-[8px] md:text-[10px] font-bold uppercase text-primary">Our Way</div>
                  </div>
                </Reveal>
                
                {tools.map((tool, i) => (
                  <Reveal key={i} direction="up" delay={0.3 + (i * 0.05)}>
                    <div className="grid grid-cols-3 border-b last:border-b-0 border-black text-center divide-x divide-black group hover:bg-zinc-50 transition-colors">
                      <div className="p-4 md:p-6 font-bold text-[10px] md:text-sm uppercase text-left pl-4 md:pl-8 text-secondary">{tool.name}</div>
                      <div className="p-4 md:p-6 text-zinc-400 text-[10px] md:text-sm italic">{tool.old}</div>
                      <div className="p-4 md:p-6 flex justify-center items-center">
                        <div className="w-5 h-5 md:w-6 md:h-6 bg-primary/10 text-primary flex items-center justify-center rounded-[4px]">
                          <Icons.Check className="w-3 h-3 md:w-4 md:h-4 stroke-[3]" />
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
          
          <Reveal direction="up" delay={0.6}>
            <div className="mt-8 md:mt-10 lg:mt-12 p-6 md:p-7 lg:p-8 bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/20 text-center md:text-left rounded-[4px] shadow-lg">
              <div className="space-y-1">
                <div className="text-primary mono text-[9px] md:text-[10px] font-bold uppercase tracking-widest">Efficiency Increase</div>
                <div className="text-xl md:text-[22px] lg:text-2xl font-black uppercase">Consolidate & Improve Performance by 65%</div>
              </div>
              <a 
                href="#contact"
                className="w-full md:w-auto bg-primary text-white px-8 py-3.5 font-bold uppercase tracking-widest text-[9px] md:text-[10px] mono flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_10px_30px_rgba(32,188,97,0.3)] hover:shadow-none hover:-translate-y-1 group rounded-[4px]"
              >
                Learn More
                <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
