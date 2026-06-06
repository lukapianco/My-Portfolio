export default function StrongLine({addStyle}: {addStyle?: string}) {
    return (
        <div className={`w-full h-1 bg-black ${addStyle}`}/>
    );
};