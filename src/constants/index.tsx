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

export const CASE_STUDIES = [
    {
        id: 1,
        slug: 'global-retailer',
        title: 'Global Retailer GA4 Migration',
        industry: 'E-commerce',
        client: 'RetailGiant Corp',
        impact: '100% Data Accuracy',
        image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800',
        problem: 'Technical measurement audits should occur quarterly, not annually.',
        challenge: 'Fragmented tracking sources across domains leading to significant data leakage.',
        solution: 'Implemented server-side tagging and a centralized data layer architecture.',
        tools: ['GA4', 'GTM Server-Side', 'BigQuery']
    },
    {
        id: 2,
        slug: 'fintech-startup',
        title: 'Fintech Conversion Optimization',
        industry: 'Fintech',
        client: 'SecurePay Solutions',
        impact: '+24% ROI Increase',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
        problem: 'Marketing spend redirected to high-performing cohorts.',
        challenge: 'High discrepancy between ad spend and purchase logs making ROI unclear.',
        solution: 'Custom purchase schemas and LTV modeling combined with conversion API.',
        tools: ['Adobe Analytics', 'Tealium', 'Segment']
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
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=800',
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
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
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
