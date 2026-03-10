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
    problem: string; // Keep problem for the preview card short description

    clientOverview: string;
    businessChallenge: string;
    tools: string[];
    martechRiseSolution: string;
    outcome: string;
    impacts: string[];
    testimonial?: { text: string; author: string };
}

export const CASE_STUDIES: CaseStudy[] = [

    {
        id: 3,
        slug: 'ga4-migration-d2c-brand',
        title: 'GA4 Migration & Conversion Accuracy Improvement for a D2C Brand',
        industry: 'E-commerce',
        client: 'Fast-Growing D2C Brand',
        impact: '+25% Attribution Accuracy',
        image: '/assets/1.png',
        problem: 'The client was still relying on Universal Analytics, which resulted in fragmented data, limited event-level insights, and unreliable attribution.',
        clientOverview: 'The client is a fast-growing direct-to-consumer (D2C) e-commerce brand operating across India, heavily dependent on paid media and influencer marketing to drive online sales. Accurate attribution and conversion tracking were critical for their business growth and marketing ROI measurement.',
        businessChallenge: 'The client was still relying on Universal Analytics, which resulted in fragmented data, limited event-level insights, and unreliable attribution. Their marketing team struggled to understand the customer journey across product views, add-to-cart actions, and completed purchases. Due to inconsistent event tracking, campaign optimization decisions were largely assumption-driven rather than data-driven.',
        tools: [
            'Google Analytics 4',
            'Google Tag Manager',
            'Looker Studio',
            'Structured Data Layer Architecture',
            'Enhanced E-commerce Tracking Framework'
        ],
        martechRiseSolution: 'MartechRise led a complete migration to Google Analytics 4 by first understanding the business objectives and mapping them to a structured event taxonomy. A detailed data layer specification was created to ensure accurate capture of product-level and transaction-level data. The GA4 property was configured with enhanced e-commerce events, custom conversions, and user journey tracking. Google Tag Manager was used to deploy and validate events across the website, ensuring consistency and scalability.\n\nCustom exploration reports were built to visualize the complete funnel from product discovery to purchase, enabling the marketing team to identify high drop-off stages and optimize campaigns accordingly.',
        outcome: 'Post implementation, the client experienced significantly improved data reliability and clarity. Conversion attribution accuracy improved by over 25%, allowing the marketing team to confidently reallocate budgets toward high-performing campaigns. The enhanced funnel visibility led to better checkout optimization, contributing to a measurable increase in overall conversion rate and return on ad spend.',
        impacts: [
            '25% improvement in conversion attribution accuracy',
            '18% increase in Return on Ad Spend (ROAS)',
            '30% improved visibility across checkout funnel stages',
            'Reduced campaign optimization cycle time by 35%',
            'Established scalable tracking framework for future growth'
        ],
        testimonial: {
            text: "Martechrise didn’t just migrate us to GA4 — they transformed how we understand performance marketing. We now have complete clarity across our funnel and far greater confidence in our attribution decisions.",
            author: "Head of Growth, D2C E-commerce Brand"
        }
    },
    {
        id: 4,
        slug: 'adobe-analytics-financial-services',
        title: 'Adobe Analytics Implementation for a Financial Services Pre-Qualification Journey',
        industry: 'Financial Services',
        client: 'Leading Financial Institution',
        impact: '32% Clarity Gain',
        image: '/assets/2.png',
        problem: 'The client lacked end-to-end visibility into their pre-qualification journey. Although traffic volumes were high, the business could not clearly identify where users were dropping off.',
        clientOverview: 'A leading financial services organization offering loan and credit products through digital channels, with a strong focus on lead generation via online pre-qualification forms.',
        businessChallenge: 'The client lacked end-to-end visibility into their pre-qualification journey. Although traffic volumes were high, the business could not clearly identify where users were dropping off, which entry points were generating high-quality leads, or how different marketing channels influenced form completion. Reporting was manual and time-consuming, limiting timely decision-making.',
        tools: [
            'Adobe Analytics',
            'Adobe Launch',
            'Adobe Analysis Workspace',
            'Custom eVar & Success Event Framework',
            'Funnel & Entry-Point Outcome Analysis'
        ],
        martechRiseSolution: 'MartechRise designed and implemented a comprehensive digital analytics framework using Adobe Analytics. A structured variable and event taxonomy was created to track each step of the pre-qualification process, including form visits, field interactions, submissions, approvals, and rejections. Adobe Launch was used to deploy tags with precise rule-based logic.\n\nCustom dashboards were built in Analysis Workspace to present entry-point performance, funnel progression, and outcome-based lead quality metrics. A detailed glossary was also delivered to align business and analytics teams on metric definitions.',
        outcome: 'The new implementation enabled the client to clearly understand lead quality by entry source and user behavior within the form. Reporting turnaround time was reduced by more than 60%, and the business gained actionable insights to optimize underperforming entry points. The improved visibility directly supported better marketing spend efficiency and lead conversion optimization.',
        impacts: [
            '32% improved clarity in form completion tracking',
            '60% reduction in manual reporting efforts',
            'Identified high-performing lead entry sources',
            'Improved lead quantity measurement by entry channel',
            'Enabled executive-level decision-making visibility'
        ],
        testimonial: {
            text: "For the first time, we have end-to-end visibility into our pre-qualification journey. Martechrise brought structure, governance, and strategic insight into our analytics ecosystem.",
            author: "Digital Transformation Lead, Financial Institution"
        }
    },
    {
        id: 5,
        slug: 'white-label-analytics-partnership',
        title: 'White-Label Analytics Partnership for a Global Marketing Agency',
        industry: 'Agency Partnership',
        client: 'Global Marketing Agency',
        impact: '40% Error Reduction',
        image: '/assets/3.png',
        problem: 'The agency needed a reliable analytics partner to support implementation, audits, and advanced tracking requirements across client accounts.',
        clientOverview: 'An international performance marketing agency managing analytics and reporting for multiple clients across e-commerce, BFSI, and SaaS industries.',
        businessChallenge: 'The agency needed a reliable analytics partner to support implementation, audits, and advanced tracking requirements across client accounts. Frequent tracking discrepancies, lack of standardized QA processes, and limited in-house analytics expertise were affecting client confidence and delivery timelines.',
        tools: [
            'Google Analytics 4',
            'Google Tag Manager',
            'Meta Pixel & Conversion API',
            'Tracking Audit & QA Framework',
            'Campaign Attribution Governance Model'
        ],
        martechRiseSolution: 'MartechRise partnered as a white-label analytics extension of the agency’s team. The engagement included auditing existing analytics implementations, redesigning GA4 event structures, and standardizing conversion tracking frameworks. Martechrise also supported Meta Pixel validation and campaign tracking governance to ensure consistency across platforms.\n\nOngoing QA processes were introduced to proactively identify tracking issues before they impacted reporting. Martechrise collaborated closely with the agency’s media and tech teams to align analytics with campaign objectives.',
        outcome: 'The partnership significantly improved data accuracy and delivery reliability for the agency. Tracking discrepancies were reduced by nearly 40%, and the agency achieved faster turnaround times for analytics requests. The white-label model strengthened the agency’s service offering and helped retain long-term client relationships.',
        impacts: [
            '40% reduction in tracking discrepancies',
            '25% improvement in campaign data accuracy',
            '100% on-time analytics implementation delivery',
            'Strengthened client retention through reliable reporting',
            'Enabled agency to scale analytics services without increasing headcount'
        ],
        testimonial: {
            text: "Martechrise operates like an extension of our internal team. Their precision, responsiveness, and technical expertise have strengthened our client reporting and elevated our analytics credibility.",
            author: "Managing Director, Global Marketing Agency"
        }
    },
    {
        id: 6,
        slug: 'analytics-audit-insurance',
        title: 'Analytics Audit & Funnel Optimization for an Insurance Website',
        industry: 'Insurance',
        client: 'Digital-First Insurance Provider',
        impact: 'Measurable Conversion Uplift',
        image: '/assets/4.png',
        problem: 'Despite high website traffic, the client faced low conversion rates and lacked clarity on user behavior across key funnel stages.',
        clientOverview: 'A digital-first insurance provider offering policy purchases and renewals through its website, with a focus on improving online lead and policy conversion rates.',
        businessChallenge: 'Despite high website traffic, the client faced low conversion rates and lacked clarity on user behavior across key funnel stages. Existing analytics implementation had gaps, resulting in missing events and inconsistent reporting across teams.',
        tools: [
            'Google Analytics 4',
            'Google Tag Manager',
            'Funnel Drop-off Analysis',
            'Event Taxonomy Redesign',
            'UX-Driven Behavioral Reporting'
        ],
        martechRiseSolution: 'MartechRise conducted a comprehensive analytics audit covering tag implementation, data layer structure, and event tracking accuracy. Gaps were identified in critical user actions such as quote initiation, policy selection, and checkout steps. Based on audit findings, the analytics framework was redesigned to capture meaningful behavioral signals.\n\nEnhanced funnel tracking was implemented using GA4, and dashboards were created to highlight drop-offs, device-based behavior, and channel performance. Insights were shared with UX and marketing teams to drive optimization initiatives.',
        outcome: 'The audit and reimplementation provided the client with a clear view of their conversion funnel for the first time. Actionable insights helped identify friction points in the quote and checkout process, leading to targeted UX improvements. This resulted in improved engagement metrics and a noticeable uplift in completed policy purchases.',
        impacts: [
            'Complete end-to-end visibility across quote-to-purchase journey',
            'Identification of key friction points in checkout process',
            'Measurable uplift in completed policy purchases',
            'Improved device-level and channel-level conversion insights',
            'Established long-term analytics governance framework'
        ],
        testimonial: {
            text: "The analytics audit conducted by Martechrise revealed insights we were completely missing. Their structured approach helped us identify and eliminate conversion friction points quickly.",
            author: "Head of Digital Channels, Insurance Platform"
        }
    },
    {
        id: 7,
        slug: 'analytics-setup-startup',
        title: 'End-to-End Analytics Setup for a Martech Startup Launch',
        industry: 'Technology / SaaS',
        client: 'Martech Startup',
        impact: 'Data-Driven Growth',
        image: '/assets/1.png',
        problem: 'As a new entrant, the startup lacked any analytics infrastructure and needed a scalable solution to track user acquisition, product engagement, and lead generation.',
        clientOverview: 'A newly launched technology startup offering SaaS-based marketing solutions, looking to establish a strong data foundation from day one.',
        businessChallenge: 'As a new entrant, the startup lacked any analytics infrastructure and needed a scalable solution to track user acquisition, product engagement, and lead generation. The leadership team required clear visibility into growth metrics without relying on complex manual reporting.',
        tools: [
            'Google Analytics 4',
            'Google Tag Manager',
            'Custom KPI & Event Taxonomy Framework',
            'Executive Dashboard Development',
            'Acquisition & Product Engagement Tracking'
        ],
        martechRiseSolution: 'MartechRise designed and implemented a complete analytics setup from scratch using Google Analytics 4. This included defining key business KPIs, creating an event taxonomy aligned with product usage, and deploying tracking via Google Tag Manager. Custom dashboards were developed to provide leadership with real-time insights into acquisition channels, feature usage, and conversion trends.\n\nThe implementation was future-ready, allowing easy expansion as the product and user base scaled.',
        outcome: 'The startup gained immediate visibility into user behavior and growth performance. Data-driven decision-making became integral to marketing and product strategy from the early stages, helping the company prioritize high-impact initiatives and measure outcomes effectively.',
        impacts: [
            'Established real-time growth performance tracking',
            'Enabled data-driven product roadmap decisions',
            'Improved acquisition channel performance monitoring',
            'Strengthened investor reporting confidence',
            'Built scalable analytics foundation ready for international expansion'
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
