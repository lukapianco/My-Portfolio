export default function DashedLine({addStyle}: {addStyle?: string}) {
    return (
        <div className={`w-full h-0.75  border-3 border-black border-dashed ${addStyle}`}/>
    );
};