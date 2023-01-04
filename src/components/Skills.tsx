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
    { icon: <ReactOriginalIcon size={size} />, experience: "2 years" },
    { icon: <MysqlPlainIcon size={size} />, experience: "4 years" },
    { icon: <NodejsPlainIcon size={size} />, experience: "3 years" },
    { icon: <TypescriptPlainIcon size={size} />, experience: "1.5 years" },
    { icon: <TailwindcssPlainIcon size={size} />, experience: "1.5 years" },
    { icon: <PhpPlainIcon size={size} />, experience: "1 year" },
    { icon: <JavascriptPlainIcon size={size} />, experience: "5 years" },
    { icon: <Html5PlainIcon size={size} />, experience: "5 years" },
    { icon: <Css3PlainIcon size={size} />, experience: "5 years" },
    { icon: <VscodePlainIcon size={size} />, experience: "4 years" },
    { icon: <NextjsOriginalWordmarkIcon size={size} color="white" />, experience: "2 years" },
    { icon: <RustPlainIcon size={size} color={"#CC5500"} />, experience: "> 1 year" }
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
