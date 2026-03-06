import React from 'react';
import {
    LineChart,
    Target,
    ShieldCheck,
    BarChart,
    Search,
    Compass,
    CheckCircle2,
    Zap,
    Globe,
    Database,
    BarChart3,
    TrendingUp,
    Award
} from 'lucide-react';

export const getIcon = (iconName: string, size = 20) => {
    switch (iconName) {
        case 'ShieldCheck': return <ShieldCheck size={size} />;
        case 'Target': return <Target size={size} />;
        case 'LineChart': return <LineChart size={size} />;
        case 'BarChart': return <BarChart size={size} />;
        case 'Search': return <Search size={size} />;
        case 'Compass': return <Compass size={size} />;
        case 'CheckCircle2': return <CheckCircle2 size={size} />;
        case 'Zap': return <Zap size={size} />;
        case 'Globe': return <Globe size={size} />;
        case 'Database': return <Database size={size} />;
        case 'BarChart3': return <BarChart3 size={size} />;
        case 'TrendingUp': return <TrendingUp size={size} />;
        case 'Award': return <Award size={size} />;
        default: return null;
    }
};

export const SERVICES = [
    {
        id: 'digital-analytics',
        title: 'Digital Analytics Implementation',
        description: 'GA4, Adobe Analytics, and Tag Management systems engineered for precision.',
        image: '/assets/1.png',
        icon: 'BarChart',
        impact: '99.9% Data Accuracy',
        tools: ['GA4', 'GTM Server-Side', 'Stape.io', 'BigQuery'],
        whatWeDo: [
            "Server-Side Tagging Deployment",
            "Enhanced Ecommerce Tracking",
            "Custom Data Layer Architecture",
            "Consent Mode V2 Implementation"
        ],
        problemPoints: [
            "Data leakage due to ad-blockers",
            "Inaccurate attribution mapping",
            "Compliance risks with GDPR/CCPA"
        ],
        problemOutcomes: ["Revenue loss", "Strategic blindness"],
        methodology: [
            { title: "Audit", description: "Technical gap analysis of current stack." },
            { title: "Schema", description: "Custom event naming and structure." },
            { title: "Deploy", description: "Implementation of tracking logic." },
            { title: "QA", description: "100% data reconciliation test." }
        ],
        projects: [
            { industry: "Retail", title: "Global GA4 Rollout", issue: "30% data loss", result: "100% reconciliation" }
        ]
    },
    {
        id: 'data-strategy',
        title: 'Data Strategy & Governance',
        description: 'Frameworks to ensure data accuracy, privacy compliance, and strategic alignment.',
        icon: 'ShieldCheck',
        image: '/assets/2.png',
        impact: '100% Privacy Compliance',
        tools: ['OneTrust', 'Cookiebot', 'BigQuery ML'],
        whatWeDo: [
            "Data Privacy Audits",
            "Governance Framework Design",
            "PII Redaction Systems",
            "Strategic KPIs Alignment"
        ],
        problemPoints: [
            "Regulatory non-compliance",
            "Siloed data repositories",
            "Lack of technical documentation"
        ],
        problemOutcomes: ["Legal fines", "Internal distrust"],
        methodology: [
            { title: "Discovery", description: "Analyzing data flow across the org." },
            { title: "Policy", description: "Defining governance standards." },
            { title: "Automation", description: "Deploying automated compliance monitors." }
        ],
        projects: [
            { industry: "SaaS", title: "Privacy-First Analytics", issue: "PII leakage", result: "Zero-PII stack" }
        ]
    },
    {
        id: 'bi-visualization',
        title: 'BI & Visualization',
        description: 'Transforming technical data into intuitive dashboards for the C-suite.',
        icon: 'LineChart',
        image: '/assets/3.png',
        impact: 'Real-time ROI Tracking',
        tools: ['Looker Studio', 'Tableau', 'Power BI'],
        whatWeDo: [
            "Automated ROI Dashboards",
            "C-Suite Performance Reports",
            "Customer LTV Modeling",
            "Predictive Analytics Visuals"
        ],
        problemPoints: [
            "Manual reporting waste",
            "Conflicting metrics across tools",
            "Lack of actionable insights"
        ],
        problemOutcomes: ["Inefficiency", "Poor decision making"],
        methodology: [
            { title: "Requirement", description: "Business goal identification." },
            { title: "Pipeline", description: "Data warehousing in BigQuery." },
            { title: "Design", description: "UX-focused dashboard creation." }
        ],
        projects: [
            { industry: "Fintech", title: "Executive Dashboarding", issue: "Manual CSV hell", result: "Automated real-time BI" }
        ]
    },
    {
        id: 'optimization',
        title: 'Conversion Optimization',
        description: 'Data-driven experiments to maximize ROI from your existing traffic.',
        icon: 'Target',
        image: '/assets/4.png',
        impact: '+25% Avg. CR Lift',
        tools: ['Optimizely', 'VWO', 'Hotjar', 'Microsoft Clarity'],
        whatWeDo: [
            "A/B Testing Frameworks",
            "User Journey Heatmap Analysis",
            "Checkout Funnel Optimization",
            "Personalization Strategy"
        ],
        problemPoints: [
            "High cart abandonment",
            "Low landing page engagement",
            "Guesswork-driven UI changes"
        ],
        problemOutcomes: ["Wasted ad spend", "Stagnant growth"],
        methodology: [
            { title: "Hypothesis", description: "Identify testing opportunities." },
            { title: "Test", description: "Run controlled experiments." },
            { title: "Scale", description: "Deploy winning variations." }
        ],
        projects: [
            { industry: "E-commerce", title: "Checkout Redesign", issue: "70% bounce rate", result: "30% more sales" }
        ]
    }
];

export const SERVICES_FAQ = [
    { question: "How do you ensure data accuracy?", answer: "We use server-side validation and automated QA scripts to cross-reference analytics data with backend server logs." },
    { question: "Can you help with privacy compliance?", answer: "Yes, we implement Consent Mode V2 and PII redaction by default in all our tracking architectures." },
    { question: "What is your typical turnaround time?", answer: "Audits take 2 weeks, while full implementations range from 4 to 8 weeks." }
];

export const METRICS = [
    { value: '500', suffix: '+', label: 'Audits Performed' },
    { value: '99.9', suffix: '%', label: 'Data Accuracy' },
    { value: '40', suffix: '%', label: 'Avg. ROI Increase' },
    { value: '15', suffix: 'yr', label: 'Industry Expertise' }
];

export const ANALYTICS_PROCESS = [
    { title: "Diagnostic Audit", description: "Identifying technical gaps in your current analytics stack." },
    { title: "Schema Design", description: "Architecting a custom data layer and measurement plan." },
    { title: "Implementation", description: "Deploying server-side tagging and event tracking." },
    { title: "Validation", description: "Strict testing to ensure 100% data reconciliation." },
    { title: "Dashboards", description: "Creating real-time business intelligence visualizations." },
    { title: "Optimization", description: "Continuous refinement based on behavioral insights." }
];

export const INDUSTRIES = [
    {
        slug: 'e-commerce',
        name: 'E-commerce',
        icon: 'Compass',
        solution: 'Custom purchase schemas and LTV modeling.',
        challenges: ["Cart Abandonment", "ROAS Misattribution", "Data Silos"]
    },
    {
        slug: 'saas',
        name: 'SaaS',
        icon: 'Zap',
        solution: 'Funnel tracking and churn prediction architecture.',
        challenges: ["Churn Analysis", "Subscription Lifecycle", "Trial Conversion"]
    },
    {
        slug: 'fintech',
        name: 'Fintech',
        icon: 'ShieldCheck',
        solution: 'Secure, compliant data pipelines and conversion flows.',
        challenges: ["Security Compliance", "Identity Verification", "KYC Dropoff"]
    },
    {
        slug: 'healthcare',
        name: 'Healthcare',
        icon: 'Target',
        solution: 'HIPAA compliant measurement strategies.',
        challenges: ["HIPAA Compliance", "Patient Journey", "Telehealth Adoption"]
    }
];

export const HOME_FAQ = [
    { question: "Why do we need a technical analytics audit?", answer: "Most enterprises have significant data leakage. An audit identifies gaps between your business goals and current tracking capabilities." },
    { question: "Do you support GA4 and Adobe Analytics?", answer: "Yes, we specialize in both platforms, including complex server-side migrations." },
    { question: "How long does a typical implementation take?", answer: "Timeline varies from 4-12 weeks depending on complexity." }
];

export const ABOUT_FAQ = [
    { question: "What makes MarTechRise.ai different from a marketing agency?", answer: "We are technical architects, not just marketers. We focus on the underlying data infrastructure, ensuring precision and scalability that marketing-led agencies often overlook." },
    { question: "How do you handle data privacy regulations?", answer: "We implement privacy-first architectures, including server-side tagging and consent management frameworks, ensuring full compliance with GDPR, CCPA, and other global regulations." },
    { question: "Do you provide ongoing support after implementation?", answer: "Yes, we offer continuous architectural optimization and governance support to ensure your analytics stack remains a robust 'Source of Truth'." }
];

export interface CaseStudy {
    id: number;
    slug: string;
    title: string;
    industry: string;
    client: string;
    impact: string;
    image: string;
    problem: string;
    challenge: string;
    solution: string;
    tools: string[];
    initialAudit?: string[];
    businessImpacts?: { stat: string; label: string; subtext: string }[];
    implementationSummary?: string[];
    testimonial?: { text: string; author: string };
}

export const CASE_STUDIES: CaseStudy[] = [

    {
        id: 3,
        slug: 'ga4-migration-d2c-brand',
        title: 'GA4 Migration & Conversion Accuracy',
        industry: 'E-commerce',
        client: 'Fast-Growing D2C Brand',
        impact: '+25% Attribution Accuracy',
        image: '/assets/1.png',
        problem: 'The client was still relying on Universal Analytics, which resulted in fragmented data, limited event-level insights, and unreliable attribution.',
        challenge: 'Inconsistent event tracking meant campaign optimization decisions were largely assumption-driven rather than data-driven, obscuring the customer journey.',
        solution: 'Led a complete migration to GA4 with a structured event taxonomy, an enhanced e-commerce data layer, and server-side tracking via GTM for accurate attribution.',
        tools: ['GA4', 'GTM', 'Looker Studio'],
        initialAudit: [
            "Still relying on Universal Analytics leading to fragmented data.",
            "Limited event-level insights and unreliable attribution.",
            "Inconsistent event tracking."
        ],
        businessImpacts: [
            { stat: "25%", label: "Accuracy", subtext: "Improvement in conversion attribution accuracy." },
            { stat: "18%", label: "ROAS+", subtext: "Increase in Return on Ad Spend (ROAS)." },
            { stat: "30%", label: "Visibility", subtext: "Improved visibility across checkout funnel stages." },
            { stat: "35%", label: "Efficiency", subtext: "Reduced campaign optimization cycle time." }
        ],
        implementationSummary: [
            "Mapped business objectives to event taxonomy",
            "Created data layer specification",
            "Configured enhanced e-commerce events",
            "Deployed GTM tracking framework",
            "Built Looker Studio funnel reports"
        ],
        testimonial: {
            text: "Martechrise didn’t just migrate us to GA4 — they transformed how we understand performance marketing. We now have complete clarity across our funnel and far greater confidence in our attribution decisions.",
            author: "Head of Growth, D2C E-commerce Brand"
        }
    },
    {
        id: 4,
        slug: 'adobe-analytics-financial-services',
        title: 'Adobe Analytics for Pre-Qualification Journey',
        industry: 'Financial Services',
        client: 'Leading Financial Institution',
        impact: '32% Clarity Gain',
        image: '/assets/2.png',
        problem: 'The client lacked end-to-end visibility into their pre-qualification journey. Although traffic volumes were high, the business could not clearly identify where users were dropping off.',
        challenge: 'Reporting was manual and time-consuming, limiting timely decision-making. The business could not identify which entry points were generating high-quality leads or how different marketing channels influenced form completion.',
        solution: 'Designed and implemented a comprehensive digital analytics framework using Adobe Analytics. A structured variable and event taxonomy was created to track each step of the pre-qualification process.',
        tools: ['Adobe Analytics', 'Adobe Launch', 'Analysis Workspace'],
        initialAudit: [
            "Lack of end-to-end visibility into pre-qualification journey.",
            "Inability to clearly identify drop-off points or high-quality entry channels.",
            "Manual and time-consuming reporting limiting decision-making."
        ],
        businessImpacts: [
            { stat: "32%", label: "Clarity", subtext: "Improved clarity in form completion tracking." },
            { stat: "60%", label: "Efficiency", subtext: "Reduction in manual reporting efforts." },
            { stat: "Leads", label: "Quality", subtext: "Identified high-performing lead entry sources." },
            { stat: "Execs", label: "Visibility", subtext: "Enabled executive-level decision-making visibility." }
        ],
        implementationSummary: [
            "Designed a comprehensive digital analytics framework",
            "Created structured variable and event taxonomy",
            "Deployed tags with precise rule-based logic via Adobe Launch",
            "Built custom Analysis Workspace dashboards",
            "Delivered comprehensive metrics glossary"
        ],
        testimonial: {
            text: "For the first time, we have end-to-end visibility into our pre-qualification journey. Martechrise brought structure, governance, and strategic insight into our analytics ecosystem.",
            author: "Digital Transformation Lead, Financial Institution"
        }
    },
    {
        id: 5,
        slug: 'white-label-analytics-partnership',
        title: 'White-Label Analytics Partnership',
        industry: 'Agency Partnership',
        client: 'Global Marketing Agency',
        impact: '40% Error Reduction',
        image: '/assets/3.png',
        problem: 'The agency needed a reliable analytics partner to support implementation, audits, and advanced tracking requirements across client accounts.',
        challenge: 'Frequent tracking discrepancies, lack of standardized QA processes, and limited in-house analytics expertise were affecting client confidence and delivery timelines.',
        solution: 'Partnered as a white-label analytics extension, auditing implementations, redesigning GA4 structures, standardizing frameworks, and introducing proactive QA.',
        tools: ['GA4', 'GTM', 'Meta Pixel & CAPI'],
        initialAudit: [
            "Frequent tracking discrepancies across client accounts.",
            "Lack of standardized QA processes affecting delivery.",
            "Limited in-house analytics expertise reducing client confidence."
        ],
        businessImpacts: [
            { stat: "40%", label: "Accuracy", subtext: "Reduction in tracking discrepancies." },
            { stat: "25%", label: "Data Quality", subtext: "Improvement in campaign data accuracy." },
            { stat: "100%", label: "Delivery", subtext: "On-time analytics implementation delivery." },
            { stat: "Scale", label: "Growth", subtext: "Enabled agency to scale services without headcount increase." }
        ],
        implementationSummary: [
            "Audited existing analytics implementations",
            "Redesigned GA4 event structures",
            "Standardized conversion tracking frameworks",
            "Supported Meta Pixel validation & campaign governance",
            "Introduced proactive QA and tracking processes"
        ],
        testimonial: {
            text: "Martechrise operates like an extension of our internal team. Their precision, responsiveness, and technical expertise have strengthened our client reporting and elevated our analytics credibility.",
            author: "Managing Director, Global Marketing Agency"
        }
    },
    {
        id: 6,
        slug: 'analytics-audit-insurance',
        title: 'Analytics Audit & Funnel Optimization',
        industry: 'Insurance',
        client: 'Digital-First Insurance Provider',
        impact: 'Measurable Conversion Uplift',
        image: '/assets/4.png',
        problem: 'Despite high website traffic, the client faced low conversion rates and lacked clarity on user behavior across key funnel stages.',
        challenge: 'Existing analytics implementation had gaps, resulting in missing events and inconsistent reporting across teams.',
        solution: 'Conducted a comprehensive analytics audit, redesigned the event taxonomy to capture meaningful behavioral signals, and implemented enhanced GA4 funnel tracking.',
        tools: ['GA4', 'GTM', 'Funnel Analysis'],
        initialAudit: [
            "Low conversion rates despite high website traffic.",
            "Lack of clarity on user behavior across key funnel stages.",
            "Missing events and inconsistent reporting across teams."
        ],
        businessImpacts: [
            { stat: "100%", label: "Visibility", subtext: "Complete end-to-end visibility across quote-to-purchase journey." },
            { stat: "Found", label: "Friction", subtext: "Identification of key friction points in checkout process." },
            { stat: "Up", label: "Purchases", subtext: "Measurable uplift in completed policy purchases." },
            { stat: "Clear", label: "Insights", subtext: "Improved device-level and channel-level conversion insights." }
        ],
        implementationSummary: [
            "Conducted comprehensive analytics audit",
            "Identified gaps in quote initiation and checkout",
            "Redesigned event taxonomy for behavioral signals",
            "Implemented enhanced GA4 funnel tracking",
            "Established long-term analytics governance framework"
        ],
        testimonial: {
            text: "The analytics audit conducted by Martechrise revealed insights we were completely missing. Their structured approach helped us identify and eliminate conversion friction points quickly.",
            author: "Head of Digital Channels, Insurance Platform"
        }
    },
    {
        id: 7,
        slug: 'analytics-setup-martech-startup',
        title: 'End-to-End Analytics Setup',
        industry: 'SaaS / Startup',
        client: 'Martech Startup Launch',
        impact: 'Data-Driven Growth',
        image: '/assets/1.png',
        problem: 'As a new entrant, the startup lacked any analytics infrastructure and needed a scalable solution to track user acquisition, product engagement, and lead generation.',
        challenge: 'The leadership team required clear visibility into growth metrics without relying on complex manual reporting.',
        solution: 'Designed and implemented a complete analytics setup from scratch using GA4, defining KPIs, event taxonomy, and creating real-time dashboards.',
        tools: ['GA4', 'GTM', 'Dashboard Development'],
        initialAudit: [
            "Lacked any analytics infrastructure from day one.",
            "Needed scalable solution for acquisition, engagement, and lead tracking.",
            "Leadership required clear visibility without manual reporting."
        ],
        businessImpacts: [
            { stat: "Live", label: "Tracking", subtext: "Established real-time growth performance tracking." },
            { stat: "100%", label: "Decisions", subtext: "Enabled data-driven product roadmap decisions." },
            { stat: "Clear", label: "Monitoring", subtext: "Improved acquisition channel performance monitoring." },
            { stat: "Scale", label: "Foundation", subtext: "Built scalable analytics foundation ready for expansion." }
        ],
        implementationSummary: [
            "Defined key business KPIs from scratch",
            "Created event taxonomy aligned with product usage",
            "Deployed future-ready tracking via Google Tag Manager",
            "Developed real-time leadership dashboards",
            "Strengthened investor reporting confidence"
        ],
        testimonial: {
            text: "Martechrise helped us build a scalable analytics foundation from day one. Their strategic input has directly influenced our product and growth decisions.",
            author: "Co-Founder & CEO, Martech Startup"
        }
    }
];

export const CASE_STUDY_FAQ = [
    { question: "How do you validate case study results?", answer: "All results are verified against backend transaction logs and third-party audit tools to ensure 100% reconciliation." },
    { question: "Are these strategies repeatable for my industry?", answer: "Yes, our technical frameworks are designed to be vertical-agnostic while solving specific attribution problems." }
];

export const BLOGS = [
    {
        id: 1,
        slug: 'server-side-tagging-post-cookie',
        title: 'Server-Side Tagging: The Post-Cookie Blueprint',
        category: 'Technical',
        date: 'Oct 24, 2023',
        author: 'Lead Architect',
        readTime: '12 min read',
        image: '/assets/1.png',
        content: 'Traditional attribution models are failing in the post-cookie world. Learn how server-side tagging provides a more resilient foundation for measurement.'
    },
    {
        id: 2,
        slug: 'data-governance-enterprise',
        title: 'Enterprise Data Governance Frameworks',
        category: 'Data Governance',
        date: 'Nov 02, 2023',
        author: 'Data Strategist',
        readTime: '08 min read',
        image: '/assets/2.png',
        content: 'In the modern privacy landscape, client-side tracking is increasingly unreliable. Browser protections and ad blockers frequently truncate data packets.'
    }
];

export const BLOG_FAQ = [
    { question: "How often do you publish technical insights?", answer: "We aim for a monthly cadence, focusing on high-signal content for senior technical leaders." },
    { question: "Are these strategies applicable to all enterprises?", answer: "Yes, though specific implementations vary based on your technical stack and regional privacy regulations." }
];

export const ECOMMERCE_FAQ = [
    { question: "How does GA4 handle ecommerce tracking differently?", answer: "GA4 uses an event-based model that allows for more flexible custom dimensions, but requires a more rigorous data layer schema than UA." },
    { question: "Can you help reconcile Shopify and GA4 data?", answer: "Yes, we implement server-side purchase validation to ensure your analytics match your actual transaction logs." },
    { question: "What is the benefit of a custom ecommerce schema?", answer: "It allows you to track specific metrics like LTV, churn risk, and funnel friction that generic tracking misses." }
];
