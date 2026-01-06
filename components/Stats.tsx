
import React from 'react';
import { Reveal } from './Reveal';
import { Counter } from './Counter';

const StatItem = ({ label, value, detail, delay, isNumber = true, suffix = "" }: any) => (
  <Reveal direction="up" delay={delay}>
    <div className="p-5 xs:p-6 md:p-8 border border-black/5 bg-white group hover:bg-black hover:text-white transition-all duration-500">
      <div className="text-[9px] md:text-[10px] font-bold mono text-primary uppercase tracking-[0.3em] mb-4">
        {label}
      </div>
      <div className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-2 tabular-nums">
        {isNumber ? (
          <Counter value={parseInt(value)} suffix={suffix} />
        ) : (
          value
        )}
      </div>
      <div className="text-[10px] md:text-xs font-medium text-gray-400 uppercase tracking-widest group-hover:text-gray-500">
        {detail}
      </div>
    </div>
  </Reveal>
);

export const Stats: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal direction="up">
            <h2 className="text-[10px] font-bold text-primary mono uppercase tracking-[0.4em] mb-4">Our Impact</h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h3 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter">
              Results That Matter.
            </h3>
          </Reveal>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-black/5 border border-black/5">
          <StatItem 
            label="TIME SAVED" 
            value="42" 
            suffix="%"
            detail="Hours saved on tasks" 
            delay={0.1} 
          />
          <StatItem 
            label="PROJECTS" 
            value="150" 
            suffix="+"
            detail="Systems we've built" 
            delay={0.2} 
          />
          <StatItem 
            label="DELIVERY" 
            value="Fast" 
            isNumber={false}
            detail="Quick turn-around" 
            delay={0.3} 
          />
          <StatItem 
            label="HAPPY CLIENTS" 
            value="98" 
            suffix="%"
            detail="Client success rate" 
            delay={0.4} 
          />
        </div>
      </div>
    </section>
  );
};
