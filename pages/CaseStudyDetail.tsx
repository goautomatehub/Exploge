import React, { useEffect, useState } from 'react';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import { Page } from '../App';
import { Reveal } from '../components/Reveal';
import { caseStudies, getCaseStudyBySlug } from '../data/caseStudies';
import { Icons } from '../components/Icons';
import fallbackImage from '../components/Images/assest images/driven-img.png';
import convBotImg from '../components/Images/assest images/case studies/Conversation Bot.png';
import convClosebotImg from '../components/Images/assest images/case studies/Conversation Closebot.png';
import wlPabblyImg from '../components/Images/assest images/case studies/White  Pabbly.png';
import wlZapierImg from '../components/Images/assest images/case studies/White Zapier.png';
import wlGHLImg from '../components/Images/assest images/case studies/White GHL.png';
import wlN8nImg from '../components/Images/assest images/case studies/White n8n.png';
import wlClickupImg from '../components/Images/assest images/case studies/White Clickup.png';
import endTallyImg from '../components/Images/assest images/case studies/End Tally.png';
import endPandaDocImg from '../components/Images/assest images/case studies/End Panda doc.png';
import endMondayImg from '../components/Images/assest images/case studies/End Monday.png';
import endStripeImg from '../components/Images/assest images/case studies/End Stripe.png';
import endMakeImg from '../components/Images/assest images/case studies/End Make.png';
import finQuickbookImg from '../components/Images/assest images/case studies/Financial Quickbook.png';
import unifiedJustCallImg from '../components/Images/assest images/case studies/Unified just call.png';

interface CaseStudyDetailProps {
  slug: string | null;
  onNavigate: (page: Page, slug?: string) => void;
}

const CaseStudyDetail: React.FC<CaseStudyDetailProps> = ({ slug, onNavigate }) => {
  const caseStudy = slug ? getCaseStudyBySlug(slug) : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!caseStudy && slug) {
      onNavigate('casestudies');
    }
  }, [caseStudy, slug, onNavigate]);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-soft px-6">
        <div className="text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary">Case study not found</h2>
          <button
            type="button"
            onClick={() => onNavigate('casestudies')}
            className="inline-flex items-center px-6 py-3 rounded-md bg-secondary text-white text-xs font-bold uppercase tracking-[0.2em]"
          >
            Back to Case Studies
          </button>
        </div>
      </div>
    );
  }

  const index = caseStudies.findIndex(c => c.slug === caseStudy.slug);
  const hasPrevious = index > 0;
  const hasNext = index < caseStudies.length - 1;
  const previous = hasPrevious ? caseStudies[index - 1] : null;
  const next = hasNext ? caseStudies[index + 1] : null;
  const isConversational = caseStudy.slug === 'conversational-ai-voice-systems';
  const isWhiteLabel = caseStudy.slug === 'white-label-technical-infrastructure';
  const isFieldService = caseStudy.slug === 'field-service-automation';
  const isMedicalFinops = caseStudy.slug === 'medical-clinic-finops-sync';
  const isUnifiedClinic = caseStudy.slug === 'unified-communication-clinic';
  const sectionImages = caseStudy.sections.filter(s => !!s.image).map(s => s.image as string);
  const galleryBase = [caseStudy.heroImage, ...sectionImages];
  const galleryFallback = [
    'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2000&auto=format&fit=crop'
  ];
  const galleryImages = isConversational 
    ? [convBotImg as unknown as string, convClosebotImg as unknown as string] 
    : isWhiteLabel
    ? [wlClickupImg as unknown as string, wlGHLImg as unknown as string, wlPabblyImg as unknown as string, wlZapierImg as unknown as string, wlN8nImg as unknown as string]
    : isFieldService
    ? [endTallyImg as unknown as string, endPandaDocImg as unknown as string, endMondayImg as unknown as string, endStripeImg as unknown as string, endMakeImg as unknown as string]
    : isMedicalFinops
    ? [finQuickbookImg as unknown as string]
    : isUnifiedClinic
    ? [unifiedJustCallImg as unknown as string]
    : (galleryBase.concat(galleryFallback)).slice(0, 4);
  const showSlider = galleryImages.length > 3;
  const marqueeImages = [...galleryImages, ...galleryImages];
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null);
    };
    window.addEventListener('keydown', onKey);
    register();
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-black text-white flex items-center">
        <div className="absolute inset-0">
          <img
            src={
              isConversational 
                ? (convClosebotImg as unknown as string) 
                : isWhiteLabel 
                ? (wlClickupImg as unknown as string) 
                : isFieldService
                ? (endTallyImg as unknown as string)
                : isMedicalFinops
                ? (finQuickbookImg as unknown as string)
                : isUnifiedClinic
                ? (unifiedJustCallImg as unknown as string)
                : caseStudy.heroImage
            }
            alt={caseStudy.title}
            className="w-full h-full object-cover scale-105 md:scale-100"
            loading="lazy"
            decoding="async"
            onError={(e) => { 
              const t = e.currentTarget as HTMLImageElement; 
              if (t.src !== (fallbackImage as unknown as string)) t.src = fallbackImage; 
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>
        <div className="relative z-10 w-full">
          <div className="container mx-auto px-6">
            <Reveal direction="up">
              <div className="flex flex-wrap items-center gap-3 text-[14px] font-normal capitalize text-white/70 font-urbanist mb-6">
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); onNavigate('home'); }}
                  className="hover:text-white transition-colors"
                >
                  Home
                </a>
                <span className="opacity-40">/</span>
                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); onNavigate('casestudies'); }}
                  className="hover:text-white transition-colors"
                >
                  Case Studies
                </a>
                <span className="opacity-40">/</span>
                <span className="line-clamp-1">{caseStudy.title}</span>
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.1}>
              <div className="inline-flex items-center px-3 py-1 rounded-sm border border-white/15 bg-white/5 text-[10px] font-bold uppercase mb-5">
                {caseStudy.category}
              </div>
            </Reveal>
            <Reveal direction="up" delay={0.15}>
              <h1 className="text-3xl xs:text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.9] mb-6 max-w-4xl">
                {caseStudy.title}
              </h1>
            </Reveal>
            <Reveal direction="up" delay={0.2}>
              <p className="max-w-2xl text-sm md:text-base text-white/80 leading-relaxed">
                {caseStudy.excerpt}
              </p>
            </Reveal>
            <Reveal direction="up" delay={0.25}>
              <div className="mt-8 flex flex-wrap gap-4 items-center">
                <button
                  type="button"
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-3 bg-primary text-white px-8 md:px-10 py-3 md:py-4 font-black uppercase text-[10px] rounded-md shadow-[0_12px_35px_rgba(32,188,97,0.45)] hover:shadow-none hover:bg-white hover:text-secondary transition-all"
                >
                  Start Similar Project
                  <Icons.ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,2fr)]">
          <div className="space-y-14">
            {caseStudy.sections.map((section, idx) => (
              <React.Fragment key={section.id}>
                <article className="space-y-6">
                  <Reveal direction="up">
                    <h2 className="text-xl md:text-2xl font-black uppercase text-secondary">
                      {section.heading}
                    </h2>
                  </Reveal>
                  <Reveal direction="up" delay={0.05}>
                    <p className="text-sm md:text-base leading-relaxed text-zinc-700 break-words">
                      {section.body}
                    </p>
                  </Reveal>
                  {(() => {
                    const imgSrc = isConversational
                      ? (idx === 0 ? (convBotImg as unknown as string) : idx === 1 ? (convClosebotImg as unknown as string) : undefined)
                      : isWhiteLabel
                      ? ([wlClickupImg, wlGHLImg, wlPabblyImg, wlZapierImg, wlN8nImg][idx] as unknown as string | undefined)
                      : isFieldService
                      ? ([endTallyImg, endPandaDocImg, endMondayImg, endStripeImg, endMakeImg][idx] as unknown as string | undefined)
                      : isMedicalFinops
                      ? (idx === 0 ? (finQuickbookImg as unknown as string) : undefined)
                      : isUnifiedClinic
                      ? (idx === 0 ? (unifiedJustCallImg as unknown as string) : undefined)
                      : (section.image ?? undefined);
                    return imgSrc ? (
                    <Reveal direction="up" delay={0.1}>
                      <div className="mt-4 rounded-lg overflow-hidden aspect-[16/10]">
                        <img
                          src={imgSrc}
                          alt={section.heading}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => { 
                            const t = e.currentTarget as HTMLImageElement; 
                            t.src = (fallbackImage as unknown as string); 
                          }}
                        />
                      </div>
                    </Reveal>
                    ) : null;
                  })()}
                </article>
                {showSlider && idx === caseStudy.sections.length - 3 && (
                  <Reveal direction="up" delay={0.1}>
                    <div className="mt-6">
                      <div className="hidden lg:block">
                        <swiper-container
                          speed="6000"
                          loop="true"
                          slides-per-view="3"
                          space-between="16"
                          autoplay-delay="0"
                          autoplay-disable-on-interaction="false"
                          autoplay-pause-on-mouse-enter="true"
                          allow-touch-move="false"
                        >
                          {galleryImages.map((img, i) => (
                            <swiper-slide key={`${i}-${img}`}>
                              <div className="aspect-[16/10] rounded-[4px] overflow-hidden">
                                <img
                                  src={img}
                                  alt={caseStudy.title}
                                  className="w-full h-full object-cover cursor-pointer"
                                  onClick={() => setLightboxIndex(i)}
                                  loading="lazy"
                                  decoding="async"
                                  onError={(e) => { 
                                    const t = e.currentTarget as HTMLImageElement; 
                                    t.src = (fallbackImage as unknown as string); 
                                  }}
                                />
                              </div>
                            </swiper-slide>
                          ))}
                        </swiper-container>
                      </div>
                      <div className="grid grid-cols-2 gap-3 lg:hidden">
                        {galleryImages.map((img, i) => (
                          <div key={`m-${i}-${img}`} className="aspect-[16/10] rounded-[4px] overflow-hidden">
                            <img
                              src={img}
                              alt={caseStudy.title}
                              className="w-full h-full object-cover cursor-pointer"
                              onClick={() => setLightboxIndex(i)}
                              loading="lazy"
                              decoding="async"
                              onError={(e) => { 
                                const t = e.currentTarget as HTMLImageElement; 
                                t.src = (fallbackImage as unknown as string); 
                              }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                )}
              </React.Fragment>
            ))}
          </div>

          <aside className="space-y-8">
            <div className="rounded-b-xl rounded-tl-[0px] rounded-tr-[0px] border border-black/5 border-t-[3px] border-t-primary bg-white p-6 md:p-8">
              <h3 className="text-xs font-bold uppercase text-secondary/60 mb-4">
                Tools Used
              </h3>
              <div className="flex flex-wrap gap-2">
                {caseStudy.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full border border-primary bg-white text-black text-[10px] font-semibold uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-black/5 bg-zinc-50 p-6 md:p-8">
              <h3 className="text-xs font-bold uppercase text-secondary/60 mb-4">
                Snapshot
              </h3>
              <div className="space-y-4">
                {caseStudy.stats.map(stat => (
                  <div key={stat.label} className="border-b border-black/5 last:border-b-0 pb-4 last:pb-0">
                    <div className="text-[11px] uppercase text-secondary/50 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-lg font-semibold text-secondary">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-black/5 bg-white p-6 md:p-8 space-y-4">
              <h3 className="text-xs font-bold uppercase text-secondary/60">
                Next steps
              </h3>
              <p className="text-sm text-zinc-600 leading-relaxed">
                Want a similar system designed around your pipeline, tools, and team structure?
              </p>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="w-full mt-2 bg-secondary text-white px-6 py-3 rounded-md text-[10px] font-black uppercase hover:bg-primary hover:text-secondary transition-colors"
              >
                Talk To Engineering
              </button>
            </div>

            {(previous || next) && (
              <div className="rounded-b-xl rounded-tl-[0px] rounded-tr-[0px] border border-black/5 border-t-[3px] border-t-primary bg-white p-6 md:p-8 space-y-4">
                <div className="flex items-center">
                  <h3 className="text-left text-xs font-bold uppercase text-secondary/60">
                    Explore more
                  </h3>
                </div>
                <div className="space-y-3">
                  {previous && (
                    <button
                      type="button"
                      onClick={() => onNavigate('case', previous.slug)}
                      className="w-full group flex items-center gap-3 rounded-lg border border-black/5 bg-white p-3 hover:bg-zinc-50 transition-colors"
                    >
                      <div className="w-16 shrink-0 rounded-md overflow-hidden border border-black/5 aspect-[16/10]">
                        <img 
                          src={previous.heroImage} 
                          alt={previous.title} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => { 
                            const t = e.currentTarget as HTMLImageElement; 
                            t.src = (fallbackImage as unknown as string); 
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] uppercase text-secondary/50">Previous</div>
                        <div className="text-left text-sm font-semibold text-secondary line-clamp-2">{previous.title}</div>
                      </div>
                      <div className="text-secondary/40 group-hover:text-secondary">
                        <Icons.ArrowRight size={18} />
                      </div>
                    </button>
                  )}
                  {next && (
                    <button
                      type="button"
                      onClick={() => onNavigate('case', next.slug)}
                      className="w-full group flex items-center gap-3 rounded-lg border border-black/5 bg-white p-3 hover:bg-zinc-50 transition-colors"
                    >
                      <div className="w-16 shrink-0 rounded-md overflow-hidden border border-black/5 aspect-[16/10]">
                        <img 
                          src={next.heroImage} 
                          alt={next.title} 
                          className="w-full h-full object-cover"
                          loading="lazy"
                          decoding="async"
                          onError={(e) => { 
                            const t = e.currentTarget as HTMLImageElement; 
                            t.src = (fallbackImage as unknown as string); 
                          }}
                        />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] uppercase text-secondary/50">Next</div>
                        <div className="text-left text-sm font-semibold text-secondary line-clamp-2">{next.title}</div>
                      </div>
                      <div className="text-secondary/40 group-hover:text-secondary">
                        <Icons.ArrowRight size={18} />
                      </div>
                    </button>
                  )}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[1000] bg-black/80 flex items-center justify-center"
          onClick={() => setLightboxIndex(null)}
        >
          <img
            src={galleryImages[lightboxIndex]}
            alt={caseStudy.title}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-[4px]"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute top-6 right-6 px-3 py-2 rounded-[4px] bg-black/60 text-white"
            onClick={() => setLightboxIndex(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default CaseStudyDetail;
