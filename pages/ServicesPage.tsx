import React from 'react';
import { Services as ServicesContent } from '../components/Services';
import { ToolMarquee } from '../components/ToolMarquee';
import { LogoWall } from '../components/LogoWall';
import { Reveal } from '../components/Reveal';
import { AmbientGroup } from '../components/AmbientBlobs';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-48 md:pb-32 bg-premium-dark text-white relative overflow-hidden">
        <AmbientGroup variant="dark" />
        <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Reveal direction="left">
              <span className="text-primary mono text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Expertise Hub</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Solutions That <span className="text-primary italic">Scale</span> Your Business.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-xl text-gray-400 font-light leading-relaxed border-l-2 border-primary pl-8 max-w-2xl">
                We design and implement custom automation ecosystems that eliminate manual work and drive operational excellence.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <ServicesContent />

      {/* Technical Stack */}
      <section className="py-24 bg-zinc-50 relative overflow-hidden border-y border-black/5">
        <div className="container mx-auto px-6 mb-16">
          <Reveal direction="up">
            <div className="text-center">
              <span className="text-primary mono text-[10px] font-bold uppercase tracking-[0.4em] mb-4 block">The Stack</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Our Technical Ecosystem.</h2>
            </div>
          </Reveal>
        </div>
        <ToolMarquee />
        <div className="mt-20">
          <LogoWall />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-premium-dark rounded-md p-12 md:p-20 text-center relative overflow-hidden">
             <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
             <Reveal direction="up">
               <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">Ready to automate your agency?</h3>
               <button className="bg-primary text-white px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-primary transition-all duration-300">
                 Book Your Strategy Call
               </button>
             </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};