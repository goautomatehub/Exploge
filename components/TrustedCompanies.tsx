import React from 'react';
import { Reveal } from './Reveal';
import { Icons } from './Icons';

const tools = [
  { name: "Make.com", icon: Icons.Make },
  { name: "Zapier", icon: Icons.Zapier },
  { name: "Monday.com", icon: Icons.Monday },
  { name: "Asana", icon: Icons.Asana },
  { name: "ClickUp", icon: Icons.ClickUp },
  { name: "WordPress", icon: Icons.WordPress },
  { name: "GoHighLevel", icon: Icons.GoHighLevel },
  { name: "Pabbly Connect", icon: Icons.Pabbly },
  { name: "CloseBot", icon: Icons.CloseBot },
  { name: "HubSpot", icon: Icons.HubSpot },
  { name: "Airtable", icon: Icons.Airtable },
  { name: "n8n", icon: Icons.N8N },
  { name: "ManyChat", icon: Icons.ManyChat },
  { name: "Twilio", icon: Icons.Twilio },
  { name: "WooCommerce", icon: Icons.WooCommerce },
  { name: "Slack", icon: Icons.Slack },
  { name: "Trello", icon: Icons.Trello },
  { name: "Vapi", icon: Icons.Vapi },
  { name: "Field Router", icon: Icons.FieldRouter },
  { name: "PhoneBurner", icon: Icons.PhoneBurner },
  { name: "Pabau", icon: Icons.Pabau },
  { name: "Notion", icon: Icons.Notion },
  { name: "Basecamp", icon: Icons.Basecamp },
  { name: "Salesforce", icon: Icons.Salesforce },
  { name: "Zoho", icon: Icons.Zoho },
  { name: "Pipedrive", icon: Icons.Pipedrive },
  { name: "ActiveCampaign", icon: Icons.ActiveCampaign },
  { name: "Google Sheets", icon: Icons.GoogleSheets },
  { name: "Webflow", icon: Icons.Webflow },
  { name: "Wix", icon: Icons.Wix },
  { name: "Zendesk", icon: Icons.Zendesk },
  { name: "Freshdesk", icon: Icons.Freshdesk },
  { name: "QuickBooks", icon: Icons.QuickBooks },
  { name: "Postman", icon: Icons.Postman },
  { name: "Mailchimp", icon: Icons.Mailchimp },
];

export const TrustedCompanies: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-zinc-50 overflow-hidden relative">
      <div className="container mx-auto px-6 mb-8 md:mb-12">
        <Reveal direction="up">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <span className="text-2xl text-black font-bold sub-heading leading-tight">
              Connecting your workflow with <span className="text-primary">powerful</span> integrations.
            </span>
          </div>
        </Reveal>
      </div>

      <div className="relative flex overflow-x-hidden">
        <div className="flex animate-marquee-fast whitespace-nowrap items-center py-4 w-max">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex shrink-0 items-center">
              {tools.map((tool, idx) => (
                <a href="#contact" key={idx} className="mx-4 xs:mx-5 md:mx-8 lg:mx-10 flex flex-col items-center justify-center gap-2 group cursor-pointer">
                  <div className="h-6 w-6 xs:h-7 xs:w-7 md:h-9 md:w-9 transition-all duration-500 flex items-center justify-center">
                    <tool.icon className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-zinc-400 uppercase group-hover:text-secondary transition-all duration-300 text-center">
                    {tool.name}
                  </span>
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Enhanced Gradient Faders for Blur Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-zinc-50 via-zinc-50/50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-zinc-50 via-zinc-50/50 to-transparent z-10 pointer-events-none"></div>
      </div>

      {/* Bottom Gradient for Seamless Transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>

      <style>{`
        @keyframes marquee-fast {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 80s linear infinite;
          will-change: transform;
        }
        .animate-marquee-fast:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};