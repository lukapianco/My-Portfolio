interface NormalTitleProps{
    children: React.ReactNode
}


export default function NormalTitle({children}:NormalTitleProps){
    return(
        <span 
            className="text-7xl font-bold font-display"
        >
            {children}
        </span>
    );
}