interface SectionTitleProps{
    children: React.ReactNode
}

export default function SectionTitle({children}:SectionTitleProps){
    return(
        <h1
            className=""
        >
            {children}
        </h1>
    );
}