import React, { useState } from 'react';
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
  onNavigate?: (page: 'home' | 'about' | 'services' | 'casestudies' | 'contact') => void;
}

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' }
  });

  const onSubmit = async (data: ContactFormValues) => {
    setError(null);
    try {
      const envBase = (import.meta as any).env?.VITE_API_BASE_URL as string | undefined;
      const fallbackEnv = (import.meta as any).env?.VITE_API_FALLBACK_URL as string | undefined;
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
        if (fallbackEnv) {
          const fb = String(fallbackEnv).replace(/\/+$/, '');
          if (fb && fb !== apiBase) {
            const resp2 = await fetch(`${fb}/api/contact`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ ...data, sourceUrl: window.location.href })
            });
            let json2: any = null;
            try {
              json2 = await resp2.json();
            } catch {}
            if (resp2.ok && json2?.ok) {
              setSubmitted(true);
              reset();
              setTimeout(() => setSubmitted(false), 5000);
              return;
            }
          }
        }
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

              {submitted ? (
                <div className="py-16 md:py-20 text-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icons.Check className="w-8 h-8 md:w-10 md:h-10" />
                  </div>
                  <h4 className="text-secondary text-2xl md:text-3xl font-black tracking-tighter mb-2">Message Sent</h4>
                  <p className="text-gray-500 font-bold text-[10px] md:text-xs tracking-widest uppercase">We will respond within 120 minutes.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-secondary/60 uppercase tracking-[0.2em]">Full Name</label>
                      <input
                        type="text"
                        aria-invalid={!!errors.name}
                        className={`w-full bg-zinc-50 border p-3 text-sm text-secondary placeholder:text-zinc-400 rounded-lg focus:outline-none transition-all ${errors.name ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300' : 'border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary'}`}
                        placeholder="John Doe"
                        {...register('name')}
                      />
                      {errors.name ? <p className="text-[10px] font-semibold text-red-500">{errors.name.message}</p> : null}
                    </div>
                    <div className="space-y-2">
                      <label className="text-[11px] font-black text-secondary/60 uppercase tracking-[0.2em]">Email</label>
                      <input
                        type="email"
                        aria-invalid={!!errors.email}
                        className={`w-full bg-zinc-50 border p-3 text-sm text-secondary placeholder:text-zinc-400 rounded-lg focus:outline-none transition-all ${errors.email ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300' : 'border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary'}`}
                        placeholder="john@company.com"
                        {...register('email')}
                      />
                      {errors.email ? <p className="text-[10px] font-semibold text-red-500">{errors.email.message}</p> : null}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-secondary/60 uppercase tracking-[0.2em]">Subject</label>
                    <input
                      type="text"
                      aria-invalid={!!errors.subject}
                      className={`w-full bg-zinc-50 border p-3 text-sm text-secondary placeholder:text-zinc-400 rounded-lg focus:outline-none transition-all ${errors.subject ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300' : 'border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary'}`}
                      placeholder="How can we help?"
                      {...register('subject')}
                    />
                    {errors.subject ? <p className="text-[10px] font-semibold text-red-500">{errors.subject.message}</p> : null}
                  </div>

                  <div className="space-y-2">
                    <label className="text-[11px] font-black text-secondary/60 uppercase tracking-[0.2em]">Message</label>
                    <textarea
                      rows={4}
                      aria-invalid={!!errors.message}
                      className={`w-full bg-zinc-50 border p-3 text-sm text-secondary resize-none placeholder:text-zinc-400 rounded-lg focus:outline-none transition-all ${errors.message ? 'border-red-300 focus:border-red-400 focus:ring-1 focus:ring-red-300' : 'border-zinc-200 focus:border-primary focus:ring-1 focus:ring-primary'}`}
                      placeholder="Your message here..."
                      {...register('message')}
                    ></textarea>
                    {errors.message ? <p className="text-[10px] font-semibold text-red-500">{errors.message.message}</p> : null}
                  </div>

                  {error ? <p className="text-[10px] font-semibold text-red-500">{error}</p> : null}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white font-black py-4 hover:bg-secondary transition-all duration-300 text-[10px] md:text-xs uppercase flex items-center justify-center gap-2 rounded-lg disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    Send Message
                    <Icons.ArrowRight className="w-4 h-4" />
                  </button>
                  <p className="text-[9px] text-zinc-400 text-center uppercase tracking-widest">By submitting, you agree to our terms.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
