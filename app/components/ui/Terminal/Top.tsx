interface TerminalProps{
    TerminalName: string,
    addStyle?: string
}

export default function Top({TerminalName, addStyle}:TerminalProps) {
    return (
        <div className={`px-4 w-full h-9 flex items-center bg-[#1a1a1a] ${addStyle}`}>
            <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#ff5f56] border border-black" />
                <span className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black" />
                <span className="w-3 h-3 rounded-full bg-[#27c93f] border border-black" />
            </div>
            <span className="text-[#bbb] text-[11px]">
                    {TerminalName}
            </span>
            <span className="w-5"></span>
        </div>  
    );
};