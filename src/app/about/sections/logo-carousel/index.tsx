"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { marqueeVariants } from './animations';

const imageLogos = [
    { src: '/assets/logo-carousel/Adobe-logo.png', alt: 'Adobe' },
    { src: '/assets/logo-carousel/Google-Analytics-Logo.png', alt: 'Google Analytics' },
    { src: '/assets/logo-carousel/tealium-logo.png', alt: 'Tealium' },
    { src: '/assets/logo-carousel/PowerBI.webp', alt: 'Power BI' },
];

// Repeat logos to span wide screens without gaps
const renderedLogos = [...imageLogos, ...imageLogos, ...imageLogos];

const LogoCarousel: React.FC = () => {
    return (
        <div className="flex overflow-hidden group mb-20 py-12 bg-white border-y border-slate-200 shadow-sm relative max-w-[100vw]">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex flex-nowrap items-center shrink-0"
                variants={marqueeVariants}
                animate="animate"
            >
                {renderedLogos.map((logo, i) => (
                    <div key={`original-${i}`} className="mx-16 shrink-0  duration-300">
                        <Image src={logo.src} alt={logo.alt} width={160} height={80} className="object-contain w-auto h-20" />
                    </div>
                ))}
            </motion.div>
            <motion.div
                className="flex flex-nowrap items-center shrink-0"
                variants={marqueeVariants}
                animate="animate"
            >
                {renderedLogos.map((logo, i) => (
                    <div key={`dup-${i}`} className="mx-16 shrink-0  duration-300">
                        <Image src={logo.src} alt={logo.alt} width={160} height={80} className="object-contain w-auto h-20" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default LogoCarousel;
