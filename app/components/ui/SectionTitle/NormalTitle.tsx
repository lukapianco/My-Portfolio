interface NormalTitleProps{
    children: React.ReactNode
}


export default function NormalTitle({children}:NormalTitleProps){
    return(
        <span 
            className="text-3xl min-[490px]:text-4xl sm:text-5xl md:text-7xl font-bold font-display"
        >
            {children}
        </span>
    );
}