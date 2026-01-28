
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { Icons } from './Icons';
import { FloatingDecorations } from './FloatingDecorations';

interface FAQItemProps {
  question: string;
  answer: string;
  delay: number;
  isOpen: boolean;
  onToggle: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, delay, isOpen, onToggle }) => {
  return (
    <Reveal direction="up" delay={delay}>
      <div className="border-b border-black/5 bg-transparent mb-0 overflow-hidden">
        <button 
          onClick={onToggle}
          className="w-full py-8 text-left flex justify-between items-center group transition-all duration-300"
        >
          <span className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-zinc-900'}`}>
            {question}
          </span>
          <div className={`p-2 rounded-full border border-black/5 transition-all duration-500 ${isOpen ? 'bg-primary border-primary text-white rotate-180' : 'bg-white text-zinc-400'}`}>
            <Icons.ChevronDown className="w-5 h-5" />
          </div>
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
              <div className="pb-8 text-base text-zinc-500 leading-relaxed">
                <div className="max-w-3xl">
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
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  
  const faqs = [
    { 
      q: "What exactly is business automation?", 
      a: "It simply means using smart tools to handle your repetitive daily tasks—like data entry or sending follow-up emails—so you don’t have to do them manually anymore." 
    },
    { 
      q: "Do I need to be a \"tech person\" to use your systems?", 
      a: "Not at all. We build everything to be simple and \"set-and-forget.\" If you can use an email account, you can use our systems." 
    },
    { 
      q: "Which apps can you connect together?", 
      a: "We can connect automation and CRM tools like GoHighLevel, HubSpot, Salesforce, Pipedrive, Zoho, Airtable, Monday, Asana, Make, Zapier, and n8n." 
    },
    { 
      q: "How much time will this actually save me?", 
      a: "Most of our clients save between 10 to 20 hours every week. The more manual work you currently do, the more time you will get back." 
    },
    { 
      q: "Is my business data safe with automation?", 
      a: "Yes. We use secure, industry-standard connections to move your data. Your information stays private and protected at all times." 
    }
  ];

  return (
    <section id="faq" className="pb-24 pt-16 bg-soft relative overflow-hidden">
      {/* Floating Elements */}
      <FloatingDecorations.Triangle className="top-20 left-[5%] hidden md:block" delay={0.2} />
      <FloatingDecorations.Dot className="bottom-20 right-[5%] hidden md:block" delay={0.6} />
      <FloatingDecorations.Cross className="top-1/2 left-[10%] hidden md:block" delay={1.0} />
      <FloatingDecorations.Zigzag className="top-[30%] right-[10%] hidden md:block" delay={1.4} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <Reveal direction="up">
            <span className="text-2xl font-bold text-primary sub-heading mb-4 inline-block">Common Questions</span>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <h3 className="text-3xl xs:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter mb-6 leading-none">
              Clear answers for you.
            </h3>
          </Reveal>
          <Reveal direction="up" delay={0.2}>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
              These FAQs answer the most common questions business owners have about automation, so you can feel confident moving forward.
            </p>
          </Reveal>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, i) => (
            <FAQItem 
              key={i} 
              question={faq.q} 
              answer={faq.a} 
              delay={0.1 + (i * 0.1)} 
              isOpen={activeIndex === i}
              onToggle={() => setActiveIndex(activeIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
