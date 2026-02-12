import React, { useEffect, useState } from 'react';
import { servicesData } from '../data/servicesData';
import { Reveal } from '../components/Reveal';
import { CheckCircle2, ArrowRight, ChevronDown } from 'lucide-react';
import { Page } from '../App';
import { motion, AnimatePresence } from 'framer-motion';
import apiIntegrationImg from '../components/Images/assest images/API Integration.png';
import apiIntegrationBannerImg from '../components/Images/assest images/API Integration banner.jpeg';
import crmImg from '../components/Images/assest images/CRM.png';
import voiceAiChatbotImg from '../components/Images/assest images/Voice AI Chatbot.png';
import automationServicesImg from '../components/Images/assest images/Automation Services.png';
import selfSellingAiBodyImg from '../components/Images/assest images/Self selling Ai body.png';
import selfSellingAiBannerImg from '../components/Images/assest images/Self Selling AI BANNER.png';
import thirdPartyBannerImg from '../components/Images/assest images/third party integration banner.png';
import thirdPartyBodyImg from '../components/Images/assest images/third party integration body image.png';
import saasIntegrationImg from '../components/Images/assest images/Saas Integration.png';

interface ServiceDetailProps {
  slug: string | null;
  onNavigate: (page: Page, slug?: string) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug, onNavigate }) => {
  const service = servicesData.find(s => s.slug === slug);
  const [activeFaqIndex, setActiveFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service && slug) {
      onNavigate('services');
    }
  }, [service, slug, onNavigate]);

  if (!service) return null;

  const bannerImages: Record<string, string> = {
    "automation-service": automationServicesImg,
    "crm-setup-optimized": crmImg,
    "voice-ai-chat-bots": voiceAiChatbotImg,
    "self-selling-ai": selfSellingAiBannerImg,
    "web-development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    "saas-integration": saasIntegrationImg,
    "third-party-syncronization": thirdPartyBannerImg,
    "api-integration": apiIntegrationBannerImg
  };

  const overviewImages: Record<string, string> = {
    ...bannerImages,
    "api-integration": apiIntegrationImg,
    "self-selling-ai": selfSellingAiBodyImg,
    "third-party-syncronization": thirdPartyBodyImg,
    "saas-integration": saasIntegrationImg
  };

  const heroImage = bannerImages[service.slug] ?? bannerImages["automation-service"];
  const overviewImage = overviewImages[service.slug] ?? overviewImages["automation-service"];

  const getServiceFaqs = (slug: string, title: string) => {
    switch (slug) {
      case 'automation-service':
        return [
          { q: "Do you build custom automation workflows?", a: "Yes, every automation is designed around your specific operations and business logic." },
          { q: "Can automation integrate with my existing tools?", a: "We connect your CRM, marketing tools, and third party platforms into one synchronized system." },
          { q: "Will automation replace manual work completely?", a: "Automation reduces repetitive tasks while keeping you in control of critical decision making." },
          { q: "How do you ensure automation accuracy?", a: "We implement structured logic, testing phases, and monitoring to prevent workflow errors." },
          { q: "Can automation improve conversion rates?", a: "Yes, structured follow ups and instant responses increase engagement and lead conversion." }
        ];
      case 'crm-setup-optimized':
        return [
          { q: "Which CRM platforms do you specialize in?", a: "We work with a wide range of platforms including GoHighLevel, HubSpot, Salesforce, Monday.com, Zoho, Airtable, Odoo, Pabau, and Pipedrive." },
          { q: "What does your CRM setup process include?", a: "We configure pipelines, stages, automation, user roles, dashboards, and reporting aligned with your sales process." },
          { q: "Can you optimize my existing CRM system?", a: "Yes, we audit your current setup, remove inefficiencies, and restructure workflows for better performance." },
          { q: "Do you customize CRM pipelines based on business model?", a: "Every pipeline is structured around your lead flow, sales cycle, and operational requirements." },
          { q: "Will the CRM be integrated with other tools?", a: "We connect your CRM with marketing platforms, automation tools, and third party applications for seamless data flow." },
          { q: "Can you automate follow ups and lead tracking inside the CRM?", a: "Yes, we implement automated sequences, reminders, and tracking systems to improve consistency." },
          { q: "How do you improve CRM performance?", a: "We analyze data structure, optimize workflows, and refine automation logic to increase efficiency." }
        ];
      case 'self-selling-ai':
        return [
          { q: "What is Self Selling AI?", a: "Self Selling AI is an automated system that nurtures leads, handles objections, and moves prospects through your sales pipeline automatically." },
          { q: "Can it integrate with my CRM and marketing tools?", a: "Yes, the system connects directly with your CRM, email platforms, and automation tools for synchronized data flow." },
          { q: "Is the sales process customizable?", a: "We build tailored sales logic and communication flows based on your specific offer and target audience." },
          { q: "Does it work 24/7 without manual involvement?", a: "Yes, the system operates continuously, ensuring no lead is missed or ignored." },
          { q: "Can it handle large volumes of leads?", a: "The architecture is designed to scale with increasing traffic and data without performance loss." }
        ];
      case 'voice-ai-chat-bots':
        return [
          { q: "Can Voice AI and chatbots integrate with my CRM?", a: "Yes, we connect AI systems directly with your CRM to sync data in real time." },
          { q: "Are the conversations customizable?", a: "We design custom scripts and conversational flows aligned with your business objectives." },
          { q: "Can AI systems operate 24/7?", a: "Yes, Voice AI and chatbots provide continuous support without downtime." },
          { q: "Will AI replace my support team?", a: "AI handles repetitive tasks while your team focuses on complex or high value interactions." },
          { q: "How accurate and reliable are the AI systems?", a: "We implement structured logic, testing, and optimization to ensure consistent and reliable performance." }
        ];
      case 'web-development':
        return [
          { q: "Which platforms do you use for web development?", a: "We specialize in building high-performance websites using WordPress, GoHighLevel, and Wix." },
          { q: "Is your website development mobile responsive?", a: "Yes, all websites are optimized for mobile, tablet, and desktop devices across all platforms." },
          { q: "Do you focus on performance and speed optimization?", a: "We ensure fast loading, performance optimized websites to provide a better user experience and higher search visibility." },
          { q: "Can you integrate third party tools into the website?", a: "Yes, we connect CRMs, payment gateways, analytics tools, and other SaaS platforms seamlessly into your site." },
          { q: "Do you provide SEO friendly development?", a: "We follow SEO best practices and ensure your site is structured for maximum search engine visibility." },
          { q: "Can you build custom funnels on GoHighLevel?", a: "Yes, we design and develop high-converting sales funnels and landing pages specifically for GoHighLevel." }
        ];
      case 'saas-integration':
        return [
          { q: "Which SaaS platforms can you integrate?", a: "We integrate CRMs, marketing tools, payment systems, communication platforms, and custom SaaS applications." },
          { q: "Can you integrate my existing software stack?", a: "Yes, we connect your current tools through APIs and automation frameworks without disrupting operations." },
          { q: "Do you build custom integrations?", a: "Yes, we develop tailored integrations designed around your specific workflows and business logic." },
          { q: "Is real time data synchronization supported?", a: "We implement secure real time or scheduled data syncing based on your operational needs." },
          { q: "Can integrations scale as my business grows?", a: "Yes, our integration architecture is designed to handle increasing data volume and system expansion." }
        ];
      case 'third-party-syncronization':
        return [
          { q: "Which third party automation tools do you work with?", a: "We integrate and synchronize platforms like n8n, GoHighLevel, Make, Zapier, Pabbly, and other workflow automation tools." },
          { q: "Can you migrate automations between platforms like Zapier and n8n?", a: "Yes, we restructure and migrate workflows while maintaining logic, triggers, and data consistency." },
          { q: "How do you ensure reliable synchronization between these tools?", a: "We implement structured triggers, webhook handling, and error monitoring to maintain workflow stability." },
          { q: "Are these integrations scalable for growing businesses?", a: "Our automation architecture is built to handle increasing task volume and system expansion efficiently." },
          { q: "Do you optimize existing automation setups?", a: "Yes, we audit and refine workflows inside platforms like Make, Pabbly, and GoHighLevel to improve performance and reduce inefficiencies." }
        ];
      case 'api-integration':
        return [
          { q: "What is API integration and why is it important?", a: "API integration enables different systems to communicate securely and automate data exchange without manual input." },
          { q: "What types of APIs do you work with?", a: "We integrate REST APIs, third party services, payment gateways, CRMs, and custom built APIs." },
          { q: "Can you develop custom API connections?", a: "Yes, we build custom endpoints and structured integrations based on your system architecture." },
          { q: "Do you support real time data processing?", a: "We implement real time API calls and webhook based triggers for instant synchronization." },
          { q: "How do you ensure API security?", a: "We use authentication protocols, token based access, and secure request validation methods." },
          { q: "Can you handle complex multi system integrations?", a: "Yes, we design structured logic to connect multiple platforms into a unified workflow." }
        ];
      default:
        return [
          { q: `How long does it take to implement ${title}?`, a: "Typical implementation ranges from 2-6 weeks depending on the complexity of your current systems." },
          { q: "Will this integrate with my existing software?", a: "Yes, we specialize in connecting diverse tech stacks through secure API and automation frameworks." }
        ];
    }
  };

  const serviceFaqs = getServiceFaqs(service.slug, service.title);

  return (
    <div className="bg-white min-h-screen text-secondary">
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 border-b border-black/5">
        <div className="container mx-auto px-6">
          <Reveal direction="up">
            <div className="w-full text-center">
              <div className="relative w-full overflow-hidden rounded-[14px] border border-black/10 bg-black px-8 py-10 md:px-12 md:py-16 shadow-[0_28px_60px_rgba(6,15,11,0.16)]">
                <img
                  src={heroImage}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-black/55" />
                <div
                  className="absolute inset-0 opacity-[0.22] mix-blend-soft-light pointer-events-none"
                  style={{
                    backgroundImage: 'url(https://grainy-gradients.vercel.app/noise.svg)',
                    backgroundSize: '160px 160px'
                  }}
                />
                <div className="relative max-w-3xl mx-auto min-h-[180px] md:min-h-[240px] flex flex-col items-center justify-center text-white">
                  <h1 className="text-3xl xs:text-4xl md:text-5xl font-semibold tracking-tight text-white">
                    {service.title}
                  </h1>
                  <div className="mt-4 flex items-center justify-center text-[11px] font-semibold tracking-wide text-white/70">
                    <button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Home</button>
                    <span className="mx-2 text-white/40">/</span>
                    <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors">Services</button>
                    <span className="mx-2 text-white/40">/</span>
                    <span className="text-white">{service.title}</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <aside className="order-2 lg:order-1 lg:col-span-4 xl:col-span-3">
              <div className="lg:sticky lg:top-28 space-y-6">
                <div className="rounded-[14px] border border-black/10 bg-white p-6 shadow-sm">
                  <div className="text-[11px] font-semibold tracking-[0.3em] text-secondary/50 uppercase mb-4">All Services</div>
                  <div className="space-y-2">
                    {servicesData.map((item) => (
                      <button
                        key={item.slug}
                        onClick={() => onNavigate('service', item.slug)}
                        className={`w-full rounded-[12px] px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                          item.slug === service.slug
                            ? 'bg-secondary text-white shadow-[0_10px_24px_rgba(0,0,0,0.15)]'
                            : 'bg-zinc-50 text-secondary hover:bg-zinc-100'
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="rounded-[14px] border border-black/10 bg-white p-6 shadow-sm">
                  <div className="text-[11px] font-semibold tracking-[0.3em] text-secondary/50 uppercase mb-3">Overview</div>
                  <p className="text-sm text-secondary/70 leading-relaxed mb-5">{service.shortDesc}</p>
                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-3 px-5 py-3 rounded-[12px] bg-secondary text-white font-semibold text-xs hover:bg-black transition-colors"
                  >
                    Contact Us <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </aside>

            <div className="order-1 lg:order-2 lg:col-span-8 xl:col-span-9 space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {service.process.slice(0, 3).map((item, i) => (
                  <Reveal key={item.title} direction="up" delay={i * 0.1}>
                    <div className="border border-transparent rounded-[14px] p-6 transition-all duration-300 hover:border-black/10 hover:bg-zinc-50">
                      <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center text-primary mb-4">
                        {React.cloneElement(service.icon as React.ReactElement, { size: 18 })}
                      </div>
                      <h3 className="text-lg font-semibold tracking-tight mb-2 text-secondary">{item.title}</h3>
                      <p className="text-sm text-secondary/60 leading-relaxed">{item.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="rounded-[18px] border border-black/10 bg-zinc-50 p-8 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <Reveal direction="left">
                    <div className="relative rounded-[14px] border border-black/10 overflow-hidden bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
                      <img src={overviewImage} alt={service.title} className="w-full h-72 md:h-96 object-cover" />
                    </div>
                  </Reveal>
                  <Reveal direction="right">
                    <div className="max-w-xl">
                      <span className="text-[11px] font-semibold tracking-[0.3em] text-secondary/50 uppercase block mb-4">Service Overview</span>
                      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-secondary mb-4">
                        {service.shortDesc}
                      </h2>
                      <p className="text-secondary/60 leading-relaxed mb-6">
                        {service.fullDesc}
                      </p>
                      <button
                        onClick={() => onNavigate('contact')}
                        className="inline-flex items-center gap-3 px-6 py-3 rounded-[14px] bg-secondary text-white font-semibold text-sm hover:bg-black transition-colors"
                      >
                        Contact Us <ArrowRight size={16} />
                      </button>
                    </div>
                  </Reveal>
                </div>
              </div>

              <div className="rounded-[18px] border border-black/10 bg-white p-8 md:p-10 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-[11px] font-semibold tracking-[0.3em] text-secondary/50 uppercase block mb-2">Benefits</span>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-secondary">Key Outcomes</h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3 rounded-[14px] border border-black/5 bg-zinc-50 px-4 py-4">
                      <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <CheckCircle2 size={14} />
                      </span>
                      <span className="text-sm text-secondary/70 leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[18px] border border-black/10 bg-white p-8 md:p-10 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-[11px] font-semibold tracking-[0.3em] text-secondary/50 uppercase block mb-2">Tools</span>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-secondary">Platforms We Use</h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-black/10 bg-zinc-50 px-4 py-2 text-xs font-semibold text-secondary/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Service FAQ Section */}
              <div className="rounded-[18px] border border-black/10 bg-white p-8 md:p-10 shadow-sm">
                <div className="mb-8">
                  <span className="text-[11px] font-semibold tracking-[0.3em] text-secondary/50 uppercase block mb-2">FAQ</span>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-secondary">Common Questions</h3>
                </div>
                <div className="space-y-4">
                  {serviceFaqs.map((faq, i) => (
                    <div key={i} className="border-b border-black/5 last:border-0">
                      <button 
                        onClick={() => setActiveFaqIndex(activeFaqIndex === i ? null : i)}
                        className="w-full py-5 text-left flex justify-between items-center group transition-all duration-300"
                      >
                        <span className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${activeFaqIndex === i ? 'text-primary' : 'text-zinc-900'}`}>
                          {faq.q}
                        </span>
                        <div className={`p-1.5 rounded-full border border-black/5 transition-all duration-500 ${activeFaqIndex === i ? 'bg-primary border-primary text-white rotate-180' : 'bg-white text-zinc-400'}`}>
                          <ChevronDown size={16} />
                        </div>
                      </button>
                      
                      <AnimatePresence initial={false}>
                        {activeFaqIndex === i && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden"
                          >
                            <div className="pb-6 text-sm md:text-base text-zinc-500 leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-6">
          <div className="rounded-[14px] border border-black/10 bg-white p-10 md:p-14 text-center shadow-sm">
            <Reveal direction="up">
              <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-secondary mb-4">
                Ready to move forward with {service.title}?
              </h2>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <p className="text-secondary/60 mb-8 max-w-2xl mx-auto">
                Connect with us today and we will map the right plan for your business.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-3 px-8 py-3 rounded-[14px] bg-secondary text-white font-semibold text-sm hover:bg-black transition-colors"
              >
                Contact Us Now <ArrowRight size={16} />
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
