
import React from 'react';

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
  width = '100%',
  className = ""
}) => (
  <div className={className} style={{ width, willChange: "transform, opacity" }}>
    {children}
  </div>
);
