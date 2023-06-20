import { motion } from "framer-motion";
import { NodejsPlainIcon, ReactOriginalIcon, TypescriptPlainIcon, MysqlPlainIcon, PhpPlainIcon, JavascriptPlainIcon, VscodePlainIcon, ArduinoPlainIcon, JqueryPlainIcon, PythonOriginalIcon } from "react-devicons";

import ExperienceCard from "./ExperienceCard";
import TauriLogo from "./Icons/TauriLogo";
import AppSheetLogo from "./Icons/AppSheetLogo";
import GoogleSheetsLogo from "./Icons/GoogleSheetsLogo";
import SolidJsIcon from "./Icons/SolidJS";
import AstroLogo from "./Icons/AstroLogo";

type Props = {};

const cardInformation = (size: number) => ([
    {
        company: "Transformadora de Hules y Plásticos",
        acronym: "THP",
        company_logo: "/portfolio-front/thp_logo.png",
        position: "FullStack Developer",
        date: "Jan 2022 - Present",
        tech: [
            <AstroLogo size={size} />,
            <PythonOriginalIcon size={size} />,
            <ReactOriginalIcon size={size} />,
            <SolidJsIcon size={size} />,
            <AppSheetLogo size={size} />,
            <GoogleSheetsLogo size={size} />,
        ],
        activities: "Developed a production control system for a rubber soles manufacturing company Used appsheet for the client-side application to build the views and forms related to production Used google sheets as the database"
    },
    {
        company: "Bobinator",
        acronym: "Bobinator",
        company_logo: "/BobinatorLogo.webp",
        position: "Fullstack web/desktop developer",
        date: "Dec 2021 - Aug 2022",
        tech: [
            <TypescriptPlainIcon size={size} />,
            <NodejsPlainIcon size={size} />,
            <ReactOriginalIcon size={size} />,
            <MysqlPlainIcon size={size} />,
            <TauriLogo size={size} />,
            <ArduinoPlainIcon size={size} />,
        ],
        activities: "Built an real time production control system for a mini factory. Tauri was used to distribute the desktop app to various operating systems. React, Tailwind and Mantine were used for the frontend while ExpressJS, TypeScript, MySQL and WebSockets were implemented for the backend"
    },
    {
        company: "AuralMx",
        acronym: "AuralMx",
        company_logo: "/portfolio-front/aural_logo.png",
        position: "Fullstack web developer",
        date: "Aug 2020 - Aug 2021",
        tech: [
            <JavascriptPlainIcon size={size} />,
            <PhpPlainIcon size={size} />,
            <MysqlPlainIcon size={size} />,
            <VscodePlainIcon size={size} />,
            <JqueryPlainIcon size={size} />,
        ],
        activities: "Coded a web app with a php backend REST API Developed interactivity for the production control system in Javascript using the JQuery library Used MySQL as a database for the entire project"
    },
]);

export default function Experience({ }: Props) {
    return (
        <motion.section
            id="experience"
            className="snap-center md:h-screen overflow-x-hidden flex flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
        >
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About me</h3>

            <div className="w-screen flex flex-col items-center md:flex-row space-x-5 overflow-x-hidden p-10 snap-both snap-mandatory">
                {cardInformation(35).map((card, idx) => <ExperienceCard cardContent={card} key={idx} />)}
            </div>
        </motion.section>
    );
}
