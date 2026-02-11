
import React, { useState } from 'react';
import { Reveal } from './Reveal';
import { Icons } from './Icons';
import { motion } from 'framer-motion';

const WorkflowNode = ({ icon: Icon, text, delay = 0, type = 'action' }: any) => (
  <Reveal direction="up" delay={delay}>
    <div className={`
      relative px-6 py-4 bg-white border border-black/5 rounded-[4px] flex items-center gap-4 
      shadow-[0_10px_30px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] 
      transition-all duration-500 hover:-translate-y-1 group cursor-default
      ${type === 'start' ? 'ring-2 ring-primary/20' : ''}
      ${type === 'success' ? 'ring-2 ring-primary' : ''}
    `}>
      <div className="w-10 h-10 flex items-center justify-center transition-all duration-500 bg-gray-50/50 border border-black/[0.03] rounded-[4px] p-2 group-hover:bg-primary/5">
        <Icon className="w-full h-full object-contain" />
      </div>
      <span className="font-bold text-sm uppercase tracking-tight text-secondary whitespace-nowrap">
        {text}
      </span>
      {type === 'success' && (
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center">
          <Icons.Check className="w-2 h-2 text-white" />
        </div>
      )}
    </div>
  </Reveal>
);

const Connector = ({ start, end, delay = 0 }: { start: string, end: string, delay?: number }) => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-0">
    <motion.path
      d={`M ${start} C ${start.split(' ')[0]} ${(parseFloat(start.split(' ')[1]) + parseFloat(end.split(' ')[1])) / 2}, ${end.split(' ')[0]} ${(parseFloat(start.split(' ')[1]) + parseFloat(end.split(' ')[1])) / 2}, ${end}`}
      fill="none"
      stroke="rgba(0,0,0,0.06)"
      strokeWidth="1.5"
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.5, delay, ease: "easeInOut" }}
    />
  </svg>
);

export const LogoWall: React.FC = () => {
  return (
    <section className="py-0 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-12">
          <Reveal direction="up">
            <h2 className="text-2xl text-primary sub-heading mb-2">The Workflow</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter leading-none">
              Simple Systems <br className="hidden md:block"/> For Complex Growth.
            </h3>
          </Reveal>
        </div>

        <div className="max-w-5xl mx-auto relative min-h-[600px] flex flex-col items-center justify-between">
          {/* Symmetrical Layout Nodes */}
          
          {/* TOP: Starting Node */}
          <div className="relative z-10 mb-20">
            <WorkflowNode icon={Icons.Zapier} text="Incoming Lead" type="start" delay={0.1} />
          </div>

          {/* MIDDLE: Action Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 w-full relative z-10 mb-20">
            <WorkflowNode icon={Icons.Make} text="Logic Flow" delay={0.3} />
            <WorkflowNode icon={Icons.Airtable} text="Data Storage" delay={0.4} />
            <WorkflowNode icon={Icons.HubSpot} text="CRM Update" delay={0.5} />
            <WorkflowNode icon={Icons.N8N} text="Email Trigger" delay={0.6} />
          </div>

          {/* BOTTOM: Success Node */}
          <div className="relative z-10">
            <WorkflowNode icon={Icons.Check} text="Sales Closed" type="success" delay={0.8} />
          </div>

          {/* Desktop Connectors (Bezier Lines) */}
          <div className="hidden md:block absolute inset-0">
            {/* Top to Middle */}
            <Connector start="512 60" end="120 280" delay={0.5} />
            <Connector start="512 60" end="380 280" delay={0.6} />
            <Connector start="512 60" end="640 280" delay={0.7} />
            <Connector start="512 60" end="900 280" delay={0.8} />

            {/* Middle to Bottom */}
            <Connector start="120 360" end="512 560" delay={1.0} />
            <Connector start="380 360" end="512 560" delay={1.1} />
            <Connector start="640 360" end="512 560" delay={1.2} />
            <Connector start="900 360" end="512 560" delay={1.3} />
          </div>
        </div>
        
        <Reveal direction="up" delay={1.5}>
          <div className="mt-24 text-center">
            <p className="text-gray-400 text-xs md:text-sm font-medium max-w-lg mx-auto leading-relaxed">
              We connect your favorite tools into a single, automated ecosystem that works while you sleep.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
