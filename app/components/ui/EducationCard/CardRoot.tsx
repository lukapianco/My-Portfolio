import { motion } from "framer-motion";
interface CardRootProps{
    children: React.ReactNode
    addStyle?: string,
}


export default function CardRoot({children, addStyle}: CardRootProps){
    return(
        <motion.article 
                initial={{y: -40, x: -10,opacity: 0}}
                whileInView={{y: 0, x: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`border-4 border-black border-t-7 border-t-accent shadow-brutal-lg ${addStyle ? addStyle : ""}`}
            >
            {children}
        </motion.article>
    );
}