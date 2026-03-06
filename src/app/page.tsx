import { Metadata } from 'next';
import ModernSaaSHero from './(home)/modern-saas-hero';
import AuditCtaSection from './(home)/audit-cta-section';
import StrategicValueSection from './(home)/strategic-value-section';
import ServicesSnapshotSection from './(home)/services-snapshot-section';
import AnalyticsProcessSection from './(home)/analytics-process-section';
import TestimonialSection from './(home)/testimonial-section';
import IndustriesSection from './(home)/industries-section';
import MetricsSection from './(home)/metrics-section';
import FAQSection from './(home)/faq-section';
import NavigationStrip from './(home)/navigation-strip';
import Schema from '@/components/common/Schema';
import { HOME_FAQ } from '@/constants';

export const metadata: Metadata = {
  title: "Enterprise Digital Analytics Experts | US & Global Data Strategy | MarTechRise.ai",
  description: "Unlock true ROI with our custom GA4 migrations, server-side tracking, and advanced digital analytics infrastructure built for global enterprises.",
};

export default function Home() {
  return (
    <>
      <Schema faqs={HOME_FAQ} />
      <div className="w-full bg-white">
        <ModernSaaSHero />
        {/* <AuditCtaSection /> */}
        <StrategicValueSection />
        <ServicesSnapshotSection />
        <AnalyticsProcessSection />

        <IndustriesSection />
        <MetricsSection />
        <TestimonialSection />
        <FAQSection />
        <NavigationStrip />
      </div>
    </>
  );
}
