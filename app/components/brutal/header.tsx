import Link from "next/link";
import { Download } from "lucide-react";
import BrutalButton from "../ui/BrutalButton";

const Links = [
    {label: "Home", href: "/"},
    {label: "Sobre", href: "/"},
    {label: "Formação", href: "/"},
    {label: "Projetos", href: "/"},
    {label: "Contato", href: "/"},
]

export default function Header() {
    return (
        <header className="font-mono justify-between bg-bg sticky top-4 mx-8 flex px-6 py-3 border-4 border-black shadow-brutal tracking-widest">
            <Link href="/" className="py-2.5 px-4 bg-black flex items-center gap-2 text-sm font-semibold text-accent font-mono uppercase">
                <span className="block w-2 h-2 bg-accent"></span>
                luka.dev
            </Link>
            <nav className="flex items-center gap-4">
                {Links.map((link) => (
                    <button key={link.href} className="uppercase text-sm font-bold text-ink hover:text-accent transition-colors cursor-pointer">
                        {link.label}
                    </button>
                ))}
            </nav>
            <BrutalButton>
                <Download className="w-4 h-4" strokeWidth={3}/>
                Baixar CV
            </BrutalButton>
        </header>
    );
}