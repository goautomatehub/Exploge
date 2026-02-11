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
      { name: 'Make.com', icon: Icons.Make },
      { name: 'n8n', icon: Icons.N8N },
      { name: 'Pabbly Connect', icon: Icons.Pabbly },
      { name: 'Google Sheets', icon: Icons.GoogleSheets },
      { name: 'Postman', icon: Icons.Postman },
    ],
    className: "md:col-span-3 bg-zinc-50",
    iconColor: "text-blue-500"
  },
  {
    title: "CRM & Sales",
    description: "Automated pipeline management.",
    icon: Zap,
    tools: [
      { name: 'GoHighLevel', icon: Icons.GoHighLevel },
      { name: 'HubSpot', icon: Icons.HubSpot },
      { name: 'CloseBot', icon: Icons.CloseBot },
      { name: 'PhoneBurner', icon: Icons.PhoneBurner },
      { name: 'ManyChat', icon: Icons.ManyChat },
      { name: 'Twilio', icon: Icons.Twilio },
      { name: 'Salesforce', icon: Icons.Salesforce },
      { name: 'Zoho', icon: Icons.Zoho },
      { name: 'Pipedrive', icon: Icons.Pipedrive },
      { name: 'ActiveCampaign', icon: Icons.ActiveCampaign },
    ],
    className: "md:col-span-3 bg-emerald-50/30",
    iconColor: "text-emerald-500"
  },
  {
    title: "Operations",
    description: "Synchronized team productivity.",
    icon: Database,
    tools: [
      { name: 'Monday.com', icon: Icons.Monday },
      { name: 'Airtable', icon: Icons.Airtable },
      { name: 'ClickUp', icon: Icons.ClickUp },
      { name: 'Asana', icon: Icons.Asana },
      { name: 'Slack', icon: Icons.Slack },
      { name: 'Trello', icon: Icons.Trello },
      { name: 'Field Router', icon: Icons.FieldRouter },
      { name: 'Pabau', icon: Icons.Pabau },
      { name: 'Notion', icon: Icons.Notion },
      { name: 'Basecamp', icon: Icons.Basecamp },
      { name: 'Zendesk', icon: Icons.Zendesk },
      { name: 'Freshdesk', icon: Icons.Freshdesk },
      { name: 'QuickBooks', icon: Icons.QuickBooks },
    ],
    className: "md:col-span-3 bg-zinc-100/50",
    iconColor: "text-purple-500"
  },
  {
    title: "Web & AI",
    description: "Digital storefronts & intelligence.",
    icon: Cpu,
    tools: [
      { name: 'WordPress', icon: Icons.WordPress },
      { name: 'WooCommerce', icon: Icons.WooCommerce },
      { name: 'OpenAI', icon: Icons.Zap },
      { name: 'Vapi', icon: Icons.Vapi },
      { name: 'Webflow', icon: Icons.Webflow },
      { name: 'Wix', icon: Icons.Wix },
      { name: 'Mailchimp', icon: Icons.Mailchimp },
    ],
    className: "md:col-span-3 bg-zinc-50",
    iconColor: "text-primary"
  }
];

const CategoryCard: React.FC<{ category: typeof categories[0], idx: number }> = ({ category, idx }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    if (isMobile) return;
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <Reveal direction="up" delay={idx * 0.1} className={category.className}>
      <a 
        href="#contact"
        onMouseMove={handleMouseMove}
        className="group relative h-full p-8 lg:p-10 border border-black/5 rounded-md overflow-hidden transition-all duration-500 hover:border-primary/20 hover:shadow-xl hover:bg-white block cursor-pointer"
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
          
          <h4 className="text-2xl font-black uppercase mb-2 group-hover:text-primary transition-colors">
            {category.title}
          </h4>
          <p className="text-gray-500 text-sm mb-10 font-medium">
            {category.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-auto">
            {category.tools.map((tool, tIdx) => (
              <div 
                key={tIdx}
                className="group/tool flex flex-col items-center justify-center gap-2 px-3 py-3 bg-white border border-black/5 shadow-sm hover:border-primary/40 hover:bg-primary/[0.02] transition-all duration-300 min-w-[70px] cursor-default"
              >
                <div className="w-5 h-5 flex items-center justify-center transition-opacity">
                  <tool.icon className="w-full h-full object-contain transition-all" />
                </div>
                <span className="text-[8px] font-bold uppercase text-center leading-none text-gray-400 group-hover/tool:text-primary transition-colors">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </a>
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
              <span className="text-2xl font-bold text-primary sub-heading mb-4 inline-block">INTEGRATIONS</span>
              <h3 className="text-4xl md:text-5xl font-black uppercase leading-[0.9]">
                THE APPS <br /> 
                <span className="text-primary">WE WORK WITH.</span>
              </h3>
            </div>
          </Reveal>
          
          <Reveal direction="right" delay={0.2}>
            <p className="text-gray-500 text-lg max-w-sm leading-tight border-l border-zinc-200 pl-6">
              We help you connect and automate these popular tools to make your daily work easier and faster.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category, idx) => (
            <CategoryCard key={idx} category={category} idx={idx} />
          ))}

          {/* Special Bento Slot */}
          <Reveal direction="up" delay={0.4} className="md:col-span-6 lg:col-span-6 mt-4">
             <div className="relative bg-secondary p-10 lg:p-16 rounded-md overflow-hidden group cursor-pointer hover:bg-black transition-colors duration-500 border border-black/5 shadow-2xl">
                <div className="absolute inset-0 bg-grid opacity-5"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                   <div className="max-w-xl text-center md:text-left">
                      <h4 className="text-3xl md:text-5xl font-black text-white uppercase mb-6 leading-none">
                        Ready to bridge the gap between <span className="text-primary">your systems?</span>
                      </h4>
                      <p className="text-gray-400 text-lg">
                        We build custom-coded bridges for systems that don't talk to each other. Secure, scalable, and built for your unique workflow.
                      </p>
                   </div>
                   
                   <a href="#contact" className="w-full md:w-auto bg-primary text-white px-10 py-5 font-black uppercase text-[11px] flex items-center justify-center gap-4 hover:scale-105 transition-all group-hover:shadow-[0_0_30px_rgba(32,188,97,0.3)]">
                      Contact Us
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
