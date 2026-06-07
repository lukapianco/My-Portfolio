interface CardRootProps{
    children: React.ReactNode
    addStyle?: string,
}


export default function CardRoot({children, addStyle}: CardRootProps){
    return(
        <article className={`border-4 border-black border-t-7 border-t-accent shadow-brutal-lg ${addStyle ? addStyle : ""}`}>
            {children}
        </article>
    );
}