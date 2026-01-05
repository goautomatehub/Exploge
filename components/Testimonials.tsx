
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { Icons } from './Icons';

const testimonials = [
  {
    quote: "The Exploge team completely streamlined our client management process. Our team efficiency improved by 40% in the first quarter.",
    author: "Sarah Jenkins",
    role: "Director @ Creative Agency",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    quote: "Their automation expertise is exceptional. We've saved approximately 15 hours per week on complex client coordination workflows.",
    author: "Marcus Thorne",
    role: "Founder, Growth Management",
    avatar: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    quote: "Clean, fast, and reliable. They built the professional operations we've been waiting for. Our agency processes are finally seamless.",
    author: "Elena Rodriguez",
    role: "Operations Manager, TechFlow",
    avatar: "https://picsum.photos/seed/elena/100/100"
  },
  {
    quote: "Finally, a strategic team that understands how agencies scale. Their custom automation solutions have saved our sanity.",
    author: "David Chen",
    role: "CEO, Scaler Creative",
    avatar: "https://picsum.photos/seed/david/100/100"
  }
];

export const Testimonials: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerSlide(window.innerWidth < 1024 ? 1 : 2);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / itemsPerSlide);
  const slideIndex = ((page % totalSlides) + totalSlides) % totalSlides;

  const paginate = useCallback((newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [paginate, isPaused]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    })
  };

  const currentItems = Array.from({ length: itemsPerSlide }).map((_, i) => {
    const idx = (slideIndex * itemsPerSlide + i) % testimonials.length;
    return testimonials[idx];
  });

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Reveal direction="left">
              <h2 className="text-xs font-bold text-primary uppercase tracking-[0.4em] mb-4 mono">Client Success</h2>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h3 className="text-3xl xs:text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">
                Proven Results <br/> For Leading Agencies.
              </h3>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.2}>
            <div className="flex items-center gap-4">
              <motion.button 
                whileHover="hover"
                whileTap="tap"
                onClick={() => paginate(-1)}
                className="w-14 h-14 border border-black rounded-md flex items-center justify-center hover:bg-black hover:text-white transition-colors group active:scale-95"
                aria-label="Previous Slide"
              >
                <motion.span
                  variants={{
                    hover: { x: -6 },
                    tap: { x: -12 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icons.ArrowRight className="w-5 h-5 rotate-180" />
                </motion.span>
              </motion.button>
              
              <motion.button 
                whileHover="hover"
                whileTap="tap"
                onClick={() => paginate(1)}
                className="w-14 h-14 border border-black rounded-md flex items-center justify-center hover:bg-black hover:text-white transition-colors group active:scale-95"
                aria-label="Next Slide"
              >
                <motion.span
                  variants={{
                    hover: { x: 6 },
                    tap: { x: 12 }
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Icons.ArrowRight className="w-5 h-5" />
                </motion.span>
              </motion.button>
            </div>
          </Reveal>
        </div>

        <div className="relative min-h-[400px]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 },
                filter: { duration: 0.4 }
              }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full"
            >
              {currentItems.map((t, i) => (
                <div key={`${page}-${i}`} className="h-full">
                  <div className="h-full relative p-6 xs:p-10 bg-white border border-black/5 flex flex-col justify-between hover:border-primary/50 transition-all duration-500 shadow-sm hover:shadow-xl group">
                    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icons.Workflow className="w-16 h-16" />
                    </div>
                    
                    <div>
                      <div className="flex gap-1.5 mb-8">
                        {[...Array(5)].map((_, star) => (
                          <div key={star} className="w-2.5 h-2.5 bg-primary/20 group-hover:bg-primary transition-colors duration-500" style={{ transitionDelay: `${star * 50}ms` }}></div>
                        ))}
                      </div>
                      <p className="text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed mb-12 font-medium tracking-tight">
                        "{t.quote}"
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 pt-8 mt-auto">
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 border border-black p-0.5 grayscale group-hover:grayscale-0 transition-all duration-700">
                          <img src={t.avatar} alt={t.author} className="w-full h-full object-cover" />
                        </div>
                        <div>
                          <h4 className="font-black text-sm uppercase tracking-tight text-secondary">{t.author}</h4>
                          <p className="text-[10px] font-bold text-primary mono uppercase tracking-widest">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-black/5 pt-12">
          <div className="flex gap-3">
            {Array.from({ length: totalSlides }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage([i, i > slideIndex ? 1 : -1])}
                className="group relative h-8 flex items-center"
                aria-label={`Go to slide ${i + 1}`}
              >
                <motion.div
                  animate={{ 
                    width: slideIndex === i ? 40 : 12,
                    backgroundColor: slideIndex === i ? '#20bc61' : '#e5e7eb'
                  }}
                  className="h-1.5 rounded-full transition-colors group-hover:bg-primary/40"
                />
              </button>
            ))}
          </div>
          <div className="mono text-[10px] text-gray-400 font-bold uppercase tracking-widest flex items-center gap-4">
            <span className="text-secondary">CLIENT SUCCESS:</span>
            <span>CASE {slideIndex + 1} OF {totalSlides}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
