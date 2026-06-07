interface TopCardProps{
    CardIcon: React.ReactNode
    EducationDate: string
}


export default function TopCard({CardIcon, EducationDate}: TopCardProps){
    return(
        <div className="flex items-center justify-between">
            <span className="w-12 h-12 bg-accent flex items-center justify-center border-4">
                {CardIcon}
            </span>
            <span className="text-[11px] font-bold py-1.5 px-3 border-4 border-black bg-accent">
                &#91;{EducationDate}&#93;
            </span>
        </div>
    );
}