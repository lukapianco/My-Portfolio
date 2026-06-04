export default function BrutalButton({children}: {children: React.ReactNode}) {
    return (
        <button className="text-sm uppercase flex items-center gap-2 bg-accent px-4 border-4 border-black font-bold shadow-brutal-sm cursor-pointer hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all active:translate-x-0.5 active:translate-y-0.5">
            {children}
        </button>
    );
};