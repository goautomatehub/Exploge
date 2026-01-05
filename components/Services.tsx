import React, { useMemo } from 'react';
import { Reveal } from './Reveal';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
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
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon, delay }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <Reveal direction="up" delay={delay}>
      <div 
        onMouseMove={handleMouseMove}
        className="relative group p-8 md:p-10 bg-white border border-zinc-200/50 flex flex-col transition-all duration-500 hover:border-primary/40 hover:bg-white h-full rounded-[4px] shadow-sm hover:shadow-xl overflow-hidden"
      >
        {/* Spotlight Effect Overlay - Hidden on mobile for performance */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 hidden lg:block"
          style={{
            background: useMotionTemplate`radial-gradient(350px circle at ${mouseXSpring}px ${mouseYSpring}px, rgba(32,188,97,0.12), transparent 80%)`,
          }}
        />

        {/* Decorative accent */}
        <div className="absolute top-0 left-0 w-1 h-0 bg-primary transition-all duration-500 group-hover:h-full z-10"></div>
        
        <div className="relative z-10 flex items-start justify-between mb-8">
          <div className="p-3 bg-zinc-100 text-secondary group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500 rounded-[4px]">
            {React.cloneElement(icon as React.ReactElement<any>, { size: 24, strokeWidth: 1.5 })}
          </div>
          <span className="mono text-[10px] font-bold text-zinc-300 tracking-[0.3em] uppercase group-hover:text-primary transition-colors">
            {id}
          </span>
        </div>

        <h3 className="relative z-10 text-xl font-bold text-secondary uppercase tracking-tight mb-4 leading-tight group-hover:translate-x-1 transition-transform duration-500">
          {title}
        </h3>
        
        <p className="relative z-10 text-zinc-500 text-sm leading-relaxed mb-8 flex-grow font-normal">
          {description}
        </p>

        <div className="relative z-10 pt-6 border-t border-zinc-100 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 group-hover:text-secondary transition-colors">Service Expertise</span>
          <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </div>
    </Reveal>
  );
};

export const Services: React.FC = () => {
  const services = useMemo(() => [
    { 
      id: "01", 
      title: "Workflow Automation", 
      icon: <Target />, 
      description: "Automate manual tasks using Zapier, Make, and n8n to save time and reduce errors." 
    },
    { 
      id: "02", 
      title: "CRM Setup", 
      icon: <Users />, 
      description: "Complete setup and customization of GoHighLevel and Closebot for your business." 
    },
    { 
      id: "03", 
      title: "Project Management", 
      icon: <Layers />, 
      description: "Organize your team's work efficiently on Monday, ClickUp, and Asana." 
    },
    { 
      id: "04", 
      title: "AI Sales Agents", 
      icon: <Briefcase />, 
      description: "Build auto-responding sales agents using Closebot and OpenAI technology." 
    },
    { 
      id: "05", 
      title: "Sales Funnels", 
      icon: <TrendingUp />, 
      description: "Create high-converting landing pages on GoHighLevel and WordPress." 
    },
    { 
      id: "06", 
      title: "App Integrations", 
      icon: <Shield />, 
      description: "Connect different apps like Stripe and Google Sheets using Pabbly and Make." 
    },
    { 
      id: "07", 
      title: "Web Development", 
      icon: <CheckCircle />, 
      description: "Build fast and responsive business websites using WordPress." 
    },
    { 
      id: "08", 
      title: "Operations Audit", 
      icon: <BarChart />, 
      description: "Review your current tools and suggest better systems for your business operations." 
    }
  ], []);

  return (
    <section id="services" className="py-24 md:py-32 bg-zinc-100/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <Reveal direction="left">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-[10px] font-bold text-primary uppercase tracking-[0.5em] mono">Service Portfolio</span>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.95] text-secondary">
                Professional <br/> 
                <span className="text-primary italic">Agency</span> Services.
              </h2>
            </Reveal>
          </div>
          
          <Reveal direction="right" delay={0.2}>
            <p className="text-zinc-500 text-base max-w-sm leading-relaxed border-l border-zinc-200 pl-8 hidden lg:block">
              We provide the expertise needed to build reliable, scalable business operations for modern service-based agencies.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-l border-zinc-200/50">
          {services.map((service, index) => (
            <div key={service.id} className="border-r border-b border-zinc-200/50">
              <ServiceCard 
                id={service.id}
                title={service.title}
                delay={index * 0.1}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};