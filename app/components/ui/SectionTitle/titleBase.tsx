interface TitleBaseProps{
    children: React.ReactNode
}


export default function TitleBase({children}:TitleBaseProps){
    return(
        <h1 
            className="flex gap-4.5"
        >
            {children}
        </h1>
    );
}