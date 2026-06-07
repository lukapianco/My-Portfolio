interface TerminalProps{
    children: React.ReactNode,
    addStyle?: string
}

export default function Console({children, addStyle}:TerminalProps) {
    return (
        <div className={`min-h-110 w-full leading-[0.55] ${addStyle}`}>
            {children}        
        </div>
    );
};