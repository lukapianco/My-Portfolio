export default function BgWithBorder({addStyle}: {addStyle?: string}) {
    return (
        <div className={`w-full h-2 bg-accent border-2 border-black ${addStyle}`}/>
    );
};