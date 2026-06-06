import { motion } from "framer-motion";

export default function Tags({children, addStyle}: {children: React.ReactNode, addStyle: string}) {
    return (
        <motion.span 
        /* initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }} */
        className={`w-fit text-xs font-bold flex px-1.5 py-2 items-center gap-2 border-3 border-black shadow-brutal-small tracking-wider ${addStyle}`}>
            {children}
        </motion.span>
    );
};