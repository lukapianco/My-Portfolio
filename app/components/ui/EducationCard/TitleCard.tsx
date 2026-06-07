interface TitleCardProps{
    Title: string
    SubTitle: string
}


export default function TitleCard({Title, SubTitle}: TitleCardProps){
    return(
        <div className="font-display flex flex-col gap-1">
            <h4 className="text-2xl font-bold">{Title}</h4>
            <p className="text-sm">{SubTitle}</p>
        </div>
    );
}