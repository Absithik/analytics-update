import HeroIndustries from "@/components/sections/industries/hero-industries";
import WhoWeWork from "@/components/sections/industries/who-we-work";
import IndustriesGrid from "@/components/sections/industries/industries-grid";
import Approach from "@/components/sections/industries/approach";
import Impact from "@/components/sections/industries/impact";
import Challenges from "@/components/sections/industries/challenges";
import CTAIndustries from "@/components/sections/industries/cta-industries";

export const metadata = {
  title: "Industry Specific Analytics Solutions | MarTechRise",
  description: "Analytics systems tailored to your industry's customer journey, compliance needs, and growth metrics."
};

export default function IndustriesPage() {
  return (
    <main className="bg-white min-h-screen text-slate-900 font-sans">
      <HeroIndustries />
      <WhoWeWork />
      <IndustriesGrid />
      <Approach />
      <Impact />
      <Challenges />
      <CTAIndustries />
    </main>
  );
}
