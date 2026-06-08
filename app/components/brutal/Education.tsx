"use client";

import { Check, GraduationCap, Infinity } from "lucide-react";
import { motion } from "framer-motion";
import Badge from "../ui/Badge";
import { EducationCard }  from "../ui/EducationCard/index";
import { LineStyle } from "../ui/LineStyle";
import { SectionTitle } from "../ui/SectionTitle";
import { Terminal } from "../ui/Terminal";

const EducationList = {
    Estudo: [
        {
            Institution: "FACULDADE DE TECNOLOGIA ROCKETSEAT",
            Description: "Graduação — Inteligência Artificial e Automação Digital",
            completed: false,
            statusAndEnd: "FEV 2026 - SET 2027",
            ShowProgress: true,
            progress: 10,
            prograssStatus: "Em andamento",
            Tags: ["IA", "Automação Digital", "Low Code", "N8N"],
            emphasis: null,
            bottomMessage: "GRADUAÇÃO · CURSANDO"
        },
        {
            Institution: "EEMTI JENNY GOMES",
            Description: "Prepara ITA — Ensino Médio",
            completed: true,
            statusAndEnd: "MAI 2024 - DEZ 2025",
            ShowProgress: false,
            progress: 100,
            prograssStatus: "Finalizada",
            Tags: ["Matemática", "Física", "Química", "ITA Prep.", "Exatas"],
            emphasis: "Aprovado na 1ª turma preparatória para o ITA do estado do Ceará — programa desenvolvido em parceria com o Colégio Ari de Sá, referência nacional em pré-vestibular de alta performance.",
            bottomMessage: "ENSINO MÉDIO · CONCLUÍDO"
        },
    ],
    Cursos:[
        {
            plataform: "CCI",
            tags:["🇺🇸 INGLÊS (6 SEM.)"],
            description: "Inglês técnico e conversação — comunicação para o mercado global de tecnologia."
        },
        {
            plataform: "BALTA.IO",
            tags:["REACT", "TYPESCRIPT", "HOOKS"],
            description: "Componentes reutilizáveis, tipagem avançada e padrões modernos de estado com Hooks."
        },
        {
            plataform: "ROCKETSEAT",
            tags:["REACT", "NEXT.JS", "TAILWIND", "HOOKS"],
            description: "NLW Connect — evento intensivo de dev full-stack com stack moderna e projetos reais."
        },
        {
            plataform: "F. BRADESCO",
            tags:["HARDWARE", "SOFTWARE"],
            description: "Fundamentos de TI — arquitetura de computadores, sistemas operacionais e redes."
        },
        {
            plataform: "ROCKETSEAT",
            tags:["WEB APPS", "HTML/CSS"],
            description: "Conectar — trilha de aplicativos web com foco em semântica, acessibilidade e UX."
        },
        {
            plataform: "ROCKETSEAT",
            tags:["HTML", "CSS", "JS"],
            description: "Discover — base sólida em desenvolvimento web: lógica, estrutura e interatividade."
        },
    ]
};

function CountPlataformCourse(){
    const coursesNumber: string[] = [];
    EducationList.Cursos.forEach((item) => {
        if (!coursesNumber.includes(item.plataform)) {
            coursesNumber.push(item.plataform);
        }
    })
    return(
        <>
            {coursesNumber.length}+
        </>
    )
}

export default function Education(){
    return(
        <section id="education" className="relative w-full py-15 max-sm:px-4 px-8 flex flex-col gap-8 scroll-mt-15 md:mt-7">
            <div className="flex justify-between items-center">
                <SectionTitle.TitleBase>
                    <SectionTitle.NormalTitle addStyle="whitespace-nowrap">
                        &gt;&gt; FORMAÇÃO_    
                        <span className="blink"></span>
                    </SectionTitle.NormalTitle>  
                </SectionTitle.TitleBase>
                {/* <Badge addStyle="flex uppercase h-fit flex-col bg-black text-white px-4 items-start gap-[0px] shadow-brutal">
                    <span className="text-accent-dark whitespace-nowrap">status &#47;&#47; atual</span>
                    <span className="font-bold">Em Formação</span>
                </Badge> */}
            </div>
            <div className="flex flex-col gap-4">
                <LineStyle.Strong/>
                <LineStyle.DashedLine/>
            </div>
            <div className="max-lg:flex-col flex w-full gap-12 lg:gap-8">
                {/* Esqeuerda */}
                <div className="w-full lg:w-[50%] flex flex-col gap-8">
                    <div className="flex items-center gap-5">
                        <Badge StylizedBackground={false} StylizedBorder={true} addStyle="flex uppercase h-fit flex-col bg-black text-white px-6 items-start gap-[0px] shadow-brutal-sm-green">
                            <span className="text-white whitespace-nowrap">01 &#47;&#47; ACADÊMICO</span>
                        </Badge>
                        <LineStyle.Strong/>
                    </div>
                    {EducationList.Estudo.map((i, a) => (
                        <EducationCard.Root key={i.Institution}>
                            <EducationCard.Main>
                                <EducationCard.Top CardIcon={<GraduationCap/>} EducationDate={i.statusAndEnd}/>
                                <EducationCard.Title Title={i.Institution} SubTitle={i.Description}/>
                                {i.emphasis != null &&
                                    <EducationCard.EmphasisArea>
                                        {i.emphasis}
                                    </EducationCard.EmphasisArea>
                                }
                                {i.ShowProgress &&
                                    <EducationCard.ProgressBar Progress={i.progress} SubTitle={i.prograssStatus}/>
                                }
                                <EducationCard.ECTags TagList={EducationList.Estudo[a].Tags}/>
                            </EducationCard.Main>
                            <EducationCard.Bottom>
                                {
                                    !i.completed ?
                                        <span className="w-2.5 h-2.5 bg-accent rounded animate-pulse"></span>
                                        :
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                }
                                <span className="text-[11px] font-bold tracking-[2px]">{i.bottomMessage}</span>
                            </EducationCard.Bottom>
                        </EducationCard.Root>
                    ))}
                </div>
                {/* Direita */}
                <div className="lg:w-[50%] flex flex-col gap-8">
                    <div className="flex items-center gap-5">
                        <Badge StylizedBorder={true} StylizedBackground={true} addStyle="flex uppercase h-fit flex-col bg-accent text-white px-6 items-start gap-[0px] border-4 shadow-brutal">
                            <span className="text-black whitespace-nowrap">02 &#47;&#47; CURSOS</span>
                        </Badge>
                        <LineStyle.Strong/>
                    </div>
                    <Terminal.base>
                        <Terminal.aplicationName TerminalName="luka@portfolio:~/cursos $_" addStyle="gap-4 normal-case"/>
                        <Terminal.console addStyle="py-3">
                            <ul className="list-none">
                                {EducationList.Cursos.map((item, i) => (
                                    <motion.li 
                                            key={i} 
                                            initial={{y: -40, x: -10,opacity: 0}}
                                            whileInView={{y: 0, x: 0, opacity: 1}}
                                            viewport={{once: true}}
                                            transition={{ duration: 0.7, ease: "easeOut" }}
                                            className="p-2 flex w-full text-white gap-3"
                                        >
                                        <div className="text-[12px] flex h-full p-2 text-[#bbb] py-3">
                                            {i < 9 ? "0" + (i + 1) : (i + 1)}
                                        </div>
                                        <div className="p-4 bg-[#111] w-full border-[#2a2a2a] border flex flex-col gap-2.5">
                                            <div className="flex justify-between items-center text-[10px] font-bold gap-5">
                                                <div className="flex flex-wrap gap-1.5 items-center">
                                                    {item.tags.map((tag, a) => (
                                                        <span key={a} className="py-2 px-2 bg-accent text-black">{tag}</span>
                                                    ))}
                                                </div>
                                                <span className="py-2 px-3 bg-white text-black">{item.plataform}</span>
                                            </div>
                                            <p className="text-[11px] text-[#aaa] leading-relaxed">{item.description}</p>
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>
                        </Terminal.console>
                    </Terminal.base>
                    <motion.div 
                            initial={{y: -20, x: -10,opacity: 0}}
                            whileInView={{y: 0, x: 0, opacity: 1}}
                            viewport={{once: true}}
                            transition={{ duration: 0.7, ease: "easeOut" }}
                            className="flex w-full gap-1 text-4xl bg-black uppercase border-4 border-black shadow-brutal"
                        >
                        <div className="p-3 sm:w-35 bg-bg flex flex-col flex-1 items-center">
                            <span className="block font-bold text-accent">
                                <CountPlataformCourse/>
                            </span>
                            <span className="text-sm">Plataformas</span>
                        </div>
                        <div className="p-3 sm:w-35 bg-accent flex flex-col flex-1 items-center">
                            <span className="block font-bold text-4xl text-black">{EducationList.Cursos.length}</span>
                            <span className="text-sm">Cursos</span>
                        </div>
                        <div className="py-3 sm:w-35 bg-bg text-accent flex flex-col flex-1 items-center justify-center">
                            <span className="block"><Infinity/></span>
                            <span className="text-sm">Aprendendo</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}