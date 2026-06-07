import { motion } from "framer-motion";

interface TagsProps{
    children?: React.ReactNode
    addStyle?: string,
    StylizedBorder: boolean
}


export default function Tags({children, addStyle, StylizedBorder}: TagsProps) {
    return (
        <motion.span 
        /* initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} */
        className={`w-fit text-xs font-bold flex px-1.5 py-2 items-center gap-2 border-3 border-black ${StylizedBorder ? "" : "shadow-brutal-small"} tracking-wider ${addStyle}`}>
            {children}
        </motion.span>
    );
};