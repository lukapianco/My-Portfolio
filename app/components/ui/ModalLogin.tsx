"use client";

import { Lock } from "lucide-react";
import { motion } from "framer-motion";

export function ModalLogin(){
    return(
        <div className="bg-white border-4 border-black shadow-brutal-accent flex flex-col w-full max-w-md">
            <div className="flex items-center gap-2 bg-terminal py-3 px-4">
                <div className="h-3 w-3 bg-[#ff5f56] rounded-2xl"></div>
                <div className="h-3 w-3 bg-[#ffbd2e] rounded-2xl"></div>
                <div className="h-3 w-3 bg-[#27c93f] rounded-2xl"></div>
                <span className="ml-2 text-[12px] text-white/70">auth.terminal — bash</span>
            </div>
            <div className="h-2 w-full bg-accent border-b-4 border-black border-dashed"></div>
            <div className="flex flex-col gap-4 p-8">
                <div className="flex gap-4">
                    <div className="p-4 bg-accent border-4 border-black shadow-brutal-small">
                        <Lock width={24}/>
                    </div>
                    <div className="uppercase font-bold">
                        <span className="text-[10px] tracking-widest text-accent-dark">Sistema seguro</span>
                        <h2 className="text-2xl">&gt;&gt; Acesso_restrito</h2>
                    </div>
                </div>
                <form action="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="UserEmail" className="text-[12px] tracking-widest font-extrabold">
                            <span className="text-accent">01 </span>
                            &#47;&#47; E-MAIL
                        </label>
                        <motion.input 
                            initial={{ boxShadow: "0px 0px 0 0 #7fa653" }}
                            whileFocus={{ x: -4, y: -4, boxShadow: "6px 6px 0 0 #7fa653" }}
                            transition={{ type: "spring", stiffness: 500, damping: 22 }}
                            required type="email" 
                            name="email" 
                            id="UserEmail" 
                            autoComplete="email" 
                            placeholder="Coloque seu Email aqui."
                            className="peer py-4 px-5 border-4 border-black outline-0 text-[15px] font-bold tracking-widest not-placeholder-shown:shadow-[6px_6px_0_0_#7fa653]"
                        />
                    </div>
                    <div className="">
                        <button>LEMBRAR SESSÃO</button>
                        <span>Esqueci_senha</span>
                    </div>
                    <button type="submit">ENTRAR</button>
                </form>
            </div>
        </div>
    )
}