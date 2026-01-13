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

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-wrap ${className}`}
    >
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(h => 
          word.toLowerCase().includes(h.toLowerCase())
        );
        
        return (
          <motion.span
            variants={child}
            key={index}
            className={`mr-[0.08em] relative inline-block ${isHighlighted ? "px-2 py-1 " + highlightClassName : ""}`}
          >
            <span className="relative z-10">{word}</span>
            {isHighlighted && (
              <>
                {/* Modern Glass Pill Background */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: delay + 0.5, duration: 0.5, ease: "backOut" }}
                  className="absolute inset-0 bg-primary/10 backdrop-blur-[2px] rounded-xl -z-10 border border-primary/20"
                />
                
                {/* Moving Shine Sweep */}
                <motion.div
                  animate={{ 
                    left: ["-100%", "200%"],
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 1
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 -z-10 pointer-events-none"
                />

                {/* Refined Sparkles */}
                <div className="absolute -top-1 -right-1 pointer-events-none">
                  <motion.div
                    animate={{ 
                      scale: [0, 1.2, 0],
                      opacity: [0, 1, 0]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: 1
                    }}
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(32,188,97,0.6)]" />
                  </motion.div>
                </div>
              </>
            )}
          </motion.span>
        );
      })}
    </motion.div>
  );
};