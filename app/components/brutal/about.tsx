"use client";

import { LineStyle } from "../ui/Line";
import Badge from "../ui/Badge";
import { SectionTitle } from "../ui/SectionTitle/index";
import { motion } from "framer-motion";
import Image from "next/image";
import Tags from "../ui/tags";

const Tools = ["GIT", "DOCKER", "AZURE", "VERCEL", "SQL SERVER", "TAILWIND", "VS CODE", "FIGMA"];
const Stack = [
  { img: "/CSharpLogo.png", lenght: 90, label: "C SHARP", green: true },
  { img: "/javascriptLogo.webp", lenght: 70, label: "JAVASCRIPT", green: true, white: true },
  { img: "/typescriptLogo.png", lenght: 70, label: "TYPESCRIPT", green: false },
  { img: "/reactLogo.png", lenght: 70, label: "REACT", green: false, white: true },
  { img: "/nextjsLogo.webp", lenght: 70, label: "NEXT.JS", green: false, white: false },
  { img: "/NodeJSLogo.png", lenght: 70, label: "NODE.JS", green: true },
];
const skills = [
  { name: "C# / .NET", pg: 90 },
  { name: "TYPESCRIPT", pg: 85 },
  { name: "NEXT.JS", pg: 80 },
  { name: "REACT", pg: 82 },
  { name: "NODE.JS", pg: 72 },
];

export default function About(){
    return(
        <section className="w-full py-10 max-sm:px-4 px-8 flex flex-col gap-8">
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
                <div className="flex flex-col lg:w-[50%] border-4 border-black shadow-brutal-lg p-7 gap-6">
                    <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 flex items-center justify-center bg-black text-white font-bold text-2xl">
                            L
                            <div className="w-4 h-4 absolute bg-accent -right-0.5 -bottom-0.5 border-2 border-black"></div>
                        </div>
                        <div className="flex flex-col gap-0.5">
                            <h3 className="font-display font-bold uppercase text-2xl tracking-[1px]">Luka Piancó</h3>
                            <span className="text-[12px] text-black/70">FULL-STACK DEVELOPER</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <LineStyle.BgWithBorder addStyle="flex-2"/>
                        <LineStyle.Strong addStyle="flex-1 h-[1px] hidden min-[490px]:block"/>
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
                    <div className="max-[550px]:h-16 text-center relative flex flex-col items-center justify-center w-full h-10 italic text-[13px] border-l-4 border-accent">
                        &#34;Se existe uma forma de fazer melhor, descubra-a. &#34;<br/>
                        <span>&#126;  Edison, Thomas</span>
                    </div>
                    <div className="flex flex-col gap-3 text-[11px] font-bold">
                        <span>&#47;&#47; PROFICIÊNCIA</span>
                        <div className="flex flex-col">
                            {skills.map((i) => (
                                <div key={i.name} className="flex items-center gap-5">
                                    <span className="w-15 min-[550px]:w-25">{i.name}</span>
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
                <div className="lg:w-[50%] flex flex-col gap-4">
                    <span className="text-[11px] font-bold">&#47;&#47; PROFICIÊNCIA</span>
                    <ul className="grid grid-cols-1 min-[425px]:grid-cols-2 sm:grid-cols-3 list-none gap-5">
                        {Stack.map((i) => (
                            <motion.li 
                                key={i.label}
                                whileHover={{ x: -3, y: -3, boxShadow: "10px 10px 0 0 #000" }}
                                whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0 0 #000" }}
                                initial={{ boxShadow: "6px 6px 0 0 #000" }}
                                transition={{ type: "spring", stiffness: 500, damping: 22 }}
                                className={`relative aspect-square ${i.green ? 'bg-accent' : 'bg-black text-accent'} ${i.white ? "bg-white text-black" : ""} gap-4 flex flex-col justify-center items-center font-display font-bold border-4 border-black shadow-brutal select-none cursor-pointer`}>
                                    <Image 
                                        width={i.lenght}
                                        height={i.lenght}
                                        src={i.img}
                                        alt={"Logo do " + i.label}
                                        className="max-md:w-15 max-sm:w-18"
                                    />
                                    <span className="text-[14px] tracking-[2px]">{i.label}</span>
                                    <div className="w-4 h-4 absolute bg-white right-0 top-0 border-l-4 border-b-4 border-black"></div>
                                </motion.li>
                        ))}
                    </ul>
                    <LineStyle.Strong addStyle="mt-3"/>
                    <span className="text-[11px] font-bold">&#47;&#47; FERRAMENTAS</span>
                    <div className="flex flex-wrap gap-4 uppercase">
                        {
                            Tools.map((tag, i) => (
                                <Tags key={tag} addStyle={i % 3 === 0 && i != 0 ? "bg-accent border-[1px] font-light px-3" : "bg-bg border-[1px] font-light px-3"}>
                                    {tag}
                                </Tags>
                            ))
                        }
                    </div>
                    <LineStyle.Strong addStyle="mt-3"/>
                    <span className="text-[11px] font-bold">&#47;&#47; IDIOMAS</span>
                    <div className="flex flex-col gap-3">
                        <div className="py-3 px-6 flex justify-between items-center border-4 border-black shadow-brutal-small tracking-[2px] text-[12px] uppercase">
                            <span>PORTUGUÊS</span>
                            <span className="p-1 px-3 border border-black bg-accent">NATIVO</span>
                        </div>
                        <div className="py-3 px-6 flex justify-between items-center border-4 border-black shadow-brutal-small tracking-[2px] text-[12px] uppercase">
                            <span>Inglês</span>
                            <span className="p-1 px-3 border border-black ">Técnico</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}