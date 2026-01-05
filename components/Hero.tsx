import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Reveal } from './Reveal';
import { NodeVisualizer } from './NodeVisualizer';
import { AmbientGroup, AmbientBlobs } from './AmbientBlobs';
import { Icons } from './Icons';
import { FloatingDecorations } from './FloatingDecorations';
import { AnimatedText } from './AnimatedText';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms for depth
  const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const blobsY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const nodeY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="relative pt-24 pb-12 xs:pt-28 sm:pt-32 md:pt-40 md:pb-20 lg:pt-56 lg:pb-40 bg-zinc-50 overflow-hidden bg-grid">
      <motion.div style={{ y: blobsY, opacity }} className="absolute inset-0 pointer-events-none">
        <div className="hidden md:block">
          <AmbientGroup />
        </div>
        
        {/* Floating Decorative Elements - Hidden on mobile for performance */}
        <div className="hidden md:block">
          <FloatingDecorations.Plus className="top-24 left-12" delay={0.5} />
          <FloatingDecorations.Plus className="bottom-40 right-1/4" delay={1.2} />
          <FloatingDecorations.Dot className="top-40 left-1/3" delay={0.8} />
          <FloatingDecorations.Dot className="bottom-24 left-20" delay={2} />
          <FloatingDecorations.Circle className="top-1/4 right-10" delay={1.5} />
          <FloatingDecorations.Box className="bottom-1/3 left-10" delay={0.3} />
          <FloatingDecorations.Triangle className="top-32 right-1/3" delay={0.7} />
          <FloatingDecorations.Square className="bottom-1/4 right-20" delay={1.1} />
          <FloatingDecorations.Zigzag className="top-1/2 left-20" delay={2.3} />
          <FloatingDecorations.GridDots className="top-20 left-1/4" delay={1.5} />
          <FloatingDecorations.Cross className="bottom-20 right-10" delay={0.9} />
        </div>
        
        {/* Additional Greenish Blobs - Hidden on mobile for performance */}
        <div className="hidden md:block">
          <AmbientBlobs color="bg-primary" size="w-[500px] h-[500px]" className="-top-24 -right-24" opacity="opacity-[0.12]" animation="animate-blob-slow" />
          <AmbientBlobs color="bg-primary" size="w-[400px] h-[400px]" className="top-1/2 -left-48" opacity="opacity-[0.15]" animation="animate-blob" />
          <AmbientBlobs color="bg-primary" size="w-[600px] h-[600px]" className="-bottom-48 right-1/4" opacity="opacity-[0.10]" animation="animate-blob-spin" />
        </div>
      </motion.div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-zinc-200/50 hidden lg:block"></div>
      
      {/* Smooth Transition Fader to next section - Hidden on mobile to avoid "blur" feel */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-50 via-zinc-50/80 to-transparent z-20 pointer-events-none hidden md:block"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div style={{ y: textY, opacity, willChange: "transform" }} className="w-full lg:w-1/2 space-y-8 md:space-y-12">
            <AnimatedText 
              text="We Build Autonomous Systems."
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tighter text-secondary uppercase"
              delay={0.2}
              highlightWords={["Autonomous"]}
              highlightClassName="text-primary not-italic"
            />
            
            <div className="max-w-xl space-y-6 md:space-y-10">
              <Reveal direction="up" delay={0.4} duration={1.2}>
                <div className="relative">
                  <div className="absolute -left-4 xs:-left-6 md:-left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-transparent opacity-50"></div>
                  <p className="text-sm xs:text-base md:text-xl text-zinc-600 leading-relaxed font-medium">
                    We help agencies grow by automating their daily tasks. Our team builds simple systems that save you time and help you focus on your clients.
                  </p>
                </div>
              </Reveal>
            </div>
            
            <Reveal direction="up" delay={0.6} duration={1.2}>
              <div className="flex flex-col space-y-6 md:space-y-8">
                <div className="flex items-center gap-4 md:gap-5">
                  <div className="flex -space-x-3 md:-space-x-4">
                    {[
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
                      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop"
                    ].map((url, i) => (
                      <div key={i} className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-zinc-50 overflow-hidden bg-zinc-100 hover:translate-y-[-4px] transition-transform duration-300 shadow-sm">
                        <img src={url} alt="Client" className="w-full h-full object-cover" />
                      </div>
                    ))}
                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 md:border-4 border-zinc-50 bg-black flex items-center justify-center text-white text-[9px] md:text-[10px] font-bold shadow-sm">
                      50+
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex gap-0.5 mb-1">
                      {[1, 2, 3, 4, 5].map(s => <Icons.Star key={s} className="w-2.5 h-2.5 md:w-3 md:h-3 text-yellow-500 fill-current" />)}
                    </div>
                    <span className="text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-secondary">Trusted by 50+ Global Teams</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8">
                  <a href="#contact" className="w-full sm:w-auto bg-primary text-white px-8 md:px-10 py-4 md:py-5 font-black uppercase text-center tracking-[0.2em] text-[9px] md:text-[10px] hover:bg-black transition-all duration-300 shadow-[0_10px_30px_rgba(32,188,97,0.3)] hover:shadow-none hover:-translate-y-1 flex items-center justify-center gap-3 group rounded-[4px]">
                    <span className="relative z-10">Start Your Project</span>
                    <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a href="#services" className="group flex items-center gap-3 md:gap-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] text-secondary hover:text-primary transition-all">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-[4px] border border-black/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary/5 transition-all">
                      <Icons.Zap className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    </div>
                    Explore Services
                  </a>
                </div>
              </div>
            </Reveal>
          </motion.div>
          
          <motion.div style={{ y: nodeY, opacity, willChange: "transform" }} className="w-full lg:w-1/2 h-[350px] md:h-[500px] lg:h-[600px] relative overflow-visible">
            <Reveal direction="right" delay={0.4} className="h-full">
              <NodeVisualizer />
            </Reveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};