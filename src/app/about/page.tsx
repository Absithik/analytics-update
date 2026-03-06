import { Metadata } from 'next';
import AboutHero from './sections/about-hero';
import WhoWeAre from './sections/who-we-are';
import WhyWeExist from './sections/why-we-exist';
import ExpertiseTools from './sections/expertise-tools';
import Philosophy from './sections/philosophy';
import Trust from './sections/trust';
import FAQ from '@/components/common/FAQ';
import { ABOUT_FAQ } from '@/constants';
import AboutCta from './sections/about-cta';
import Schema from '@/components/common/Schema';

export const metadata: Metadata = {
    title: "Enterprise Digital Analytics Experts | MarTechRise.ai",
    description: "Meet the enterprise digital analytics experts at MarTechRise.ai. We provide data governance, analytics audits, and trust-centered consulting for global firms.",
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            <Schema faqs={ABOUT_FAQ} />
            <AboutHero />
            <WhoWeAre />
            <WhyWeExist />
            <ExpertiseTools />
            <Philosophy />
            <Trust />

            {/* FAQ Section */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Philosophy & Practice FAQ</h2>
                        <p className="text-slate-500">Understanding our approach to technical analytics.</p>
                    </div>
                    <FAQ items={ABOUT_FAQ} />
                </div>
            </section>

            <AboutCta />
        </div>
    );
}
