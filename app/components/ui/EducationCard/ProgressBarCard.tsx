import { motion } from "framer-motion";

interface ProgressBarCardProps{
    SubTitle: string,
    Progress: number
}


export default function ProgressBarCard({SubTitle, Progress}: ProgressBarCardProps){
    return(
        <div className="flex flex-col gap-2">
                    <div className="uppercase w-full flex items-center justify-between text-[10px] font-bold tracking-[2px]">
                        <span >PROGRESSO</span>
                        <span className="text-accent-dark">{SubTitle}</span>
                    </div>
                    <div className="flex-1 border border-black">
                        <motion.div
                            initial={{width: 0}}
                            whileInView={{width: Progress + '%'}}
                            viewport={{once: true}}
                            transition={{
                                duration: 0.9,
                                ease: 'easeOut'
                            }}
                            className="h-2 bg-[#7fa653]"
                        ></motion.div>
                    </div>
                </div>
    );
}