"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Filter } from 'lucide-react';
import { CASE_STUDIES } from '@/constants';

const CaseStudiesArchive: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const industries = ['All', ...Array.from(new Set(CASE_STUDIES.map(cs => cs.industry)))];

    const filtered = filter === 'All' ? CASE_STUDIES : CASE_STUDIES.filter(cs => cs.industry === filter);

    return (
        <>
            {/* Sophisticated Filter Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 border-b border-slate-100 pb-10">
                <div className="flex items-center gap-4">
                    <Filter size={18} className="text-slate-400" />
                    <div className="flex flex-wrap gap-2">
                        {industries.map(ind => (
                            <button
                                key={ind}
                                onClick={() => setFilter(ind)}
                                className={`px-6 py-2 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${filter === ind
                                    ? 'bg-slate-900 text-white shadow-lg'
                                    : 'bg-transparent text-slate-400 hover:text-slate-900 hover:bg-slate-50'
                                    }`}
                            >
                                {ind}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                    Displaying {filtered.length} Success Stories
                </div>
            </div>

            {/* Case Study Archive Grid */}
            <div className="grid md:grid-cols-2 gap-12">
                <AnimatePresence mode="popLayout">
                    {filtered.map((study, idx) => (
                        <motion.div
                            layout
                            key={study.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group flex flex-col"
                        >
                            <Link href={`/case-studies/${study.slug}`} className="block relative overflow-hidden rounded-[2.5rem] border border-slate-100 shadow-sm mb-8 aspect-[16/10]">
                                <div className="w-full h-full relative">
                                    <Image
                                        src={study.image}
                                        alt={study.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                    />
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                {/* Hover Impact Badge */}
                                <div className="absolute bottom-10 left-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <div className="bg-white p-6 rounded-2xl shadow-2xl border border-slate-100">
                                        <TrendingUp size={24} className="text-indigo-600 mb-2" />
                                        <div className="text-2xl font-black text-slate-900 tabular-nums">{study.impact}</div>
                                        <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Primary Performance Indicator</div>
                                    </div>
                                </div>
                            </Link>

                            <div className="px-4">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-[10px] font-black text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-md uppercase tracking-widest">
                                        {study.industry}
                                    </span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        {study.client}
                                    </span>
                                </div>
                                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">
                                    {study.title}
                                </h3>
                                <p className="text-slate-500 font-medium leading-relaxed mb-8 line-clamp-2">
                                    {study.problem}
                                </p>
                                <Link href={`/case-studies/${study.slug}`} className="inline-flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-widest hover:gap-4 transition-all">
                                    Technical Deep Dive <ArrowRight size={14} className="text-indigo-600" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </>
    );
};

export default CaseStudiesArchive;
