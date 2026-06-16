"use client";

import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export function CTA(){
    return(
        <section className="py-15 max-sm:px-4 px-8">
            <div className="relative flex text-white">
                <div className="absolute -bottom-2 -right-2 inset-0 bg-[#7fa653] border-4 border-black translate-x-3 translate-y-3" />
                <div className="z-10 bg-black p-10 flex w-full gap-5 md:gap-12 max-lg:flex-col lg:justify-between">
                    <div className="relative flex flex-col gap-3 md:gap-5">
                        <span className="uppercase  max-sm:text-[11px] text-[12px] text-accent tracking-widest">&#47;&#47;Próximos passos</span>
                        <h2 className="font-display  max-sm:text-3xl text-4xl md:text-6xl font-extrabold uppercase ">
                            Vamos construir<br/>
                            <span className="text-accent">algo juntos?</span>
                        </h2>
                    </div>
                    <div className="flex max-sm:flex-wrap gap-5 items-center max-sm:justify-center">
                        <motion.button
                                initial={{ boxShadow: "8px 8px 0 0 #7fa653" }}
                                whileHover={{ x: -2, y: -2, boxShadow: "10px 10px 0 0 #7fa653" }}
                                whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0 0 #7fa653" }}
                                transition={{ type: "spring", stiffness: 500, damping: 22 }}
                                className="whitespace-nowrap inline-flex items-center gap-2 border-4 border-black bg-accent text-black px-6 py-4 font-mono text-sm uppercase tracking-widest font-bold cursor-pointer"
                            >
                            <ArrowRight stroke="black"/>
                            Entrar em contato
                        </motion.button>
                        <motion.button
                                initial={{ boxShadow: "8px 8px 0 0 #fff" }}
                                whileHover={{ x: -2, y: -2, boxShadow: "10px 10px 0 0 #fff" }}
                                whileTap={{ x: 4, y: 4, boxShadow: "0px 0px 0 0 #fff" }}
                                transition={{ type: "spring", stiffness: 500, damping: 22 }}
                                className="max-sm:text-sm whitespace-nowrap inline-flex items-center gap-2 border-4 border-white bg-black text-white px-6 py-4 font-mono text-sm uppercase tracking-widest font-bold cursor-pointer"
                            >
                            <Download stroke="white"/>
                            Baixar CV
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}