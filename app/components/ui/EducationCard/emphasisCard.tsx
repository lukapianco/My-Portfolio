interface EmphasisCardProps{
    children: React.ReactNode
    addStyle?: string,
}


export default function EmphasisCard({children}: EmphasisCardProps){
    return(
        <div className="p-4 bg-accent border-4 border-black flex flex-col gap-2">
            <p className="text-[10px] font-bold tracking-[2px]">&#47;&#47; DESTAQUE</p>
            <p className="font-display text-[13px]">
                {children}
            </p>
        </div>
    );
}