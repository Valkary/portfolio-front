import {
    ReactOriginalIcon,
    MysqlPlainIcon,
    NodejsPlainIcon,
    TypescriptPlainIcon,
    TailwindcssPlainIcon,
    PhpPlainIcon,
    JavascriptPlainIcon,
    Html5PlainIcon,
    Css3PlainIcon,
    VscodePlainIcon,
    RustPlainIcon,
    NextjsOriginalWordmarkIcon
} from "react-devicons";

import Skill from "./Skill";

type Props = {};

const size = 80;

const skills = [
    { icon: <ReactOriginalIcon size={size} />, experience: "" },
    { icon: <MysqlPlainIcon size={size} />, experience: "" },
    { icon: <NodejsPlainIcon size={size} />, experience: "" },
    { icon: <TypescriptPlainIcon size={size} />, experience: "" },
    { icon: <TailwindcssPlainIcon size={size} />, experience: "" },
    { icon: <PhpPlainIcon size={size} />, experience: "" },
    { icon: <JavascriptPlainIcon size={size} />, experience: "" },
    { icon: <Html5PlainIcon size={size} />, experience: "" },
    { icon: <Css3PlainIcon size={size} />, experience: "" },
    { icon: <VscodePlainIcon size={size} />, experience: "" },
    { icon: <NextjsOriginalWordmarkIcon size={size} color="white" />, experience: "" },
    { icon: <RustPlainIcon size={size} color={"#CC5500"} />, experience: "" }
];

export default function Skills({ }: Props) {
    return (
        <section id="skills" className="w-full h-screen snap-mandatory snap-center flex flex-col items-center">
            <h3 className="mt-24 mb-6 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
            <div id="cards" className="grid grid-cols-3 justify-center gap-2 m-auto">
                {skills.map((skill, idx) => <Skill icon={skill.icon} experience={skill.experience} key={idx} />)}
            </div>
        </section>
    );
}
