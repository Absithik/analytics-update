"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Search, ArrowRight, User, Clock } from 'lucide-react';
import { BLOGS } from '@/constants';

const BlogList: React.FC = () => {
    const [activeCat, setActiveCat] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const categories = ['All', 'Technical', 'Strategy', 'Analytics', 'Data Governance'];

    const filteredBlogs = (BLOGS || []).filter(blog => {
        const matchesCat = activeCat === 'All' || blog.category === activeCat;
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.content.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCat && matchesSearch;
    });

    const featuredBlog = BLOGS?.[0];

    return (
        <div className="container mx-auto px-4 pb-20">
            {/* Categories & Search */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 pb-8 border-b border-slate-100">
                <div className="flex flex-wrap gap-3">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCat(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all border ${activeCat === cat ? 'bg-slate-900 text-white border-slate-900' : 'bg-white text-slate-500 border-slate-200 hover:border-indigo-600 hover:text-indigo-600'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search insights..."
                        className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all text-sm"
                    />
                </div>
            </div>

            {/* Featured Post Area */}
            {(activeCat === 'All' && !searchQuery && featuredBlog) ? (
                <div className="mb-24">
                    <Link href={`/blog/${featuredBlog.slug}`} className="group grid lg:grid-cols-2 gap-12 items-center p-8 md:p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:border-indigo-600 transition-all">
                        <div className="aspect-[16/10] rounded-[2rem] overflow-hidden relative">
                            <Image
                                src={featuredBlog.image}
                                alt={featuredBlog.title}
                                fill
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-indigo-600 text-xs font-black uppercase tracking-widest">{featuredBlog.category}</span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <span className="text-slate-500 text-xs font-bold">{featuredBlog.readTime}</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 group-hover:text-indigo-600 transition-colors leading-tight">{featuredBlog.title}</h2>
                            <p className="text-slate-600 text-lg mb-8 line-clamp-3 font-medium">{featuredBlog.content}</p>
                            <div className="flex items-center gap-2 text-slate-900 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                                Read Full Blueprint <ArrowRight size={16} className="text-indigo-600" />
                            </div>
                        </div>
                    </Link>
                </div>
            ) : null}

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                <AnimatePresence mode='popLayout'>
                    {filteredBlogs.map((blog, idx) => (
                        <motion.article
                            key={blog.id}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ delay: idx * 0.05 }}
                            className="flex flex-col group"
                        >
                            <Link href={`/blog/${blog.slug}`} className="block aspect-[4/3] rounded-3xl overflow-hidden mb-8 border border-slate-100 relative">
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                                />
                            </Link>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="text-[10px] font-black text-indigo-600 uppercase tracking-widest bg-indigo-50 px-2 py-1 rounded">{blog.category}</span>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{blog.date}</span>
                            </div>
                            <Link href={`/blog/${blog.slug}`}>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors leading-tight tracking-tight">{blog.title}</h3>
                            </Link>
                            <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-100">
                                <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                                    <User size={14} className="text-slate-300" /> {blog.author}
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                                    <Clock size={14} className="text-slate-300" /> {blog.readTime}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
                {filteredBlogs.length === 0 && (
                    <div className="col-span-full py-20 text-center">
                        <h3 className="text-xl font-bold text-slate-900">No insights found for &quot;{searchQuery}&quot;</h3>
                        <p className="text-slate-500 mt-2">Try adjusting your filters or search terms.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BlogList;
