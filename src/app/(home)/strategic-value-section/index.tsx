"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { strategicValueContent } from './content';

const StrategicValueSection: React.FC = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{strategicValueContent.title}</h2>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                        {strategicValueContent.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {strategicValueContent.propositions.map((prop, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl border border-slate-100 bg-white hover:border-indigo-100 hover:shadow-xl transition-all group"
                        >
                            <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                <prop.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-4">{prop.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed">{prop.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicValueSection;
