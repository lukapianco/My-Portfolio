interface TitleBaseProps{
    children: React.ReactNode
    addStyle?: string,
}


export default function TitleBase({children, addStyle}:TitleBaseProps){
    return(
        <h1 
            className={`flex  gap-3 sm:gap-3.5 md:gap-4.5 ${addStyle}`}
        >
            {children}
        </h1>
    );
}