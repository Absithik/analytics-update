"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3 } from 'lucide-react';

const CaseStudiesHero: React.FC = () => {
    return (
        <section className="max-w-5xl mx-auto mb-32 text-center md:text-left">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col gap-6"
            >
                <div className="inline-flex items-center self-center md:self-start gap-2 px-3 py-1 bg-slate-50 border border-slate-200 rounded-full text-slate-500 text-xs font-bold tracking-widest uppercase">
                    <BarChart3 size={14} className="text-indigo-600" /> Operational Proof
                </div>
                <h1 className="text-6xl md:text-9xl font-black text-slate-900 tracking-tighter leading-[0.9]">
                    Growth <br />
                    <span className="text-indigo-600 italic">Validated.</span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-500 max-w-2xl leading-relaxed font-medium text-balance mt-4">
                    Explore the technical architectures and strategic frameworks behind our clients&apos; most significant performance gains.
                </p>
            </motion.div>
        </section>
    );
};

export default CaseStudiesHero;
