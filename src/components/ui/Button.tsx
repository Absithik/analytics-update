"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps extends HTMLMotionProps<'button'> {
    variant?: 'primary' | 'outline' | 'secondary';
    href?: string;
    children: React.ReactNode;
    className?: string;
}

const MotionLink = motion(Link);

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    className = '',
    href,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center font-bold transition-all rounded-xl";
    const variants = {
        primary: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-200",
        outline: "border-2 border-slate-200 text-slate-900 hover:border-indigo-600 hover:text-indigo-600",
        secondary: "bg-white text-slate-900 border border-slate-100 hover:shadow-md"
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

    if (href) {
        return (
            <MotionLink
                href={href}
                className={combinedClasses}
                {...(props as any)}
            >
                {children}
            </MotionLink>
        );
    }

    return (
        <motion.button
            className={combinedClasses}
            {...props}
        >
            {children}
        </motion.button>
    );
};

export default Button;
