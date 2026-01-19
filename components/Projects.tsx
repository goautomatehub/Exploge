import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { Reveal } from './Reveal';
import { Icons } from './Icons';
import { LayoutGrid, ArrowUpRight } from 'lucide-react';

const categories = ["All", "Automation", "CRM Systems", "Web Engineering"];

const projects = [
  {
    title: "Global Supply Chain Sync",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
    description: "Multi-regional logistics automation connecting 15+ custom API endpoints for real-time tracking.",
    tags: ["n8n", "PostgreSQL", "Custom API"]
  },
  {
    title: "Real Estate Lead Engine",
    category: "CRM Systems",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    description: "End-to-end GoHighLevel implementation with automated lead scoring and AI-driven follow-ups.",
    tags: ["GoHighLevel", "CloseBot", "Zapier"]
  },
  {
    title: "Fintech Operations Portal",
    category: "Web Engineering",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    description: "High-performance internal dashboard for transaction monitoring and automated reporting.",
    tags: ["React", "Node.js", "AWS"]
  },
  {
    title: "E-commerce Logistics Bridge",
    category: "Automation",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop",
    description: "Automated stock reconciliation between multiple Shopify stores and legacy ERP systems.",
    tags: ["Make", "Shopify", "ERP"]
  },
  {
    title: "Healthcare Patient Pipeline",
    category: "CRM Systems",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
    description: "Secure, HIPAA-compliant patient onboarding system with automated scheduling.",
    tags: ["HubSpot", "Twilio", "SecureAPI"]
  },
  {
    title: "SaaS Analytics Dashboard",
    category: "Web Engineering",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Custom-built analytics suite for monitoring MRR and churn with automated Slack alerts.",
    tags: ["Next.js", "Tailwind", "D3.js"]
  }
];

interface ProjectCardProps {
  project: typeof projects[0];
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onMouseMove={handleMouseMove}
      className="group relative bg-white border border-black/5 rounded-md overflow-hidden flex flex-col h-full hover:shadow-2xl transition-all duration-500"
    >
      <a href="#contact" className="absolute inset-0 z-30"></a>
      {/* Spotlight Effect - Hidden on mobile for performance */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 hidden lg:block"
        style={{
          background: useMotionTemplate`radial-gradient(400px circle at ${mouseXSpring}px ${mouseYSpring}px, rgba(32,188,97,0.08), transparent 80%)`,
        }}
      />

      <div className="relative aspect-[16/10] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-md text-secondary font-bold text-[9px] uppercase rounded-sm border border-black/5">
            {project.category}
          </span>
        </div>
      </div>

      <div className="p-6 xs:p-8 flex flex-col flex-grow relative z-20">
        <h4 className="text-xl font-black uppercase mb-3 group-hover:text-primary transition-colors">
          {project.title}
        </h4>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed flex-grow font-normal">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map(tag => (
            <span key={tag} className="text-[8px] font-bold text-zinc-400 uppercase border border-zinc-100 px-2 py-0.5 rounded-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="pt-6 border-t border-black/5 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase text-secondary group-hover:text-primary transition-colors">View Deployment</span>
          <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
      </div>
    </motion.div>
  );
};

export const Projects: React.FC = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <Reveal direction="left">
              <div className="flex items-center gap-4 mb-6">
                <LayoutGrid className="text-primary w-5 h-5" />
                <span className="text-2xl font-bold text-primary sub-heading inline-block">Case Studies</span>
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[0.95] text-secondary">
                Systems We've <br/> 
                <span className="text-primary">Deployed.</span>
              </h2>
            </Reveal>
          </div>
          
          <Reveal direction="right" delay={0.2}>
            <p className="text-zinc-500 text-sm md:text-base max-w-sm leading-relaxed border-l border-zinc-200 pl-6 md:pl-8">
              A collection of architectural implementations that have transformed agency operations into automated powerhouses.
            </p>
          </Reveal>
        </div>

        {/* Premium Tab Control - Deep contrast for visibility and executive feel */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 md:gap-3 mb-16 border-b border-black/5 pb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`relative px-6 py-3 text-[10px] font-black uppercase transition-all duration-300 rounded-md border-2 ${
                activeTab === cat 
                  ? 'text-white border-transparent' 
                  : 'text-zinc-400 border-transparent hover:text-secondary'
              }`}
            >
              {activeTab === cat && (
                <motion.div 
                  layoutId="premiumTabActive"
                  className="absolute inset-0 bg-secondary shadow-xl shadow-black/10 rounded-md z-0"
                  transition={{ type: "spring", bounce: 0.15, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-3">
                {activeTab === cat && (
                  <motion.span 
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-2 h-2 bg-primary rounded-full shadow-[0_0_8px_rgba(32,188,97,0.6)]"
                  />
                )}
                {cat}
              </span>
            </button>
          ))}
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[500px]"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {filteredProjects.map((project, idx) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={idx}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal direction="up" delay={0.4}>
          <div className="mt-20 p-8 md:p-12 bg-zinc-50 border border-black/5 rounded-md flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-lg text-center md:text-left">
              <h4 className="text-xl xs:text-2xl font-black uppercase tracking-tight mb-2">Want to see more results?</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We have handled over 150+ custom deployments across various industries. Contact us for a deep dive into projects similar to your business model.
              </p>
            </div>
            <a href="#contact" className="bg-primary text-white px-10 py-5 font-black uppercase tracking-widest text-[10px] hover:bg-black transition-all shadow-[0_10px_30px_rgba(32,188,97,0.2)] hover:shadow-none flex items-center gap-3 rounded-md">
              Request Full Portfolio
              <Icons.ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
