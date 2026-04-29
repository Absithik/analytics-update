"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe } from 'lucide-react';
import Button from '@/components/ui/Button';

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Industries', path: '/industries' },
        { name: 'Case Studies', path: '/case-studies' },
        { name: 'About', path: '/about' },
        { name: 'Insights', path: '/blog' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4 glass border-b border-slate-100 shadow-sm' : 'py-6 bg-transparent'}`}>
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white">
                        <Globe size={18} />
                    </div>
                    <span className="text-xl font-extrabold tracking-tight text-slate-900 uppercase">MARTECH<span className="text-indigo-600">RISE</span></span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <div key={link.name} className="relative group text-left">
                            <Link
                                href={link.path}
                                className={`text-sm font-semibold tracking-tight transition-all hover:text-indigo-600 ${pathname === link.path ? 'text-indigo-600' : 'text-slate-600'}`}
                            >
                                {link.name}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <Button variant="primary" href="/audit" className="h-11 px-6 text-sm">Get a Free Audit</Button>
                </div>

                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-slate-900 p-2">
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden bg-white border-b border-slate-100 shadow-xl overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col gap-2">
                                    <Link
                                        href={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-lg font-bold text-slate-900 hover:text-indigo-600 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            ))}
                            <Button variant="primary" href="/audit" onClick={() => setIsOpen(false)} className="w-full h-14">Get a Free Audit</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
