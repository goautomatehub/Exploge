import React, { useEffect } from 'react';
import { servicesData } from '../data/servicesData';
import { Reveal } from '../components/Reveal';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Page } from '../App';

interface ServiceDetailProps {
  slug: string | null;
  onNavigate: (page: Page, slug?: string) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ slug, onNavigate }) => {
  const service = servicesData.find(s => s.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!service && slug) {
      onNavigate('services');
    }
  }, [service, slug, onNavigate]);

  if (!service) return null;

  const serviceImages: Record<string, string> = {
    "workflow-automation": "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=1200",
    "crm-setup": "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    "project-management": "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1200",
    "ai-sales-agents": "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200",
    "sales-funnels": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    "app-integrations": "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    "web-development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200",
    "operations-audit": "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200"
  };

  const heroImage = serviceImages[service.slug] ?? serviceImages["workflow-automation"];

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
                    onClick={() => onNavigate('home')}
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
                      <img src={heroImage} alt={service.title} className="w-full h-72 md:h-96 object-cover" />
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
                        onClick={() => onNavigate('home')}
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
                Book a quick consultation and we will map the right plan for your business.
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <button
                onClick={() => onNavigate('home')}
                className="inline-flex items-center gap-3 px-8 py-3 rounded-[14px] bg-secondary text-white font-semibold text-sm hover:bg-black transition-colors"
              >
                Book A Strategy Call <ArrowRight size={16} />
              </button>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
