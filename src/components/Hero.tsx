import { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter"

import HeroBackground from "./HeroBackground";

type Props = {};

const words = ["Welcome to my portfolio!", "I'm Pepe Salcedo", "FullStack_Dev"];

export default function Hero({ }: Props) {
    const [loopCount, setLoopCount] = useState(-1);
    const [prevDeleteStatus, setPrevDeleteStatus] = useState(true);
    const [text, count] = useTypewriter({
        words: words,
        loop: true,
        delaySpeed: 2000,
    });

    // Calculate the current word loop
    useEffect(() => {
        if (prevDeleteStatus !== count.isDelete && prevDeleteStatus) {
            if (loopCount === words.length - 1) {
                setLoopCount(0);
            } else {
                setLoopCount(prevCount => prevCount + 1);
            }
        }

        setPrevDeleteStatus(prevStatus => !prevStatus);
    }, [count.isDelete]);

    return (
        <section id="hero" className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden snap-center">
            <HeroBackground />
            <img
                src="/portfolio-front/profile_pic.jpg"
                alt="profile picture"
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
            />
            <div>
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">Software Developer</h2>
                <h1 className="flex justify-center text-3xl md:text-5xl lg:text-6xl font-semibold px-10">
                    {loopCount === 2 && <span>{"<"}</span>}
                    <span className={`${loopCount === 2 && "text-blue-300"}`}>{text}</span>
                    {loopCount === 2 && <span>{"/>"}</span>}
                    <Cursor cursorColor="#f43f5e" />
                </h1>
            </div>
            <div className="z-20 flex flex-row flex-wrap gap-5 justify-center">
                <a href="#about">
                    <button
                        className="px-6 py-2 border border-[#242424] rounded-full text-xs uppercase tracking-widest text-gray-500 transition-all hover:border-[#f43f5e]/40 hover:text-[#f43f5e]"
                    >
                        About
                    </button>
                </a>
                <a href="#experience">
                    <button
                        className="px-6 py-2 border border-[#242424] rounded-full text-xs uppercase tracking-widest text-gray-500 transition-all hover:border-[#f43f5e]/40 hover:text-[#f43f5e]"
                    >
                        Experience
                    </button>
                </a>
                <a href="#skills">
                    <button
                        className="px-6 py-2 border border-[#242424] rounded-full text-xs uppercase tracking-widest text-gray-500 transition-all hover:border-[#f43f5e]/40 hover:text-[#f43f5e]"
                    >
                        Skills
                    </button>
                </a>
                <a href="#contact">
                    <button
                        className="px-6 py-2 border border-[#242424] rounded-full text-xs uppercase tracking-widest text-gray-500 transition-all hover:border-[#f43f5e]/40 hover:text-[#f43f5e]"
                    >
                        Contact
                    </button>
                </a>
                <a href="/portfolio-front/blog/">
                    <button
                        className="px-6 py-2 border border-[#242424] rounded-full text-xs uppercase tracking-widest text-gray-500 transition-all hover:border-[#f43f5e]/40 hover:text-[#f43f5e]"
                    >
                        Blog
                    </button>
                </a>
            </div>
        </section>
    )
}
