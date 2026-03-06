"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { blogHeroContent } from './content';

const BlogHero: React.FC = () => {
    return (
        <div className="container mx-auto px-4 pt-40 pb-20">
            <div className="max-w-4xl mb-24">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 border border-indigo-100 rounded-full text-indigo-700 text-xs font-bold tracking-tight mb-8"
                >
                    <BookOpen size={14} /> {blogHeroContent.badge}
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[0.95]"
                >
                    {blogHeroContent.title.main} <br />
                    <span className="text-indigo-600 italic">{blogHeroContent.title.highlight}</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium"
                >
                    {blogHeroContent.subtitle}
                </motion.p>
            </div>
        </div>
    );
};

export default BlogHero;
