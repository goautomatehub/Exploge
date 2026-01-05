import React from 'react';
import { motion } from 'framer-motion';

interface FloatingElementProps {
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  xOffset?: number;
  children: React.ReactNode;
}

const FloatingElement: React.FC<FloatingElementProps> = ({ 
  className = "", 
  delay = 0, 
  duration = 3, 
  yOffset = 20,
  xOffset = 10,
  children 
}) => {
  return (
    <motion.div
      className={`absolute pointer-events-none z-0 ${className}`}
      initial={{ opacity: 0, scale: 0, y: 0, x: 0 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        y: [0, -yOffset, 0],
        x: [0, xOffset, 0],
        rotate: [0, 5, 0]
      }}
      viewport={{ once: true }}
      transition={{
        opacity: { duration: 0.8, delay },
        scale: { duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] },
        y: {
          duration: duration,
          repeat: Infinity,
          delay: delay,
          ease: "easeInOut"
        },
        x: {
          duration: duration * 1.2,
          repeat: Infinity,
          delay: delay,
          ease: "easeInOut"
        },
        rotate: {
          duration: duration * 1.5,
          repeat: Infinity,
          delay: delay,
          ease: "easeInOut"
        }
      }}
    >
      {children}
    </motion.div>
  );
};

export const FloatingDecorations = {
  Plus: ({ className, delay }: { className: string, delay?: number }) => (
    <FloatingElement className={className} delay={delay} yOffset={15} xOffset={5}>
      <div className="text-primary font-black text-xl opacity-20">+</div>
    </FloatingElement>
  ),
  Dot: ({ className, delay }: { className: string, delay?: number }) => (
    <FloatingElement className={className} delay={delay} yOffset={10} xOffset={10}>
      <div className="w-2 h-2 rounded-full bg-primary opacity-20"></div>
    </FloatingElement>
  ),
  Circle: ({ className, delay }: { className: string, delay?: number }) => (
    <FloatingElement className={className} delay={delay} yOffset={25} xOffset={15} duration={4}>
      <div className="w-12 h-12 rounded-full border border-primary opacity-10"></div>
    </FloatingElement>
  ),
  Box: ({ className, delay }: { className: string, delay?: number }) => (
    <FloatingElement className={className} delay={delay} yOffset={20} xOffset={-10} duration={3.5}>
      <div className="w-8 h-8 border border-black opacity-5 rotate-45"></div>
    </FloatingElement>
  ),
  Triangle: ({ className, delay }: { className: string, delay?: number }) => (
    <FloatingElement className={className} delay={delay} yOffset={30} xOffset={20} duration={4.5}>
      <div className="w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[25px] border-b-primary/20"></div>
    </FloatingElement>
  ),
  Cross: ({ className, delay }: { className: string, delay?: number }) => (
    <FloatingElement className={className} delay={delay} yOffset={25} xOffset={-15} duration={3.8}>
      <div className="relative w-6 h-6 opacity-30">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-secondary rotate-45"></div>
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-secondary -rotate-45"></div>
      </div>
    </FloatingElement>
  ),
  Zigzag: ({ className, delay }: { className: string, delay?: number }) => (
    <FloatingElement className={className} delay={delay} yOffset={20} xOffset={25} duration={5}>
      <svg width="40" height="20" viewBox="0 0 40 20" className="opacity-20 stroke-primary fill-none stroke-2">
        <path d="M0 10 L10 0 L20 10 L30 0 L40 10" />
      </svg>
    </FloatingElement>
  ),
  Square: ({ className, delay }: { className: string, delay?: number }) => (
    <FloatingElement className={className} delay={delay} yOffset={35} xOffset={-10} duration={4}>
      <div className="w-10 h-10 border-2 border-primary/30 rotate-12"></div>
    </FloatingElement>
  ),
  GridDots: ({ className, delay }: { className: string, delay?: number }) => (
    <FloatingElement className={className} delay={delay} yOffset={15} xOffset={15} duration={6}>
      <div className="grid grid-cols-3 gap-1 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-secondary rounded-full"></div>
        ))}
      </div>
    </FloatingElement>
  )
};
