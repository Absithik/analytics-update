import { BarChart, Shield, Lock } from 'lucide-react';


export const heroContent = {
  badge: {
    icon: BarChart,
    text: "MarTechRise — Empowering Businesses"
  },
  title: {
    main: "Fix Broken Tracking &",
    highlight: "Unlock Accurate Data"
  },
  subtitle: "We help brands eliminate data loss, fix tracking issues, and improve attribution so you can scale your marketing campaigns with confidence.",
  ctas: [
    { text: "Request Infrastructure Audit", variant: "primary" as const, href: "/contact" },
    { text: "View Solutions", variant: "outline" as const, href: "/services" }
  ],
  dashboardImage: "/assets/home-dasboard.png",
  floatingIndicators: [
    { title: "100% Validated", subtitle: "Data Pipeline", icon: Shield, color: "emerald" },
    { title: "Compliance Ready", subtitle: "GDPR/CCPA", icon: Lock, color: "indigo" }
  ]
};
