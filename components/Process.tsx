
import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';
import { ClipboardList, Layers, Settings2, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: "Step 1: Consultation",
    desc: "We dive deep into your existing workflows to identify bottlenecks and manual tasks that are draining your resources.",
    color: "bg-blue-500"
  },
  {
    icon: Layers,
    title: "Step 2: Strategy",
    desc: "Our architects design a bespoke automation map, connecting your tech stack into one seamless, autonomous ecosystem.",
    color: "bg-purple-500"
  },
  {
    icon: Settings2,
    title: "Step 3: Build",
    desc: "We engineer your custom systems using industry-leading tools, ensuring every integration is robust and scalable.",
    color: "bg-primary"
  },
  {
    icon: Rocket,
    title: "Step 4: Launch",
    desc: "Your automated engine goes live. We monitor and optimize to ensure you start saving hours from day one.",
    color: "bg-orange-500"
  }
];

const Step = ({ step, index, total }: { step: typeof steps[0], index: number, total: number }) => {
  return (
    <div className="relative pl-12 md:pl-20 pb-16 last:pb-0">
      {/* Icon Circle */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ delay: index * 0.1 }}
        className="absolute left-0 top-0 w-10 h-10 md:w-14 md:h-14 bg-white border-2 border-black rounded-md flex items-center justify-center z-10 group"
      >
        <step.icon className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
        
        {/* Step Number Badge */}
        <div className="absolute -top-2 -right-2 bg-black text-white text-[8px] font-bold w-5 h-5 flex items-center justify-center">
          0{index + 1}
        </div>
      </motion.div>

      {/* Content */}
      <Reveal direction="up" delay={index * 0.1}>
        <div className="group">
          <h4 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3 group-hover:text-primary transition-colors">
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
    <section className="py-20 md:py-32 bg-white overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Sticky Content */}
          <div className="w-full lg:w-5/12 lg:sticky lg:top-32 lg:h-fit">
            <Reveal direction="left">
              <div className="inline-block px-3 py-1 bg-black text-white text-[10px] font-bold mono uppercase tracking-[0.3em] mb-6">
                The Workflow
              </div>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h3 className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Simple Systems <br /> 
                <span className="text-primary italic">For Complex Growth.</span>
              </h3>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-gray-500 text-lg mb-10 max-w-md">
                We've refined our approach into a 4-step framework that takes the guesswork out of automation.
              </p>
            </Reveal>
            
            <Reveal direction="up" delay={0.3}>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                  <Rocket className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold mono uppercase tracking-widest">Start Your Journey</div>
                  <div className="text-[10px] text-gray-400 uppercase">Book a discovery call today</div>
                </div>
              </div>
            </Reveal>
          </div>
          
          {/* Right Side: Animated Steps */}
          <div className="w-full lg:w-7/12 relative">
            {/* Background Line (Static) */}
            <div className="absolute left-5 md:left-7 top-0 bottom-0 w-[2px] bg-gray-100" />
            
            {/* Animated Progress Line */}
            <motion.div 
              style={{ scaleY, originY: 0 }}
              className="absolute left-5 md:left-7 top-0 bottom-0 w-[2px] bg-primary z-0"
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
