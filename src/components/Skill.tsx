import { useState } from "react";

type Props = {
    icon: JSX.Element;
    experience: string;
    name: string;
};

export default function Skill({ icon, experience, name }: Props) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className={`
                bg-[rgba(255,255,255,0.02)] cursor-pointer flex justify-center items-center relative h-[150px] w-[150px]
                md:w-64 md:rounded-lg md:opacity-20 md:hover:opacity-100 transition-all duration-300 ${hovered && "md:scale-110"} 
                rounded-full m-0 p-0 h-full
            `}
        >
            <p
                className={`ease-in-out hidden md:inline-block absolute top-0 left-0 ml-2 mt-2 text-sm tracking-wider text-gray-500 md:opacity-0 transition-all duration-300 ${hovered && "md:opacity-100"}`}
            >{name}</p>
            {icon}
            <p
                className={`ease-in-out hidden md:inline-block absolute bottom-0 right-0 mr-2 mb-2 text-sm uppercase tracking-wider text-gray-500 md:opacity-0 transition-all duration-300 ${hovered && "md:opacity-100"}`}
            >{experience}</p>
        </div>
    );
}


