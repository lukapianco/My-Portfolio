export default function BrutalLink({children, href, bgColor}: {children: React.ReactNode, href: string, bgColor: string}) {
    return (
        <a href={href} className={`text-base uppercase flex items-center gap-2 ${bgColor} px-4 py-3 border-4 border-black font-bold shadow-brutal-hover cursor-pointer hover:-translate-x-1 hover:-translate-y-1 transition-all active:translate-x-0.5 active:translate-y-0.5`}>
            {children}
        </a>
    );
};