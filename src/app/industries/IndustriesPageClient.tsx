"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { INDUSTRIES, getIcon } from '@/constants';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const IndustryCard: React.FC<{ industry: any; index: number }> = ({ industry, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Parallax transforms: Background blob moves opposite to foreground content
    const yContent = useTransform(scrollYProgress, [0, 1], [30, -30]);
    const yBlob = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    // Premium, ultra-smooth icon animation
    const iconVariants = {
        initial: {
            scale: 1,
            rotate: 0,
            y: 0,
            filter: "drop-shadow(0px 4px 6px rgba(0,0,0,0.05))"
        },
        hover: {
            scale: 1.15,
            rotate: 12,
            y: -12,
            filter: "drop-shadow(0px 20px 25px rgba(79, 70, 229, 0.25))",
            transition: {
                type: 'spring' as const,
                stiffness: 260,
                damping: 20,
            }
        }
    };

    const glowVariants = {
        initial: { opacity: 0, scale: 0.8 },
        hover: {
            opacity: 0.5,
            scale: 1.5,
            transition: { duration: 0.4, ease: "easeOut" as const }
        }
    };

    return (
        <motion.div
            ref={ref}
            initial="initial"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
                initial: { opacity: 0, y: 40 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.8,
                        delay: (index % 3) * 0.1,
                        ease: [0.21, 0.47, 0.32, 0.98]
                    }
                },
                hover: {
                    y: -10,
                    transition: { type: 'spring' as const, stiffness: 300, damping: 25 }
                }
            }}
        >
            <Link
                href={`/industries/${industry.slug}`}
                className="block h-[420px] bg-white border-4 border-slate-50 p-10 rounded-[3rem] shadow-xl hover:shadow-indigo-100/50 hover:border-indigo-100 transition-all group relative overflow-hidden"
            >
                {/* Parallax Decorative blob (Background) */}
                <motion.div
                    style={{ y: yBlob }}
                    className="absolute -right-12 -top-12 w-48 h-48 bg-indigo-50 rounded-full opacity-50 group-hover:scale-125 transition-transform duration-700 pointer-events-none"
                ></motion.div>

                {/* Parallax Content (Foreground) */}
                <motion.div
                    style={{ y: yContent }}
                    className="relative z-10 flex flex-col h-full"
                >
                    <motion.div
                        variants={iconVariants}
                        className="w-16 h-16 bg-indigo-500 text-white rounded-3xl flex items-center justify-center mb-8 shadow-lg relative"
                    >
                        {/* Inner glow effect on hover */}
                        <motion.div
                            variants={glowVariants}
                            className="absolute inset-0 bg-indigo-400 rounded-3xl -z-10 blur-2xl"
                        />
                        {getIcon(industry.icon, 24)}
                    </motion.div>

                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{industry.name}</h3>
                    <p className="text-slate-600 font-bold mb-8 line-clamp-3 leading-relaxed italic">
                        &quot;{industry.solution}&quot;
                    </p>

                    <div className="mt-auto flex items-center gap-2 text-indigo-600 font-black group-hover:gap-4 transition-all uppercase text-xs tracking-widest">
                        Explore Vertical <ArrowRight size={18} />
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    );
};

const IndustriesPageClient: React.FC = () => {
    return (
        <div className="pt-40 pb-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center mb-24">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-1 bg-indigo-50 border-2 border-indigo-100 rounded-full text-indigo-600 font-black text-xs uppercase tracking-widest mb-6"
                    >
                        <Sparkles size={14} /> Tailored Magic
                    </motion.div>
                    <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 leading-[0.9] tracking-tighter italic">
                        Specialized by <br />
                        <span className="text-indigo-500 underline decoration-yellow-400 underline-offset-8">Industry</span>.
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-600 font-bold max-w-2xl mx-auto italic leading-relaxed">
                        &quot;Data architectures tailored to the unique behavioral landscape of your specific sector.&quot;
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {INDUSTRIES.map((industry, index) => (
                        <IndustryCard key={industry.slug} industry={industry} index={index} />
                    ))}
                </div>

                {/* Industry Highlight Illustration Area */}
                <section className="mt-40 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                    >
                        <div className="relative w-full max-w-lg mx-auto mb-10 h-64">
                            <Image
                                src="https://illustrations.popsy.co/white/product-launch.svg"
                                alt="Industry Illustration"
                                fill
                                className="object-contain"
                            />
                        </div>
                        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Don&apos;t see your industry?</h2>
                        <p className="text-slate-500 font-bold text-xl italic leading-relaxed">We&apos;ve likely solved a similar problem. Let&apos;s chat!</p>
                    </motion.div>
                </section>
            </div>
        </div>
    );
};

export default IndustriesPageClient;
