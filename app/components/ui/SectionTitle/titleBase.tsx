interface TitleBaseProps{
    children: React.ReactNode
}


export default function TitleBase({children}:TitleBaseProps){
    return(
        <h1 
            className="flex  gap-3 sm:gap-3.5 md:gap-4.5"
        >
            {children}
        </h1>
    );
}