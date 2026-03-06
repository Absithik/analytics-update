import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
    ArrowLeft, CheckCircle2, TrendingUp, AlertCircle,
    Target, ShieldAlert, FileCode, Activity
} from 'lucide-react';
import { SERVICES_FAQ, getIcon, SERVICES } from '@/constants';
import Button from '@/components/ui/Button';
import Schema from '@/components/common/Schema';

interface Props {
    params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const service = SERVICES.find(s => s.id === id);
    if (!service) {
        return {
            title: 'Service Not Found | MarTechRise.ai',
        };
    }
    return {
        title: `${service.title} | MarTechRise.ai Services`,
        description: service.description,
    };
}

export default async function ServiceDetail({ params }: Props) {
    const { id } = await params;
    const service = SERVICES.find(s => s.id === id);

    if (!service) {
        notFound();
    }

    return (
        <div className="pt-32 pb-24 bg-white">
            <Schema faqs={SERVICES_FAQ} />

            <div className="container mx-auto px-4 md:px-6">
                {/* Navigation */}
                <Link
                    href="/services"
                    className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-black transition-colors mb-12 group uppercase text-xs tracking-widest"
                >
                    <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Capabilities Inventory
                </Link>

                {/* High-Contrast ROI Header */}
                <section className="grid lg:grid-cols-12 gap-16 items-end mb-32">
                    <div className="lg:col-span-8">
                        <div className="flex flex-col gap-6">
                            <div className="w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-xl">
                                {getIcon(service.icon)}
                            </div>
                            <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                                {service.title.split(' ')[0]} <br />
                                <span className="text-indigo-600 italic">{service.title.split(' ').slice(1).join(' ')}</span>
                            </h1>
                            <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl text-balance mt-6 italic">
                                &quot;{service.description}&quot;
                            </p>
                        </div>
                    </div>
                    <div className="lg:col-span-4">
                        <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden">
                            <TrendingUp className="text-indigo-400 mb-6" size={32} />
                            <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Benchmark Outcome</h4>
                            <div className="text-5xl font-black mb-4 tabular-nums">{service.impact}</div>
                            <p className="text-slate-400 text-sm font-medium italic mb-8">Calculated average performance across 24+ months of active deployment.</p>
                            <Link href={`/architecture/${service.id}`}>
                                <Button variant="secondary" className="w-full bg-indigo-500 hover:bg-indigo-400 border-none text-black">
                                    Open Technical Blueprint <FileCode size={18} />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* The Gap Analysis: Problem vs Solution */}
                <section className="grid lg:grid-cols-2 gap-12 mb-40">
                    <div className="p-10 md:p-14 bg-rose-50 border border-rose-100 rounded-[3rem] relative overflow-hidden group">
                        <ShieldAlert className="absolute top-10 right-10 text-rose-200" size={64} />
                        <h3 className="text-xs font-black text-rose-600 uppercase tracking-widest mb-10 flex items-center gap-2">
                            <AlertCircle size={14} /> The Measurement Gap
                        </h3>
                        <ul className="space-y-6">
                            {service.problemPoints?.map((point: string, i: number) => (
                                <li key={i} className="flex gap-4 items-start text-slate-800 font-bold text-lg">
                                    <span className="text-rose-400 mt-1">✕</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-14 pt-10 border-t border-rose-200">
                            <p className="text-sm font-black text-rose-700 italic">Resulting in: {service.problemOutcomes?.join(', ')}</p>
                        </div>
                    </div>

                    <div className="p-10 md:p-14 bg-emerald-50 border border-emerald-100 rounded-[3rem] relative overflow-hidden group">
                        <Target className="absolute top-10 right-10 text-emerald-200" size={64} />
                        <h3 className="text-xs font-black text-emerald-600 uppercase tracking-widest mb-10 flex items-center gap-2">
                            <CheckCircle2 size={14} /> Strategic Resolution
                        </h3>
                        <ul className="space-y-6">
                            {service.whatWeDo?.map((item: string, i: number) => (
                                <li key={i} className="flex gap-4 items-start text-slate-800 font-bold text-lg">
                                    <CheckCircle2 className="text-emerald-500 mt-1" size={20} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                        <div className="mt-14 pt-10 border-t border-emerald-200">
                            <p className="text-sm font-black text-emerald-700 italic">Deliverable: Scalable, production-grade tracking infrastructure.</p>
                        </div>
                    </div>
                </section>

                {/* Technical Architecture Timeline Preview */}
                <section className="mb-40">
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-black text-slate-900 tracking-tight">Implementation <span className="text-indigo-600">Framework.</span></h2>
                        <p className="text-slate-500 mt-4 font-medium">Standardized delivery stages for architecture deployment.</p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-12 relative">
                            <div className="absolute left-7 top-0 bottom-0 w-px bg-slate-200 hidden md:block"></div>
                            {service.methodology?.map((step: { title: string; description: string }, i: number) => (
                                <div
                                    key={i}
                                    className="flex flex-col md:flex-row gap-8 items-start relative z-10"
                                >
                                    <div className="w-14 h-14 bg-white border-2 border-slate-900 rounded-xl flex items-center justify-center flex-shrink-0 text-xl font-black tabular-nums shadow-sm">
                                        {i + 1}
                                    </div>
                                    <div className="p-10 bg-slate-50 border border-slate-100 rounded-3xl w-full text-slate-700">
                                        <h4 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-wide">{step.title}</h4>
                                        <p className="font-bold leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Production Stack & Expertise Evidence */}
                <section className="grid lg:grid-cols-12 gap-20 items-start">
                    <div className="lg:col-span-4">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-10">Production Stack</h3>
                        <div className="flex flex-wrap gap-3">
                            {service.tools?.map((tool: string) => (
                                <div key={tool} className="px-6 py-3 bg-white border border-slate-200 rounded-xl text-slate-900 font-black text-xs uppercase tracking-widest shadow-sm">
                                    {tool}
                                </div>
                            ))}
                        </div>
                        <div className="mt-16 p-10 bg-indigo-50 border border-indigo-100 rounded-[2.5rem]">
                            <Activity className="text-indigo-600 mb-6" size={32} />
                            <p className="text-slate-700 font-bold leading-relaxed italic">
                                &quot;Our methodology is built on 10+ years of enterprise data governance across global markets.&quot;
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-8">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-10">Historical Evidence</h3>
                        <div className="space-y-6 text-slate-700">
                            {service.projects?.map((project: { industry: string; title: string; issue: string; result: string }, idx: number) => (
                                <div key={idx} className="p-12 bg-white border border-slate-100 rounded-[3rem] shadow-xl hover:-translate-y-2 transition-transform">
                                    <div className="flex justify-between items-center mb-10">
                                        <span className="px-4 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-600 font-black text-[10px] uppercase tracking-widest">
                                            {project.industry} Vertical
                                        </span>
                                    </div>
                                    <h5 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">{project.title}</h5>
                                    <div className="grid md:grid-cols-2 gap-10">
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Baseline Puzzle</p>
                                            <p className="font-bold italic">&quot;{project.issue}&quot;</p>
                                        </div>
                                        <div className="space-y-2">
                                            <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">Operational Success</p>
                                            <p className="text-slate-900 font-black italic">&quot;{project.result}&quot;</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Conversion CTA */}
                <section className="mt-40 text-center max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-10 tracking-tighter">Ready to Resolve Your <span className="text-indigo-600">Measurement Gap?</span></h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link href="/contact">
                            <Button variant="primary" className="h-20 px-16 text-xl">Schedule Technical Audit</Button>
                        </Link>
                    </div>
                </section>
            </div>
        </div>
    );
}
