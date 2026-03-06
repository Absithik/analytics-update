import { Metadata } from 'next';
import BlogHero from './sections/blog-hero';
import BlogList from './sections/blog-list';
import BlogGlossary from './sections/blog-glossary';
import FAQ from '@/components/common/FAQ';
import Button from '@/components/ui/Button';
import { BLOG_FAQ } from '@/constants';
import Schema from '@/components/common/Schema';

export const metadata: Metadata = {
    title: "Enterprise Analytics Insights & Strategy | MarTechRise.ai",
    description: "Explore technical deep dives into GA4, Adobe Analytics, and data governance. Practical enterprise insights and measurement frameworks for modern CMOs.",
};

export default function BlogPage() {
    return (
        <div className="bg-white">
            <Schema faqs={BLOG_FAQ} />
            <BlogHero />
            <BlogList />
            <BlogGlossary />

            {/* FAQ Section */}
            <section className="py-32 mt-32 bg-slate-50 rounded-[3rem]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Insights FAQ</h2>
                        <p className="text-slate-500">How we approach publishing and research.</p>
                    </div>
                    <FAQ items={BLOG_FAQ} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-8">Stay Ahead of the Curve</h2>
                <p className="text-slate-500 mb-12 max-w-xl mx-auto text-lg leading-relaxed font-medium">
                    Subscribe to our monthly briefing for senior technical leaders. High signal, no noise.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto px-4">
                    <input
                        type="email"
                        placeholder="Enter your business email"
                        className="w-full h-14 px-6 bg-slate-100 border-none rounded-xl focus:ring-2 focus:ring-indigo-600/20"
                    />
                    <Button variant="primary" className="h-14 px-8 whitespace-nowrap">Subscribe</Button>
                </div>
            </section>
        </div>
    );
}
