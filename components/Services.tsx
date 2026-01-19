import React, { useMemo } from 'react';
import { Reveal } from './Reveal';
import { FloatingDecorations } from './FloatingDecorations';
import { 
  Briefcase, 
  Users, 
  TrendingUp, 
  Shield, 
  BarChart, 
  Layers, 
  Target, 
  CheckCircle,
  ArrowRight 
} from 'lucide-react';

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
          <div className="relative h-32 md:h-36 overflow-hidden rounded-[4px]">
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
              <h3 className="text-lg font-bold text-white leading-tight">
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

          {/* Footer: Tag and Circular Button */}
          <div className="flex items-center justify-between pt-4 border-t border-zinc-100">
            {tags.length > 0 && (
              <span className="text-[9px] font-bold uppercase tracking-wider bg-zinc-100 text-zinc-500 px-3 py-1.5 rounded-full border border-zinc-200">
                {tags[0]}
              </span>
            )}
            
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
      slug: "workflow-automation",
      title: "Workflow Automation", 
      icon: <Target />, 
      description: "Stop doing the same tasks every day. We make your repetitive work finish itself automatically.",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
      tags: ["Zapier"]
    },
    { 
      id: "02", 
      slug: "crm-setup",
      title: "CRM Optimization", 
      icon: <Users />, 
      description: "Keep all your customer info in one easy place so you never miss a sale or a follow-up.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      tags: ["GHL"]
    },
    { 
      id: "03", 
      slug: "project-management",
      title: "Project Management", 
      icon: <Layers />, 
      description: "Organize your daily tasks and keep your projects moving without the stress of messy paperwork.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800",
      tags: ["Monday"]
    },
    { 
      id: "04", 
      slug: "ai-sales-agents",
      title: "AI Sales Agents", 
      icon: <Briefcase />, 
      description: "Use smart tools to answer customers and book meetings for you while you are busy or sleeping.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      tags: ["AI"]
    },
    { 
      id: "05", 
      slug: "sales-funnels",
      title: "Sales Funnels", 
      icon: <TrendingUp />, 
      description: "Build simple online pages designed to turn interested visitors into happy, paying customers.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      tags: ["Funnels"]
    },
    { 
      id: "06", 
      slug: "app-integrations",
      title: "App Integrations", 
      icon: <Shield />, 
      description: "We make all your favorite tools talk to each other so your data moves instantly between them.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      tags: ["API"]
    },
    { 
      id: "07", 
      slug: "web-development",
      title: "Web Development", 
      icon: <CheckCircle />, 
      description: "We build clean, fast websites that look great on phones and help your business look professional.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
      tags: ["React"]
    },
    { 
      id: "08", 
      slug: "operations-audit",
      title: "Operations Audit", 
      icon: <BarChart />, 
      description: "We look at how you work and find better, faster ways to save you time and money.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
      tags: ["Audit"]
    }
  ], []);

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden bg-white">
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

        {/* View All Services Button */}
        <div className="mt-16 text-center">
          <Reveal direction="up" delay={0.2}>
            <button 
              onClick={() => onNavigate?.('services')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-secondary text-white rounded-full font-bold transition-all duration-300 hover:bg-zinc-800 hover:-translate-y-1 active:scale-95 group"
            >
              <span className="text-lg">View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );  
};
