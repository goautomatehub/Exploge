export interface CaseStudySection {
  id: string;
  heading: string;
  body: string;
  image?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  heroImage: string;
  excerpt: string;
  tags: string[];
  stats: {
    label: string;
    value: string;
  }[];
  sections: CaseStudySection[];
}

// Local hero images for grid cards
import finQuickbookImg from '../components/Images/assest images/case studies/Financial Quickbook.png';
import unifiedJustCallImg from '../components/Images/assest images/case studies/Unified just call.png';
import endTallyImg from '../components/Images/assest images/case studies/End Tally.png';
import wlClickupImg from '../components/Images/assest images/case studies/White Clickup.png';
import convClosebotImg from '../components/Images/assest images/case studies/Conversation Closebot.png';
import misterYScreenshot from '../components/Images/assest images/case studies/screencapture-misteryfl-2026-02-24-21_53_27.png';
import misterYBanner from '../components/Images/assest images/case studies/Screenshot 2026-02-24 221219.png';
import unifiedClinicBanner from '../components/Images/assest images/case studies/Unified Communication System for a Clinic.png';
import fieldServiceBanner4 from '../components/Images/assest images/case studies/End-to-End Field Service Automation 4.png';
import whiteLabelBanner from '../components/Images/assest images/case studies/White-Label Technical Infrastructure for Agencies.png';
import conversationalBanner from '../components/Images/assest images/case studies/Conversational AI & Voice Systems for Business.png';
import medicalFinopsBanner from '../components/Images/assest images/case studies/Financial & Operations Sync for a Medical Clinic.png';

export const caseStudies: CaseStudy[] = [
  {
    slug: 'medical-clinic-finops-sync',
    title: 'Financial & Operations Sync for a Medical Clinic',
    category: 'Automation',
    heroImage: medicalFinopsBanner as unknown as string,
    excerpt: 'Bi-directional sync across Pabau and QuickBooks, automated payroll, and enforced pre-surgery payment deadlines.',
    tags: ['Make.com', 'Pabau', 'QuickBooks Online', 'Google Sheets', 'Gmail', 'Google Chat'],
    stats: [
      { label: 'Client Industry', value: 'Healthcare & Aesthetics' },
      { label: 'Focus Areas', value: 'Financial Integrity, Payroll Automation, Strategic Scheduling' },
      { label: 'Weekly Time Saved', value: '15+ hours' },
      { label: 'Capacity Increase', value: '3x' },
      { label: 'Payment Deadline', value: '14 days pre-surgery' }
    ],
    sections: [
      {
        id: 'overview',
        heading: 'Financial & Operations Sync for a Medical Clinic',
        body: 'A high-volume hair transplant clinic approached Exploge with a critical problem. Their clinical system and accounting software were not communicating properly, payroll was handled manually, and payment enforcement before surgery was unreliable. The business was growing, but its backend operations were fragile. Without structural automation, scaling would only multiply errors.',
        image: 'https://images.pexels.com/photos/8460159/pexels-photo-8460159.jpeg?auto=compress&cs=tinysrgb&w=2000'
      },
      {
        id: 'core-problem',
        heading: 'The Core Problem: Disconnected Systems',
        body: 'The clinic relied on Pabau for patient management and QuickBooks Online for accounting. Because these systems were not synchronized, staff were manually recreating invoices, copying line items, and reapplying tax structures. This duplication wasted hours every week and increased the risk of financial inconsistencies. Payment statuses, refunds, and credit notes were also not aligned between platforms. This created accounting discrepancies and made financial reporting unreliable. Revenue leakage was not theoretical, it was happening through process gaps.'
      },
      {
        id: 'payroll-bottlenecks',
        heading: 'Payroll Bottlenecks and Human Dependency',
        body: 'Salary increments based on performance and tenure were calculated manually in spreadsheets. This created delays, inconsistencies, and unnecessary back-and-forth communication. Every quarterly update required manual intervention, which meant payroll accuracy depended entirely on human discipline. That is not scalable.'
      },
      {
        id: 'revenue-risk',
        heading: 'Revenue at Risk',
        body: 'Hair transplant procedures involve high-ticket payments. However, there was no automated mechanism ensuring funds were cleared before surgery dates. Staff had to manually track due dates and follow up with patients. If someone missed a confirmation, the clinic risked last-minute cancellations and revenue disruption. This was a structural weakness, not a minor inconvenience.'
      },
      {
        id: 'automation-framework',
        heading: 'The Strategic Automation Framework',
        body: 'Exploge engineered a centralized automation hub using Make.com as the orchestration layer. The objective was simple—create a single source of financial and operational truth across systems. A bi-directional sync was implemented between Pabau and QuickBooks Online. When an invoice is created inside the clinic’s EMR, a mirrored invoice with identical itemization and tax logic is automatically generated inside the accounting suite. Payment confirmations, refunds, and credit notes update in both systems instantly, closing the reconciliation gap entirely. For payroll, we built a logic-driven engine that automatically calculates quarterly salary increments based on predefined rank percentages, then pushes management notifications through Google Chat and sends formal salary confirmations via Gmail. To address payment risk, we implemented dynamic due date logic. The system automatically calculates a payment deadline exactly 14 days before each scheduled procedure. If an appointment is booked within that 14-day window, an urgent verification workflow is triggered to ensure funds are cleared before surgery begins.'
      },
      {
        id: 'impact',
        heading: 'Measurable Business Impact',
        body: 'The clinic achieved complete financial alignment between clinical and accounting systems, eliminating human reconciliation errors. Administrative workload dropped significantly, saving over 15 hours per week that were previously lost to repetitive data entry and payroll calculations. Cash flow stability improved immediately. By enforcing structured pre-surgery payment deadlines, the clinic reduced last-minute cancellations and secured revenue before allocating surgical slots. Most importantly, operations became scalable—capacity increased up to three times without increasing administrative headcount.'
      },
      {
        id: 'technical-execution',
        heading: 'Technical Execution',
        body: 'The integration was built as a deep API architecture using Make.com with advanced webhook orchestration and structured HTTP request handling. Custom in-flight validation mechanisms and retry logic were deployed to prevent data mismatches during API timeouts. The system was engineered for reliability under load—not just basic connectivity.'
      }
    ]
  }
  ,
  {
    slug: 'mistery-home-improvements',
    title: 'Mister Y Home Improvements Website Development',
    category: 'WordPress',
    heroImage: misterYBanner as unknown as string,
    excerpt: 'Building a professional digital platform from scratch for Mister Y Home Improvements. This case study covers custom development, branding, and SEO architecture designed to drive business growth.',
    tags: ['WordPress'],
    stats: [
      { label: 'Client Name', value: 'Eliran Halliva' },
      { label: 'Project Name', value: 'Mister Y Home Improvements' },
      { label: 'Platform', value: 'WordPress' },
      { label: 'Focus', value: 'Lead Capture & UX' }
    ],
    sections: [
      {
        id: 'overview-vision',
        heading: 'Project Overview and Vision',
        body: 'The development of the Mister Y Home Improvements website was a comprehensive project built entirely from the ground up. The vision was to create a professional digital hub that accurately reflects the high standards of a residential contracting business. Starting from a blank slate, the goal was to architect a site that avoids the common pitfalls of generic templates, instead focusing on a structured, industry-specific layout that provides immediate value to homeowners. This project stands as a testament to the importance of custom-built content in the home improvement sector.'
      },
      {
        id: 'industry-specificity',
        heading: 'The Challenge of Industry Specificity',
        body: 'Building a contractor website from scratch requires a deep understanding of the target audience. The primary challenge was to ensure that every visual and textual element aligned perfectly with the services offered, such as kitchen remodeling and structural repairs. Many platforms fail because they rely on placeholder data that confuses the visitor. For this project, it was essential to eliminate any irrelevant information and focus strictly on creating a reliable, transparent, and authoritative presence for the Mister Y brand.'
      },
      {
        id: 'strategic-design-dev',
        heading: 'Strategic Design and Custom Development',
        body: 'The design phase involved the creation of a sophisticated gold and white color palette to establish a premium brand identity. Every page was developed with a specific hierarchy in mind, ensuring that the user journey is logical and intuitive. From the custom favicon to the responsive mobile layout, the site was built to handle high-resolution imagery of renovations while maintaining fast loading speeds. This meticulous development process ensures that the website functions as a professional tool for lead generation rather than just a static brochure.'
      },
      {
        id: 'screenshot',
        heading: 'Full Home Page (After)',
        body: 'A complete homepage built for trust and conversion — tailored for homeowners.',
        image: misterYScreenshot as unknown as string
      },
      {
        id: 'content-engineering',
        heading: 'Content Engineering and Service Categorization',
        body: 'A core part of the development was the engineering of a detailed services architecture. Instead of generic lists, we built out comprehensive sections for over ten specialized service areas, including bathroom renovations, flooring installation, and exterior maintenance. Each service description was written from scratch to highlight technical expertise and the specific benefits to the homeowner, such as increased property value and durability. This level of detail establishes the contractor’s authority and builds immediate trust with potential clients.'
      },
      {
        id: 'full-site-brand',
        heading: 'Full Site Development and Brand Alignment',
        body: 'Every section of the site was handcrafted to ensure total brand consistency. The About page was developed to showcase core specialties, while the Gallery was organized into a strategic grid to display a diverse portfolio of work. We also built a transparent "Simple and Transparent Process" section that outlines the four critical stages of a project: consultation, planning, execution, and inspection. This structural clarity is designed to reduce customer friction and provide a clear roadmap for every engagement.'
      },
      {
        id: 'technical-foundation',
        heading: 'Technical Foundation and Configuration',
        body: 'The technical infrastructure of the site was configured for reliability, maintainability, and performance. We established clear site-wide metadata, coherent information architecture, and a responsive component system. The build emphasizes fast loading, clean structure, and scalability, ensuring the website remains robust as content and services evolve.'
      },
      {
        id: 'conversion-lead-capture',
        heading: 'Conversion Optimization and Lead Capture',
        body: 'The final development phase focused on turning visitors into active leads. We redesigned the contact system to be straightforward and professional, removing all unnecessary fields and focusing on essential inquiry data. The legal consent language was updated to meet professional standards, and call-to-action buttons were strategically placed throughout the site. This conversion-centric approach ensures that the website is not just a visual achievement but a functional business asset that generates measurable results.'
      },
      {
        id: 'conclusion',
        heading: 'Conclusion',
        body: 'The completed Mister Y Home Improvements website is a robust, professional, and logically sound platform built with precision. By developing every element from scratch—from the service descriptions to the SEO configuration—we have created a digital presence that truly represents the quality of the brand. The site is now fully equipped to serve as the primary gateway for clients seeking excellence in home remodeling and repairs.'
      }
    ]
  }
  ,
  {
    slug: 'unified-communication-clinic',
    title: 'Unified Communication System for a Clinic',
    category: 'Automation',
    heroImage: unifiedClinicBanner as unknown as string,
    excerpt: 'Unified communication ecosystem connecting JustCall, GoHighLevel, and Pabau with AI-driven appointment booking.',
    tags: ['JustCall', 'GoHighLevel', 'Pabau', 'Make.com', 'AI Voice', 'AI Chat'],
    stats: [
      { label: 'Client Industry', value: 'Clinical Healthcare Services' },
      { label: 'Core Objective', value: 'Eliminate fragmented systems; real-time, AI-driven appointments' },
      { label: 'Technology Stack', value: 'JustCall, GoHighLevel, Pabau, Make.com, AI agents' }
    ],
    sections: [
      {
        id: 'problem',
        heading: 'When Communication Systems Do Not Talk to Each Other',
        body: 'The clinic was operating with three separate systems handling calls, CRM pipelines, and clinical records. Each platform functioned independently, forcing staff to manually bridge the gaps. After every call inside JustCall, team members had to manually log notes into GoHighLevel and then update patient records inside Pabau. This created constant administrative overhead and introduced delays between conversation and record accuracy. Lead tracking was inconsistent. Call dispositions were not always transferred correctly between the phone system and CRM. Moving a lead from inquiry to booked required manual stage changes across multiple platforms. Every step depended on human execution, which made the system fragile. Inbound inquiries also relied entirely on human availability. If staff were busy or outside working hours, leads waited. Response time slowed. Conversion rates suffered.'
      },
      {
        id: 'framework',
        heading: 'The Exploge Integration Framework',
        body: 'Exploge engineered a unified communication ecosystem using Make.com as the orchestration layer. The objective was to eliminate manual transitions and ensure every conversation instantly updated every relevant system.'
      },
      {
        id: 'telephony-crm',
        heading: 'Telephony and CRM Alignment',
        body: 'We integrated JustCall directly with GoHighLevel to automate post-call workflows. The moment a call ends, contact records are updated automatically with call duration and structured notes. When a team member selects a disposition such as interested or follow-up required, the CRM pipeline stage updates instantly without manual intervention. The phone system now directly drives CRM logic.'
      },
      {
        id: 'two-way-sync',
        heading: 'Two-Way Clinical Synchronization',
        body: 'A bi-directional sync was established between GoHighLevel and Pabau. When a lead\'s stage or notes are modified in the CRM, the data is pushed to the clinical system in real time. If updates occur inside Pabau, those changes reflect back into GoHighLevel immediately. Both the sales and clinical teams operate from the same live dataset. There are no mismatched statuses or outdated notes. Campaign automation was also tied to stage movement. When a lead progresses inside Pabau, GoHighLevel automatically enrolls them into the appropriate follow-up or nurturing campaign. Communication adapts dynamically based on real clinical activity.'
      },
      {
        id: 'ai-appointment',
        heading: 'AI-Driven Appointment Engine',
        body: 'To remove response delays, Exploge deployed AI voice and chat agents within GoHighLevel. These agents handle natural language conversations and book appointments directly into the Pabau calendar without human intervention. Once an appointment is scheduled, the system syncs booking data back into the CRM. Sales automations are paused, reminder sequences are triggered, and the contact lifecycle adjusts automatically. The entire workflow operates as a closed communication loop.'
      },
      {
        id: 'impact',
        heading: 'Operational Impact',
        body: 'Manual logging was eliminated entirely. One hundred percent of call notes and dispositions now sync automatically across systems. Administrative workload dropped significantly, and record accuracy improved immediately. Sales and clinical teams now view identical lead statuses in real time. There is no ambiguity about where a prospect stands in the pipeline. Data consistency improved coordination and reduced internal friction. The AI booking engine transformed lead response time. Instead of waiting hours for a human callback, prospects can secure appointments instantly, twenty-four hours a day. Conversion opportunities are no longer lost to delay. Most importantly, the communication stack evolved from three disconnected tools into one synchronized revenue engine.'
      },
      {
        id: 'technical-execution',
        heading: 'Technical Execution',
        body: 'The system was built through deep API integrations connecting JustCall, GoHighLevel, and Pabau, orchestrated through Make.com. Structured webhook triggers, event-based logic mapping, and real-time data validation ensure that updates propagate instantly without duplication or data loss. This was not a simple integration. It was a structural redesign of how communication, sales, and clinical operations interact.'
      }
    ]
  }
  ,
  {
    slug: 'field-service-automation',
    title: 'End-to-End Field Service Automation',
    category: 'Automation',
    heroImage: fieldServiceBanner4 as unknown as string,
    excerpt: 'Fully automated field service workflow replacing manual quoting, fulfillment, and billing with a unified system.',
    tags: ['Monday.com', 'Tally', 'PandaDoc', 'Stripe', 'Make.com'],
    stats: [
      { label: 'Client Industry', value: 'Wildlife Control & Environmental Services' },
      { label: 'Core Objective', value: 'Replace manual quoting, fulfillment, and billing with automation' },
      { label: 'Technology Stack', value: 'Monday.com, Tally, PandaDoc, Stripe, Make.com' }
    ],
    sections: [
      {
        id: 'field-ops-emails',
        heading: 'When Field Operations Depend on Emails and Spreadsheets',
        body: 'A growing Wildlife Removal company was operating on a fragmented workflow built around inbox threads and spreadsheets. Technicians completed site inspections, took photos, and then manually embedded those images into email quotes. Proposals were slow to produce and inconsistent in format, which weakened the company’s professional image. Customer data was scattered across spreadsheets with no centralized visibility. Leads were difficult to track, follow-ups were inconsistent, and management had limited insight into pipeline status. Once a deal was closed, invoicing and payment collection were handled manually, creating delays and unnecessary friction. There was also no structured handoff from sales to operations. A signed agreement did not automatically generate a technician work order. Every transition required manual coordination, which slowed execution and increased the risk of miscommunication.',
        image: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2000&auto=format&fit=crop'
      },
      {
        id: 'structured-system',
        heading: 'Engineering a Structured Field Service System',
        body: 'Exploge rebuilt the workflow from the ground up using Make.com as the orchestration layer, transforming disconnected steps into a unified operational engine.'
      },
      {
        id: 'digital-proposal',
        heading: 'Digital Proposal Automation',
        body: 'Technicians now use Tally on-site to capture inspection details and upload images in real time. The moment the form is submitted, the data triggers automated document generation inside PandaDoc. A professional, image-rich proposal and contract is generated instantly without manual formatting or email drafting. What previously required hours of manual assembly now happens within seconds of completing an inspection.',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2000&auto=format&fit=crop'
      },
      {
        id: 'centralized-crm',
        heading: 'Centralized CRM and Workflow Control',
        body: 'Every form submission automatically creates a new contact and board item inside Monday.com. This becomes the operational hub for the business. Proposal status updates are synchronized in real time. When a client views or signs the document in PandaDoc, the status inside Monday.com shifts automatically from sent to signed. Management gains immediate visibility into every stage of the sales cycle without relying on manual updates.',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2000&auto=format&fit=crop'
      },
      {
        id: 'fulfillment-billing',
        heading: 'Automated Fulfillment and Billing',
        body: 'Once a contract is signed, the automation engine triggers invoice creation inside Stripe based on the selected service package. Payment requests are issued immediately without staff intervention. Simultaneously, a signed agreement generates structured tasks inside Monday.com for the field team. Specific work instructions such as sealing vents or removing animals are automatically assigned. Sales no longer needs to brief operations manually. The system handles the transition instantly.',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=2000&auto=format&fit=crop'
      },
      {
        id: 'post-job',
        heading: 'Post-Job Customer Engagement',
        body: 'When a technician marks a job as complete inside Monday.com, a closure workflow activates automatically. The customer receives a personalized follow-up email that includes links to leave a review or report any issues. This ensures feedback is captured systematically and reinforces professional communication after service delivery.'
      },
      {
        id: 'impact',
        heading: 'Measurable Business Impact',
        body: 'Proposal turnaround time was reduced by approximately 80 percent. Quotes that once required extended manual preparation are now generated immediately after inspection. Conversion rates improved due to professional, interactive contracts delivered instantly. Operational lag between contract signature and work dispatch was eliminated. Field teams receive structured work orders the moment a deal closes. Integrated payment automation accelerated cash flow and removed the need for manual invoicing follow-ups. The company transitioned from a reactive, email-driven workflow to a scalable field service infrastructure capable of handling higher job volume without increasing administrative staff.'
      },
      {
        id: 'architecture',
        heading: 'Technical Architecture',
        body: 'The system was engineered through API-driven integrations connecting Tally, PandaDoc, Monday.com, and Stripe, orchestrated via Make.com. Event-based triggers, structured data mapping, and real-time status synchronization ensure every action automatically initiates the next step in the workflow. This was not a simple integration. It was a full operational transformation from manual coordination to automated execution.'
      },
      {
        id: 'closing',
        heading: 'Structured Execution, Not Email Threads',
        body: 'If your field service operation still depends on email threads and spreadsheets, your growth is limited by process, not demand.'
      }
    ]
  }
  ,
  {
    slug: 'white-label-technical-infrastructure',
    title: 'White-Label Technical Infrastructure for Agencies',
    category: 'Automation',
    heroImage: whiteLabelBanner as unknown as string,
    excerpt: 'White-label backend partnership delivering ClickUp automation, advanced GHL CRM, and API workflows to scale delivery without hiring.',
    tags: ['ClickUp', 'GoHighLevel', 'Pabbly Connect', 'n8n', 'Zapier'],
    stats: [
      { label: 'Client Industry', value: 'Digital Marketing & Lead Generation' },
      { label: 'Technology Stack', value: 'ClickUp, GoHighLevel, Pabbly Connect, n8n, Zapier' },
      { label: 'Capacity Increase', value: '40%' }
    ],
    sections: [
      {
        id: 'growth-problem',
        heading: 'The Growth Problem Behind the Scenes',
        body: 'The agency was scaling rapidly, bringing in new clients and expanding service offerings. On the surface, growth looked strong. Internally, however, technical limitations were slowing delivery. The team excelled at marketing strategy and client communication, but lacked the advanced automation expertise required for complex CRM builds, workflow logic, and API integrations. As technical requests became more sophisticated, fulfillment timelines stretched and internal pressure increased.'
      },
      {
        id: 'internal-ops',
        heading: 'Disorganized Internal Operations',
        body: 'Inside ClickUp, the agency’s project management structure lacked clarity. Task assignments were inconsistent, statuses were manually updated, and visibility across departments was limited. Deadlines were missed not because of effort, but because systems were not enforcing structure. Without automation-driven task transitions and standardized workflows, scaling only amplified confusion.'
      },
      {
        id: 'fragmented-stacks',
        heading: 'Fragmented Client Tech Stacks',
        body: 'Client accounts were operating across disconnected tools. CRM systems built in GoHighLevel were not seamlessly connected to task management environments. Data often required manual syncing, and onboarding new clients demanded repetitive setup steps. The agency faced a decision, either hire an internal technical team or build a reliable backend partnership capable of supporting long-term scale.'
      },
      {
        id: 'operational-core',
        heading: 'Rebuilding the Operational Core',
        body: 'Exploge stepped in as a dedicated technical partner and rebuilt the agency’s backend infrastructure. The ClickUp environment was restructured with advanced automation logic, dynamic task assignments, automated status transitions, and deadline-based triggers. Through Pabbly Connect, onboarding data now flows directly from intake forms into structured production workflows. Manual project creation was eliminated. Every new client automatically generates organized task trees, folders, and execution pipelines within minutes. The internal environment shifted from reactive coordination to controlled automation.',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop'
      },
      {
        id: 'crm-engineering',
        heading: 'Advanced CRM Engineering and Integrations',
        body: 'On the client delivery side, Exploge designed sophisticated automation systems inside GoHighLevel. This included custom funnels, conditional triggers, multi-step workflows, and lifecycle-based automation logic tailored to each client’s business model. For integration-heavy projects, we leveraged n8n and Zapier to solve complex multi-platform synchronization challenges. Systems that were previously considered incompatible were connected through structured API workflows. Exploge operated as the invisible technical department behind the agency’s brand.',
        image: 'https://images.unsplash.com/photo-1551836022-54b200f75cf7?q=80&w=2000&auto=format&fit=crop'
      },
      {
        id: 'impact',
        heading: 'Measurable Operational Impact',
        body: 'The agency owner regained full clarity over productivity, task flow, and project timelines. Technical bottlenecks were removed without hiring full-time developers. Capacity increased by 40 percent, allowing the agency to onboard more clients while maintaining quality. Integration errors decreased, client systems became more stable, and support tickets related to automation issues dropped significantly. Most importantly, the agency was able to position advanced automation as a premium, high-ticket service backed by a reliable technical infrastructure. Exploge did not just implement tools. We engineered a scalable backend that allowed the agency to grow without operational breakdown.',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2000&auto=format&fit=crop'
      }
    ]
  }
  ,
  {
    slug: 'conversational-ai-voice-systems',
    title: 'Conversational AI & Voice Systems for Business',
    category: 'Automation',
    heroImage: conversationalBanner as unknown as string,
    excerpt: '24/7 conversational AI and voice agents that qualify, book, and escalate with structured CRM integration.',
    tags: ['Vapi', 'Synthflow', 'CloseBot', 'ZappyChat', 'ManyChat', 'GoHighLevel'],
    stats: [
      { label: 'Client Industry', value: 'Service-Based Business Operations' },
      { label: 'Technology Stack', value: 'Vapi, Synthflow, CloseBot, ZappyChat, ManyChat, GoHighLevel' }
    ],
    sections: [
      {
        id: 'problem',
        heading: 'The Problem: Lead Decay and Slow Response Times',
        body: 'The client was losing potential revenue due to delayed responses. Inquiries submitted after business hours remained untouched until the next day. High-intent prospects cooled off before the sales team even engaged. Sales representatives were also spending hours collecting basic information such as service requirements, budget range, and contact details. Instead of focusing on closing, they were performing repetitive qualification tasks. More critically, emergency requests were mixed into the same inbox as standard inquiries. There was no structured triage system. Urgent cases risked delayed responses, creating reputational and operational risk.'
      },
      {
        id: 'ai-engagement',
        heading: 'Building a 24/7 AI Engagement Layer',
        body: 'Exploge designed a multi-layer conversational AI ecosystem that operates continuously without human dependency. Using CloseBot, ZappyChat, and ManyChat, we deployed intelligent chat agents trained on the client’s services, pricing logic, and qualification criteria. These bots handle detailed FAQs, collect verified lead data, and guide prospects toward defined outcomes such as booking consultations or requesting quotes. Every qualified interaction is automatically pushed into GoHighLevel with structured tagging and pipeline placement. The CRM receives enriched, pre-qualified leads rather than raw inquiries.',
        image: 'https://images.unsplash.com/photo-1551836022-54b200f75cf7?q=80&w=2000&auto=format&fit=crop'
      },
      {
        id: 'voice-agents',
        heading: 'Autonomous Voice Agents That Convert',
        body: 'Beyond chat automation, Exploge implemented high-fidelity AI voice agents using Vapi and Synthflow. These voice systems function as virtual receptionists capable of handling inbound and outbound calls with natural conversational flow. The AI checks calendar availability in real time, books appointments directly, and confirms details without human involvement. Prospects can move from inquiry to scheduled appointment in a single call, even outside business hours.',
        image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop'
      },
      {
        id: 'emergency-escalation',
        heading: 'Intelligent Emergency Escalation',
        body: 'To prevent critical cases from being overlooked, an emergency detection engine was embedded into both chat and voice workflows. The AI identifies high-priority keywords and intent signals during conversations. When an emergency is detected, the system bypasses standard automation flows and immediately sends internal alerts to the rapid-response team via SMS, Slack, or email. Urgent matters are escalated instantly rather than waiting in a queue.',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2000&auto=format&fit=crop'
      },
      {
        id: 'result',
        heading: 'The Result: Instant Engagement, Structured Sales',
        body: 'Response time was reduced to seconds for every inquiry, regardless of time of day. The sales team now engages only with leads that are fully qualified and categorized. This increased efficiency and improved closing rates. The AI ecosystem operates continuously, generating appointments and advancing prospects while the team is offline. Most importantly, emergency cases are identified and escalated in real time, protecting service standards and brand reputation. Exploge did not build chatbots that simply respond. We engineered intelligent agents that qualify, convert, and manage critical workflows autonomously.',
        image: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=2000&auto=format&fit=crop'
      }
    ]
  }
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  const lower = slug.toLowerCase();
  return caseStudies.find(c => c.slug.toLowerCase() === lower);
}
