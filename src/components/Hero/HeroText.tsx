import { useEffect, useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter"

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
        <div>
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[10px]">Software Developer</h2>
            <h1 className="flex justify-center text-3xl md:text-5xl lg:text-6xl font-semibold px-10">
                {loopCount === 2 && <span>{"<"}</span>}
                <span className={`${loopCount === 2 && "text-blue-300"}`}>{text}</span>
                {loopCount === 2 && <span>{"/>"}</span>}
                <Cursor cursorColor="#f43f5e" />
            </h1>
        </div>
    )
}
