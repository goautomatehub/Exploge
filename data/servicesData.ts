import React from 'react';
import { 
  Target, 
  Users, 
  Layers, 
  Briefcase, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  BarChart 
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
    slug: "workflow-automation",
    title: "Workflow Automation",
    icon: React.createElement(Target),
    shortDesc: "Automate manual tasks using Zapier, Make, and n8n to save time and reduce errors.",
    fullDesc: "Our workflow automation service focuses on identifying repetitive, manual tasks within your agency and replacing them with robust, automated systems. We don't just connect apps; we design entire ecosystems that move data seamlessly, trigger actions across your stack, and ensure your team can focus on high-value creative work instead of data entry.",
    benefits: [
      "Eliminate manual data entry errors",
      "Save up to 20+ hours per week per team member",
      "Real-time data synchronization across all platforms",
      "Scalable operations that grow without adding headcount"
    ],
    tools: ["Zapier", "Make (Integromat)", "n8n", "Pabbly Connect"],
    process: [
      { title: "Audit", description: "We map out your current manual processes and identify bottlenecks." },
      { title: "Design", description: "We architect a multi-step automation workflow tailored to your needs." },
      { title: "Build", description: "Our engineers build and test the automations in a staging environment." },
      { title: "Deploy", description: "We launch the systems and provide team training and documentation." }
    ]
  },
  {
    id: "02",
    slug: "crm-setup",
    title: "CRM Setup & Optimization",
    icon: React.createElement(Users),
    shortDesc: "Complete setup and customization of GoHighLevel and Closebot for your business.",
    fullDesc: "A CRM is the heart of your sales operation. we specialize in setting up and optimizing GoHighLevel and Closebot to create a high-performance sales machine. From pipeline architecture to automated follow-ups and lead scoring, we ensure every lead is nurtured and no opportunity falls through the cracks.",
    benefits: [
      "Centralized lead and client management",
      "Automated appointment scheduling and reminders",
      "Advanced lead scoring and tracking",
      "Unified communication across SMS, Email, and Social"
    ],
    tools: ["GoHighLevel", "Closebot", "HubSpot", "Salesforce"],
    process: [
      { title: "Architecture", description: "Defining your sales stages and lead flow requirements." },
      { title: "Customization", description: "Setting up custom fields, pipelines, and tags." },
      { title: "Automation", description: "Building nurturing sequences and appointment triggers." },
      { title: "Migration", description: "Seamlessly moving your existing data into the new system." }
    ]
  },
  {
    id: "03",
    slug: "project-management",
    title: "Project Management Systems",
    icon: React.createElement(Layers),
    shortDesc: "Organize your team's work efficiently on Monday, ClickUp, and Asana.",
    fullDesc: "Chaos is the enemy of scaling. We build structured project management environments that provide total visibility into your agency's operations. Whether you prefer ClickUp, Monday, or Asana, we configure the boards, automations, and dashboards you need to deliver projects on time and under budget.",
    benefits: [
      "100% visibility into project status and team capacity",
      "Automated task creation and status updates",
      "Standardized SOPs integrated into your workflow",
      "Reduced internal meetings and status updates"
    ],
    tools: ["ClickUp", "Monday.com", "Asana", "Notion"],
    process: [
      { title: "Workflow Audit", description: "Reviewing how your team currently manages tasks." },
      { title: "Workspace Build", description: "Creating the structure of folders, lists, and boards." },
      { title: "Automation", description: "Setting up triggers for task dependencies and handoffs." },
      { title: "Reporting", description: "Designing executive dashboards for at-a-glance oversight." }
    ]
  },
  {
    id: "04",
    slug: "ai-sales-agents",
    title: "AI Sales Agents",
    icon: React.createElement(Briefcase),
    shortDesc: "Build auto-responding sales agents using Closebot and OpenAI technology.",
    fullDesc: "Never let a lead go cold. Our AI Sales Agents work 24/7 to qualify leads, answer questions, and book appointments. Using advanced LLMs integrated directly into your CRM, these agents provide human-like interactions that significantly increase your conversion rates without increasing your payroll.",
    benefits: [
      "Instant response times to all incoming inquiries",
      "Consistent lead qualification based on your criteria",
      "Direct integration with your calendar for bookings",
      "Multilingual support for global operations"
    ],
    tools: ["OpenAI API", "Closebot", "Vapi", "Air AI"],
    process: [
      { title: "Persona Design", description: "Defining the agent's tone, knowledge base, and goals." },
      { title: "Knowledge Integration", description: "Feeding your business data into the AI model." },
      { title: "Logic Mapping", description: "Creating the 'if-this-then-that' booking flows." },
      { title: "Optimization", description: "Continuous monitoring and refining of AI responses." }
    ]
  },
  {
    id: "05",
    slug: "sales-funnels",
    title: "High-Converting Sales Funnels",
    icon: React.createElement(TrendingUp),
    shortDesc: "Create high-converting landing pages on GoHighLevel and WordPress.",
    fullDesc: "Traffic is useless without conversion. We design and build high-performance sales funnels that guide prospects from initial interest to final purchase. Combining psychological triggers with lightning-fast performance, our funnels are optimized for maximum ROI on your ad spend.",
    benefits: [
      "Optimized for high conversion rates",
      "Mobile-first, lightning-fast loading speeds",
      "Integrated A/B testing and analytics",
      "Seamless integration with your CRM and email marketing"
    ],
    tools: ["GoHighLevel", "WordPress", "ClickFunnels", "Instapage"],
    process: [
      { title: "Strategy", description: "Mapping out the customer journey and offer structure." },
      { title: "Copy & Design", description: "Crafting persuasive messaging and high-end visuals." },
      { title: "Development", description: "Building the funnel with focus on speed and UX." },
      { title: "Tracking", description: "Setting up conversion pixels and heatmaps." }
    ]
  },
  {
    id: "06",
    slug: "app-integrations",
    title: "App Integrations",
    icon: React.createElement(Shield),
    shortDesc: "Connect different apps like Stripe and Google Sheets using Pabbly and Make.",
    fullDesc: "Break down the silos in your business. We connect your disconnected apps into a unified system. Whether it's syncing your payment gateway with your accounting software or connecting your lead source with your fulfillment tracker, we ensure data flows where it needs to be, when it needs to be there.",
    benefits: [
      "Unified data across your entire tech stack",
      "Elimination of manual data migration tasks",
      "Automated financial and operational reporting",
      "Reduced software fatigue for your team"
    ],
    tools: ["Stripe API", "Google Sheets", "QuickBooks", "Slack"],
    process: [
      { title: "Endpoint Audit", description: "Identifying all the data points that need to sync." },
      { title: "API Mapping", description: "Designing the technical connection between platforms." },
      { title: "Build", description: "Developing custom integration scripts or middleware." },
      { title: "Validation", description: "Rigorous testing of data integrity and edge cases." }
    ]
  },
  {
    id: "07",
    slug: "web-development",
    title: "Web Development",
    icon: React.createElement(CheckCircle),
    shortDesc: "Build fast and responsive business websites using WordPress.",
    fullDesc: "Your website is your digital storefront. We build modern, responsive, and SEO-optimized websites that don't just look great—they perform. Using the latest web technologies, we ensure your site is fast, secure, and built to convert visitors into clients.",
    benefits: [
      "Modern, professional design that builds trust",
      "Optimized for SEO and search engine visibility",
      "Fully responsive for all mobile and tablet devices",
      "Easy-to-use CMS for content updates"
    ],
    tools: ["WordPress", "Elementor", "Next.js", "Tailwind CSS"],
    process: [
      { title: "Discovery", description: "Understanding your brand, goals, and target audience." },
      { title: "UI/UX Design", description: "Creating interactive prototypes and visual mockups." },
      { title: "Development", description: "Coding the site with focus on performance and clean code." },
      { title: "Launch", description: "Domain setup, hosting optimization, and final QA." }
    ]
  },
  {
    id: "08",
    slug: "operations-audit",
    title: "Operations Audit",
    icon: React.createElement(BarChart),
    shortDesc: "Review your current tools and suggest better systems for your business operations.",
    fullDesc: "You can't fix what you can't see. Our Operations Audit is a deep dive into your agency's tech stack and internal processes. We identify inefficiencies, tool redundancies, and automation opportunities, providing you with a clear roadmap to operational excellence and increased profitability.",
    benefits: [
      "Comprehensive report on operational bottlenecks",
      "Identification of cost-saving tool consolidation",
      "Strategic roadmap for future scaling",
      "Benchmarks against industry-leading agencies"
    ],
    tools: ["Process Mapping", "Cost Analysis", "Stack Audit", "Capacity Planning"],
    process: [
      { title: "Data Gathering", description: "Accessing your current systems and interviewing leads." },
      { title: "Analysis", description: "Evaluating tool usage, costs, and process friction." },
      { title: "Reporting", description: "Presenting findings and prioritized recommendations." },
      { title: "Roadmap", description: "Creating a step-by-step implementation plan for growth." }
    ]
  }
];
