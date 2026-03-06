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
  dashboardImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000",
  floatingIndicators: [
    { title: "100% Validated", subtitle: "Data Pipeline", icon: Shield, color: "emerald" },
    { title: "Compliance Ready", subtitle: "GDPR/CCPA", icon: Lock, color: "indigo" }
  ]
};
