import React from 'react';
import Link from 'next/link';
import { Globe, Linkedin, Twitter, Github } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white py-24">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="max-w-xs">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-8 h-8 bg-white/10 rounded flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                <Globe size={18} />
                            </div>
                            <span className="text-xl font-extrabold tracking-tight">MARTECH<span className="text-indigo-600">RISE</span></span>
                        </Link>
                        <p className="text-slate-400 leading-relaxed mb-6">
                            Technical analytics architects for the modern enterprise. We build clean data pipelines that drive growth.
                        </p>
                        <div className="flex items-center gap-4">
                            <span className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 cursor-default">
                                <Linkedin size={18} />
                            </span>
                            <span className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 cursor-default">
                                <Twitter size={18} />
                            </span>
                            <span className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 cursor-default">
                                <Github size={18} />
                            </span>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Solutions</h4>
                        <div className="flex flex-col gap-4 text-slate-400">
                            <Link href="/case-studies/ecommerce-roas-tracking-fix" className="hover:text-white transition-colors">Digital Analytics</Link>
                            <Link href="/case-studies/fintech-attribution-qualified-leads" className="hover:text-white transition-colors">Data Strategy</Link>
                            <Link href="/case-studies/life-sciences-real-time-patient-tracking" className="hover:text-white transition-colors">BI Visualization</Link>
                            <Link href="/case-studies/travel-adobe-experience-platform-bookings" className="hover:text-white transition-colors">Conversion Opt.</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Company</h4>
                        <div className="flex flex-col gap-4 text-slate-400">
                            <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
                            <Link href="/industries" className="hover:text-white transition-colors">Industries</Link>
                            <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
                            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-6">Legal</h4>
                        <div className="flex flex-col gap-4 text-slate-400">
                            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                            <Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                        <div>© {new Date().getFullYear()} Martech Rise. All rights reserved.</div>
                        <div className="hidden md:block w-px h-4 bg-white/10" />
                        <div className="flex items-center gap-1.5">
                            <span className="opacity-70">Powered by</span>
                            <Link href="https://nkmoderntechnology.com/" target="_blank" className="hover:text-indigo-400 transition-colors font-semibold">
                                NK Modern Technology
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-8">
                        <div>99.8% Data Accuracy Guaranteed</div>
                        <div>GDPR/CCPA Compliant Infrastructure</div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
