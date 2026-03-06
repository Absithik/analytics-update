"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { CreditCard, Search, LayoutDashboard, Users, PieChart, Map, MessageCircle, Briefcase, Download, ArrowUpRight, Flame, BarChart3, TrendingUp, Star, Edit2, MoreHorizontal } from 'lucide-react';

const FloatingIcon = ({
    children,
    className,
    delay = 0,
    baseRotation = 0
}: {
    children: React.ReactNode,
    className: string,
    delay?: number,
    baseRotation?: number
}) => {
    return (
        <motion.div
            className={`absolute shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-[2rem] bg-white border border-slate-100 flex items-center justify-center p-4 ${className}`}
            initial={{ y: 20, opacity: 0, rotate: baseRotation }}
            animate={{
                y: [0, -20, 0],
                opacity: 1,
                rotate: [baseRotation - 4, baseRotation + 4, baseRotation - 4]
            }}
            transition={{
                y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay
                },
                rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 0.5
                },
                opacity: { duration: 0.8, delay: delay * 0.2 }
            }}
        >
            {children}
        </motion.div>
    );
};

const DashboardMockup = () => {
    return (
        <div className="w-full max-w-6xl mx-auto bg-white rounded-t-3xl border border-slate-200 shadow-2xl overflow-hidden flex" style={{ height: '600px' }}>
            {/* Sidebar */}
            <div className="w-64 border-r border-slate-100 p-6 flex flex-col gap-6 bg-slate-50/50">
                <div className="flex items-center gap-2 font-bold text-xl text-blue-600 mb-4">
                    <PieChart className="text-blue-600 fill-blue-600" size={24} />
                    <span className="text-slate-900">Alytics</span>
                </div>

                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                    <input type="text" placeholder="Search" className="w-full bg-white border border-slate-200 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-600 outline-none focus:border-blue-500" />
                </div>

                <nav className="flex flex-col gap-1 flex-1">
                    <div className="flex items-center gap-3 px-3 py-2 text-blue-600 bg-blue-50 rounded-lg font-medium text-sm">
                        <LayoutDashboard size={18} /> Dashboard
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium text-sm">
                        <Users size={18} /> Customers
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium text-sm">
                        <BarChart3 size={18} /> All reports
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium text-sm">
                        <Map size={18} /> Geography
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium text-sm">
                        <MessageCircle size={18} /> Conversations
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium text-sm">
                        <Briefcase size={18} /> Deals
                    </div>
                    <div className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium text-sm mt-auto">
                        <Download size={18} /> Export
                    </div>
                </nav>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8 bg-[#fafafa]">
                <div className="grid grid-cols-3 gap-6 mb-6">
                    {/* Revenues Card */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="text-slate-600 font-medium mb-4">Revenues</div>
                        <div className="text-4xl font-bold text-slate-900 mb-2 flex items-center gap-2">
                            15% <ArrowUpRight size={24} className="text-blue-500" />
                        </div>
                        <div className="text-sm text-slate-500 mb-6">Increase compared to last week</div>
                        <div className="text-blue-600 text-sm font-medium flex items-center gap-1 cursor-default">
                            Revenues report &rarr;
                        </div>
                    </div>
                    {/* Lost Deals Card */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="text-slate-600 font-medium mb-4">Lost deals</div>
                        <div className="text-4xl font-bold text-slate-900 mb-2">4%</div>
                        <div className="text-sm text-slate-500 mb-6">You closed 96 out of 100 deals</div>
                        <div className="text-blue-600 text-sm font-medium flex items-center gap-1 cursor-default">
                            All deals &rarr;
                        </div>
                    </div>
                    {/* Quarter Goal Card */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center relative">
                        <div className="text-slate-600 font-medium mb-4 absolute top-6 left-6">Quarter goal</div>

                        <div className="relative w-32 h-16 mt-8 mb-4 overflow-hidden">
                            <div className="absolute top-0 left-0 w-32 h-32 border-8 border-slate-100 rounded-full" />
                            {/* Dummy SVG Arch */}
                            <svg className="absolute top-0 left-0 w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
                                <circle cx="50" cy="50" r="46" fill="transparent" stroke="#2563eb" strokeWidth="8" strokeDasharray="289" strokeDashoffset="50" strokeLinecap="round" />
                            </svg>
                            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-3xl font-bold text-slate-900">84%</div>
                        </div>

                        <div className="text-blue-600 text-sm font-medium flex items-center gap-1 cursor-default mt-auto">
                            All goals &rarr;
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {/* Customers List */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <div className="text-slate-900 font-bold">Customers</div>
                            <div className="text-slate-500 text-sm flex items-center gap-1 cursor-default">
                                Sort by Newest <TrendingUp size={14} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center justify-between group">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                        <img src="https://i.pravatar.cc/150?u=1" alt="Chris Friedkly - Example User Profile" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm text-slate-900">Chris Friedkly</div>
                                        <div className="text-xs text-slate-500">Supermarket Villanova</div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between bg-blue-50/50 p-2 -mx-2 rounded-lg border border-blue-100">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden">
                                        <img src="https://i.pravatar.cc/150?u=2" alt="Maggie Johnson - Example Customer Profile" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-sm text-slate-900">Maggie Johnson</div>
                                        <div className="text-xs text-slate-500">Oasis Organic Inc.</div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-blue-500 mr-2">
                                    <MessageCircle size={16} className="cursor-default" />
                                    <Star size={16} className="cursor-default" />
                                    <Edit2 size={16} className="cursor-default" />
                                    <div className="w-px h-4 bg-slate-200" />
                                    <MoreHorizontal size={16} className="cursor-default" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Growth Chart (Simplified Line visual) */}
                    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
                        <div className="flex items-center justify-between mb-6">
                            <div className="text-slate-900 font-bold">Growth</div>
                            <div className="text-slate-500 text-sm flex items-center gap-1 cursor-default">
                                Yearly <TrendingUp size={14} />
                            </div>
                        </div>
                        {/* Placeholder Chart Graphic */}
                        <div className="flex-1 flex items-end justify-between relative pt-8">
                            <svg viewBox="0 0 400 150" className="w-full h-full text-blue-100 fill-current overflow-visible">
                                <path d="M0,150 L0,120 C50,110 80,140 120,90 C160,40 190,110 240,80 C290,50 340,30 400,20 L400,150 Z" opacity="0.5" />
                                <path d="M0,120 C50,110 80,140 120,90 C160,40 190,110 240,80 C290,50 340,30 400,20" fill="transparent" stroke="#3b82f6" strokeWidth="3" />
                            </svg>
                            <div className="absolute left-0 bottom-0 h-full flex flex-col justify-between text-[10px] text-slate-400">
                                <span>100k</span><span>50k</span><span>20k</span><span>10k</span><span>0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ModernSaaSHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.4], [30, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
    const y = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={containerRef} className="relative pt-32 pb-0 overflow-hidden bg-[#fafafa] min-h-screen">

            {/* Background Glows */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-[100%] bg-blue-500/10 blur-[100px] pointer-events-none" />

            {/* Floating Icons positioned viewport-relative */}
            <FloatingIcon className="w-[100px] h-[100px] top-[10%] left-[8%] xl:left-[12%] hidden lg:flex" delay={0} baseRotation={-8}>
                <svg viewBox="0 0 48 48" fill="none" className="w-[60px] h-[60px] text-blue-500">
                    <circle cx="24" cy="24" r="20" fill="currentColor" />
                    <path d="M16 30l16-16" stroke="white" strokeWidth="6" strokeLinecap="round" />
                    <path d="M30 34l8-10" stroke="white" strokeWidth="6" strokeLinecap="round" />
                </svg>
            </FloatingIcon>

            <FloatingIcon className="w-[100px] h-[100px] top-[12%] right-[8%] xl:right-[12%] hidden lg:flex" delay={1} baseRotation={6}>
                <svg viewBox="0 0 48 48" fill="none" className="w-[64px] h-[64px] text-orange-500">
                    <path d="M12 36V24c0-6.627 5.373-12 12-12s12 5.373 12 12v12" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                    <path d="M24 36v-4" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                </svg>
            </FloatingIcon>

            <FloatingIcon className="w-[110px] h-[110px] top-[40%] left-[10%] xl:left-[15%] hidden lg:flex" delay={0.5} baseRotation={-12}>
                <svg viewBox="0 0 48 48" fill="none" className="w-[60px] h-[60px] text-slate-900">
                    <path d="M14 36V12l20 24V12" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="miter" />
                </svg>
            </FloatingIcon>

            <FloatingIcon className="w-[110px] h-[110px] top-[45%] right-[10%] xl:right-[15%] hidden lg:flex" delay={1.5} baseRotation={10}>
                <svg viewBox="0 0 48 48" fill="none" className="w-[64px] h-[64px] text-blue-800">
                    <path d="M24 6l16 9v18l-16 9-16-9V15l16-9z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="24" cy="24" r="6" fill="currentColor" />
                </svg>
            </FloatingIcon>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* Trusted Badge */}
                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-medium text-sm mb-8">
                        <div className="flex -space-x-2">
                            <img className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=1" alt="Avatar 1" />
                            <img className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=2" alt="Avatar 2" />
                            <img className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=3" alt="Avatar 3" />
                        </div>
                        Trusted by 1M+ users
                    </div>

                    {/* Headline - Primary H1 */}
                    <h1 className="text-6xl md:text-[80px] font-black text-slate-900 tracking-[-0.03em] leading-[1.05] mb-6 max-w-4xl mx-auto">
                        Enterprise Digital Analytics <br className="hidden md:block" /> &amp; Data Strategy
                    </h1>

                    {/* Subheadline - H2 for Semantic Hierarchy */}
                    <h2 className="text-xl md:text-2xl text-slate-500 font-medium max-w-[600px] mx-auto mb-10 leading-relaxed text-balance">
                        Turn scattered data into smart decisions. One simple dashboard to track your SaaS growth, MRR, churn, and user behavior.
                    </h2>

                    {/* CTA */}
                    <div className="flex flex-col items-center gap-4 mb-20">
                        <Button href="/contact" className="h-14 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-all text-lg font-semibold">
                            Get Started For Free
                        </Button>
                        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                            <CreditCard size={16} className="text-blue-500" /> No credit card required
                        </div>
                    </div>
                </div>
            </div>

            {/* 3D Dashboard Container */}
            <div className="relative flex justify-center perspective-[2000px] mt-24">
                {/* Huge Blue Glow Behind Dashboard */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-[100%] bg-blue-400/20 blur-[120px] pointer-events-none" />

                <motion.div
                    style={{
                        rotateX,
                        scale,
                        y,
                        opacity,
                        transformStyle: "preserve-3d",
                    }}
                    className="w-full origin-bottom"
                >
                    <DashboardMockup />
                </motion.div>
            </div>

            {/* Base Fade to next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fafafa] to-transparent z-20 pointer-events-none" />
        </section>
    );
};

export default ModernSaaSHero;
