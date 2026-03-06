"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="max-w-xl w-full text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="w-24 h-24 bg-indigo-50 border border-indigo-100 rounded-3xl flex items-center justify-center mx-auto mb-10">
                        <Search size={40} className="text-indigo-600" />
                    </div>
                    <h1 className="text-7xl md:text-9xl font-black text-slate-900 tracking-tighter mb-8 italic">404.</h1>
                    <h2 className="text-3xl font-black text-slate-900 mb-6 uppercase tracking-widest">Protocol Deviation Detected</h2>
                    <p className="text-lg text-slate-500 font-medium mb-12 leading-relaxed text-balance">
                        The requested technical schematic or data node does not exist at this address. Our lead architect recommends returning to the main dashboard.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/">
                            <Button variant="primary" className="h-16 px-12 text-lg font-bold">Return to Dashboard</Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" className="h-16 px-12 text-lg font-bold">Explore Capabilities</Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
