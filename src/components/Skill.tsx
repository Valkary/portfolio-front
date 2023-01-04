import { motion } from "framer-motion";

type Props = {
    icon: JSX.Element;
    experience: string;
};

export default function Skill({ icon, experience }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0.1
            }}
            whileHover={{
                scale: 1.1,
                opacity: 1
            }}
            transition={{ duration: 0.2 }}
            className="md:w-60 md:h-40 w-35 h-20 rounded-lg bg-[rgba(255,255,255,0.02)] border border-[rgb(255,255,255)] cursor-pointer flex justify-center items-center card"
        >
            {icon}
            <p className="absolute bottom-0 right-0 mr-2 mb-2 text-sm uppercase tracking-wider text-gray-500">{experience}</p>
        </motion.div>
    );
}
