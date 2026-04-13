import Hero from "@/components/sections/services/hero";
// import DeliverSection from "@/components/sections/services/DeliverSection";
import ServicesGrid from "@/components/sections/services/services-grid";
import Features from "@/components/sections/services/features";
import Deliverables from "@/components/sections/services/deliverables";
import Audience from "@/components/sections/services/audience";
import Scenarios from "@/components/sections/services/scenarios";
import Integrations from "@/components/sections/services/integrations";
import Pricing from "@/components/sections/services/pricing";
import CTA from "@/components/sections/services/cta";

export const metadata = {
  title: "End-to-End Analytics Implementation & Tracking Solutions",
  description: "From strategy to execution, we design and implement robust analytics systems that give you complete visibility into your customer journey and marketing performance."
};

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen text-slate-900 font-sans">
      <Hero />
      {/* <DeliverSection /> */}
      <ServicesGrid />
      {/* <Features /> */}
      <Deliverables />
      <Audience />
      <Scenarios />
      <Integrations />
      <Pricing />
      <CTA />
    </main>
  );
}
