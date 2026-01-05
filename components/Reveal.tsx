
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
  const getVariants = () => {
    const initial = {
      opacity: 0,
      y: direction === 'up' ? 30 : direction === 'down' ? -30 : 0,
      x: direction === 'left' ? -30 : direction === 'right' ? 30 : 0,
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
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Smoother, lighter easing
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
