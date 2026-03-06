import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Zap } from 'lucide-react';
import { INDUSTRIES, SERVICES_FAQ, getIcon } from '@/constants';
import Button from '@/components/ui/Button';
import FAQ from '@/components/common/FAQ';
import Schema from '@/components/common/Schema';
import ServicesHero from './sections/services-hero';
import ServicesList from './sections/services-list';

export const metadata: Metadata = {
    title: "Premium Digital Analytics Services | MarTechRise.ai",
    description: "Scalable digital analytics services for enterprises. From GA4 implementation to CRO and data governance, we provide end-to-end data strategy and solutions.",
};

export default function ServicesPage() {
    return (
        <div className="bg-white">
            <Schema faqs={SERVICES_FAQ} />
            <ServicesHero />
            <ServicesList />

            {/* Benefits Section */}
            <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:24px_24px]"></div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-20">Why Enterprises Partner with MarTechRise</h2>
                    <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                        {[
                            { title: "Reduced Attribution Waste", desc: "Eliminate spending on ineffective channels by correctly mapping the multi-touch journey." },
                            { title: "Technical Resilience", desc: "Our implementations are built to withstand browser updates and cookie depreciation." },
                            { title: "Clean Data Governance", desc: "Custom naming conventions and schemas that ensure data integrity across the organization." }
                        ].map((benefit, i) => (
                            <div key={i} className="p-10 border border-white/10 rounded-3xl hover:bg-white/5 transition-colors">
                                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center mb-8 mx-auto">
                                    <Zap size={24} />
                                </div>
                                <h4 className="text-2xl font-bold mb-6">{benefit.title}</h4>
                                <p className="text-slate-400 leading-relaxed font-medium">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Mapping */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Specialized Industry Schemas</h2>
                        <p className="text-slate-500 text-lg">We don&apos;t believe in one-size-fits-all. Every industry requires a custom data model.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {INDUSTRIES.map((industry, i) => (
                            <Link href={`/industries/${industry.slug}`} key={i} className="group">
                                <div className="p-8 border border-slate-100 rounded-2xl hover:border-indigo-600 transition-all hover:bg-white hover:shadow-xl">
                                    <div className="text-slate-400 group-hover:text-indigo-600 mb-6 transition-colors">
                                        {getIcon(industry.icon)}
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-4">{industry.name}</h3>
                                    <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 group-hover:text-indigo-600">
                                        Service Mapping <ArrowRight size={14} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Service-Related FAQ</h2>
                        <p className="text-slate-500">Structured answers to help you choose the right analytics model.</p>
                    </div>
                    <FAQ items={SERVICES_FAQ} />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 border-t border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter">Ready to Optimize Your Stack?</h2>
                    <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto font-medium">
                        Join the enterprises that have transformed their data into a competitive advantage.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/contact">
                            <Button variant="primary" className="h-16 px-12 text-lg">Talk to a Lead Architect</Button>
                        </Link>
                        <Link href="/contact">
                            <Button variant="outline" className="h-16 px-12 text-lg">Request a Performance Audit</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Internal Linking */}
            <section className="py-12 border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between gap-8 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                        <div className="flex flex-wrap gap-8">
                            <Link href="/services/digital-analytics" className="hover:text-indigo-600">GA4 Services</Link>
                            <Link href="/services/optimization" className="hover:text-indigo-600">CRO Strategy</Link>
                            <Link href="/services/data-strategy" className="hover:text-indigo-600">CDP Strategy</Link>
                        </div>
                        <div>© 2026 MarTechRise.ai Technical Consulting</div>
                    </div>
                </div>
            </section>
        </div>
    );
}
