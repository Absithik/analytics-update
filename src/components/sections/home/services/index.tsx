import ServicesContent, { ServiceData } from "./ServicesContent";

const services: ServiceData[] = [
  {
    title: "Analytics & Tracking",
    desc: "Set up accurate, scalable tracking across your website and apps.",
    iconName: "Activity",
    bullets: ["Solution Design Document (SDD)", "GTM / Adobe Launch setup", "Web & Mobile SDK migration", "Third-party tags integration"]
  },
  {
    title: "Server-Side Tracking",
    desc: "Eliminate data loss and improve tracking accuracy with modern architecture.",
    iconName: "Server",
    bullets: ["Server-side GTM setup", "Meta Conversion API (CAPI)", "First-party data collection", "Privacy-safe tracking"]
  },
  {
    title: "CDP Implementation",
    desc: "Unify and activate your customer data across platforms.",
    iconName: "Grid",
    bullets: ["Adobe RT-CDP & Tealium", "Audience segmentation", "Real-time data activation"]
  },
  {
    title: "Analytics Audit",
    desc: "Identify what’s broken and where data is being lost.",
    iconName: "Code",
    bullets: ["Missing conversion tracking", "Broken or misfiring tags", "Detailed audit report"]
  },
  {
    title: "Data Validation",
    desc: "Fix tracking issues and ensure your data is clean and reliable.",
    iconName: "ShieldCheck",
    bullets: ["Tracking & tag debugging", "Cross-platform validation", "Funnel validation"]
  },
  {
    title: "Reporting & Insights",
    desc: "Turn your data into clear, actionable business insights.",
    iconName: "PieChart",
    bullets: ["Campaign performance", "Custom dashboards (GA4/Looker)", "ROI & attribution analysis"]
  }
];

export default function ServicesSection() {
  return <ServicesContent services={services} />;
}
