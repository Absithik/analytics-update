"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, FileText, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Button from '@/components/ui/Button';

const AuditPageClient: React.FC = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            router.push('/audit/thank-you');
        }, 800);
    };

    return (
        <div
            className="pt-40 pb-24 min-h-screen relative"
            style={{
                backgroundImage: 'url("/assets/36.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-16 text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1] mb-6">
                            Request Your <br />
                            <span className="text-indigo-600 italic">Free Audit.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-black max-w-2xl mx-auto font-medium text-balance">
                            Get a comprehensive review of your analytics setup, identify missing conversions, and uncover actionable growth opportunities.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-slate-200/50 p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Name</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="John Doe"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="john@company.com"
                                        className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Website URL</label>
                                <input
                                    type="url"
                                    required
                                    placeholder="https://example.com"
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-900 placeholder:text-slate-300"
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Monthly Traffic</label>
                                    <div className="relative">
                                        <select required defaultValue="" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-900 appearance-none">
                                            <option value="" disabled>Select Traffic</option>
                                            <option>&lt;10K</option>
                                            <option>10K–50K</option>
                                            <option>50K–100K</option>
                                            <option>100K+</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">What do you need help with?</label>
                                    <div className="relative">
                                        <select required defaultValue="" className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-900 appearance-none">
                                            <option value="" disabled>Select an Issue</option>
                                            <option>Tracking Issues</option>
                                            <option>Data Accuracy Problems</option>
                                            <option>Missing Conversions</option>
                                            <option>Tagging implementation Help</option>
                                            <option>Need Full Audit</option>
                                            <option>Not Sure</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-6 flex items-center pointer-events-none">
                                            <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Project Details (Optional)</label>
                                <textarea
                                    rows={3}
                                    placeholder="Tell us a little bit about your project..."
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-900 placeholder:text-slate-300 resize-none"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Biggest Challenge (Optional)</label>
                                <textarea
                                    rows={3}
                                    placeholder="What is your immediate, biggest analytics challenge?"
                                    className="w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all font-bold text-slate-900 placeholder:text-slate-300 resize-none"
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full relative group overflow-hidden rounded-2xl bg-indigo-600 px-8 py-5 text-lg font-black text-white hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : (
                                        <>Get My Free Audit Report <Send size={18} /></>
                                    )}
                                </button>
                            </div>

                            <div className="flex flex-wrap justify-center gap-6 pt-4">
                                <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <CheckCircle size={12} strokeWidth={3} />
                                    </div>
                                    No spam. No obligation
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <CheckCircle size={12} strokeWidth={3} />
                                    </div>
                                    Get report in 24–48 hours
                                </div>
                                <div className="flex items-center gap-2 text-sm font-bold text-slate-600">
                                    <div className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                                        <CheckCircle size={12} strokeWidth={3} />
                                    </div>
                                    Trusted by growing businesses
                                </div>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AuditPageClient;
