
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
      filter: 'blur(20px)',
      scale: 0.9,
      y: direction === 'up' ? 60 : direction === 'down' ? -60 : 0,
      x: direction === 'left' ? -60 : direction === 'right' ? 60 : 0,
    };

    const animate = {
      opacity: 1,
      filter: 'blur(0px)',
      scale: 1,
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
        ease: [0.16, 1, 0.3, 1], // Premium easing
        scale: {
          type: "spring",
          damping: 20,
          stiffness: 100,
          restDelta: 0.001
        }
      }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
