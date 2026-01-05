import React from 'react';
import { motion, Variants } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  highlightWords?: string[];
  highlightClassName?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  highlightWords = [],
  highlightClassName = "text-primary"
}) => {
  const words = text.split(" ");

  // Fix: Added explicit Variants type to ensure correct type inference for framer-motion properties
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: delay * i },
    }),
  };

  // Fix: Added explicit Variants type to avoid "string is not assignable to AnimationGeneratorType" error
  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(8px)",
    },
  };

  return (
    <motion.div
      style={{ display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(h => 
          word.toLowerCase().includes(h.toLowerCase())
        );
        
        return (
          <motion.span
            variants={child}
            key={index}
            className={`mr-[0.25em] ${isHighlighted ? highlightClassName : ""}`}
          >
            {word}
          </motion.span>
        );
      })}
    </motion.div>
  );
};