import React, { useEffect } from 'react';
import { servicesData } from '../data/servicesData';
import { Reveal } from '../components/Reveal';
import { AmbientGroup } from '../components/AmbientBlobs';
import { ArrowLeft, CheckCircle2, Zap, ArrowRight } from 'lucide-react';
import { Page } from '../App';

interface ServiceDetailProps {
  slug: string | null;
  onNavigate: (page: Page, slug?: string) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug, onNavigate }) => {
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service && slug) {
      onNavigate('services');
    }
  }, [service, slug, onNavigate]);

  if (!service) return null;

  return (
    <div className="bg-premium-dark min-h-screen text-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden">
        <AmbientGroup variant="dark" />
        <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <Reveal direction="left">
            <button 
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-12 hover:gap-4 transition-all cursor-pointer"
            >
              <ArrowLeft size={14} /> Back to Services
            </button>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Reveal direction="left" delay={0.1}>
                <span className="text-primary mono text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Service {service.id}</span>
              </Reveal>
              <Reveal direction="left" delay={0.2}>
                <h1 className="text-4xl xs:text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                  {service.title.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                      {i === 1 ? <span className="text-primary italic">{word} </span> : word + ' '}
                    </React.Fragment>
                  ))}
                </h1>
              </Reveal>
              <Reveal direction="left" delay={0.3}>
                <p className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed">
                  {service.fullDesc}
                </p>
              </Reveal>
            </div>

            <Reveal direction="right" delay={0.4}>
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/10 blur-3xl rounded-full"></div>
                <div className="relative bg-white/5 border border-white/10 p-8 md:p-12 rounded-2xl backdrop-blur-sm">
                  <div className="w-16 h-16 bg-primary/20 text-primary flex items-center justify-center rounded-xl mb-8">
                    {React.cloneElement(service.icon as React.ReactElement, { size: 32 })}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 uppercase tracking-tight">Core Benefits</h3>
                  <ul className="space-y-4">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <CheckCircle2 className="text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" size={18} />
                        <span className="text-gray-300 group-hover:text-white transition-colors">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="container mx-auto px-6">
          <Reveal direction="up">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
              <div className="max-w-md text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight mb-4">Tech Stack & Tools</h2>
                <p className="text-gray-400">We use industry-leading tools to build and maintain your systems.</p>
              </div>
              <div className="flex flex-wrap justify-center gap-6 md:gap-12">
                {service.tools.map((tool, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 grayscale hover:grayscale-0 transition-all opacity-50 hover:opacity-100">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/10">
                      <Zap size={24} className="text-primary" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Reveal direction="up">
              <span className="text-primary mono text-xs font-bold uppercase tracking-[0.4em] mb-4 block">Execution Strategy</span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Our Implementation <span className="text-primary italic">Process</span></h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.process.map((step, i) => (
              <Reveal key={i} direction="up" delay={i * 0.1}>
                <div className="relative p-8 border border-white/10 bg-white/5 rounded-xl hover:border-primary/50 transition-colors h-full group">
                  <span className="absolute top-4 right-6 text-4xl font-black text-white/5 group-hover:text-primary/10 transition-colors">0{i + 1}</span>
                  <h4 className="text-xl font-bold mb-4 uppercase tracking-tight">{step.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="bg-primary p-12 md:p-20 rounded-3xl relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-grid opacity-10"></div>
            <div className="relative z-10 max-w-3xl mx-auto">
              <Reveal direction="up">
                <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter text-white mb-8 leading-tight">
                  Ready to implement this <br/> in your agency?
                </h2>
              </Reveal>
              <Reveal direction="up" delay={0.1}>
                <button 
                  onClick={() => onNavigate('home')} // Assuming contact is on home page
                  className="bg-white text-primary px-8 md:px-12 py-4 md:py-5 rounded-full font-black uppercase text-xs md:text-sm tracking-widest hover:bg-secondary hover:text-white transition-all flex items-center gap-3 mx-auto shadow-2xl cursor-pointer"
                >
                  Book A Strategy Call <ArrowRight size={18} />
                </button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
