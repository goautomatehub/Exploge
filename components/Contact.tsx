import React, { useLayoutEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AmbientBlobs } from './AmbientBlobs';
import { Icons } from './Icons';
import { FloatingDecorations } from './FloatingDecorations';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message is too short').max(1000, 'Message is too long')
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setError(null);
    try {
      const envBase = (import.meta as any).env?.VITE_API_BASE_URL as string | undefined;
      const apiBase =
        envBase && envBase.trim().length > 0
          ? envBase.replace(/\/+$/, '')
          : window.location.hostname === 'localhost'
          ? 'http://localhost:3001'
          : 'https://exploge.com';
      const resp = await fetch(`${apiBase}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, sourceUrl: window.location.href })
      });
      let json: any = null;
      try {
        json = await resp.json();
      } catch {}
      if (resp.ok && json?.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        if (typeof window !== 'undefined') {
          console.error('Contact form submit failed', {
            status: resp.status,
            statusText: resp.statusText,
            body: json
          });
        }
        setError('Something went wrong while submitting. Please try again or email us directly.');
      }
    } catch {
      setError('Unable to submit right now. Please check your connection and try again.');
    }
  };

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof window === 'undefined') return;
    const easing = 'cubic-bezier(0.16, 1, 0.3, 1)';
    const left = leftRef.current;
    const form = formRef.current;

    if (left) {
      left.style.opacity = '0';
      left.style.transform = 'translate3d(0, 24px, 0)';
      left.style.transition = `opacity 0.9s ${easing}, transform 0.9s ${easing}`;
    }
    if (form) {
      form.style.opacity = '0';
      form.style.transform = 'translate3d(0, 24px, 0) scale(0.98)';
      form.style.transition = `opacity 1s ${easing}, transform 1s ${easing}`;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.target === left && left) {
            left.style.opacity = '1';
            left.style.transform = 'translate3d(0, 0, 0)';
          }
          if (entry.target === form && form) {
            form.style.opacity = '1';
            form.style.transform = 'translate3d(0, 0, 0) scale(1)';
          }
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -20% 0px' }
    );

    if (left) observer.observe(left);
    if (form) observer.observe(form);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-16 md:py-24 relative z-10" ref={sectionRef}>
      <AmbientBlobs color="bg-primary" size="w-[400px] h-[400px]" className="-top-32 -right-32" opacity="opacity-[0.08]" animation="animate-blob" />
      <AmbientBlobs color="bg-primary" size="w-64 h-64" className="bottom-0 left-0" opacity="opacity-[0.05]" animation="animate-blob-slow" />
      
      {/* Floating Elements */}
      <FloatingDecorations.Plus className="top-10 right-[15%] text-primary hidden md:block" delay={0.2} />
      <FloatingDecorations.Dot className="bottom-20 left-[10%] hidden md:block" delay={0.6} />
      <FloatingDecorations.Circle className="top-1/2 left-[5%] hidden md:block" delay={1.0} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-secondary border border-white/5 p-6 md:p-8 lg:p-10 backdrop-blur-sm text-white shadow-2xl relative overflow-hidden" style={{ borderRadius: '14px' }}>
          {/* Background Image with Left to Right Gradient */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-[0.15]" 
              style={{ 
                backgroundImage: 'url("https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop")',
                backgroundBlendMode: 'luminosity'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/60 to-transparent"></div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative z-10">
            <div className="w-full lg:w-1/2 space-y-4 md:space-y-6" ref={leftRef}>
              <span className="text-xl font-bold text-primary sub-heading mb-2 inline-block">Get In Touch</span>
              <h3 className="text-2xl xs:text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tighter">
                Let's Talk <span className="text-primary">Automation</span>.
              </h3>
              <p className="text-gray-400 text-sm md:text-base max-w-md leading-relaxed">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 pt-2">
                <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary/5 transition-all rounded-md">
                    <Icons.Mail className="w-4 h-4" />
                  </div>
                  <span className="text-gray-300 text-xs md:text-sm font-medium group-hover:text-white transition-colors">contact@exploge.com</span>
                </div>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2" ref={formRef}>
              <div className="bg-white p-5 md:p-6 lg:p-8 relative rounded-xl shadow-2xl">
                {submitted ? (
                  <div className="py-12 md:py-16 lg:py-20 text-center animate-pulse">
                    <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                      <Icons.Check className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" />
                    </div>
                    <h4 className="text-secondary text-xl md:text-2xl font-bold mb-2">Message Sent</h4>
                    <p className="text-gray-500 text-sm">We'll get back to you very soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 md:space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-secondary/60 uppercase tracking-wider">Your Name</label>
                        <input 
                          type="text" 
                          aria-invalid={!!errors.name}
                          className={`w-full bg-zinc-50 border p-2.5 md:p-3 text-sm text-secondary focus:outline-none transition-all placeholder:text-zinc-400 rounded-lg ${errors.name ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300' : 'border-zinc-100 focus:border-primary focus:ring-1 focus:ring-primary'}`} 
                          placeholder="John Doe" 
                          {...register('name')}
                        />
                        {errors.name ? (
                          <p className="text-[10px] font-semibold text-red-500">{errors.name.message}</p>
                        ) : null}
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold text-secondary/60 uppercase tracking-wider">Your Email</label>
                        <input 
                          type="email" 
                          aria-invalid={!!errors.email}
                          className={`w-full bg-zinc-50 border p-2.5 md:p-3 text-sm text-secondary focus:outline-none transition-all placeholder:text-zinc-400 rounded-lg ${errors.email ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300' : 'border-zinc-100 focus:border-primary focus:ring-1 focus:ring-primary'}`} 
                          placeholder="john@agency.com" 
                          {...register('email')}
                        />
                        {errors.email ? (
                          <p className="text-[10px] font-semibold text-red-500">{errors.email.message}</p>
                        ) : null}
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-secondary/60 uppercase tracking-wider">Subject</label>
                      <input 
                        type="text" 
                        aria-invalid={!!errors.subject}
                        className={`w-full bg-zinc-50 border p-2.5 md:p-3 text-sm text-secondary focus:outline-none transition-all placeholder:text-zinc-400 rounded-lg ${errors.subject ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300' : 'border-zinc-100 focus:border-primary focus:ring-1 focus:ring-primary'}`} 
                        placeholder="How can we help?" 
                        {...register('subject')}
                      />
                      {errors.subject ? (
                        <p className="text-[10px] font-semibold text-red-500">{errors.subject.message}</p>
                      ) : null}
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[10px] font-bold text-secondary/60 uppercase tracking-wider">Message</label>
                      <textarea 
                        rows={3} 
                        aria-invalid={!!errors.message}
                        className={`w-full bg-zinc-50 border p-2.5 md:p-3 text-sm text-secondary focus:outline-none transition-all resize-none placeholder:text-zinc-400 rounded-lg ${errors.message ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300' : 'border-zinc-100 focus:border-primary focus:ring-1 focus:ring-primary'}`} 
                        placeholder="Your message here..."
                        {...register('message')}
                      ></textarea>
                      {errors.message ? (
                        <p className="text-[10px] font-semibold text-red-500">{errors.message.message}</p>
                      ) : null}
                    </div>
                    
                    {error ? (
                      <p className="text-[10px] font-semibold text-red-500 mb-1">{error}</p>
                    ) : null}
                    <button type="submit" disabled={isSubmitting} className="w-full bg-primary text-white font-black py-3 md:py-4 hover:bg-secondary transition-all duration-300 text-[10px] md:text-xs uppercase flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group rounded-lg disabled:opacity-70 disabled:cursor-not-allowed">
                      Send Message
                      <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </button>
                    <p className="text-[8px] md:text-[9px] text-zinc-400 text-center uppercase tracking-widest">
                      By submitting, you agree to our terms.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
