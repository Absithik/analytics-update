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
                        {/* Client Overview */}
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <Globe className="text-emerald-500" /> Client Overview
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
                                {study.clientOverview}
                            </p>
                        </section>

                        {/* The Challenge */}
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <AlertCircle className="text-rose-500" /> Business Challenge
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
                                {study.businessChallenge}
                            </p>
                        </section>

                        {/* Tools Used */}
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <Target className="text-indigo-600" /> Tools Used
                            </h3>
                            <div className="flex flex-wrap gap-4">
                                {study.tools.map(tool => (
                                    <div key={tool} className="flex items-center gap-3 px-5 py-3 border border-slate-200 rounded-xl bg-slate-50 font-bold text-xs uppercase tracking-widest text-slate-700 shadow-sm hover:border-indigo-200 transition-colors">
                                        <Database size={16} className="text-indigo-600" />
                                        {tool}
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* The Solution */}
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <ShieldCheck className="text-indigo-600" /> MartechRise Solution
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10 whitespace-pre-wrap">
                                {study.martechRiseSolution}
                            </p>
                        </section>

                        {/* Outcome */}
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <TrendingUp className="text-emerald-600" /> Outcome
                            </h3>
                            <p className="text-lg text-slate-600 leading-relaxed font-medium mb-10">
                                {study.outcome}
                            </p>
                        </section>

                        {/* Business Impact */}
                        <section>
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                                <CheckCircle2 className="text-indigo-600" /> Impact
                            </h3>
                            <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100 mb-12">
                                <div className="space-y-6">
                                    {study.impacts.map((impact, i) => (
                                        <div key={i} className="flex gap-4 items-center text-base font-bold text-slate-700">
                                            <div className="w-2 h-2 bg-indigo-600 rounded-full flex-shrink-0"></div>
                                            <span>{impact}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {study.testimonial && (
                                <div className="mt-12 p-10 bg-slate-900 rounded-[2rem] text-white shadow-xl relative overflow-hidden">
                                    <div className="absolute top-0 right-0 p-8 opacity-10">
                                        <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                                    </div>
                                    <p className="text-xl italic font-medium leading-relaxed mb-8 relative z-10 text-slate-100">
                                        &quot;{study.testimonial.text}&quot;
                                    </p>
                                    <div className="text-sm font-black text-indigo-400 uppercase tracking-widest relative z-10">
                                        — {study.testimonial.author}
                                    </div>
                                </div>
                            )}
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-5 space-y-12">
                        <div className="p-12 bg-slate-50 rounded-[3rem] sticky top-32 border border-slate-100">
                            <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">Ready for similar results?</h4>
                            <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                                Let's audit your current analytics stack and identify hidden revenue opportunities.
                            </p>
                            <Link href="/contact" className="block">
                                <Button variant="primary" className="w-full h-16 shadow-lg shadow-indigo-600/20">Request an Audit</Button>
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
