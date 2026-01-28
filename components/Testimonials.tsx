
import React, { useState, useEffect, useCallback, useLayoutEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Reveal } from './Reveal';
import { Icons } from './Icons';
import { FloatingDecorations } from './FloatingDecorations';

const testimonials = [
  {
    quote: "I used to spend my whole Sunday catching up on paperwork. Now, everything happens automatically, and I finally have my weekends back with my family.",
    author: "Sarah Jenkins",
    role: "Business Owner",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "We were stuck and couldn't take on new clients because we were too busy with manual data entry. These systems allowed us to double our business without adding more stress.",
    author: "Owen Carter",
    role: "Agency Founder",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "I’m not a 'tech person,' so I was worried this would be complicated. But they made it so easy to understand and use. It just works!",
    author: "Nadia Collins",
    role: "E-commerce Owner",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "Before this, we kept losing track of leads and missing emails. Now, our CRM is perfectly organized, and nothing ever falls through the cracks again.",
    author: "Ethan Brooks",
    role: "Sales Director",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg"
  },
  {
    quote: "They didn't just build tools; they built a system that helps our business grow every day. It’s the best investment we’ve made this year.",
    author: "Lucas Bennett",
    role: "Business Owner",
    avatar: "https://randomuser.me/api/portraits/men/71.jpg"
  }
];

export const Testimonials: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', dragFree: false });
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  const totalSlides = testimonials.length;
  const slideIndex = selectedIndex;

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const timer = setInterval(() => emblaApi.scrollNext(), 5000);
    return () => clearInterval(timer);
  }, [emblaApi, isPaused]);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === 'undefined') return;
    const easing = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const left = leftRef.current;
    const right = rightRef.current;

    if (left) {
      left.style.opacity = '0';
      left.style.transform = 'translate3d(0, 24px, 0)';
      left.style.transition = `opacity 0.9s ${easing}, transform 0.9s ${easing}`;
    }
    if (right) {
      right.style.opacity = '0';
      right.style.transform = 'translate3d(0, 24px, 0) scale(0.98)';
      right.style.transition = `opacity 1s ${easing}, transform 1s ${easing}`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === left && left) {
            left.style.opacity = '1';
            left.style.transform = 'translate3d(0, 0, 0)';
          }
          if (entry.target === right && right) {
            right.style.opacity = '1';
            right.style.transform = 'translate3d(0, 0, 0) scale(1)';
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20% 0px' }
    );

    if (left) observer.observe(left);
    if (right) observer.observe(right);

    return () => observer.disconnect();
  }, []);

  const currentTestimonial = testimonials[slideIndex];

  return (
    <section 
      id="testimonials" 
      className="py-16 md:py-24 relative overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: 'url(https://nextjs.sasstech.webnextpro.com/assets/images/bg/mash-gradient-bg5.png)' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Floating Elements */}
      <FloatingDecorations.Plus className="top-10 left-[5%] text-primary hidden md:block" delay={0.2} />
      <FloatingDecorations.Dot className="bottom-20 right-[15%] hidden md:block" delay={0.6} />
      <FloatingDecorations.Triangle className="top-[30%] right-[10%] hidden md:block" delay={1.0} />
      <FloatingDecorations.Cross className="bottom-1/3 left-[10%] hidden md:block" delay={1.4} />
      <FloatingDecorations.GridDots className="top-1/2 left-[2%] hidden md:block" delay={1.8} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-20 items-center">
          
          {/* Left Content: Headings & Description */}
          <div className="max-w-xl" ref={leftRef}>
            <Reveal direction="left">
              <span className="text-2xl font-bold text-primary sub-heading mb-4 inline-block">Client Success</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h3 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase leading-[0.95] text-white mb-8">
                What Our <span className="text-primary">Clients</span> <br /> Say About Us.
              </h3>
            </Reveal>
            <Reveal direction="left" delay={0.2}>
              <p className="text-zinc-400 text-sm md:text-lg leading-relaxed mb-10 font-normal">
                We have helped many business owners stop worrying about manual work so they can focus on their growth. Here is what they have to say about working with us.
              </p>
            </Reveal>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-6 lg:mb-0">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollPrev}
                className="w-10 h-10 md:w-12 md:h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary text-white transition-colors bg-white/5 backdrop-blur-sm"
              >
                <Icons.ArrowRight className="w-4 h-4 md:w-5 md:h-5 rotate-180" />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollNext}
                className="w-10 h-10 md:w-12 md:h-12 border border-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:border-primary text-white transition-colors bg-white/5 backdrop-blur-sm"
              >
                <Icons.ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </motion.button>

              <div className="ml-4 md:ml-6 flex gap-2">
                {testimonials.map((_, i) => (
                  <div 
                    key={i}
                    className={`h-1 rounded-full transition-all duration-500 ${slideIndex === i ? 'w-6 md:w-8 bg-primary' : 'w-1.5 md:w-2 bg-white/20'}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Content: Embla Carousel */}
          <div className="relative" ref={rightRef}>
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((t, i) => (
                  <div key={i} className="min-w-0 flex-[0_0_100%] px-1">
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} 
                      animate={{ opacity: 1, y: 0 }} 
                      transition={{ duration: 0.4 }}
                      className="h-[420px] md:h-[450px] flex items-center"
                    >
                      <div className="relative p-8 md:p-12 bg-white/10 md:bg-white/5 backdrop-blur-md md:backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden group w-full">
                        <div className="absolute -top-4 -right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Icons.Workflow className="w-32 h-32 text-white" />
                        </div>
                        <div className="relative z-10">
                          <div className="flex gap-1 mb-8">
                            {[...Array(5)].map((_, star) => (
                              <Icons.Star 
                                key={star} 
                                className="w-5 h-5 text-primary fill-primary" 
                              />
                            ))}
                          </div>
                          <p className="text-xl md:text-2xl lg:text-3xl text-white leading-tight font-light mb-6 md:mb-12 font-urbanist">
                            "{t.quote}"
                          </p>
                          <div className="flex items-center gap-5 pt-8 border-t border-white/10">
                            <div className="w-16 h-16 rounded-full border border-white/20 p-1 overflow-hidden bg-white/5">
                              <img 
                                src={t.avatar} 
                                alt={t.author} 
                                className="w-full h-full object-cover rounded-full" 
                              />
                            </div>
                            <div>
                              <h4 className="font-extrabold text-lg text-white leading-none mb-2">
                                {t.author}
                              </h4>
                              <p className="text-xs font-bold text-primary uppercase tracking-[0.2em]">
                                {t.role}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
