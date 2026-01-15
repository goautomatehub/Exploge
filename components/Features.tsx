import React from 'react';
import { Icons } from './Icons';
import { Reveal } from './Reveal';

export const Features: React.FC = () => {
  const metrics = [
    { label: 'Efficiency Boost', value: '300%', detail: 'Automation vs Manual' },
    { label: 'Accuracy Rate', value: '99.9%', detail: 'Zero Human Error' },
    { label: 'Time Reclaimed', value: '2000+', detail: 'Hrs saved annually' },
    { label: 'ROI Delivery', value: '5x+', detail: 'In first 6 months' }
  ];

  const pillars = [
    {
      title: "Lightning Speed",
      desc: "Our automations process data in milliseconds. What takes your team hours, we complete in seconds, 24/7.",
      opacity: "border-primary/60"
    },
    {
      title: "Zero Human Error",
      desc: "Manual entry is prone to mistakes. Our systems ensure 100% accuracy in every lead, invoice, and workflow.",
      opacity: "border-primary/30"
    },
    {
      title: "Infinite Scalability",
      desc: "Scale from 10 to 1,000 clients without adding overhead. Our systems grow with you, instantly.",
      opacity: "border-primary/10"
    }
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-24 bg-premium-dark text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-32 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <Reveal direction="up">
            <span className="text-2xl font-bold text-primary sub-heading mb-4 inline-block">Why Choose Us</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-black mb-8 leading-[0.9]">
              Speed & Accuracy.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed max-w-2xl mx-auto">
              We don't just set up software. We build high-performance systems that eliminate bottlenecks and human error. Our focus is on making your business faster, leaner, and more profitable through precision automation.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col lg:flex-row gap-20">
          <div className="w-full lg:w-1/2 space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {metrics.map((spec, i) => (
                <Reveal key={i} direction="up" delay={0.3 + (i * 0.1)}>
                  <div className="border-l border-primary/30 pl-6 py-2 group hover:border-primary transition-colors">
                    <div className="text-xl sub-heading text-primary mb-1">{spec.label}</div>
                    <div className="text-2xl font-black mb-1 group-hover:translate-x-1 transition-transform">{spec.value}</div>
                    <div className="text-lg sub-heading text-gray-500">{spec.detail}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            
            <Reveal direction="up" delay={0.7}>
              <button 
                onClick={scrollToContact}
                className="group border-b border-primary text-primary pb-1 font-bold text-[10px] hover:text-white hover:border-white transition-all flex items-center gap-3"
              >
                Free Strategy Session
                <Icons.ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1" />
              </button>
            </Reveal>
          </div>
          
          <div className="w-full lg:w-1/2">
            <Reveal direction="right" delay={0.4} className="h-full">
              <div className="bg-secondary/40 backdrop-blur-sm border border-white/5 p-8 md:p-12 shadow-2xl relative h-full flex flex-col justify-center rounded-md">
                <div className="absolute top-4 right-6 flex gap-2">
                  <div className="w-2 h-2 rounded-full bg-red-500/20"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500/20"></div>
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                </div>

                <div className="space-y-10">
                  {pillars.map((pillar, i) => (
                    <div key={i} className={`border-l-2 ${pillar.opacity} pl-6 hover:border-primary transition-colors duration-500`}>
                      <h4 className="text-white font-black text-[11px] mb-3 flex items-center gap-2">
                        <span className="text-primary">0{i + 1}</span> {pillar.title}
                      </h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{pillar.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex items-center justify-between border-t border-white/5 pt-8">
                  <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-gray-500 mono tracking-[0.2em]">Service Status</span>
                    <span className="text-[10px] font-black text-primary mono">Ready for Scaling</span>
                  </div>
                  <div className="w-12 h-12 border border-primary/20 bg-primary/5 flex items-center justify-center rounded-[4px]">
                    <Icons.Zap className="w-6 h-6 text-primary animate-pulse" />
                  </div>
                </div>

                {/* Technical Decoration */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 border border-white/5 pointer-events-none"></div>
                <div className="absolute top-1/2 -right-2 w-1 h-20 bg-primary/20"></div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};