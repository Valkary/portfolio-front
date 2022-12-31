import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <header className="sticky top-0 p-5 flex flex-row items-start justify-between w-full max-w-7xl mx-auto z-20 xl:justify-center-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.7,
                }}
                className="flex flex-row items-center"
            >
                <SocialIcon url="https://github.com/Valkary" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://twitter.com/ElPepotles" fgColor="gray" bgColor="transparent" />
                <SocialIcon url="https://www.instagram.com/pepe.salcedouribe/" fgColor="gray" bgColor="transparent" />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 0.7,
                }}
                className="flex flex-row items-center text-gray-300 cursor-pointer"
            >
                <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch!</p>
            </motion.div>
        </header>
    )
}
