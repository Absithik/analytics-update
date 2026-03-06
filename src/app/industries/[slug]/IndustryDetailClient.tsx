"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Sparkles, Zap, Target, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import { getIcon } from '@/constants';

interface IndustryDetailClientProps {
    industry: any;
    relatedCase: any;
}

const IndustryDetailClient: React.FC<IndustryDetailClientProps> = ({ industry, relatedCase }) => {
    return (
        <div className="pt-40 pb-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <Link href="/industries" className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-500 transition-colors mb-12 font-black group uppercase text-xs tracking-widest">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> Back to Industries
                </Link>

                <div className="grid lg:grid-cols-2 gap-20">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <motion.div
                            whileHover={{
                                rotate: 12,
                                scale: 1.15,
                                y: -10,
                                transition: { type: 'spring' as const, stiffness: 400, damping: 18 }
                            }}
                            className="w-24 h-24 bg-indigo-500 text-white rounded-[2.5rem] flex items-center justify-center mb-10 shadow-xl relative"
                        >
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.4 }}
                                className="absolute inset-0 bg-indigo-300 rounded-3xl -z-10 blur-2xl"
                            />
                            {getIcon(industry.icon, 32)}
                        </motion.div>
                        <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.95] tracking-tighter italic">
                            {industry.name} <br />
                            <span className="text-indigo-500 underline decoration-yellow-400 underline-offset-8">Magic</span>.
                        </h1>
                        <p className="text-2xl md:text-3xl text-slate-600 font-bold leading-relaxed mb-12 italic border-l-4 border-indigo-600 pl-8">
                            &quot;{industry.solution}&quot;
                        </p>

                        <section className="mb-16">
                            <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                                <Target size={16} /> Specialized Puzzles
                            </h3>
                            <div className="grid gap-6">
                                {industry.challenges?.map((c: string, i: number) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ x: 10 }}
                                        className="flex gap-6 items-center p-10 bg-slate-50 border-4 border-white rounded-[3.5rem] shadow-sm hover:border-indigo-100 transition-all group"
                                    >
                                        <div className="w-12 h-12 bg-indigo-100 text-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                            <Zap size={24} fill="currentColor" />
                                        </div>
                                        <span className="text-2xl font-black text-slate-700">{c}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </section>

                        <div className="p-12 bg-indigo-50 rounded-[4rem] border-4 border-white shadow-xl relative overflow-hidden group">
                            <h4 className="text-[10px] font-black text-indigo-500 uppercase tracking-widest mb-6">Vertical Expertise</h4>
                            <p className="text-xl text-slate-700 font-bold italic leading-relaxed relative z-10">
                                We&apos;ve likely solved a similar problem for your peers. Our cross-industry insights allow us to bring best-practices from one vertical to transform yours.
                            </p>
                            <div className="relative w-48 h-48 ml-auto -mb-12 opacity-50 group-hover:opacity-100 transition-opacity">
                                <Image src="https://illustrations.popsy.co/white/creative-work.svg" alt="Vertical Expertise" fill className="object-contain" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
                        {relatedCase && (
                            <div className="bg-white border-4 border-slate-50 rounded-[4rem] overflow-hidden shadow-2xl relative group">
                                <div className="absolute top-8 left-8 z-20">
                                    <div className="inline-flex items-center gap-2 px-6 py-2 bg-white/90 backdrop-blur rounded-full text-indigo-600 font-black text-[10px] uppercase tracking-widest border-2 border-indigo-100 shadow-xl">
                                        <Sparkles size={16} /> Vertical Success
                                    </div>
                                </div>
                                <div className="aspect-[16/10] relative overflow-hidden">
                                    <Image
                                        src={relatedCase.image}
                                        alt="Case Study"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-10 left-10 right-10 text-white">
                                        <p className="text-4xl md:text-5xl font-black tracking-tighter italic">{relatedCase.impact}</p>
                                    </div>
                                </div>
                                <div className="p-12">
                                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Real World Proof</h4>
                                    <h5 className="text-3xl font-black text-slate-900 mb-8 tracking-tight">{relatedCase.title}</h5>
                                    <Link href={`/case-studies/${relatedCase.slug}`}>
                                        <Button variant="primary" className="w-full h-20 text-xl font-black tracking-widest uppercase">See How We Did It</Button>
                                    </Link>
                                </div>
                            </div>
                        )}

                        <motion.div
                            whileHover={{ rotate: -1.5, scale: 1.02 }}
                            className="p-16 bg-indigo-600 text-white rounded-[5rem] border-4 border-white shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
                            <h4 className="text-4xl md:text-6xl font-black mb-10 leading-[0.9] tracking-tighter italic">Ready to <br /><span className="text-yellow-400 underline decoration-white underline-offset-8">Elevate?</span></h4>
                            <div className="space-y-8 mb-12">
                                <div className="flex items-center gap-6 text-indigo-100 font-bold text-xl">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><TrendingUp className="text-yellow-400" size={20} /></div>
                                    25–35% Funnel Improvement
                                </div>
                                <div className="flex items-center gap-6 text-indigo-100 font-bold text-xl">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center"><Target className="text-yellow-400" size={20} /></div>
                                    Tailored Strategy Roadmap
                                </div>
                            </div>
                            <Link href="/contact">
                                <Button className="w-full h-24 bg-white text-indigo-600 border-white hover:bg-yellow-400 hover:text-indigo-900 hover:border-yellow-500 transition-colors shadow-2xl text-2xl font-black tracking-tighter uppercase italic">
                                    Request Free Audit! 🚀
                                </Button>
                            </Link>
                        </motion.div>

                        <div className="text-center">
                            <div className="relative w-64 h-64 mx-auto">
                                <Image src="https://illustrations.popsy.co/white/professional-achievement.svg" alt="Industry Results" fill className="object-contain" />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default IndustryDetailClient;
