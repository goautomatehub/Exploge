
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';

interface FAQItemProps {
  question: string;
  answer: string;
  delay: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, delay }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Reveal direction="up" delay={delay}>
      <div className="border border-black/5 bg-white mb-2 overflow-hidden rounded-md">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="w-full p-6 text-left flex justify-between items-center group hover:bg-gray-50 transition-colors duration-300"
        >
          <span className="font-bold text-sm uppercase tracking-tight">{question}</span>
          <span className={`mono text-primary font-bold transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? 'rotate-45' : ''}`}>+</span>
        </button>
        
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="p-6 pt-0 text-sm text-gray-500 leading-relaxed border-t border-gray-50 bg-gray-50/30">
                <div className="border-l-2 border-primary pl-4 py-2">
                  {answer}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    { q: "Is my data safe?", a: "Yes, we take security very seriously. We use high-level protection for all your systems and sign agreements to keep your information private." },
    { q: "Can you connect my current tools?", a: "Yes! We specialize in making different tools work together. Whether you use Slack, ClickUp, or HubSpot, we can connect them into one simple system." },
    { q: "How long does a project take?", a: "Most projects take about 7 to 14 days. For larger systems, we'll give you a clear timeline after our first talk." },
    { q: "Do you teach my team how to use it?", a: "Yes. We don't just build it and leave. We provide training sessions to make sure your team knows exactly how to use the new systems." },
    { q: "What if something breaks?", a: "We offer ongoing support. Our team monitors your systems and is always ready to fix any issues quickly." }
  ];

  return (
    <section id="faq" className="py-24 bg-white border-t border-black/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <Reveal direction="up">
            <h2 className="text-xs font-bold text-primary mono uppercase tracking-[0.4em] mb-4">Common Questions</h2>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h3 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
              Helpful Information.
            </h3>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
              Finding answers for your operations. Need more details? 
              <a href="#contact" className="text-primary underline ml-1">Contact our team.</a>
            </p>
          </Reveal>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} delay={0.1 + (i * 0.1)} />
          ))}
        </div>
      </div>
    </section>
  );
};
