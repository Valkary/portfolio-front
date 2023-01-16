import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "framer-motion";

type Props = {
    icon: JSX.Element;
    experience: string;
    name: string;
};

const start_values = {
    y: 0,
    opacity: 1
};

export default function Skill({ icon, experience, name }: Props) {
    const [hovered, setHovered] = useState(false);
    const nameControls = useAnimationControls();
    const experienceControls = useAnimationControls();
    const skillControls = useAnimationControls();

    useEffect(() => {
        if (hovered) {
            nameControls.start(start_values);
            experienceControls.start(start_values);
            skillControls.start({
                scale: [0.9, 1.3, 1.1],
            });
        } else {
            nameControls.start({
                y: '300%',
                opacity: 0
            });

            experienceControls.start({
                y: '-300%',
                opacity: 0
            });

            skillControls.start({
                scale: 1,
            });
        }
    }, [hovered])

    return (
        <motion.div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            animate={skillControls}
            className={`
                bg-[rgba(255,255,255,0.02)] cursor-pointer flex justify-center items-center relative h-[150px] w-[150px]
                md:w-64 md:rounded-lg md:opacity-20 md:hover:opacity-100 transition-opacity duration-300
                rounded-full m-0 p-0
            `}
        >
            <motion.p
                initial={{...start_values, opacity: 0}}
                transition={{ duration: 0.3 }}
                animate={nameControls}
                className="absolute top-0 left-0 hidden md:inline-block ml-2 mt-2 text-sm tracking-wider text-gray-500"
            >
                {name}
            </motion.p>
            {icon}
            <motion.p
                initial={{...start_values, opacity: 0}}
                transition={{ duration: 0.3 }}
                animate={experienceControls}
                className="absolute bottom-0 right-0 hidden md:inline-block mr-2 mb-2 text-sm uppercase tracking-wider text-gray-500"
            >
                {experience}
            </motion.p>
        </motion.div>
    );
}


