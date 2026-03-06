"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ServicesHero: React.FC = () => {
    return (
        <section className="pt-40 pb-20 border-b border-slate-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl"
                >
                    <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
                        Precision <br />
                        <span className="text-indigo-600 font-serif italic">Analytics Services.</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                        We deploy enterprise-grade measurement frameworks that eliminate data fragmentation and provide the technical foundation for scalable growth.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesHero;
