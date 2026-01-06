
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';
import { ClipboardList, Layers, Settings2, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: "Audit",
    desc: "We look at your current manual tasks and find where you're losing time.",
    color: "bg-blue-500"
  },
  {
    icon: Layers,
    title: "Strategy",
    desc: "We plan a simple system to connect your tools and automate your work.",
    color: "bg-purple-500"
  },
  {
    icon: Settings2,
    title: "Setup",
    desc: "We build your workflows using the best tools to make sure they work perfectly.",
    color: "bg-primary"
  },
  {
    icon: Rocket,
    title: "Launch",
    desc: "We turn it on. You start saving hours every day while your business grows.",
    color: "bg-orange-500"
  }
];

const Step: React.FC<{ step: typeof steps[0], index: number, total: number }> = ({ step, index, total }) => {
  return (
    <div className="relative pl-12 md:pl-16 lg:pl-20 pb-16 last:pb-0">
      {/* Icon Circle */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: index * 0.1 }}
        className="absolute left-0 top-0 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-white border-2 border-black rounded-md flex items-center justify-center z-10 group"
      >
        <step.icon className="w-5 h-5 md:w-5.5 md:h-5.5 lg:w-6 lg:h-6 transition-transform group-hover:scale-110" />
        
        {/* Step Number Badge */}
        <div className="absolute -top-2 -right-2 bg-black text-white text-[8px] font-bold w-5 h-5 flex items-center justify-center">
          0{index + 1}
        </div>
      </motion.div>

      {/* Content */}
      <Reveal direction="up" delay={index * 0.1}>
        <div className="group">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
            {step.title}
          </h4>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl">
            {step.desc}
          </p>
          
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
            <CheckCircle2 className="w-3 h-3" />
            READY TO SCALE
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export const Process: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="process" className="py-24 md:py-32 bg-white relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20">
          
          {/* Left Side: Sticky Content */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 lg:h-fit space-y-8 md:space-y-12">
            <div>
              <Reveal direction="left">
                <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold mono uppercase tracking-[0.3em] mb-6">
                  The Workflow
                </div>
              </Reveal>
              <Reveal direction="left" delay={0.1}>
                <h2 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                  How We <br/> Automate.
                </h2>
              </Reveal>
              <Reveal direction="left" delay={0.2}>
                <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-sm">
                  A simple 4-step process to get your business running on autopilot.
                </p>
              </Reveal>
            </div>

            {/* CTA Card Moved Below Heading */}
            <Reveal direction="up" delay={0.3}>
              <div className="bg-zinc-50 p-8 md:p-12 border border-black/5 rounded-md relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -translate-y-16 translate-x-16 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                
                <h4 className="text-xl md:text-2xl font-black uppercase mb-4 relative z-10">Ready to Scale?</h4>
                <p className="text-gray-500 text-sm mb-8 relative z-10">Join many agencies that use our systems to save time and increase revenue.</p>
                
                <div className="flex items-center gap-4 group/btn cursor-pointer relative z-10">
                  <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover/btn:bg-black group-hover/btn:text-white transition-all">
                    <Rocket className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold mono uppercase tracking-widest">Start Your Journey</div>
                    <div className="text-[10px] text-gray-400 uppercase">Book a discovery call</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
          
          {/* Right Side: Animated Steps */}
          <div className="w-full lg:w-7/12 relative">
            {/* Background Line (Static) */}
            <div className="absolute left-5 md:left-6 lg:left-7 top-0 bottom-0 w-[2px] bg-gray-100" />
            
            {/* Animated Progress Line */}
            <motion.div 
              style={{ scaleY, originY: 0, willChange: "transform" }}
              className="absolute left-5 md:left-6 lg:left-7 top-0 bottom-0 w-[2px] bg-primary z-0"
            />

            <div className="relative z-10">
              {steps.map((step, index) => (
                <Step 
                  key={index} 
                  step={step} 
                  index={index} 
                  total={steps.length} 
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
