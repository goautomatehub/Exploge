import React, { useState } from 'react';
import { AmbientBlobs } from './AmbientBlobs';
import { Icons } from './Icons';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-premium-dark text-white overflow-hidden relative">
      <AmbientBlobs color="bg-primary" size="w-[500px] h-[500px]" className="-top-48 -right-48" opacity="opacity-[0.08]" animation="animate-blob" />
      <AmbientBlobs color="bg-primary" size="w-72 h-72" className="bottom-0 left-0" opacity="opacity-[0.05]" animation="animate-blob-slow" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20">
          <div className="w-full lg:w-1/2 space-y-6 md:space-y-8">
            <h2 className="text-[10px] md:text-sm font-bold text-primary uppercase tracking-[0.4em]">Contact Us</h2>
            <h3 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tighter">
              Ready to <br className="hidden md:block"/> <span className="text-primary underline decoration-2 underline-offset-8">Grow</span> <br className="hidden md:block"/> Your Agency?
            </h3>
            <p className="text-gray-400 text-sm md:text-lg max-w-md leading-relaxed">
              Join many agencies that use our systems to save time. We'll help you set everything up quickly and easily.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary/5 transition-all">
                  <Icons.Mail className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" />
                </div>
                <span className="text-gray-300 text-xs md:text-base font-medium group-hover:text-white transition-colors">hello@exploge.io</span>
              </div>
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 border border-white/10 flex items-center justify-center text-primary group-hover:border-primary group-hover:bg-primary/5 transition-all">
                  <Icons.Zap className="w-4 h-4 md:w-4.5 md:h-4.5 lg:w-5 lg:h-5" />
                </div>
                <span className="text-gray-300 text-xs md:text-base font-medium group-hover:text-white transition-colors">San Francisco & London</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="bg-white p-6 md:p-8 lg:p-10 relative rounded-md">
              {submitted ? (
                <div className="py-12 md:py-16 lg:py-20 text-center animate-pulse">
                  <div className="w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icons.Check className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10" />
                  </div>
                  <h4 className="text-secondary text-xl md:text-2xl font-bold mb-2">Message Sent</h4>
                  <p className="text-gray-500 text-sm">We'll get back to you very soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your Name</label>
                      <input required type="text" className="w-full bg-gray-50 border border-gray-100 p-3 md:p-4 text-sm text-secondary focus:border-primary focus:outline-none transition-colors placeholder:text-gray-300 rounded-md" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your Email</label>
                      <input required type="email" className="w-full bg-gray-50 border border-gray-100 p-3 md:p-4 text-sm text-secondary focus:border-primary focus:outline-none transition-colors placeholder:text-gray-300 rounded-md" placeholder="john@agency.com" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 relative">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Team Size</label>
                    <select className="w-full bg-gray-50 border border-gray-100 p-3 md:p-4 text-sm text-secondary focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer rounded-md">
                      <option>1-10 people</option>
                      <option>11-50 people</option>
                      <option>51-200 people</option>
                      <option>200+ people</option>
                    </select>
                    <div className="absolute right-4 bottom-4 pointer-events-none text-gray-400">
                      <Icons.ArrowRight className="w-4 h-4 rotate-90" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">How can we help?</label>
                    <textarea rows={4} className="w-full bg-gray-50 border border-gray-100 p-3 md:p-4 text-sm text-secondary focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-gray-300 rounded-md" placeholder="Tell us about your business..."></textarea>
                  </div>
                  
                  <button type="submit" className="w-full bg-primary text-white font-black py-4 md:py-5 hover:bg-secondary transition-all duration-300 text-[10px] md:text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(32,188,97,0.3)] hover:shadow-none hover:-translate-y-1 group rounded-md">
                    Send Message
                    <Icons.ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                  <p className="text-[8px] md:text-[10px] text-gray-400 text-center uppercase tracking-widest">
                    By submitting, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};