import { ModalLogin } from "@/app/components/ui/ModalLogin";
import { GetDataAtual } from "@/app/lib/PegarDataAtual";

export default function SignIn(){

    return (
        <main className="relative bg-[#111111] w-full h-dvh grid-paper-login flex flex-col">
            <div className="w-full bg-[#111111] border-b-2 border-white/10 py-3 px-5 uppercase flex justify-between text-[11px] tracking-widest font-bold">
                <span className="flex gap-1 text-white">
                    lukapianco.dev
                    <span className="text-white/40">&#47;&#47;  SISTEMA ADMIN v1.0.0</span>
                </span>
                <span className="hidden sm:block text-white/40">
                    SYS_ONLINE | {GetDataAtual()} | NODE_ENV=PRODUCTION
                </span>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <ModalLogin/>
            </div>
            <div className="absolute bottom-4 inset-x-0 text-center uppercase text-white/40 text-[10px] tracking-widest">
                LUKAPIANCO.DEV // ADMIN PANEL · ACESSO_RESTRITO · © 2026
            </div>
            <div className="absolute bottom-4 left-4 border-l-2 border-b-2 border-accent w-8 h-8"></div>
            <div className="absolute bottom-4 right-4 border-r-2 border-b-2 border-accent w-8 h-8"></div>
            <div className="absolute top-14 left-4 border-l-2 border-t-2 border-accent w-8 h-8"></div>
            <div className="absolute top-14 right-4 border-r-2 border-t-2 border-accent w-8 h-8"></div>
        </main>
    )
} 