
import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  width?: 'fit-content' | '100%';
  className?: string;
  duration?: number;
}

export const Reveal: React.FC<RevealProps> = ({ 
  children, 
  delay = 0, 
  direction = 'up', 
  width = '100%',
  className = "",
  duration = 0.8
}) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const getVariants = () => {
    // Simpler animation for mobile to improve performance
    const offset = isMobile ? 15 : 30;
    
    const initial = {
      opacity: 0,
      y: direction === 'up' ? offset : direction === 'down' ? -offset : 0,
      x: direction === 'left' ? -offset : direction === 'right' ? offset : 0,
    };

    const animate = {
      opacity: 1,
      y: 0,
      x: 0,
    };

    return { initial, animate };
  };

  const { initial, animate } = getVariants();

  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, margin: isMobile ? "-20px" : "-100px" }}
      transition={{
        duration: isMobile ? duration * 0.8 : duration,
        delay: isMobile ? delay * 0.5 : delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      style={{ width, willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};
