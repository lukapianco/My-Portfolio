import { useEffect, useState } from "react";

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

export default function Terminal() {
    const [visible, setVisible] = useState<number>(0);
    useEffect(() => {
        if (visible >= Lines.length) return;
        const timer = setTimeout(() => {
            setVisible(prev => prev + 1);
        }, visible > 2 ? 250 : 180);
        return () => clearTimeout(timer);
    }, [visible]);

    return (
        <div className="w-full divide-y-4  flex flex-col gap-1 text-4xl bg-terminal uppercase border-4 border-black shadow-brutal">
            {/* Barra de titulo */}
            <div className="px-4 w-full h-9 flex items-center justify-between bg-[#1a1a1a]">
                <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-black" />
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black" />
                    <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-black" />
                </div>
                <span className="text-[#bbb] text-[11px]">
                    LUKAPIANCO@DEV ~ SKILLS.SH
                </span>
                <span className="w-5"></span>
            </div>  
            <div className="min-h-110 w-full p-2 leading-[0.55]">
                {Lines.slice(0, visible).map((line, i) => (
                    <div key={i} className={`px-4 py-2 text-[13px] ${line.c}`}>
                        {line.t}
                    </div>
                ))}
            </div>
        </div>
    );
};