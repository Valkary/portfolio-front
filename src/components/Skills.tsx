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
    { icon: <ReactOriginalIcon size={size} />, experience: "2 years", name: "React" },
    { icon: <MysqlPlainIcon size={size} />, experience: "4 years", name: "MySQL" },
    { icon: <NodejsPlainIcon size={size} />, experience: "3 years", name: "NodeJs" },
    { icon: <TypescriptPlainIcon size={size} />, experience: "1.5 years", name: "TypeScript" },
    { icon: <TailwindcssPlainIcon size={size} />, experience: "1.5 years", name: "TailwindCSS" },
    { icon: <PhpPlainIcon size={size} />, experience: "1 year", name: "PHP" },
    { icon: <JavascriptPlainIcon size={size} />, experience: "5 years", name: "JavaScript" },
    { icon: <Html5PlainIcon size={size} />, experience: "5 years", name: "HTML5" },
    { icon: <Css3PlainIcon size={size} />, experience: "5 years", name: "CSS3" },
    { icon: <VscodePlainIcon size={size} />, experience: "4 years", name: "Visual Studio Code" },
    { icon: <NextjsOriginalWordmarkIcon size={size} color="white" />, experience: "2 years", name: "NextJs" },
    { icon: <RustPlainIcon size={size} color={"#CC5500"} />, experience: "> 1 year", name: "Rust" }
];

export default function Skills({ }: Props) {
    return (
        <section id="skills" className="w-full h-screen snap-mandatory snap-center flex flex-col items-center">
            <h3 className="md:mb-0 mb-6 mt-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>
            <h3 className="mb-6 uppercase tracking-wide text-gray-600 text-md hidden md:inline-block">Hover over the skills to view the experience</h3>
            <div id="cards" className="grid md:grid-cols-3 grid-cols-2 justify-center m-auto gap-y-2 gap-x-6 md:gap-x-2">
                {skills.map((skill, idx) => <Skill icon={skill.icon} experience={skill.experience} name={skill.name} key={idx} />)}
            </div>
        </section>
    );
}
