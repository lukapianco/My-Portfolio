"use client";

import { useEffect, useState } from "react";
import Badge from "../ui/Badge";
import Tags from "../ui/tags";
import { Play, ArrowRight } from "lucide-react";
import BrutalLink from "../ui/BrutalLink";


const tags = ["TYPESCRIPT", "NEXT.JS", "REACT", "Tailwind", "Automação Digital", "C#", ".NET 8"];
const TYPE = "TRANSFORMANDO CÓDIGO\nC# E JS EM FERRAMENTAS\nPARA PESSOAS DESDE 2021_";

function TypeWriting(){
    const [letras, setLetras] = useState<number>(0);
    useEffect(() => {
        if (letras >= TYPE.length) return;
        const timeout = setTimeout(() => {
            setLetras((i) => i + 1);
        }, 35);
        return () => clearTimeout(timeout); 
    }, [letras]);
    return (
        <div className="font-mono text-[11px] p-3 text-accent whitespace-pre-wrap">
            <span className="text-white/60">{"// BIO.TXT\n"}</span>
            <span>{"> " + TYPE.slice(0, letras)}</span>
            <span className="animate-pulse">▌</span>
        </div>
    );
}

export default function Hero() {

    return (
        <section id="hero" className="w-full py-16 px-8 block lg:flex ">
            {/* Esquerda */}
            <div className="w-full lg:w-[50%]">
                <Badge>
                    <span className="block w-2 h-2 bg-accent"></span>
                    DISPONÍVEL PARA PROJETOS
                </Badge>
                <div className="text-7xl leading-[0.95] font-black my-6 font-display">
                    <span className="block">
                        OLÁ,
                    </span>
                    <span className="block">
                        SOU <span className="text-accent">LUKA</span>,
                    </span>
                    <span className="block">
                        DESENVOLVEDOR
                    </span>
                    <span className="block">
                        DE SOLUÇÕES
                    </span>
                    <span className="block text-accent">
                        CRIATIVAS.
                    </span>
                </div>
                <div className="bg-terminal border-4 border-black shadow-brutal">
                    <TypeWriting/>
                </div>
                <div className="flex flex-wrap gap-4 my-8">
                    {
                        tags.map((tag, i) => (
                            <Tags key={tag} bgColor={i % 2 === 0 ? "bg-accent" : "bg-bg"}>
                                {tag}
                            </Tags>
                        ))
                    }
                </div>
                <div className="flex gap-4 my-8">
                    <BrutalLink href="#projetos" bgColor="bg-accent">
                        <Play className="w-4 h-4 fill-black" strokeWidth={3}/>
                        Ver Projetos
                    </BrutalLink>
                    <BrutalLink href="#projetos" bgColor="bg-bg">
                        <ArrowRight className="w-4 h-4" strokeWidth={3}/>
                        Contato
                    </BrutalLink>
                </div>
                <div className="flex gap-1 text-4xl bg-black uppercase w-fit border-4 border-black shadow-brutal">
                    <div className="p-3 w-35 bg-bg flex flex-col">
                        <span className="block font-bold text-accent">4+</span>
                        <span className="text-sm">anos exp.</span>
                    </div>
                    <div className="p-3 w-35 bg-accent flex flex-col">
                        <span className="block font-bold text-4xl text-black">20</span>
                        <span className="text-sm">projetos</span>
                    </div>
                    <div className="p-3 w-35 bg-black text-accent flex flex-col">
                        <span className="block font-bold text-4xl">∞</span>
                        <span className="text-sm">Café/dia</span>
                    </div>
                </div>
            </div>
            {/* Direita */}
            <div className="">bbb</div>
        </section>
    );
};