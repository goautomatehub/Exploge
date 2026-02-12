import React from 'react';
import { Reveal } from './Reveal';
import { FloatingDecorations } from './FloatingDecorations';
import { Cpu, Mic, Globe, ArrowRight } from 'lucide-react';
import automationServicesImg from './Images/assest images/Automation Services.png';
import voiceAiChatbotImg from './Images/assest images/Voice AI Chatbot.png';

interface HomeServiceCardProps {
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  objectPosition?: string;
  delay: number;
  onNavigate?: (page: 'home' | 'about' | 'services' | 'casestudies' | 'service', slug?: string) => void;
}

const HomeServiceCard: React.FC<HomeServiceCardProps> = ({ slug, title, description, icon, image, objectPosition, delay, onNavigate }) => {
  return (
    <Reveal direction="up" delay={delay} className="h-full">
      <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-500">
        <div className="p-3 pb-0">
          <div className="relative h-[13rem] overflow-hidden rounded-[4px]">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              style={{
                objectPosition: objectPosition || 'center',
                imageRendering: 'auto'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-between p-4">
              <div className="flex items-center justify-between">
                <div className="p-1.5 bg-primary/90 text-white rounded-md backdrop-blur-sm">
                  {React.cloneElement(icon as React.ReactElement<any>, { size: 16, strokeWidth: 2 })}
                </div>
              </div>
              <h3 
                className="text-lg font-bold text-white leading-tight cursor-pointer hover:text-primary transition-colors duration-300"
                onClick={() => onNavigate?.('service', slug)}
              >
                {title}
              </h3>
            </div>
          </div>
        </div>

        <div className="p-6 pt-4 flex flex-col flex-grow">
          <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-grow font-medium">
            {description}
          </p>

          <div className="flex items-center justify-end pt-4 border-t border-zinc-100">
            <button 
              type="button"
              onClick={() => onNavigate?.('service', slug)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-white text-[10px] font-bold hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group/btn"
            >
              <span className="uppercase tracking-widest">View More</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

interface HomeServicesProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'casestudies' | 'service', slug?: string) => void;
}

export const HomeServices: React.FC<HomeServicesProps> = ({ onNavigate }) => {
  const homeServices = [
    {
      slug: 'automation-service',
      title: 'Automation Services',
      icon: <Cpu />,
      description: 'End-to-end business automation to eliminate manual tasks and boost efficiency.',
      image: automationServicesImg,
    },
    {
      slug: 'voice-ai-chat-bots',
      title: 'Voice AI & ChatBots',
      icon: <Mic />,
      description: 'Intelligent AI-driven voice and chat solutions for 24/7 customer engagement.',
      image: voiceAiChatbotImg,
      objectPosition: 'left center'
    },
    {
      slug: 'web-development',
      title: 'Web Development',
      icon: <Globe />,
      description: 'Modern, high-performance websites built for speed, SEO, and conversions.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=100&w=2000',
    },
  ];

  return (
    <section id="home-services" className="py-20 md:py-32 relative overflow-hidden bg-white">
      <FloatingDecorations.Plus className="top-10 left-[10%] text-primary hidden md:block" delay={0.1} />
      <FloatingDecorations.Dot className="bottom-40 left-[5%] hidden md:block" delay={0.4} />
      <FloatingDecorations.Box className="top-1/2 right-[5%] hidden md:block" delay={0.7} />
      <FloatingDecorations.Circle className="top-[20%] right-[15%] hidden md:block" delay={1.0} />
      <FloatingDecorations.Triangle className="bottom-10 right-[10%] hidden md:block" delay={1.3} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <Reveal direction="up">
            <div className="flex items-center justify-center gap-4 mb-4 md:mb-6">
              <span className="text-2xl font-bold text-primary sub-heading">What We Do Best</span>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95] text-secondary mb-8">
              Scale Your Business With<br />
              Smart <span className="text-primary">Automation</span>.
            </h2>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-zinc-500 text-sm md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              We remove the manual work that slows you down, so you can focus on the parts of your business you love. 
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-stretch">
          {homeServices.map((service, index) => (
            <HomeServiceCard 
              key={service.slug}
              slug={service.slug}
              title={service.title}
              description={service.description}
              icon={service.icon}
              image={service.image}
              objectPosition={(service as any).objectPosition}
              delay={index * 0.1}
              onNavigate={onNavigate}
            />
          ))}

          <Reveal direction="up" delay={0.3}>
            <div className="h-full flex items-center justify-center p-6">
              <button 
                onClick={() => onNavigate?.('services')}
                className="group flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                <span className="text-xl md:text-2xl font-bold text-secondary tracking-tight group-hover:text-primary transition-colors">
                  View All
                </span>
                <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-secondary text-white shadow-[0_0_15px_rgba(0,0,0,0.1)] group-hover:bg-primary group-hover:shadow-[0_0_20px_rgba(32,188,97,0.4)] transition-all duration-500">
                  <ArrowRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
