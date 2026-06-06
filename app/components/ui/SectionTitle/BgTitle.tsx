interface BgTitleProps{
    children: React.ReactNode
}

export default function BgTitle({children}:BgTitleProps){
    return(
        <span 
            className="px-4 bg-accent text-7xl font-bold font-display border-4 border-black shadow-brutal"
        >
            {children}
        </span>
    );
}