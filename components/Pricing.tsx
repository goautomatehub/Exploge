
import React from 'react';
import { Reveal } from './Reveal';
import { Icons } from './Icons';
import { FloatingDecorations } from './FloatingDecorations';

const ServicePackageCard = ({ title, price, features, delay, recommended = false }: any) => (
  <Reveal direction="up" delay={delay}>
    <div className={`relative border border-black/10 p-6 sm:p-10 flex flex-col h-full transition-all duration-500 rounded-[4px] ${recommended ? 'bg-secondary text-white shadow-2xl scale-105 z-10' : 'bg-white text-secondary shadow-sm hover:shadow-lg'}`}>
      {recommended && (
        <div className="absolute top-0 right-0 bg-primary text-white px-2 py-0.5 md:px-3 md:py-1 text-[8px] md:text-[10px] font-bold uppercase rounded-bl-[4px]">
          Most Requested
        </div>
      )}
      <div className={`text-[9px] md:text-[10px] font-bold uppercase mb-4 ${recommended ? 'text-primary' : 'text-zinc-400'}`}>
        {title} Engagement
      </div>
      <div className="flex items-baseline gap-1 mb-6 md:mb-8">
        <span className="text-3xl md:text-4xl font-black">{price}</span>
        {price !== "Bespoke" && <span className={`text-[10px] md:text-xs font-bold uppercase ${recommended ? 'text-zinc-500' : 'text-zinc-400'}`}>/project</span>}
      </div>
      
      <ul className="space-y-3 md:space-y-4 mb-8 md:mb-10 flex-grow">
        {features.map((f: string, i: number) => (
          <li key={i} className="flex items-start gap-3 text-xs md:text-sm">
            <Icons.Check className="w-3.5 h-3.5 md:w-4 md:h-4 mt-0.5 flex-shrink-0 text-primary" />
            <span className={recommended ? 'text-zinc-300' : 'text-zinc-600'}>{f}</span>
          </li>
        ))}
      </ul>
      
      <a href="#contact" className={`w-full py-3 md:py-4 font-bold uppercase text-center text-[9px] md:text-[10px] border flex items-center justify-center gap-3 transition-all duration-300 rounded-[4px] group ${recommended ? 'bg-primary text-white border-primary shadow-[0_10px_30px_rgba(32,188,97,0.3)] hover:bg-white hover:text-black hover:border-white' : 'bg-white text-black border-black shadow-sm hover:bg-black hover:text-white'} hover:shadow-none hover:-translate-y-1`}>
        Discuss This Model
        <Icons.ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  </Reveal>
);

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 md:py-32 bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <Reveal direction="up">
            <span className="text-2xl font-bold text-primary sub-heading mb-4 inline-block">INVESTMENT</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-black uppercase mb-8 leading-[0.9]">
              Custom Built <span className="text-primary">Not</span> Off-The-Shelf.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-zinc-400 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
              Every business has unique bottlenecks. We don't believe in fixed packages that don't fit. We build bespoke automation ecosystems tailored to your specific scale, tools, and goals.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Discovery Call", desc: "We analyze your current tech stack and workflows." },
                { title: "Custom Roadmap", desc: "A detailed blueprint of your automation ecosystem." },
                { title: "Bespoke Pricing", desc: "Quotes based on the complexity and value delivered." },
                { title: "Full Integration", desc: "We build, test, and deploy everything for you." }
              ].map((item, i) => (
                <Reveal key={i} direction="up" delay={0.3 + (i * 0.1)}>
                  <div className="group border-l border-primary/20 pl-6 py-2 hover:border-primary transition-colors">
                    <h4 className="text-white font-bold uppercase text-xs mb-2">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <Reveal direction="right" delay={0.4}>
              <div className="bg-white p-8 md:p-12 rounded-[4px] text-secondary shadow-2xl relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 -z-10 rounded-full blur-2xl"></div>
                
                <h3 className="text-3xl font-black uppercase mb-4">Get In Touch</h3>
                <p className="text-zinc-500 mb-8">Stop losing hours to manual work. Let's build a system that scales your agency automatically.</p>
                
                <ul className="space-y-4 mb-10">
                  {[
                    "Audit of your current manual tasks",
                    "Identification of 'Easy-Win' automations",
                    "Tech stack optimization advice",
                    "Custom ROI projection"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-medium">
                      <Icons.Check className="w-5 h-5 text-primary flex-shrink-0" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact"
                  className="flex items-center justify-center gap-3 w-full bg-secondary text-white py-5 font-black uppercase tracking-widest text-xs hover:bg-primary transition-all duration-300 group rounded-[4px]"
                >
                  Contact Us For A Free Audit
                  <Icons.ArrowRight className="w-4 h-4 group-hover:translate-x-1" />
                </a>

                <div className="mt-6 text-center">
                  <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-[0.2em] mono">
                    Limited Availability • 4 Spots Monthly
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
