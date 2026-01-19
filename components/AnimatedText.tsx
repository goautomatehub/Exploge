import React from 'react';

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
  highlightWords = [],
  highlightClassName = "text-primary"
}) => {
  const words = text.split(" ");

  return (
    <div className={`flex flex-wrap ${className}`}>
      {words.map((word, index) => {
        const isHighlighted = highlightWords.some(h => 
          word.toLowerCase().includes(h.toLowerCase())
        );
        
        return (
          <span
            key={index}
            data-word
            className={`mr-[0.08em] relative inline-block ${isHighlighted ? "px-2 py-1 " + highlightClassName : ""}`}
          >
            <span className="relative z-10">{word}</span>
            {isHighlighted && (
              <>
                <div className="absolute inset-0 bg-primary/10 backdrop-blur-[2px] rounded-xl -z-10 border border-primary/20" />
                <div className="absolute -top-1 -right-1 pointer-events-none">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(32,188,97,0.6)]" />
                </div>
              </>
            )}
          </span>
        );
      })}
    </div>
  );
};
