"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import FAQ from '@/components/common/FAQ';
import Schema from '@/components/common/Schema';
import { ECOMMERCE_FAQ } from '@/constants';
import {
    ShoppingBag, TrendingUp, Users, MousePointer2,
    CreditCard, BarChart, CheckCircle2, Target
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const EcommercePageClient: React.FC = () => {
    return (
        <div className="bg-white">
            <Schema faqs={ECOMMERCE_FAQ} />

            {/* Hero */}
            <section className="pt-40 pb-20 bg-indigo-50/30 border-b border-indigo-100/20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-indigo-100 rounded-full text-indigo-700 text-xs font-bold tracking-tight mb-8 shadow-sm uppercase">
                                <ShoppingBag size={14} /> Revenue-Led Ecommerce Strategy
                            </div>
                            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-tight tracking-tighter">
                                Ecommerce <br />
                                <span className="text-indigo-600 italic">Growth Analytics.</span>
                            </h1>
                            <p className="text-xl text-slate-700 mb-10 leading-relaxed font-medium max-w-xl">
                                Optimizing the unit economics of your digital storefront. We turn &quot;sessions&quot; into &quot;revenue&quot; by identifying every friction point in the purchase journey.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact">
                                    <Button variant="primary" className="h-16 px-10 text-lg">Audit Your Store Funnel</Button>
                                </Link>
                                <Link href="/case-studies">
                                    <Button variant="outline" className="h-16 px-10 text-lg font-bold">See Results</Button>
                                </Link>
                            </div>
                        </motion.div>
                        <div className="relative">
                            <div className="aspect-square bg-white rounded-[4rem] shadow-2xl overflow-hidden border border-slate-100 relative group">
                                <Image
                                    src="/assets/2.png"
                                    alt="Ecommerce Analytics"
                                    fill
                                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            </div>
                            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                                <div className="flex items-center gap-6">
                                    <div className="w-14 h-14 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center">
                                        <TrendingUp size={24} />
                                    </div>
                                    <div>
                                        <div className="text-3xl font-black text-slate-900">+28%</div>
                                        <div className="text-[10px] uppercase font-black text-slate-400 tracking-widest">Avg. Conversion Lift</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Challenges & Solutions */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Solving the Complexity of Modern Retail</h2>
                        <p className="text-slate-500 text-xl font-medium">From cart abandonment to lifetime value, we solve the data problems that cost you sales.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-wide">
                                <CreditCard className="text-indigo-600" /> Key Ecommerce Challenges
                            </h3>
                            {[
                                { title: "Funnel Friction", desc: "Users dropping off at the shipping or payment steps without a clear trace." },
                                { title: "ROAS Misattribution", desc: "Inability to see which ad campaign actually drove the final purchase." },
                                { title: "Data Silos", desc: "Frontend storefront data doesn&apos;t match backend ERP or Shopify order logs." }
                            ].map((item, i) => (
                                <div key={i} className="p-10 border border-slate-100 rounded-[2.5rem] hover:bg-slate-50 transition-colors group">
                                    <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                                    <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="space-y-8">
                            <h3 className="text-2xl font-black text-slate-900 flex items-center gap-3 uppercase tracking-wide">
                                <Target className="text-indigo-600" /> Our Strategic Solution
                            </h3>
                            {[
                                { title: "Enhanced Ecommerce Schema", desc: "Detailed tracking of product views, adds-to-cart, and checkout steps." },
                                { title: "Profit-First Dashboards", desc: "Automated reporting that factors in COGS and returns for a true profit view." },
                                { title: "Server-Side Purchase Validation", desc: "Ending duplicate tracking and ensuring 100% order reconciliation." }
                            ].map((item, i) => (
                                <div key={i} className="p-10 border border-slate-100 rounded-[2.5rem] hover:bg-indigo-50/50 transition-colors border-l-4 border-l-indigo-600 group">
                                    <h4 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{item.title}</h4>
                                    <p className="text-lg text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Relevant Metrics & Tools */}
            <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:24px_24px]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-3 gap-16 items-center">
                        <div className="lg:col-span-1">
                            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">The Ecommerce <br /> Data Stack.</h2>
                            <p className="text-slate-400 mb-10 text-lg font-medium">We specialize in connecting your storefront to a high-precision analytics engine.</p>
                            <div className="flex flex-wrap gap-3">
                                {['Shopify Plus', 'Magento', 'BigCommerce', 'GA4', 'Segment', 'BigQuery'].map((tool, i) => (
                                    <span key={i} className="px-6 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-black uppercase tracking-widest">{tool}</span>
                                ))}
                            </div>
                        </div>
                        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
                            {[
                                { title: "Checkout Completion", value: "Focus", icon: MousePointer2 },
                                { title: "Customer Lifetime Value", value: "LTV", icon: Users },
                                { title: "Average Order Value", value: "AOV", icon: CreditCard },
                                { title: "Return on Ad Spend", value: "ROAS", icon: BarChart }
                            ].map((m, i) => (
                                <div key={i} className="p-10 bg-white/5 rounded-[2.5rem] border border-white/5 flex gap-8 items-center hover:bg-white/10 transition-colors">
                                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                                        <m.icon size={28} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.3em] text-indigo-400 mb-2">{m.value}</div>
                                        <div className="text-2xl font-black">{m.title}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Mini Case Example */}
            <section className="py-32">
                <div className="container mx-auto px-4">
                    <div className="bg-indigo-600 rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                                <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                            </svg>
                        </div>
                        <div className="relative z-10 grid lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-7">
                                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-indigo-200 mb-8">Success Protocol Audit</h3>
                                <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tighter leading-[0.95]">Fashion Retailer <br /> <span className="text-indigo-900 italic opacity-50">Funnel Recovery.</span></h2>
                                <div className="space-y-8 text-indigo-50 mb-12">
                                    <p className="flex items-start gap-4 text-xl font-medium leading-relaxed">
                                        <CheckCircle2 size={28} className="text-white flex-shrink-0 mt-1" />
                                        <span>Identified a 45% dropoff at the &quot;Shipping Method&quot; step caused by a technical script conflict.</span>
                                    </p>
                                    <p className="flex items-start gap-4 text-xl font-medium leading-relaxed">
                                        <CheckCircle2 size={28} className="text-white flex-shrink-0 mt-1" />
                                        <span>Implemented server-side order validation to reconcile Shopify orders with GA4.</span>
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-12 border-t border-white/20 pt-10">
                                    <div>
                                        <div className="text-6xl font-black tabular-nums">18%</div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200 mt-2">Revenue Increase</div>
                                    </div>
                                    <div>
                                        <div className="text-6xl font-black tabular-nums">ZERO</div>
                                        <div className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-200 mt-2">Data Discrepancy</div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5 hidden lg:block">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-indigo-500 rounded-3xl blur-2xl opacity-20 -rotate-6"></div>
                                    <Image
                                        src="/assets/3.png"
                                        alt="Success Case"
                                        width={800}
                                        height={600}
                                        className="rounded-[2.5rem] shadow-2xl rotate-3 relative z-10"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-24">
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">Ecommerce Strategy FAQ</h2>
                        <p className="text-slate-500 text-xl font-medium">Retail-specific technical insights.</p>
                    </div>
                    <FAQ items={ECOMMERCE_FAQ} />
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 text-center border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-10 tracking-tighter">Ready to Scale Your Store?</h2>
                    <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed font-medium">
                        Let&apos;s build the measurement framework that allows you to confidently scale your marketing investment.
                    </p>
                    <Link href="/contact">
                        <Button variant="primary" className="h-20 px-16 text-xl font-black tracking-widest">Talk to an Ecommerce Expert</Button>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default EcommercePageClient;
