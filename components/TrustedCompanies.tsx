import React from 'react';
import { Reveal } from './Reveal';

const companies = [
  { name: "Velocity Digital", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Meta-Logo.png" }, // Placeholders for professional look
  { name: "Nova Systems", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Apex Creative", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  { name: "Nexus Lab", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tesla_Motors.svg" },
  { name: "Orbit Agency", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg" },
  { name: "Prism Dev", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
  { name: "Evolve Marketing", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" },
  { name: "Summit Tech", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
];

export const TrustedCompanies: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-50/50 border-y border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <Reveal direction="up">
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] font-bold text-zinc-400 mono uppercase tracking-[0.4em] mb-4">Strategic Partnerships</span>
            <h3 className="text-xl font-black uppercase tracking-tight text-secondary/60">
              Trusted by Global Industry Leaders
            </h3>
          </div>
        </Reveal>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee-fast whitespace-nowrap items-center py-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {companies.map((company, idx) => (
                <div key={idx} className="mx-12 md:mx-20 flex items-center justify-center">
                  <img 
                    src={company.logo} 
                    alt={company.name} 
                    className="h-6 md:h-8 w-auto object-contain opacity-80 hover:opacity-100 transition-all duration-500 cursor-default"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Gradient Faders */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-zinc-50/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-zinc-50/50 to-transparent z-10 pointer-events-none"></div>
      </div>

      <style>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 30s linear infinite;
        }
        .animate-marquee-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};