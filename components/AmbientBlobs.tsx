import React from 'react';

interface BlobProps {
  color?: string;
  size?: string;
  className?: string;
  opacity?: string;
  animation?: 'animate-blob' | 'animate-blob-slow' | 'animate-blob-spin';
}

export const AmbientBlobs: React.FC<BlobProps> = ({ 
  color = "bg-primary", 
  size = "w-72 h-72", 
  className = "", 
  opacity = "opacity-20",
  animation = "animate-blob"
}) => {
  return (
    <div className={`absolute pointer-events-none blur-[100px] rounded-full ${color} ${size} ${opacity} md:${animation} ${className}`} />
  );
};

export const AmbientGroup: React.FC<{ variant?: 'light' | 'dark' }> = ({ variant = 'light' }) => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  if (variant === 'dark') {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <AmbientBlobs color="bg-primary" size="w-[500px] h-[500px]" className="-top-48 -left-48" opacity="opacity-[0.12]" />
        {!isMobile && (
          <>
            <AmbientBlobs color="bg-primary" size="w-[400px] h-[400px]" className="top-1/4 -right-24" opacity="opacity-[0.08]" animation="animate-blob-slow" />
            <AmbientBlobs color="bg-primary" size="w-[600px] h-[600px]" className="-bottom-64 left-1/2 -translate-x-1/2" opacity="opacity-[0.1]" animation="animate-blob-spin" />
          </>
        )}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <AmbientBlobs color="bg-primary" size="w-96 h-96" className="top-0 -left-24" opacity="opacity-20" />
      {!isMobile && (
        <>
          <AmbientBlobs color="bg-black" size="w-[500px] h-[500px]" className="bottom-0 -right-48" opacity="opacity-10" animation="animate-blob-slow" />
          <AmbientBlobs color="bg-primary" size="w-64 h-64" className="top-1/2 left-1/4" opacity="opacity-[0.15]" animation="animate-blob" />
        </>
      )}
    </div>
  );
};