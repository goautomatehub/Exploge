import React, { useMemo } from 'react';
import { Reveal } from './Reveal';
import { FloatingDecorations } from './FloatingDecorations';
import { 
  Cpu, 
  Database, 
  Mic, 
  BrainCircuit, 
  Globe, 
  Link2, 
  RefreshCw, 
  Code2,
  ArrowRight 
} from 'lucide-react';
import apiIntegrationImg from './Images/assest images/API Integration.png';
import crmImg from './Images/assest images/CRM.png';
import voiceAiChatbotImg from './Images/assest images/Voice AI Chatbot.png';
import automationServicesImg from './Images/assest images/Automation Services.png';
import selfSellingAiBodyImg from './Images/assest images/Self selling Ai body.png';
import thirdPartyBodyImg from './Images/assest images/third party integration body image.png';
import saasIntegrationImg from './Images/assest images/Saas Integration.png';

interface ServiceCardProps {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  image: string;
  tags?: string[];
  onNavigate?: (page: 'home' | 'about' | 'services' | 'casestudies' | 'service', slug?: string) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, slug, title, description, icon, delay, image, tags = ["4+ Years"], onNavigate }) => {
  return (
    <Reveal direction="up" delay={delay} className="h-full">
      <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden flex flex-col h-full group hover:shadow-xl transition-all duration-500">
        {/* Top Section: Image with Padding and Overlay */}
        <div className="p-3 pb-0">
          <div className="relative h-[13rem] overflow-hidden rounded-[4px]">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Overlay */}
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

        {/* Bottom Half: Content */}
        <div className="p-6 pt-4 flex flex-col flex-grow">
          <p className="text-zinc-600 text-sm leading-relaxed mb-6 flex-grow font-medium">
            {description}
          </p>

          {/* Footer: Circular Button */}
          <div className="flex items-center justify-end pt-4 border-t border-zinc-100">
            <button 
              type="button"
              onClick={() => onNavigate?.('service', slug)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-white text-[10px] font-bold hover:bg-zinc-800 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 group/btn"
            >
              <span className="uppercase tracking-widest">Get Started</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

interface ServicesProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'casestudies' | 'service', slug?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = useMemo(() => [
    { 
      id: "01", 
      slug: "automation-service",
      title: "Automation Services", 
      icon: <Cpu />, 
      description: "End-to-end business automation to eliminate manual tasks and boost efficiency.",
      image: automationServicesImg
    },
    { 
      id: "02", 
      slug: "crm-setup-optimized",
      title: "CRM Setup and Optimized", 
      icon: <Database />, 
      description: "Strategic CRM configuration and optimization for maximum sales performance.",
      image: crmImg
    },
    { 
      id: "03", 
      slug: "voice-ai-chat-bots",
      title: "Voice AI and ChatBots", 
      icon: <Mic />, 
      description: "Intelligent AI-driven voice and chat solutions for 24/7 customer engagement.",
      image: voiceAiChatbotImg
    },
    { 
      id: "04", 
      slug: "self-selling-ai",
      title: "Self Selling AI", 
      icon: <BrainCircuit />, 
      description: "Autonomous AI agents designed to handle the entire sales process from lead to close.",
      image: selfSellingAiBodyImg
    },
    { 
      id: "05", 
      slug: "web-development",
      title: "Web Development", 
      icon: <Globe />, 
      description: "Modern, high-performance websites built for speed, SEO, and conversions.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
    },
    { 
      id: "06", 
      slug: "saas-integration",
      title: "SaaS Integration", 
      icon: <Link2 />, 
      description: "Seamlessly connecting your SaaS stack for unified data and streamlined workflows.",
      image: saasIntegrationImg
    },
    { 
      id: "07", 
      slug: "third-party-syncronization",
      title: "Third Party Synchronization", 
      icon: <RefreshCw />, 
      description: "Real-time data synchronization between your internal systems and external partners.",
      image: thirdPartyBodyImg
    },
    { 
      id: "08", 
      slug: "api-integration",
      title: "API Integration", 
      icon: <Code2 />, 
      description: "Custom API development and integration for advanced technical requirements.",
      image: apiIntegrationImg
    }
  ], []);

  return (
    <section id="services" className="py-10 md:py-16 relative overflow-hidden bg-white">
      {/* Floating Elements */}
      <FloatingDecorations.Plus className="top-10 left-[10%] text-primary hidden md:block" delay={0.1} />
      <FloatingDecorations.Dot className="bottom-40 left-[5%] hidden md:block" delay={0.4} />
      <FloatingDecorations.Box className="top-1/2 right-[5%] hidden md:block" delay={0.7} />
      <FloatingDecorations.Circle className="top-[20%] right-[15%] hidden md:block" delay={1.0} />
      <FloatingDecorations.Triangle className="bottom-10 right-[10%] hidden md:block" delay={1.3} />

      {/* Decorative Blobs - Optimized for Mobile */}
      <div className="hidden md:block absolute top-0 -left-1/4 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[140px] pointer-events-none z-0"></div>
      <div className="hidden md:block absolute -top-40 -right-1/4 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[160px] pointer-events-none z-0"></div>
      <div className="hidden md:block absolute -bottom-40 left-1/4 w-[650px] h-[650px] bg-primary/15 rounded-full blur-[150px] pointer-events-none z-0"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-primary/5 rounded-full blur-[80px] md:blur-[110px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
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
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              id={service.id}
              slug={service.slug}
              title={service.title}
              delay={index * 0.1}
              description={service.description}
              icon={service.icon}
              image={service.image}
              tags={service.tags}
              onNavigate={onNavigate}
            />
          ))}
        </div>
      </div>
    </section>
  );  
};
