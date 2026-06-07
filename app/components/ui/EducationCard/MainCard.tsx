interface MainCardProps{
    children: React.ReactNode
    addStyle?: string,
}


export default function MainCard({children, addStyle}: MainCardProps){
    return(
        <div className={`flex flex-col gap-4 p-6 ${addStyle}`}>
            {children}
        </div>
    );
}