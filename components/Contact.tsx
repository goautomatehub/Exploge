import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AmbientBlobs } from './AmbientBlobs';
import { Icons } from './Icons';
import { FloatingDecorations } from './FloatingDecorations';
import { getApiBase } from '@/utils/api';

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

  useEffect(() => {
    const w = 'https://tally.so/widgets/embed.js';
    const v = () => {
      const anyWindow: any = window as any;
      if (typeof anyWindow.Tally !== 'undefined') {
        anyWindow.Tally.loadEmbeds();
      } else {
        document
          .querySelectorAll('iframe[data-tally-src]:not([src])')
          .forEach((el) => {
            const e = el as HTMLIFrameElement;
            const src = e.dataset.tallySrc;
            if (src && !e.src) e.src = src;
          });
      }
    };
    const anyWindow: any = window as any;
    if (typeof anyWindow.Tally !== 'undefined') {
      v();
      return;
    }
    if (!document.querySelector(`script[src="${w}"]`)) {
      const s = document.createElement('script');
      s.src = w;
      s.onload = v;
      s.onerror = v;
      document.body.appendChild(s);
    } else {
      v();
    }
  }, []);

  const onSubmit = async (data: ContactFormValues) => {
    setError(null);
    try {
      const envBase = (import.meta as any).env?.VITE_API_BASE_URL as string | undefined;
      const apiBase = getApiBase(envBase);

      console.log('Form submitting to:', `${apiBase}/api/contact`);
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
                <div className="space-y-4">
                  <iframe
                    data-tally-src={"https://tally.so/embed/rj67WN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"}
                    src={"https://tally.so/embed/rj67WN?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"}
                    loading="lazy"
                    width="100%"
                    height="484"
                    frameBorder={0}
                    marginHeight={0}
                    marginWidth={0}
                    title="Contact Us"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
