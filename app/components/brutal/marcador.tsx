import { Star } from "lucide-react";

const Itens = [
  "GIT", "FULL-STACK DEV", "AUTOMAÇÃO DIGITAL", "IA",
  "OPEN SOURCE", "C# .NET", "REACT", "NEXT.JS", "TYPESCRIPT",
  "TAILWIND", "NODE.JS",
];

export default function Marcador() {
    const Loop = [...Itens, ...Itens, ...Itens]
    return (
        <div className="w-full border-4 border-black">
            <div className="hazard-stripes h-3" />
            <div className="overflow-hidden bg-black">
                <div className="flex animate-[marquee_60s_linear_infinite] whitespace-nowrap uppercase tracking-widest">
                    {Loop.map((item, i) => (
                        <span key={i} className="text-[18px] gap-2.5 font-bold text-white uppercase px-2 flex items-center py-1 bg-black">
                            <Star className="w-4 h-4 mr-1 fill-accent text-accent" />
                            {item}
                        </span>
                    ))}
                </div>
            </div>
            <div className="hazard-stripes h-3 w-full" />
            <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-250.333%); } }`}</style>
        </div>
    );
};