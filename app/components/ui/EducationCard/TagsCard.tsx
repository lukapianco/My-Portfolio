import Tags from "../tags";

interface TagsCardProps{
    TagList: Array<string>
}


export default function TagsCard({TagList}: TagsCardProps){
    return(
        <div className="flex flex-wrap gap-2 uppercase">
            {TagList.map((i, a) => 
                <Tags key={a} StylizedBorder={true} addStyle="border-[1px] text-[10px] px-2 py-[2px]">
                    {i}
                </Tags>
            )}
        </div>
    );
}