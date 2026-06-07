interface BottomCardProps{
    children: React.ReactNode
    addStyle?: string,
}


export default function BottomCard({children, addStyle}: BottomCardProps){
    return(
        <div className={`flex px-6 py-3 items-center gap-2 border-t-4 border-black ${addStyle}`}>
            {children}
        </div>
    );
}