import { BarChart, Shield, Lock } from 'lucide-react';


export const heroContent = {
  badge: {
    icon: BarChart,
    text: "Advanced Attribution & Measurement"
  },
  title: {
    main: "Turn Digital Data Into",
    highlight: "Business Decisions."
  },
  subtitle: "We empower enterprises to navigate the complexity of modern attribution. By merging technical precision with strategic clarity, we transform fragmented data into your most valuable growth asset.",
  ctas: [
    { text: "Request Infrastructure Audit", variant: "primary" as const, href: "/contact" },
    { text: "View Solutions", variant: "outline" as const, href: "/services" }
  ],
  dashboardImage: "/assets/1.png",
  floatingIndicators: [
    { title: "100% Validated", subtitle: "Data Pipeline", icon: Shield, color: "emerald" },
    { title: "Compliance Ready", subtitle: "GDPR/CCPA", icon: Lock, color: "indigo" }
  ]
};
