"use client";

import { motion } from "framer-motion";

interface BadgeProps{
    children: React.ReactNode,
    addStyle?: string,
    StylizedBorder: boolean,
    StylizedBackground: boolean
}
export default function Badge({children, addStyle, StylizedBorder, StylizedBackground}: BadgeProps) {
    return (
        <motion.span 
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{once: true}}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className={`w-fit text-xs font-bold flex px-1.5 py-2 ${StylizedBorder ? "" : "shadow-brutal-small"} items-center gap-2 ${StylizedBackground ? "" : "bg-bg"} border-3 border-black tracking-wider ${addStyle}`}
            >
            {children}
        </motion.span>
    );
};