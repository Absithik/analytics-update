"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Target, CheckCircle2, ArrowRight } from 'lucide-react';
import { SERVICES, getIcon } from '@/constants';
import Button from '@/components/ui/Button';

const ServicesList: React.FC = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4">
                <div className="space-y-32">
                    {SERVICES.map((service, i) => (
                        <div key={service.id} className={`grid lg:grid-cols-2 gap-20 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                                <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-8">
                                    {getIcon(service.icon)}
                                </div>
                                <h2 className="text-4xl font-bold text-slate-900 mb-6">{service.title}</h2>
                                <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
                                    {service.description}
                                </p>

                                <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 mb-10">
                                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6">Technical Capabilities</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {service.whatWeDo?.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3 text-sm font-bold text-slate-700">
                                                <CheckCircle2 size={18} className="text-emerald-500 mt-0.5" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex items-center gap-6">
                                    <Link href={`/services/${service.id}`}>
                                        <Button variant="primary" className="px-6 cursor-pointer flex items-center gap-2 group">
                                            Architecture Detail
                                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </Link>
                                    <div className="text-sm font-black text-indigo-600 uppercase tracking-widest flex items-center gap-2">
                                        {service.impact} <Target size={14} />
                                    </div>
                                </div>
                            </div>
                            <div className={`relative ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                                <div className="aspect-square bg-slate-100 rounded-[3rem] overflow-hidden relative">
                                    <Image // Changed from img to Image
                                        src={`https://images.unsplash.com/photo-${1550000000000 + i}?auto=format&fit=crop&q=80&w=800`}
                                        alt={service.title}
                                        fill // Added fill prop
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Added sizes prop for performance
                                        className="object-cover grayscale hover:grayscale-0 transition-all duration-700" // object-cover is now a class
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-[200px]">
                                    <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Primary Tools</div>
                                    <div className="flex flex-wrap gap-2">
                                        {service.tools?.map((tool, idx) => (
                                            <span key={idx} className="text-[10px] font-bold bg-slate-100 px-2 py-1 rounded">{tool}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
