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
        {
            name: 'Services',
            path: '/services',
            dropdown: [
                {
                    name: 'Our Services',
                    path: '/services',
                    subDropdown: [
                        { name: 'Digital Analytics', path: '/services/digital-analytics' },
                        { name: 'Data Strategy', path: '/services/data-strategy' },
                        { name: 'BI & Visualization', path: '/services/bi-visualization' },
                        { name: 'Optimization', path: '/services/optimization' }
                    ]
                },
                {
                    name: 'Architecture Detail',
                    path: '#',
                    subDropdown: [
                        { name: 'Digital Analytics', path: '/architecture/digital-analytics' },
                        { name: 'Data Strategy', path: '/architecture/data-strategy' },
                        { name: 'BI & Visualization', path: '/architecture/bi-visualization' },
                        { name: 'Optimization', path: '/architecture/optimization' }
                    ]
                }
            ]
        },
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
                            {link.dropdown ? (
                                <>
                                    <button
                                        className={`flex items-center gap-1 text-sm font-semibold tracking-tight transition-all hover:text-indigo-600 ${pathname?.startsWith(link.path) || pathname === link.path ? 'text-indigo-600' : 'text-slate-600'}`}
                                    >
                                        {link.name}
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </button>
                                    <div className="absolute top-[150%] left-0 w-56 bg-white/95 backdrop-blur shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl flex flex-col overflow-visible opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:top-full transition-all duration-300 border border-slate-100/50">
                                        <div className="py-2">
                                            {link.dropdown.map(item => (
                                                <div key={item.name} className="relative group/sub">
                                                    {item.subDropdown ? (
                                                        <>
                                                            <button className="w-full text-left px-4 py-2.5 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors flex items-center justify-between">
                                                                {item.name}
                                                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                                            </button>
                                                            <div className="absolute top-0 left-full ml-1 w-56 bg-white/95 backdrop-blur shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-xl flex flex-col overflow-hidden opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 border border-slate-100/50">
                                                                <div className="py-2">
                                                                    {item.subDropdown.map(subItem => (
                                                                        <Link
                                                                            key={subItem.name}
                                                                            href={subItem.path}
                                                                            className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
                                                                        >
                                                                            {subItem.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </>
                                                    ) : (
                                                        <Link
                                                            href={item.path}
                                                            className="block px-4 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <Link
                                    href={link.path}
                                    className={`text-sm font-semibold tracking-tight transition-all hover:text-indigo-600 ${pathname === link.path ? 'text-indigo-600' : 'text-slate-600'}`}
                                >
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                <div className="hidden lg:flex items-center gap-4">
                    <Button variant="primary" href="/contact" className="h-11 px-6 text-sm">Get an Audit</Button>
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
                                    {link.dropdown ? (
                                        <>
                                            <div className="text-lg font-bold text-slate-900 pb-2">
                                                {link.name}
                                            </div>
                                            <div className="flex flex-col gap-4 pl-4 border-l-2 border-slate-100">
                                                {link.dropdown.map(item => (
                                                    <div key={item.name} className="flex flex-col gap-2">
                                                        {item.subDropdown ? (
                                                            <>
                                                                <div className="text-base font-semibold text-slate-800">
                                                                    {item.name}
                                                                </div>
                                                                <div className="flex flex-col gap-3 pl-4 border-l-2 border-slate-100">
                                                                    {item.subDropdown.map(subItem => (
                                                                        <Link
                                                                            key={subItem.name}
                                                                            href={subItem.path}
                                                                            onClick={() => setIsOpen(false)}
                                                                            className="text-sm font-medium text-slate-600 hover:text-indigo-600"
                                                                        >
                                                                            {subItem.name}
                                                                        </Link>
                                                                    ))}
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <Link
                                                                href={item.path}
                                                                onClick={() => setIsOpen(false)}
                                                                className="text-base font-semibold text-slate-600 hover:text-indigo-600"
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </>
                                    ) : (
                                        <Link
                                            href={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className="text-lg font-bold text-slate-900"
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Button variant="primary" href="/contact" onClick={() => setIsOpen(false)} className="w-full h-14">Get Started</Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
