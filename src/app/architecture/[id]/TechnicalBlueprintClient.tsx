"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    ArrowLeft, Cpu, Database, Server, ShieldCheck, Zap,
    Globe, FileCode, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/Button';

interface TechnicalBlueprintClientProps {
    service: any;
}

const TechnicalBlueprintClient: React.FC<TechnicalBlueprintClientProps> = ({ service }) => {
    const schematicSteps = [
        { id: 'source', label: 'Primary Sources', icon: Globe, details: ['Web Browser', 'Mobile App', 'Offline CRM'], color: 'text-indigo-500', bg: 'bg-indigo-50' },
        { id: 'collection', label: 'Ingestion Layer', icon: Zap, details: ['GTM Server-Side', 'Event Gateway', 'Consent Mode'], color: 'text-yellow-600', bg: 'bg-yellow-50' },
        { id: 'processing', label: 'Compute Engine', icon: Server, details: ['PII Hashing', 'Session Stitching', 'Enrichment'], color: 'text-emerald-600', bg: 'bg-emerald-50' },
        { id: 'destination', label: 'Storage & Activation', icon: Database, details: ['Google BigQuery', 'Ads Attribution', 'CDP Relay'], color: 'text-rose-600', bg: 'bg-rose-50' }
    ];

    return (
        <div className="pt-40 pb-24 bg-[#fafafa]">
            <div className="container mx-auto px-4 md:px-6">
                {/* Navigation & Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link href={`/services/${service.id}`} className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-600 font-bold transition-colors mb-6 group uppercase text-sm tracking-wider">
                            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" /> {service.title}
                        </Link>
                        <h1 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[0.9] italic">
                            Technical <br />
                            <span className="text-indigo-600">Blueprint.</span>
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="px-6 py-3 bg-white border border-slate-200 rounded-xl flex items-center gap-3 shadow-sm"
                    >
                        <ShieldCheck className="text-emerald-500" size={20} />
                        <span className="text-sm font-bold text-slate-900 uppercase tracking-wider">Revision 2024.11_BETA</span>
                    </motion.div>
                </div>

                {/* System Schematic Section */}
                <section className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Architecture Schematic</h2>
                        <p className="text-slate-900 font-medium text-xl leading-relaxed">&quot;Unidirectional Data Flow & Processing Logic&quot;</p>
                    </div>

                    <div className="relative max-w-6xl mx-auto">
                        {/* Connection Line */}
                        <div className="absolute top-[40px] left-0 right-0 h-0.5 bg-slate-200 hidden lg:block z-0"></div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
                            {schematicSteps.map((step, i) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex flex-col items-center"
                                >
                                    <div className={`w-20 h-20 ${step.bg} ${step.color} rounded-[2rem] border-4 border-white shadow-xl flex items-center justify-center mb-8 relative group hover:scale-110 transition-transform duration-500`}>
                                        <step.icon size={32} />
                                        {i < 3 && (
                                            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white border border-slate-100 rounded-full hidden lg:flex items-center justify-center text-slate-300 font-black shadow-sm group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-colors">
                                                →
                                            </div>
                                        )}
                                    </div>
                                    <div className="text-center p-8 bg-white border border-slate-100 rounded-3xl shadow-sm w-full hover:border-indigo-100 transition-colors">
                                        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">{step.label}</h4>
                                        <div className="space-y-3">
                                            {step.details.map(d => (
                                                <div key={d} className="text-sm font-medium text-slate-500 bg-slate-50 py-2.5 px-3 rounded-lg border border-transparent hover:border-indigo-100 hover:text-indigo-600 transition-all">{d}</div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Detailed Specs Grid */}
                <div className="grid lg:grid-cols-12 gap-12 mb-32">
                    {/* Governance & Logic */}
                    <div className="lg:col-span-8 space-y-12">
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-12 bg-white border border-slate-200 rounded-[3rem] shadow-sm relative overflow-hidden group"
                        >
                            <div className="absolute -right-20 -top-20 w-64 h-64 bg-slate-50 rounded-full opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
                            <h3 className="text-lg font-black text-slate-900 mb-10 flex items-center gap-3 relative z-10 tracking-tight uppercase">
                                <ShieldCheck className="text-indigo-600" size={24} /> Security & Governance Protocol
                            </h3>
                            <div className="grid md:grid-cols-2 gap-10 relative z-10">
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4 group/item">
                                        <CheckCircle2 size={18} className="text-emerald-500 mt-1 group-hover/item:scale-110 transition-transform" />
                                        <div>
                                            <h5 className="text-sm font-bold text-slate-900 uppercase mb-2 tracking-wider">Hashing & Encryption</h5>
                                            <p className="text-sm text-slate-600 font-medium leading-relaxed">&quot;All User Identifiers are SHA-256 hashed before hitting downstream processors.&quot;</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group/item">
                                        <CheckCircle2 size={18} className="text-emerald-500 mt-1 group-hover/item:scale-110 transition-transform" />
                                        <div>
                                            <h5 className="text-sm font-bold text-slate-900 uppercase mb-2 tracking-wider">PII Scrubbing</h5>
                                            <p className="text-sm text-slate-600 font-medium leading-relaxed">&quot;Automated URL parameter cleaning to prevent PII leaks into analytics.&quot;</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-8">
                                    <div className="flex items-start gap-4 group/item">
                                        <CheckCircle2 size={18} className="text-emerald-500 mt-1 group-hover/item:scale-110 transition-transform" />
                                        <div>
                                            <h5 className="text-sm font-bold text-slate-900 uppercase mb-2 tracking-wider">Consent Enforcement</h5>
                                            <p className="text-sm text-slate-600 font-medium leading-relaxed">&quot;Native integration with OneTrust/Cookiebot via GTM Consent Mode.&quot;</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 group/item">
                                        <CheckCircle2 size={18} className="text-emerald-500 mt-1 group-hover/item:scale-110 transition-transform" />
                                        <div>
                                            <h5 className="text-sm font-bold text-slate-900 uppercase mb-2 tracking-wider">Audited Data Flow</h5>
                                            <p className="text-sm text-slate-600 font-medium leading-relaxed">&quot;Monthly integrity audits to ensure 100% compliance with GDPR/CCPA.&quot;</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.section>

                        {/* Code / Schema Preview */}
                        <motion.section
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-12 bg-slate-900 rounded-[3.5rem] text-indigo-400 overflow-hidden relative group border-4 border-slate-800"
                        >
                            <div className="absolute top-8 right-8 text-white/5 group-hover:text-indigo-500/20 transition-colors duration-700">
                                <FileCode size={120} />
                            </div>
                            <h3 className="text-sm font-bold text-white mb-10 flex items-center gap-3 uppercase tracking-wider relative z-10">
                                Data Schema Definition
                            </h3>
                            <div className="font-mono text-sm leading-relaxed overflow-x-auto relative z-10">
                                <pre className="text-indigo-300">
                                    {`{
  "event": "purchase_complete",
  "architecture_version": "2.4",
  "governance": {
    "consent_state": "GRANTED",
    "pii_filtered": true
  },
  "payload": {
    "transaction_id": "T_99421",
    "value": 249.99,
    "currency": "USD",
    "items": [
      { "id": "SKU_001", "name": "Enterprise Audit", "quantity": 1 }
    ]
  },
  "context": {
    "device_type": "desktop",
    "attribution_source": "first-party-relay"
  }
}`}
                                </pre>
                            </div>
                        </motion.section>
                    </div>

                    {/* Sidebar Stats & Infrastructure */}
                    <div className="lg:col-span-4 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-indigo-600 rounded-[3.5rem] text-white shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>
                            <Cpu className="mb-8 opacity-40 group-hover:rotate-12 transition-transform" size={48} />
                            <h4 className="text-sm font-bold mb-10 uppercase tracking-widest text-indigo-200">Compute Specs</h4>
                            <div className="space-y-10">
                                <div>
                                    <div className="text-sm font-medium text-indigo-300 uppercase tracking-wider mb-2">Peak Latency</div>
                                    <div className="text-4xl font-black tabular-nums tracking-tighter hover:translate-x-2 transition-transform">&lt; 200ms</div>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-indigo-300 uppercase tracking-wider mb-2">Max Event Volume</div>
                                    <div className="text-4xl font-black tabular-nums tracking-tighter hover:translate-x-2 transition-transform">1.5M / day</div>
                                </div>
                                <div>
                                    <div className="text-sm font-medium text-indigo-300 uppercase tracking-wider mb-2">Uptime SLA</div>
                                    <div className="text-4xl font-black tabular-nums tracking-tighter hover:translate-x-2 transition-transform">99.99%</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 } as const}
                            whileInView={{ opacity: 1, x: 0 } as const}
                            viewport={{ once: true } as const}
                            transition={{ delay: 0.1 }}
                            className="p-12 bg-white border border-slate-200 rounded-[3.5rem] text-center group hover:border-indigo-100 transition-colors"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                                <Image src="https://illustrations.popsy.co/white/server.svg" alt="Server Illustration" fill className="object-contain" />
                            </div>
                            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Infrastructure Partner</h4>
                            <p className="text-sm text-slate-600 font-medium leading-relaxed">Standardized on Google Cloud Platform for Global Low-Latency relays.</p>
                        </motion.div>
                    </div>
                </div>

                {/* Final CTA */}
                <section className="text-center max-w-2xl mx-auto">
                    <h2 className="text-4xl font-black text-slate-900 mb-10 tracking-tighter italic uppercase underline decoration-indigo-500 decoration-8 underline-offset-8">Need a custom implementation?</h2>
                    <Link href="/contact">
                        <Button variant="primary" className="h-20 px-16 text-xl tracking-tighter italic font-black uppercase">Consult with Architecture Team 🚀</Button>
                    </Link>
                </section>
            </div>
        </div>
    );
};

export default TechnicalBlueprintClient;
