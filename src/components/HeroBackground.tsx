import { motion } from "framer-motion";

type Props = {}

export default function HeroBackground({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.3, 0.4, 0.8, 0.1, 1.0],
            }}
            transition={{
                duration: 2.5
            }}
            className="relative flex justify-center items-center"
        >
            <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px] animate-ping mt-52" />
            <div className="absolute border border-[#333333] rounded-full h-[300px] w-[300px] animate-ping mt-52" />
            <div className="absolute border border-[#333333] rounded-full h-[425px] w-[425px] animate-ping mt-52" />
            <div className="absolute border border-[#f43f5e] rounded-full h-[550px] w-[550px] animate-pulse mt-52" />
            <div className="absolute border border-[#333333] rounded-full h-[625px] w-[625px] animate-ping mt-52" />
        </motion.div>
    );
}
