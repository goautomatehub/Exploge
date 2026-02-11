import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Reveal } from '../components/Reveal';
import { AmbientGroup, AmbientBlobs } from '../components/AmbientBlobs';
import { Icons } from '../components/Icons';
import { FloatingDecorations } from '../components/FloatingDecorations';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { Stats } from '../components/Stats';
import { Comparison } from '../components/Comparison';

interface AboutProps {
  onNavigate: (page: 'home' | 'about') => void;
}

const CEO_IMAGE = "https://i.ibb.co/FbMtD7tT/Whats-App-Image-2025-12-30-at-8-30-26-PM.jpg";

const aboutContactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message is too short').max(1000, 'Message is too long')
});

type AboutContactFormValues = z.infer<typeof aboutContactSchema>;

const SpotlightWrapper = ({ children, className = "", spotlightColor = "rgba(32,188,97,0.12)" }: { children: React.ReactNode, className?: string, spotlightColor?: string }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = ({ currentTarget, clientX, clientY }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      className={`relative group ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0 hidden lg:block"
        style={{
          background: useMotionTemplate`radial-gradient(350px circle at ${mouseXSpring}px ${mouseYSpring}px, ${spotlightColor}, transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
};

export const About: React.FC<AboutProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<AboutContactFormValues>({
    resolver: zodResolver(aboutContactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = (data: AboutContactFormValues) => {
    void data;
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-48 md:pb-32 bg-premium-dark text-white relative overflow-hidden">
        <AmbientGroup variant="dark" />
        <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
        
        {/* Floating Elements */}
        <FloatingDecorations.Plus className="top-40 right-20 text-primary hidden md:block" delay={0.6} />
        <FloatingDecorations.Dot className="bottom-20 left-1/3 hidden md:block" delay={1.8} />
        <FloatingDecorations.Triangle className="top-20 left-1/4 hidden md:block" delay={0.9} />
        <FloatingDecorations.Cross className="bottom-40 right-1/3 hidden md:block" delay={1.4} />
        <FloatingDecorations.GridDots className="top-1/3 right-10 hidden md:block" delay={2.5} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Reveal direction="left">
              <span className="text-primary sub-heading text-2xl mb-4 block">Our Identity</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="text-3xl xs:text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
                Your <span className="text-primary">Growth</span> Partner <br/>In <span className="text-primary">Automation.</span>
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-base md:text-xl text-zinc-200 font-light leading-relaxed border-l-2 border-primary pl-6 md:pl-8 max-w-2xl">
                We turn complex manual processes into simple, automated systems that help your business scale without the stress.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Bento Grid */}
      <section className="py-20 md:py-24 bg-white border-b border-black/5 relative overflow-hidden">
        <AmbientBlobs color="bg-primary" size="w-96 h-96" className="-top-48 -left-48" opacity="opacity-5" />
        <div className="container mx-auto px-6 relative z-10">
          <Reveal direction="left">
            <div className="mb-12 md:mb-16">
              <span className="text-primary sub-heading text-2xl mb-2 block">The Advantage</span>
              <h2 className="text-3xl xs:text-4xl md:text-6xl font-black tracking-tighter leading-none">Why Businesses <br/>Choose <span className="text-primary">Exploge.</span></h2>
            </div>
          </Reveal>

          {/* Master Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* CARD 1: Large - The Architecture */}
            <Reveal direction="up" className="md:col-span-2">
              <SpotlightWrapper className="h-full">
                <div className="relative bg-zinc-50 h-full border border-black/5 rounded-md p-8 md:p-12 flex flex-col justify-between hover:border-primary/20 transition-all duration-500 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] group overflow-hidden">
                  <div className="relative z-10">
                    <span className="text-primary sub-heading text-xl mb-4 block">The Core Philosophy</span>
                    <h4 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight text-secondary">
                      Building Your <br/><span className="text-primary">Operational Backbone.</span>
                    </h4>
                    <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-xl">
                      Most businesses are just a collection of apps that don't talk to each other. We bridge the gap between your tools to create a single, smooth workflow that handles the heavy lifting, allowing you to grow without needing to hire more people just to manage the paperwork.
                    </p>
                  </div>
                  
                  <div className="relative z-10 pt-10 flex flex-wrap gap-6">
                    {[
                      { label: "Systems First", icon: Icons.Cpu },
                      { label: "Data You Can Trust", icon: Icons.Database },
                      { label: "Ready to Scale", icon: Icons.Rocket }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-secondary/60">
                        <item.icon className="w-4 h-4 text-primary" />
                        {item.label}
                      </div>
                    ))}
                  </div>

                  {/* Background Decor */}
                  <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_100%_0%,rgba(32,188,97,0.03),transparent_50%)]"></div>
                </div>
              </SpotlightWrapper>
            </Reveal>

            {/* CARD 2: Stat - Efficiency */}
            <Reveal direction="up" delay={0.1} className="md:col-span-1">
              <SpotlightWrapper className="h-full" spotlightColor="rgba(32,188,97,0.15)">
                <div className="relative bg-zinc-900 h-full border border-white/5 rounded-md p-8 text-white flex flex-col justify-between hover:border-primary/30 transition-all duration-500 shadow-lg group overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-8">
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                      <span className="text-[10px] font-bold tracking-[0.2em] text-white/50">Performance Metric</span>
                    </div>
                    <div className="text-7xl md:text-8xl font-black text-primary mb-4 tracking-tighter leading-none">65%</div>
                    <h5 className="text-lg font-black tracking-tight mb-3 text-white">Less Busy Work</h5>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                      Average decrease in manual data entry within the first 90 days.
                    </p>
                  </div>
                  
                  {/* Subtle Accent Line */}
                  <div className="relative z-10 h-1 w-full bg-white/5 mt-8 rounded-full overflow-hidden">
                    <div className="absolute top-0 left-0 h-full w-2/3 bg-primary rounded-full"></div>
                  </div>
                </div>
              </SpotlightWrapper>
            </Reveal>

            {/* CARD 3: Small - Everything in One Place */}
            <Reveal direction="up" delay={0.2}>
              <SpotlightWrapper className="h-full">
                <div className="relative h-full bg-zinc-50 border border-black/5 rounded-md p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:border-primary/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col group">
                  <div className="w-12 h-12 bg-white shadow-sm border border-black/5 rounded-md flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Icons.Layers className="w-6 h-6" />
                  </div>
                  <h5 className="font-black text-lg tracking-tight mb-2 text-secondary">Everything in One Place</h5>
                  <p className="text-gray-500 text-sm leading-relaxed">We connect your favorite tools so information flows instantly from one app to the next, removing the need for manual updates and messy spreadsheets.</p>
                </div>
              </SpotlightWrapper>
            </Reveal>

            {/* CARD 4: Small - Built to Last */}
            <Reveal direction="up" delay={0.3}>
              <SpotlightWrapper className="h-full">
                <div className="relative h-full bg-zinc-50 border border-black/5 rounded-md p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:border-primary/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col group">
                  <div className="w-12 h-12 bg-white shadow-sm border border-black/5 rounded-md flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Icons.Shield className="w-6 h-6" />
                  </div>
                  <h5 className="font-black text-lg tracking-tight mb-2 text-secondary">Built to Last</h5>
                  <p className="text-gray-500 text-sm leading-relaxed">Every automation we build is stress-tested to handle errors. If something changes in your workflow, our systems are designed to adapt rather than break.</p>
                </div>
              </SpotlightWrapper>
            </Reveal>

            {/* CARD 5: Small - Support That Actually Helps */}
            <Reveal direction="up" delay={0.4}>
              <SpotlightWrapper className="h-full">
                <div className="relative h-full bg-zinc-50 border border-black/5 rounded-md p-8 shadow-[0_10px_40px_rgba(0,0,0,0.04)] hover:border-primary/20 transition-all duration-500 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] flex flex-col group">
                  <div className="w-12 h-12 bg-white shadow-sm border border-black/5 rounded-md flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    <Icons.Workflow className="w-6 h-6" />
                  </div>
                  <h5 className="font-black text-lg tracking-tight mb-2 text-secondary">Support That Actually Helps</h5>
                  <p className="text-gray-500 text-sm leading-relaxed">We don't just build a system and disappear. We provide ongoing advice to make sure your automation keeps up with your business as you get bigger and busier.</p>
                </div>
              </SpotlightWrapper>
            </Reveal>

          </div>
        </div>
        
        <style>{`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 12s linear infinite;
          }
        `}</style>
      </section>

      {/* CEO Section */}
      <section className="pt-24 pb-0 md:pt-32 md:pb-0 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left: Image with Overlay */}
            <div className="w-full lg:w-[380px] flex-shrink-0">
              <Reveal direction="left">
                <div className="relative group">
                  <div className="aspect-[3/4] overflow-hidden rounded-2xl border border-black/5 shadow-2xl bg-zinc-100">
                    <img 
                      src={CEO_IMAGE} 
                      alt="Haroon Taj" 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                    />
                  </div>
                  {/* Name & Title Overlay - Left Bottom */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/90 backdrop-blur-md p-5 rounded-xl border border-white/20 shadow-xl">
                      <div className="text-secondary font-black text-xl tracking-tighter leading-none mb-1">Haroon Taj</div>
                      <div className="text-primary text-sm font-bold sub-heading">Founder & CEO</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right: Content */}
            <div className="flex-1">
              <Reveal direction="right">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <span className="text-primary sub-heading text-2xl block">Executive Vision</span>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tighter leading-[0.95] text-secondary">
                      "<span className="text-primary">Chaos</span> isn't a scaling strategy. We build the digital <span className="text-primary">systems</span> that turn <span className="text-primary">potential</span> into performance."
                    </h3>
                  </div>

                  <div className="space-y-6 text-zinc-600 leading-relaxed text-base md:text-lg font-medium max-w-2xl">
                  <p>
                    I spent a decade in operations. I saw firsthand how great talent was being crushed by the weight of administrative chaos. We were losing 30% of our capacity just trying to figure out what was happening in our own business.
                  </p>
                  <p>
                    Exploge wasn't born in a boardroom. It was born out of frustration. We design systems for the people who actually do the work—the managers, the developers, and the directors who need a source of truth that doesn't get in their way.
                  </p>
                </div>

                {/* Social & Minimal Elements */}
                <div className="pt-8 flex flex-col sm:flex-row sm:items-center gap-8">
                  <div className="flex items-center gap-4">
                    <a href="https://www.linkedin.com/company/exploge/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                      <Icons.Linkedin className="w-5 h-5" />
                    </a>
                    <a href="https://www.facebook.com/share/1AhWpk9Hwq/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center text-secondary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
                      <Icons.Facebook className="w-5 h-5" />
                    </a>
                  </div>
                  
                  <div className="hidden sm:block h-px w-12 bg-black/10"></div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-secondary/40">Direct Leadership</span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Minimal Background Element */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 opacity-50"></div>
      </section>

      {/* Our Commitment */}
      <section className="pt-0 pb-20 md:pt-0 md:pb-24 bg-gray-50 overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12 border-y border-black/10 py-12 md:py-16">
            <Reveal direction="up" className="w-full md:w-1/2">
              <h3 className="text-2xl text-primary sub-heading mb-2">Our Commitment</h3>
              <p className="text-2xl xs:text-3xl font-black tracking-tighter leading-tight">
                Engineering <span className="text-primary">Excellence</span> Into Every Workflow.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2} className="w-full md:w-1/2">
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                We don't settle for "good enough." Every system we deploy undergoes rigorous stress testing to ensure it handles the complexities of your business without breaking. Our goal is 100% reliability.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Comparison Section */}
      <Comparison />

      {/* Form Section */}
      <section id="contact" className="py-20 md:py-24 bg-premium-dark text-white relative overflow-hidden">
        <AmbientGroup variant="dark" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <Reveal direction="none">
                <h2 className="text-2xl text-primary sub-heading mb-2">Get in Touch</h2>
                <h3 className="text-3xl xs:text-4xl md:text-5xl font-black tracking-tighter mb-6">Let's Start Your Journey.</h3>
                <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                  Have a question or ready to scale? Drop us a message and we'll get back to you shortly.
                </p>
              </Reveal>
            </div>

            <div className="bg-white p-6 xs:p-8 md:p-12 border border-black/5 relative overflow-hidden rounded-2xl shadow-2xl">
              {submitted ? (
                <div className="py-16 md:py-20 text-center animate-in fade-in zoom-in duration-500">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icons.Check className="w-8 h-8 md:w-10 md:h-10" strokeWidth={2.5} />
                  </div>
                  <h4 className="text-secondary text-2xl md:text-3xl font-black tracking-tighter mb-2">Message Sent</h4>
                  <p className="text-gray-500 font-bold text-[10px] md:text-xs tracking-widest uppercase">We will respond within 120 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-secondary/60 uppercase tracking-[0.2em]">Full Name</label>
                      <input 
                        type="text" 
                        aria-invalid={!!errors.name}
                        className={`w-full bg-zinc-50 border p-4 text-sm text-secondary focus:outline-none transition-all placeholder:text-zinc-300 rounded-xl ${errors.name ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300' : 'border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary'}`} 
                        placeholder="Haroon Taj" 
                        {...register('name')}
                      />
                      {errors.name ? (
                        <p className="text-[11px] font-semibold text-red-500">{errors.name.message}</p>
                      ) : null}
                    </div>
                    <div className="space-y-3">
                      <label className="text-[11px] font-black text-secondary/60 uppercase tracking-[0.2em]">Email Address</label>
                      <input 
                        type="email" 
                        aria-invalid={!!errors.email}
                        className={`w-full bg-zinc-50 border p-4 text-sm text-secondary focus:outline-none transition-all placeholder:text-zinc-300 rounded-xl ${errors.email ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300' : 'border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary'}`} 
                        placeholder="haroon@exploge.com" 
                        {...register('email')}
                      />
                      {errors.email ? (
                        <p className="text-[11px] font-semibold text-red-500">{errors.email.message}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-secondary/60 uppercase tracking-[0.2em]">Subject</label>
                    <input 
                      type="text" 
                      aria-invalid={!!errors.subject}
                      className={`w-full bg-zinc-50 border p-4 text-sm text-secondary focus:outline-none transition-all placeholder:text-zinc-300 rounded-xl ${errors.subject ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300' : 'border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary'}`} 
                      placeholder="How can we help?" 
                      {...register('subject')}
                    />
                    {errors.subject ? (
                      <p className="text-[11px] font-semibold text-red-500">{errors.subject.message}</p>
                    ) : null}
                  </div>
                  
                  <div className="space-y-3">
                    <label className="text-[11px] font-black text-secondary/60 uppercase tracking-[0.2em]">Message</label>
                    <textarea 
                      rows={4} 
                      aria-invalid={!!errors.message}
                      className={`w-full bg-zinc-50 border p-4 text-sm text-secondary focus:outline-none transition-all placeholder:text-zinc-300 resize-none rounded-xl ${errors.message ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300' : 'border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary'}`} 
                      placeholder="Tell us about your project or requirements..."
                      {...register('message')}
                    ></textarea>
                    {errors.message ? (
                      <p className="text-[11px] font-semibold text-red-500">{errors.message.message}</p>
                    ) : null}
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-black tracking-tighter text-lg py-5 px-8 flex items-center justify-center gap-3 hover:bg-secondary transition-all duration-500 group rounded-xl shadow-xl shadow-primary/20 hover:shadow-none disabled:opacity-70 disabled:cursor-not-allowed">
                    Send Message
                    <Icons.ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
