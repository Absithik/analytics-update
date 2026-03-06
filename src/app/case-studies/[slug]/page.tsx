import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
    ArrowLeft, CheckCircle2, TrendingUp, AlertCircle,
    Target, Database, ShieldCheck, Globe
} from 'lucide-react';
import { CASE_STUDIES, CASE_STUDY_FAQ } from '@/constants';
import Button from '@/components/ui/Button';
import FAQ from '@/components/common/FAQ';
import Schema from '@/components/common/Schema';

interface CaseStudyDetailProps {
    params: { slug: string };
}

export async function generateMetadata({ params }: CaseStudyDetailProps): Promise<Metadata> {
    const { slug } = await params;
    const study = CASE_STUDIES.find(cs => cs.slug === slug);

    if (!study) {
        return {
            title: 'Case Study Not Found | MarTechRise.ai',
        };
    }

    return {
        title: `${study.title} | MarTechRise.ai Case Study`,
        description: `Read how MarTechRise.ai solved ${study.industry} challenges for ${study.client}. Measurable impact: ${study.impact}.`,
    };
}

export default async function CaseStudyDetail({ params }: CaseStudyDetailProps) {
    const { slug } = await params;
    const study = CASE_STUDIES.find(cs => cs.slug === slug);

    if (!study) {
        notFound();
    }

    return (
        <div className="bg-white">
            <Schema faqs={CASE_STUDY_FAQ} />

            <div className="container mx-auto px-4 pt-40 pb-24">
                {/* Navigation */}
                <Link
                    href="/case-studies"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-black transition-colors mb-12 group uppercase text-xs tracking-widest"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Case Archive
                </Link>

                {/* High-Contrast Impact Header */}
                <section className="grid lg:grid-cols-12 gap-16 items-start mb-32">
                    <div className="lg:col-span-8">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <span className="px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 font-black text-[10px] uppercase tracking-widest">
                                    {study.industry} Case Study
                                </span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                    Source: MarTechRise Strategic Consulting
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-6">
                                {study.title}
                            </h1>
                            <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl text-balance border-l-4 border-indigo-600 pl-8 italic">
                                &quot;{study.problem}&quot;
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                            <TrendingUp className="text-indigo-400 mb-6" size={32} />
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Measurable Outcome</h4>
                            <div className="text-6xl font-black mb-6 tabular-nums text-indigo-400">{study.impact}</div>
                            <div className="h-px bg-white/10 mb-8"></div>
                            <div className="flex items-center gap-3 text-emerald-400 font-bold text-xs uppercase tracking-widest">
                                <ShieldCheck size={18} /> Validated attribution model
                            </div>
                        </div>
                    </div>
                </section>

                {/* Breakdown Grid */}
                <div className="grid lg:grid-cols-12 gap-20">
                    <div className="lg:col-span-7 space-y-24">
                        {/* The Challenge */}
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <AlertCircle className="text-rose-500" /> The Analytics Challenge
                            </h3>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                                {study.challenge}
                            </p>
                            <h3 className="text-3xl font-black text-slate-900 mt-16 mb-8 tracking-tight">Architectural Solutions</h3>
                            <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
                                Moving tracking logic to a centralized server allows for PII redaction, data enrichment, and improved page load performance. By controlling the stream, enterprises can ensure that only compliant, cleaned data reaches downstream vendors like Google and Facebook.
                            </p>
                            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                                <h4 className="text-xs font-black text-slate-900 uppercase tracking-widest mb-6">Initial Status Audit</h4>
                                <div className="space-y-4">
                                    {["Fragmented tracking sources across domains.", "High discrepancy between ad spend and purchase logs.", "Manual reporting taking 10+ hours/week."].map((p, i) => (
                                        <div key={i} className="flex gap-3 text-sm font-bold text-slate-600">
                                            <div className="w-1.5 h-1.5 bg-rose-500 rounded-full mt-1.5 flex-shrink-0"></div>
                                            <span>{p}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* The Solution */}
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <Target className="text-indigo-600" /> Technical Solution
                            </h3>
                            <p className="text-xl text-slate-600 leading-relaxed font-medium mb-10">
                                {study.solution}
                            </p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {study.tools.map(tool => (
                                    <div key={tool} className="flex items-center gap-4 p-6 border border-slate-100 rounded-2xl bg-white shadow-sm font-black text-xs uppercase tracking-widest text-slate-600">
                                        <Database size={16} className="text-indigo-600" />
                                        {tool}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Business Impact */}
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <Globe className="text-emerald-600" /> Business Impact
                            </h3>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100">
                                    <div className="text-4xl font-black text-emerald-600 mb-2">100%</div>
                                    <div className="text-sm font-bold text-slate-900 uppercase tracking-tight">Data Reconciliation</div>
                                    <p className="text-xs text-slate-500 mt-2">Zero difference between analytics and backend logs.</p>
                                </div>
                                <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
                                    <div className="text-4xl font-black text-indigo-600 mb-2">ROI+</div>
                                    <div className="text-sm font-bold text-slate-900 uppercase tracking-tight">Strategy Clarity</div>
                                    <p className="text-xs text-slate-500 mt-2">Marketing spend redirected to high-performing cohorts.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="p-12 bg-slate-50 rounded-[3rem] sticky top-32">
                            <h4 className="text-lg font-bold text-slate-900 mb-8">Implementation Summary</h4>
                            <div className="space-y-6 mb-12">
                                {[
                                    "Blueprint & Schema Design",
                                    "Server-Side Tagging Deployment",
                                    "BigQuery Data Pipeline",
                                    "Automated QA & Monitoring"
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 items-center text-sm font-bold text-slate-700">
                                        <CheckCircle2 size={18} className="text-indigo-600" />
                                        {item}
                                    </div>
                                ))}
                            </div>
                            <Link href="/contact" className="block">
                                <Button variant="primary" className="w-full h-16">Request Similar Audit</Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <section className="py-32 mt-32 border-t border-slate-100">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Case Study FAQ</h2>
                        <p className="text-slate-500">Methodology and validation details.</p>
                    </div>
                    <FAQ items={CASE_STUDY_FAQ} />
                </section>
            </div>
        </div>
    );
}
