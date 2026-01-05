import React from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { Icons } from './Icons';
import { Reveal } from './Reveal';
import { Zap, Cpu, Network, Database, ArrowRight } from 'lucide-react';

const categories = [
  {
    title: "Automation Hub",
    description: "The neural network of your operations.",
    icon: Network,
    tools: [
      { name: 'Zapier', icon: Icons.Zapier },
      { name: 'Make', icon: Icons.Make },
      { name: 'n8n', icon: Icons.N8N },
    ],
    className: "md:col-span-4 bg-zinc-50",
    iconColor: "text-blue-500"
  },
  {
    title: "CRM & Sales",
    description: "Automated pipeline management.",
    icon: Zap,
    tools: [
      { name: 'GoHighLevel', icon: Icons.GoHighLevel },
      { name: 'HubSpot', icon: Icons.HubSpot },
    ],
    className: "md:col-span-2 bg-emerald-50/30",
    iconColor: "text-emerald-500"
  },
  {
    title: "Operations",
    description: "Synchronized team productivity.",
    icon: Database,
    tools: [
      { name: 'Monday', icon: Icons.Monday },
      { name: 'Airtable', icon: Icons.Airtable },
      { name: 'ClickUp', icon: Icons.ClickUp },
    ],
    className: "md:col-span-3 bg-zinc-100/50",
    iconColor: "text-purple-500"
  },
  {
    title: "AI & Agents",
    description: "Custom intelligent workflows.",
    icon: Cpu,
    tools: [
      { name: 'OpenAI', icon: Icons.Zap },
      { name: 'CloseBot', icon: Icons.CloseBot },
    ],
    className: "md:col-span-3 bg-zinc-50",
    iconColor: "text-primary"
  }
];

const CategoryCard: React.FC<{ category: typeof categories[0], idx: number }> = ({ category, idx }) => {
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
    <Reveal direction="up" delay={idx * 0.1} className={category.className}>
      <div 
        onMouseMove={handleMouseMove}
        className="group relative h-full p-8 lg:p-10 border border-black/5 rounded-md overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:bg-white"
      >
        {/* Spotlight Effect - Hidden on mobile for performance */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 hidden lg:block"
          style={{
            background: useMotionTemplate`radial-gradient(350px circle at ${mouseXSpring}px ${mouseYSpring}px, rgba(32,188,97,0.1), transparent 80%)`,
          }}
        />

        {/* Background Pattern */}
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] group-hover:opacity-[0.1] transition-all duration-700 group-hover:scale-110 group-hover:rotate-6">
          <category.icon size={160} strokeWidth={0.5} />
        </div>

        <div className="relative z-10 flex flex-col h-full">
          <div className={`mb-8 p-4 rounded-md bg-white border border-black/5 w-fit shadow-sm ${category.iconColor} group-hover:scale-110 transition-transform duration-500`}>
            <category.icon className="w-6 h-6" />
          </div>
          
          <h4 className="text-2xl font-black uppercase tracking-tight mb-2 group-hover:text-primary transition-colors">
            {category.title}
          </h4>
          <p className="text-gray-500 text-sm mb-10 font-medium">
            {category.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {category.tools.map((tool, tIdx) => (
              <div 
                key={tIdx}
                className="flex items-center gap-2.5 px-4 py-2 bg-white border border-black/5 shadow-sm hover:border-primary/30 transition-all hover:scale-105"
              >
                <div className="w-4 h-4 flex items-center justify-center">
                  <tool.icon className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export const ToolMarquee: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <Reveal direction="left">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold mono uppercase tracking-[0.3em] mb-6 rounded-full">
                <Cpu className="w-3 h-3" />
                Integrations We Master
              </div>
              <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9]">
                The Tools We Use To <br /> 
                <span className="text-primary italic">Scale Your Business.</span>
              </h3>
            </div>
          </Reveal>
          
          <Reveal direction="right" delay={0.2}>
            <p className="text-gray-500 text-lg max-w-sm leading-tight border-l border-zinc-200 pl-6">
              Expert-level implementation for the systems that power modern industry leaders.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, idx) => (
            <CategoryCard key={idx} category={category} idx={idx} />
          ))}

          {/* Special CTA Bento Slot */}
          <Reveal direction="up" delay={0.4} className="md:col-span-6 lg:col-span-6 mt-4">
             <div className="relative bg-secondary p-10 lg:p-16 rounded-md overflow-hidden group cursor-pointer hover:bg-black transition-colors duration-500 border border-black/5 shadow-2xl">
                <div className="absolute inset-0 bg-grid opacity-5"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                   <div className="max-w-xl text-center md:text-left">
                      <h4 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-6 leading-none">
                        Need Custom <span className="text-primary italic">API Connections?</span>
                      </h4>
                      <p className="text-gray-400 text-lg">
                        Our engineering team builds proprietary bridges for systems that don't have native integrations. Secure, fast, and resilient.
                      </p>
                   </div>
                   
                   <a href="#contact" className="w-full md:w-auto bg-primary text-white px-10 py-5 font-black uppercase tracking-widest text-[11px] flex items-center justify-center gap-4 hover:scale-105 transition-all group-hover:shadow-[0_0_30px_rgba(32,188,97,0.3)]">
                      Explore Custom Solutions
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                   </a>
                </div>

                <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary opacity-[0.03] rounded-full blur-[100px] group-hover:opacity-[0.08] transition-opacity"></div>
             </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};