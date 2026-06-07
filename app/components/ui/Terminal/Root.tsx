interface TerminalProps{
    children: React.ReactNode
}

export default function Root({children}:TerminalProps) {
    return (
        <div className="w-full divide-y-4  flex flex-col gap-1 text-4xl bg-terminal uppercase border-4 border-black shadow-brutal">
            {children}
        </div>
    );
};