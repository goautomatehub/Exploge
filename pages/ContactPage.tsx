import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Reveal } from '../components/Reveal';
import { Icons } from '../components/Icons';
import { getApiBase } from '@/utils/api';

import { AmbientGroup } from '../components/AmbientBlobs';
import { FloatingDecorations } from '../components/FloatingDecorations';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Message is too short').max(1000, 'Message is too long')
});

type ContactFormValues = z.infer<typeof contactSchema>;

interface ContactPageProps {
  onNavigate?: (page: 'home' | 'about' | 'services' | 'casestudies' | 'case' | 'contact') => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' }
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
          console.error('Contact page submit failed', {
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

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-28 pb-20 md:pt-48 md:pb-32 bg-premium-dark text-white relative overflow-hidden">
        <AmbientGroup variant="dark" />
        <div className="absolute inset-0 bg-grid opacity-[0.05]"></div>
        
        {/* Floating Elements */}
        <FloatingDecorations.Plus className="top-40 right-20 text-primary hidden md:block" delay={0.6} />
        <FloatingDecorations.Dot className="bottom-20 left-1/3 hidden md:block" delay={1.8} />
        <FloatingDecorations.Triangle className="top-20 left-1/4 hidden md:block" delay={0.9} />
        <FloatingDecorations.Cross className="bottom-40 right-1/3 hidden md:block" delay={1.4} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <Reveal direction="left">
              <span className="text-primary sub-heading text-xs font-bold uppercase tracking-[0.4em] mb-6 block">Expertise Hub</span>
            </Reveal>
            <Reveal direction="left" delay={0.1}>
              <h1 className="text-3xl xs:text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Get In <span className="text-primary">Touch</span>
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="text-base md:text-xl text-gray-400 font-light leading-relaxed border-l-2 border-primary pl-6 md:pl-8 max-w-2xl">
                We design and implement custom automation ecosystems that eliminate manual work and drive operational excellence.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pt-16 md:pt-24 pb-6 md:pb-8">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="rounded-2xl border border-black/10 bg-white p-6 md:p-8 shadow-sm">
              <div className="mb-6 md:mb-8 text-center">
                <div className="inline-flex items-center gap-3 text-gray-600">
                  <div className="w-9 h-9 rounded-md border border-black/10 flex items-center justify-center text-primary">
                    <Icons.Send className="w-4.5 h-4.5" />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-secondary">
                    Drop us a message below
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl overflow-hidden">
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
      </section>
    </div>
  );
}
