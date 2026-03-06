import { Metadata } from 'next';
import Link from 'next/link';
import { Target } from 'lucide-react';
import Button from '@/components/ui/Button';
import CaseStudiesHero from './sections/case-studies-hero';
import CaseStudiesArchive from './sections/case-studies-archive';
import Schema from '@/components/common/Schema';
import { CASE_STUDY_FAQ } from '@/constants';

export const metadata: Metadata = {
    title: "Growth Validated | MarTechRise.ai Case Studies",
    description: "Explore the technical architectures and strategic frameworks behind our clients' most significant performance gains. Proof of operational excellence.",
};

export default function CaseStudiesPage() {
    return (
        <div className="pt-32 pb-24 bg-white">
            <Schema faqs={CASE_STUDY_FAQ} />
            <div className="container mx-auto px-4 md:px-6">
                <CaseStudiesHero />
                <CaseStudiesArchive />

                {/* Technical Validation CTA */}
                <section className="mt-40 border-t border-slate-100 pt-32 text-center max-w-4xl mx-auto">
                    <Target className="w-16 h-16 text-indigo-600 mx-auto mb-10" />
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter">Ready for Identical <br /> <span className="text-indigo-600 italic">Operational Results?</span></h2>
                    <p className="text-xl text-slate-500 font-medium mb-12 max-w-xl mx-auto text-balance">
                        Our framework is repeatable across verticals. Let&apos;s apply our attribution models to your specific marketing mix.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link href="/contact">
                            <Button variant="primary" className="h-16 px-12 text-lg font-bold">Request Strategy Audit</Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" className="h-16 px-12 text-lg font-bold">Explore Capabilities</Button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
