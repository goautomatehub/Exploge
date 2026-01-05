
import React from 'react';

const reviews = [
  { text: "Exploge engineered the unified structure our team has always needed.", author: "Operations Director" },
  { text: "We improved our workflow efficiency by 22% in the first quarter.", author: "Agency Principal" },
  { text: "The custom automation bridges they built are incredibly robust.", author: "Project Lead" },
  { text: "Operational transparency is at an all-time high since their audit.", author: "Management Director" },
  { text: "An engineering team that truly understands modern business scaling.", author: "Executive Officer" },
  { text: "Our internal automation workflows are now faster and more reliable.", author: "Workflow Manager" },
  { text: "System onboarding time has decreased from weeks to days.", author: "Partner" },
  { text: "The best investment we've made for our internal organization.", author: "Chief Operations Officer" },
  { text: "Exploge engineers support our growth every step of the way.", author: "Head of Strategy" },
];

export const ReviewSlider: React.FC = () => {
  return (
    <div className="bg-secondary py-4 md:py-6 overflow-hidden border-y border-white/5 relative">
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-secondary to-transparent z-10"></div>
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-secondary to-transparent z-10"></div>
      
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex shrink-0">
            {reviews.map((review, idx) => (
              <div key={idx} className="mx-4 md:mx-8 flex items-center gap-4 md:gap-6">
                <span className="text-white/40 text-[8px] md:text-[9px] uppercase font-bold tracking-widest">Verified</span>
                <p className="text-white font-medium text-xs md:text-sm tracking-tight">"{review.text}"</p>
                <span className="text-primary font-bold text-[8px] md:text-[9px] uppercase tracking-widest">{review.author}</span>
                <div className="w-1 h-1 bg-primary rounded-full mx-1 md:mx-2"></div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
          will-change: transform;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};
