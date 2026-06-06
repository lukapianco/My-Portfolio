"use client";

import { LineStyle } from "../ui/Line";
import Badge from "../ui/Badge";
import { SectionTitle } from "../ui/SectionTitle/index";
import { motion } from "framer-motion";

const skills = [
  { name: "C# / .NET", pg: 90 },
  { name: "TYPESCRIPT", pg: 85 },
  { name: "NEXT.JS", pg: 80 },
  { name: "REACT", pg: 82 },
  { name: "NODE.JS", pg: 72 },
];

export default function About(){
    return(
        <section className="w-full py-10 px-8 flex flex-col gap-8">
            <Badge addStyle="text-sm">
                01 / SOBRE MIM
            </Badge>
            <LineStyle.DashedLine/>
            <SectionTitle.TitleBase>
                <SectionTitle.BGTitle>
                    &gt; QUEM 
                </SectionTitle.BGTitle>
                <SectionTitle.NormalTitle>
                    SOU EU 
                    <span className="blink"></span>
                </SectionTitle.NormalTitle>
            </SectionTitle.TitleBase>

            <div className="max-lg:flex-col flex gap-8">
                {/* Esquerda */}
                <div className="flex flex-col flex-1 border-4 border-black shadow-brutal p-7 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 flex items-center justify-center bg-black text-white font-bold text-2xl">
                            L
                            <div className="w-4 h-4 absolute bg-accent -right-0.5 -bottom-0.5 border-2 border-black"></div>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <h3 className="font-display font-bold uppercase text-2xl">Luka Piancó</h3>
                            <span className="text-[12px] text-black/70">FULL-STACK DEVELOPER</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <LineStyle.BgWithBorder addStyle="flex-2"/>
                        <LineStyle.Strong addStyle="flex-1 h-[1px]"/>
                    </div>
                    <div className="font-display text-[15px] flex flex-col gap-5">
                        <p>
                            Minha relação com tecnologia começou ainda na infância — desmontando aparelhos por curiosidade, tentando entender como as coisas funcionavam por dentro. Essa inquietação virou propósito: hoje construo soluções digitais que fazem sentido para quem as usa.
                        </p>
                        <p>
                            Tenho foco em criar experiências criativas e bem-estruturadas, unindo o rigor do <strong>C# e .NET</strong> no backend com a expressividade do <strong>TypeScript, React e Next.js</strong> no frontend. Para mim, código é ferramenta — o que importa é o impacto que gera.
                        </p>
                        <p>
                            Estou em constante evolução, buscando oportunidades onde possa colaborar em projetos desafiadores e crescer junto com equipes que desejam moldar o mundo.
                        </p>
                    </div>
                    <div className="relative flex flex-col items-center justify-center w-full h-10 italic text-[13px] border-l-4 border-accent">
                        &#34;Se existe uma forma de fazer melhor, descubra-a. &#34;<br/>
                        <span>~ Edison, Thomas</span>
                    </div>
                    <div className="flex flex-col gap-3 text-[11px] font-bold">
                        <span>&#47;&#47; PROFICIÊNCIA</span>
                        <div className="flex flex-col">
                            {skills.map((i) => (
                                <div key={i.name} className="flex items-center gap-5">
                                    <span className="w-25">{i.name}</span>
                                    <div className="flex-1 h-2.5 border border-black">
                                        <motion.div
                                            initial={{width: 0}}
                                            whileInView={{width: i.pg + '%'}}
                                            viewport={{once: true}}
                                            transition={{
                                                duration: 0.9,
                                                ease: 'easeOut'
                                            }}
                                            className="h-full bg-[#7fa653]"
                                        ></motion.div>
                                    </div>
                                    <span className="w-10">{i.pg}%</span>
                                </div> 
                            ))}
                        </div>
                    </div>
                </div>
                {/* Direita */}
                <div className="flex-1">

                </div>
            </div>
        </section>
    );
}