"use client";

import { useEffect, useState } from "react";
import Badge from "../ui/Badge";
import Tags from "../ui/tags";
import { Play, ArrowRight } from "lucide-react";
import BrutalLink from "../ui/BrutalButton";
import { Terminal } from "../ui/Terminal/index";



const tags = ["TYPESCRIPT", "NEXT.JS", "REACT", "Tailwind", "Automação Digital", "N8N", "C#", ".NET 8"];
const TYPE = "TRANSFORMANDO CÓDIGO\nC# E JS EM FERRAMENTAS\nPARA PESSOAS DESDE 2021_";
const Lines = [
  { t: "luka@dev:~$ ./skills.sh", c: "text-[#7fa653]" },
  { t: "", c: "" },
  { t: "> CARREGANDO HABILIDADES...", c: "text-white" },
  { t: "", c: "" },
  { t: "> C# / .NET 8        [██████████] OK", c: "text-[#7fa653]" },
  { t: "> TYPESCRIPT         [██████████] OK", c: "text-[#7fa653]" },
  { t: "> REACT / NEXT.JS    [██████████] OK", c: "text-[#7fa653]" },
  { t: "> REST APIs          [██████████] OK", c: "text-[#7fa653]" },
  { t: "> HTML / CSS / JS    [██████████] OK", c: "text-[#7fa653]" },
  { t: "> GIT / DOCKER       [██████████] OK", c: "text-[#7fa653]" },
  { t: "> TAILWIND CSS       [██████████] OK", c: "text-[#7fa653]" },
  { t: "", c: "" },
  { t: "> VERIFICANDO EXPERIÊNCIA...", c: "text-white" },
  { t: "> ANOS EXP:    4+", c: "text-[#d4b65a]" },
  { t: "> PROJETOS:    20+ CONCLUÍDOS", c: "text-[#d4b65a]" },
  { t: "> CAFÉ/DIA:    ACIMA DO LIMITE", c: "text-[#d4b65a]" },
  { t: "", c: "" },
  { t: "✓ STACK CARREGADO COM SUCESSO.", c: "text-[#7fa653]" },
  { t: "luka@dev:~$ ▌", c: "text-[#7fa653]" },
];




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
        <div className="font-mono text-[11px] sm:text-sm p-3 text-accent whitespace-pre-wrap">
            <span className="text-white/60">{"// BIO.TXT\n"}</span>
            <span>{"> " + TYPE.slice(0, letras)}</span>
            <span className="animate-pulse">▌</span>
        </div>
    );
}

function ScrollTo (sectionHref: string) {
        const WhatSection = document.querySelector(sectionHref);
        if (WhatSection) {
            WhatSection.scrollIntoView({behavior: "smooth", block: "start"})
        }
    }


export default function Hero() {
    const [visible, setVisible] = useState<number>(0);
    useEffect(() => {
        if (visible >= Lines.length) return;
        const timer = setTimeout(() => {
            setVisible(prev => prev + 1);
        }, visible > 2 ? 250 : 180);
        return () => clearTimeout(timer);
    }, [visible]);

    return (
        <section id="home" className="w-full py-10 sm:py-16 max-md:px-4 sm:px-8 block lg:flex gap-8 scroll-mt-28">
            {/* Esquerda */}
            <div className="w-full lg:w-[50%]">
                <Badge StylizedBackground={false} StylizedBorder={false}>
                    <span className="block w-2 h-2 bg-accent"></span>
                    DISPONÍVEL PARA PROJETOS
                </Badge>
                <div className="text-4xl sm:text-5xl md:text-[62px] xl:text-7xl leading-[0.95] font-black my-6 font-display">
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
                <div className="flex flex-wrap gap-4 my-8 uppercase">
                    {
                        tags.map((tag, i) => (
                            <Tags StylizedBorder={false} key={tag} addStyle={i % 2 === 0 ? "bg-accent" : "bg-bg"}>
                                {tag}
                            </Tags>
                        ))
                    }
                </div>
                <div className="flex gap-4 my-8">
                    <BrutalLink onSubmitAction={() => ScrollTo('#about')} addStyle="bg-accent max-md:flex-2 text-sm sm:text-base md:text-base px-4 py-3 gap-2 cursor-pointer">
                        <Play className="w-4 h-4 fill-black" strokeWidth={3}/>
                        Ver Projetos
                    </BrutalLink>
                    <BrutalLink onSubmitAction={() => ScrollTo('#education')}  addStyle="bg-bg    max-md:flex-1 text-sm sm:text-base md:text-base px-4 py-3 gap-2 cursor-pointer">
                        <ArrowRight className="w-4 h-4" strokeWidth={3}/>
                        Contato
                    </BrutalLink>
                </div>
                <div className="flex w-full gap-1 text-4xl bg-black uppercase md:w-fit border-4 border-black shadow-brutal">
                    <div className="p-3 sm:w-35 bg-bg flex flex-col flex-1">
                        <span className="block font-bold text-accent">4+</span>
                        <span className="text-sm">anos exp.</span>
                    </div>
                    <div className="p-3 sm:w-35 bg-accent flex flex-col flex-1">
                        <span className="block font-bold text-4xl text-black">20</span>
                        <span className="text-sm">projetos</span>
                    </div>
                    <div className="p-3 sm:w-35 bg-black text-accent flex flex-col flex-1">
                        <span className="block font-bold text-4xl">∞</span>
                        <span className="text-sm">Café/dia</span>
                    </div>
                </div>
            </div>
            {/* Direita */}
            <div className="mt-8 lg:mt-0 w-full lg:w-[50%] flex flex-col gap-8">
                <Terminal.base>
                    <Terminal.aplicationName TerminalName="LUKAPIANCO@DEV ~ SKILLS.SH" addStyle="justify-between"/>
                    <Terminal.console addStyle="p-2">
                        {Lines.slice(0, visible).map((line, i) => (
                            <div key={i} className={`px-4 py-2 text-[13px] ${line.c}`}>
                                {line.t}
                            </div>
                        ))}
                    </Terminal.console>
                </Terminal.base>
                
                <div className="bg-accent p-5 shadow-brutal-lg w-full border-4 border-black flex flex-col gap-4 text-sm text-black">
                    <p className="text-[12px]">&#47;&#47; STACK ATUAL</p>
                    <p className="font-bold text-4xl">FULL-STACK <br/> DEVELOPER</p>
                    <p className="w-full h-1 bg-black"></p>
                    <p>
                        FRONTEND → NEXT.JS + TYPESCRIPT <br/>
                        BACKEND  → C# .NET 8 + REST APIs <br/>
                        CLOUD    → AZURE + VERCEL <br/>
                        TOOLS    → GIT + DOCKER + CI/CD
                    </p>
                </div>
            </div>
        </section>
    );
};