import React from 'react';
import { Projects as ProjectsContent } from '../components/Projects';
import { Comparison } from '../components/Comparison';
import { Reveal } from '../components/Reveal';
import { AmbientGroup } from '../components/AmbientBlobs';

export const CaseStudiesPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-48 md:pb-32 bg-premium-dark text-white relative overflow-hidden">
        <AmbientGroup variant="dark" />
        <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Reveal direction="left">
              <span className="text-primary mono text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Proof of Work</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="text-3xl xs:text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                The <span className="text-primary italic">Blueprint</span> of Success.
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed border-l-2 border-primary pl-6 md:pl-8 max-w-2xl">
                Explore our portfolio of high-performance automation systems and digital infrastructure engineered for growth.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsContent />

      {/* Comparison - Value Proof */}
      <div className="bg-zinc-50 border-y border-black/5">
        <Comparison />
      </div>

      {/* Call to Action */}
      <section className="py-20 md:py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-primary rounded-md p-6 xs:p-8 md:p-16 lg:p-20 text-center relative overflow-hidden shadow-2xl">
             <div className="absolute inset-0 bg-grid opacity-[0.1]"></div>
             <Reveal direction="up">
               <h3 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase tracking-tighter mb-8 italic">Ready to be our next success story?</h3>
               <button className="bg-secondary text-white px-8 md:px-10 py-3 md:py-4 font-bold uppercase tracking-widest text-[10px] md:text-xs hover:bg-white hover:text-secondary transition-all duration-300">
                 Start Your Transformation
               </button>
             </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};
