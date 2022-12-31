import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};

export default function About({ }: Props) {
    const [text, _] = useTypewriter({
        words: ["creating", "developing", "designing"],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            id="about"
            className="snap-center h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="md:absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About me</h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                src="/portfolio-front/about_pic.jpg"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
            />

            <div className="flex flex-col items-center gap-10 md:px-10 mt-10 md:mt-0">
                <div className="space-y-10 px-0 md:px-10">
                    <h4 className="text-4xl font-semibold">Who am I?</h4>
                </div>
                <p>
                    Hi! I'm Pepe Salcedo and I am a fullstack web developer located in México. I started coding when I was about 11 years old with Ruby, but quickly switched
                    to JavaScript and eventually React, TypeScript and many other technologies. I have a passion for learning new tech and that's the reason why I'm currently
                    learning Rust and deepening my knowledge in the React and Node ecosystems. I am very keen on <span className="text-blue-300">{text}</span>{<Cursor cursorColor="#f43f5e" />}
                    apps and keep learning in the process :D.
                </p>
            </div>
        </motion.section>
    )
}
