import React from 'react';
import { 
  Cpu, 
  Database, 
  Mic, 
  BrainCircuit, 
  Globe, 
  Link2, 
  RefreshCw, 
  Code2 
} from 'lucide-react';

export interface ServiceDetail {
  id: string;
  slug: string;
  title: string;
  icon: React.ReactNode;
  shortDesc: string;
  fullDesc: string;
  benefits: string[];
  tools: string[];
  process: {
    title: string;
    description: string;
  }[];
}

export const servicesData: ServiceDetail[] = [
  {
    id: "01",
    slug: "automation-service",
    title: "Automation Services",
    icon: React.createElement(Cpu),
    shortDesc: "End-to-end business automation to eliminate manual tasks and boost efficiency.",
    fullDesc: "Our Automation Services are designed to transform your business operations by identifying repetitive manual tasks and replacing them with intelligent, automated workflows. We leverage industry-leading tools like Make, Zapier, and n8n to create a seamless ecosystem where data moves effortlessly between your applications, allowing your team to focus on high-impact strategic work.",
    benefits: [
      "Up to 80% reduction in manual data entry",
      "Eliminate human error in critical processes",
      "Scalable operations that handle growth effortlessly",
      "24/7 process execution without downtime"
    ],
    tools: ["Make (Integromat)", "Zapier", "n8n", "Pabbly Connect"],
    process: [
      { title: "Process Audit", description: "Mapping out current manual tasks and identifying automation targets." },
      { title: "Architecture", description: "Designing multi-step workflows that connect your tech stack." },
      { title: "Build & Test", description: "Developing robust automations with comprehensive error handling." },
      { title: "Deployment", description: "Launching live systems with monitoring and team training." }
    ]
  },
  {
    id: "02",
    slug: "crm-setup-optimized",
    title: "CRM Setup and Optimized",
    icon: React.createElement(Database),
    shortDesc: "Strategic CRM configuration and optimization for maximum sales performance.",
    fullDesc: "A powerful CRM is only effective if it's optimized for your specific sales cycle. We specialize in setting up and fine-tuning platforms like GoHighLevel, HubSpot, Salesforce, Zoho, and Monday.com to ensure they act as a true engine for growth. From pipeline design to automated lead nurturing and advanced reporting, we build a CRM environment that empowers your sales team and provides clear visibility into your revenue.",
    benefits: [
      "Streamlined sales pipelines and lead management",
      "Automated follow-up sequences that never miss a lead",
      "Advanced reporting and data-driven insights",
      "Improved lead-to-deal conversion rates"
    ],
    tools: ["GoHighLevel", "HubSpot", "Salesforce", "Pipedrive", "Monday.com", "Airtable", "Odoo", "Pabau", "Zoho", "QuickBooks"],
    process: [
      { title: "Strategy", description: "Defining your unique sales stages and data requirements." },
      { title: "Setup", description: "Configuring pipelines, custom fields, and user permissions." },
      { title: "Optimization", description: "Implementing automation for lead scoring and distribution." },
      { title: "Training", description: "Ensuring your team knows exactly how to leverage the new system." }
    ]
  },
  {
    id: "03",
    slug: "voice-ai-chat-bots",
    title: "Voice AI and ChatBots",
    icon: React.createElement(Mic),
    shortDesc: "Intelligent AI-driven voice and chat solutions for 24/7 customer engagement.",
    fullDesc: "Engage your customers instantly across all channels with advanced Voice AI and intelligent ChatBots. We build conversational AI solutions that handle inquiries, qualify leads, and even book appointments in real-time. Whether it's a sophisticated web-based ChatBot or a human-like voice agent, our solutions provide immediate value to your customers while significantly reducing your support overhead.",
    benefits: [
      "Instant 24/7 customer support and lead qualification",
      "Significant reduction in manual support ticket volume",
      "Seamless integration with your CRM and calendar",
      "Consistent brand voice across all interactions"
    ],
    tools: ["Vapi", "OpenAI", "ManyChat", "Closebot"],
    process: [
      { title: "Flow Design", description: "Mapping out conversational paths and user intents." },
      { title: "AI Training", description: "Feeding your business knowledge base into the AI models." },
      { title: "Integration", description: "Connecting bots to your website, CRM, and communication tools." },
      { title: "Testing", description: "Rigorous QA to ensure natural and accurate interactions." }
    ]
  },
  {
    id: "04",
    slug: "self-selling-ai",
    title: "Self Selling AI",
    icon: React.createElement(BrainCircuit),
    shortDesc: "Autonomous AI agents designed to handle the entire sales process from lead to close.",
    fullDesc: "Experience the future of sales with Self-Selling AI. We develop autonomous AI agents that don't just respond—they sell. These agents are trained on your specific products, pricing, and sales psychology to proactively engage leads, overcome objections, and drive conversions without human intervention. It's like having your top-performing sales rep working 24/7 across every digital touchpoint.",
    benefits: [
      "Proactive lead engagement and conversion",
      "Scalable sales capacity without increasing headcount",
      "Consistent application of your best sales scripts",
      "Real-time learning and optimization based on results"
    ],
    tools: ["Custom AI Agents", "OpenAI", "Anthropic", "LangChain"],
    process: [
      { title: "Sales Blueprint", description: "Analyzing your top-performing sales interactions." },
      { title: "Agent Training", description: "Training AI on your product knowledge and sales tactics." },
      { title: "Deployment", description: "Integrating agents into your sales funnels and channels." },
      { title: "Performance", description: "Monitoring conversion rates and refining AI logic." }
    ]
  },
  {
    id: "05",
    slug: "web-development",
    title: "Web Development",
    icon: React.createElement(Globe),
    shortDesc: "Modern, high-performance websites built for speed, SEO, and conversions.",
    fullDesc: "Your website is the foundation of your digital presence. We build premium, custom websites that combine stunning design with technical excellence. Using powerful platforms like WordPress, GoHighLevel, and Wix, we ensure your site is lightning-fast, mobile-perfect, and strategically engineered to turn visitors into loyal customers.",
    benefits: [
      "High-speed performance and core web vitals optimization",
      "Custom designs that reflect your unique brand identity",
      "SEO-ready architecture for maximum visibility",
      "Scalable and secure web infrastructure"
    ],
    tools: ["WordPress", "GoHighLevel", "Wix"],
    process: [
      { title: "Design", description: "Creating interactive prototypes and high-fidelity mockups." },
      { title: "Development", description: "Building the site with clean, optimized code." },
      { title: "Launch", description: "Comprehensive testing, deployment, and performance tuning." },
      { title: "Growth", description: "Ongoing support and optimization for search rankings." }
    ]
  },
  {
    id: "06",
    slug: "saas-integration",
    title: "SaaS Integration",
    icon: React.createElement(Link2),
    shortDesc: "Seamlessly connecting your SaaS stack for unified data and streamlined workflows.",
    fullDesc: "Stop working in silos. Our SaaS Integration service connects all your software tools into one cohesive system. We ensure that data flows instantly between your marketing, sales, project management, and accounting tools. By creating a unified tech stack, we eliminate manual data entry and provide you with a 'single source of truth' for your entire business.",
    benefits: [
      "Unified data across all business departments",
      "Eliminate manual data synchronization tasks",
      "Real-time reporting across multiple platforms",
      "Improved team collaboration and transparency"
    ],
    tools: ["Make", "Zapier", "Custom APIs", "Stripe"],
    process: [
      { title: "Stack Audit", description: "Identifying all SaaS tools and data connection points." },
      { title: "Mapping", description: "Designing the data flow between integrated systems." },
      { title: "Integration", description: "Building the bridges between your software applications." },
      { title: "Verification", description: "Ensuring data integrity and real-time sync accuracy." }
    ]
  },
  {
    id: "07",
    slug: "third-party-syncronization",
    title: "Third Party Syncronization",
    icon: React.createElement(RefreshCw),
    shortDesc: "Real-time data synchronization between your internal systems and external partners.",
    fullDesc: "Keep your business in sync with the world. Our Third-Party Synchronization service ensures that your internal data perfectly matches external platforms, vendor systems, and marketplace listings. Whether you're syncing inventory across multiple channels or ensuring client data matches external databases, we build robust sync engines that keep your information accurate and up-to-date everywhere.",
    benefits: [
      "Guaranteed data accuracy across external platforms",
      "Real-time inventory and pricing synchronization",
      "Reduced operational friction with partners and vendors",
      "Automated updates across third-party marketplaces"
    ],
    tools: ["Custom Middleware", "Webhooks", "Database Sync", "APIs"],
    process: [
      { title: "Endpoint Audit", description: "Identifying internal and external data sources." },
      { title: "Sync Logic", description: "Defining rules for data priority and conflict resolution." },
      { title: "Build", description: "Developing the synchronization engine and monitoring tools." },
      { title: "Monitoring", description: "Continuous health checks for data consistency." }
    ]
  },
  {
    id: "08",
    slug: "api-integration",
    title: "API Integration",
    icon: React.createElement(Code2),
    shortDesc: "Custom API development and integration for advanced technical requirements.",
    fullDesc: "When off-the-shelf connectors aren't enough, our API Integration service provides custom-coded solutions for your most complex technical challenges. We specialize in building and integrating custom APIs that allow your systems to communicate in ways that standard tools can't. From custom webhooks to complex middleware, we bridge the gap between any two systems with precision and security.",
    benefits: [
      "Customized connections for unique business needs",
      "Enhanced security and data control",
      "High-performance data transfer for large volumes",
      "Future-proof technical architecture"
    ],
    tools: ["REST APIs", "GraphQL", "Node.js", "Python"],
    process: [
      { title: "Technical Req", description: "Defining the specific data and action requirements." },
      { title: "Development", description: "Coding custom API endpoints and middleware." },
      { title: "Security", description: "Implementing robust authentication and encryption." },
      { title: "Testing", description: "Load testing and edge-case validation for reliability." }
    ]
  }
];
