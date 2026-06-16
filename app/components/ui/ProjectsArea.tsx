"use client";

import { Code2, Flag, Play, Star } from "lucide-react";
import { useState } from "react";
import Tags from "./tags";
import BrutalButton from "./BrutalButton";
import { ProjectProps } from "@/types/projects";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const FILTERS = ["TODOS", "FRONTEND", "BACKEND", "FULL-STACK"] as const;

export default function ProjectsArea({ PList }: { PList: ProjectProps[] }) {
    const [buttonFilters, setFilters] = useState<"TODOS" | "FRONTEND" | "BACKEND" | "FULL-STACK">("TODOS")

    return(
        <div className="flex flex-col gap-10">
            <div className="flex border-4 border-black w-fit shadow-brutal">
                {FILTERS.map(f => (
                    <button 
                            key={f} 
                            onClick={() => setFilters(f)} 
                            className={`py-3 px-4 ${buttonFilters == f && "bg-black text-accent"} uppercase font-bold cursor-pointer text-[13px] border-r-4 border-r-black transition-colors`}
                        >
                        {f}
                    </button>
                ))}
            </div>
            <AnimatePresence mode="popLayout">
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 list-none gap-5">
                    {PList.filter(p => p.cat == buttonFilters || buttonFilters == "TODOS").map(i => (
                        <motion.li 
                                key={i.name} 
                                layout
                                initial={{ opacity: 0, y: 12, boxShadow: "8px 8px 0 0 #000" }}
                                animate={{ opacity: 1, y: 0 }}
                                whileHover={{ x: -3, y: -3, boxShadow: "12px 12px 0 0 #000" }}
                                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                                className="border-4 border-black shadow-brutal bg-white flex flex-col cursor-pointer"
                            >
                            <div className="relative aspect-video bg-[#cfe1b3] grid-paper flex items-center justify-center border-b-4 border-black">
                                <div className="absolute flex-wrap flex items-center left-3 top-3 gap-2">
                                    {i.featured && 
                                        <div className="flex items-center bg-accent border-2 border-black shadow-brutal-small text-[10px] py-1 px-1.5 gap-1 font-bold">
                                            <Star height={8} fill="black"/>
                                            DESTAQUE
                                        </div>
                                    }
                                    {i.inDev && 
                                        <div className="flex items-center bg-black text-accent border-2 border-black shadow-brutal-small text-[10px] py-1 px-1.5 gap-1 font-extrabold">
                                            EM DESENVOLVIMENTO
                                        </div>
                                    }
                                </div>
                                {i.banner ? 
                                    <Image
                                        alt={"Banner do projeto " + i.name}
                                        src={i.banner}
                                        style={{
                                            width: "100%",
                                            height: "100%"
                                        }}
                                        width={600}
                                        height={600}
                                    />
                                    :
                                    <Flag width={40} height={35} opacity={0.5}/>
                                }
                            </div>
                            <div className="flex flex-1 flex-col p-5 gap-3.5">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] px-2 py-1 bg-accent border-2 border-black font-bold">{i.cat}</span>
                                    <span className="text-[12px] ">{i.year}</span>
                                </div>
                                <h3 className="uppercase font-display text-2xl font-black">{i.name}</h3>
                                <p className="font-display text-[12px] text-black/80 leading-relaxed">{i.descriptions.card}</p>
                                <div className="flex flex-wrap gap-2">
                                    {i.tags.map(tg => (
                                        <Tags key={tg} StylizedBorder={true} addStyle="text-[10px] px-2 py-[7px] border-[2px] ">
                                            {tg}
                                        </Tags>
                                    ))}
                                </div>
                                <div className="flex gap-2 mt-auto">
                                    {i.demoLink && 
                                        <BrutalButton onSubmitAction={() => window.open(i.demoLink, "_blank")} addStyle="flex-1 py-2 justify-center text-[11px] items-center">
                                            <Play fill="black" height={15}/>
                                            DEMO
                                        </BrutalButton>
                                    }
                                    <BrutalButton onSubmitAction={() => window.open(i.codeLink, "_blank")} addStyle="flex-1 py-2 justify-center text-[11px] items-center bg-white">
                                        <Code2 height={15}/>
                                        CODE
                                    </BrutalButton>
                                </div>
                            </div>
                        </motion.li>
                    ))}
                </ul>
            </AnimatePresence>
        </div>
    );
}