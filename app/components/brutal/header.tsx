"use client";

import Link from "next/link";
import { Download } from "lucide-react";
import BrutalButton from "../ui/BrutalButton";
import { motion } from "framer-motion";

const Links = [
    {label: "Home", href: "#home"},
    {label: "Sobre", href: "#sobre"},
    {label: "Formação", href: "#formacao"},
    {label: "Projetos", href: "#projetos"},
    {label: "Contato", href: "#contato"},
]

export default function Header() {
    function ToSection (sectionHref: string) {
        const WhatSection = document.querySelector(sectionHref);
        if (WhatSection) {
            WhatSection.scrollIntoView({behavior: "smooth", block: "start"})
        }
    }

    return (
        <motion.header
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="z-10 font-mono justify-between bg-bg sticky top-4 mx-3.5 sm:mx-8 flex px-6 py-3  border-4 border-black shadow-brutal tracking-widest"
        >
            <Link href="/" className="py-2.5 px-4 bg-black flex items-center gap-2 text-sm font-semibold text-accent font-mono uppercase">
                <span className="block w-2 h-2 bg-accent"></span>
                <span className="flex">
                    luka
                    <span className="hidden min-[400px]:max-[670px]:block">.dev</span>
                </span>
            </Link>
            <nav className="hidden min-[670px]:flex items-center gap-4">
                {Links.map((link) => (
                    <button key={link.href} onClick={() => ToSection(link.href)} className="uppercase text-xs font-bold text-ink hover:text-accent transition-colors cursor-pointer">
                        {link.label}
                    </button>
                ))}
            </nav>
            <BrutalButton>
                <Download className="w-4 h-4" strokeWidth={3}/>
                <span className="hidden min-[400px]:max-[670px]:block min-[780px]:block">Baixar</span> CV
            </BrutalButton>
        </motion.header>
    );
}