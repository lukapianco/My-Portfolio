"use client";

import { ProjectProps } from "@/types/projects";
import { Code2, Flag, Play } from "lucide-react";
import { useState } from "react";
import Tags from "../tags";
import BrutalButton from "../BrutalButton";

const FILTERS = ["TODOS", "FRONTEND", "BACKEND", "FULL-STACK"] as const;

export default function RootProjectsArea(){
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
            <ul className="grid grid-cols-2 lg:grid-cols-3 list-none">
                <li className="border-4 border-black shadow-brutal bg-white">
                    <div className="aspect-16/10 bg-[#cfe1b3] grid-paper flex items-center justify-center">
                        <Flag width={40} height={35} opacity={0.5}/>
                    </div>
                    <div className="flex flex-col p-5">
                        <div className="flex justify-between">
                            <span>FULL-STACK</span>
                            <span>2023</span>
                        </div>
                        <h3 className="uppercase font-display">MANGA DOWNLOADER</h3>
                        <p>Console app em C# (.NET 8) para download de mangás em CBZ com metadados ComicInfo.xml, scraping com PuppeteerSharp e downloads paralelos multi-thread.</p>
                        <div className="flex flex-wrap">
                            <Tags StylizedBorder={true} addStyle="text-[10px] px-2 py-2 border-[2px] ">
                                Teste
                            </Tags>
                        </div>
                        <div className="flex gap-2">
                            <BrutalButton addStyle="flex-1 py-2 justify-center">
                                <Play fill="black"/>
                                DEMO
                            </BrutalButton>
                            <BrutalButton addStyle="flex-1 py-2 justify-center">
                                <Code2/>
                                CODE
                            </BrutalButton>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
}