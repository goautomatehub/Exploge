import React from 'react';
import { Reveal } from './Reveal';
import { Icons } from './Icons';

const tools = [
  { name: "Zapier", icon: Icons.Zapier },
  { name: "Make", icon: Icons.Make },
  { name: "GoHighLevel", icon: Icons.GoHighLevel },
  { name: "Airtable", icon: Icons.Airtable },
  { name: "n8n", icon: Icons.N8N },
  { name: "Monday", icon: Icons.Monday },
  { name: "ClickUp", icon: Icons.ClickUp },
  { name: "HubSpot", icon: Icons.HubSpot },
  { name: "Asana", icon: Icons.Asana },
  { name: "Pabbly", icon: Icons.Pabbly },
];

export const TrustedCompanies: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-50/50 border-y border-black/5 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <Reveal direction="up">
          <div className="flex flex-col items-center text-center">
            <span className="text-[10px] font-bold text-primary mono uppercase tracking-[0.4em] mb-4">Ecosystem Mastery</span>
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-secondary/80">
              Powering Growth With Industry-Leading Tools
            </h3>
          </div>
        </Reveal>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee-fast whitespace-nowrap items-center py-4">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0">
              {tools.map((tool, idx) => (
                <div key={idx} className="mx-6 xs:mx-8 md:mx-16 lg:mx-20 flex items-center gap-3">
                  <div className="h-6 w-6 xs:h-7 xs:w-7 md:h-9 md:w-9 transition-all duration-500">
                    <tool.icon className="w-full h-full object-contain" />
                  </div>
                  <span className="text-sm md:text-lg font-bold text-zinc-400 uppercase tracking-tighter group-hover:text-secondary transition-colors">
                    {tool.name}
                  </span>
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
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 30s linear infinite;
          will-change: transform;
        }
        .animate-marquee-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};