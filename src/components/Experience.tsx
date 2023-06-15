import { motion } from "framer-motion";
import { NodejsPlainIcon, ReactOriginalIcon, VimPlainIcon, TypescriptPlainIcon, MysqlPlainIcon, PhpPlainIcon, JavascriptPlainIcon, VscodePlainIcon, ArduinoPlainIcon, JqueryPlainIcon } from "react-devicons";

import ExperienceCard from "./ExperienceCard";
import TauriLogo from "./TauriLogo";
import AppSheetLogo from "./AppSheetLogo";
import GoogleSheetsLogo from "./GoogleSheetsLogo";

type Props = {};

const cardInformation = [
    {
        company: "Critical Cares",
        acronym: "CritCares",
        company_logo: "",
        position: "Fullstack app developer",
        date: "Nov 2022 - present",
        tech: [
            <TypescriptPlainIcon size={40} />,
            <ReactOriginalIcon size={40} />,
            <NodejsPlainIcon size={40} />,
            <VimPlainIcon size={40} />,
            <MysqlPlainIcon size={40} />,
        ],
        activities: [
            "Designed the database using mysql and the prisma ORM connection with the frontend for type-safe queries",
            "Built a medical app for keeping patients records with React Native",
            "Developed a web server with NodeJs with the Express framework"
        ]
    },
    {
        company: "Bobinator",
        acronym: "Bobinator",
        company_logo: "",
        position: "Fullstack web/desktop developer",
        date: "Dec 2021 - Aug 2022",
        tech: [
            <TypescriptPlainIcon size={40} />,
            <ReactOriginalIcon size={40} />,
            <MysqlPlainIcon size={40} />,
            <TauriLogo size={40} />,
            <ArduinoPlainIcon size={40} />,
        ],
        activities: [
            "Developed a production control system REST API and WebSockets with Express",
            "Built a desktop app using Tauri and React to visualize the production",
            "Coded an arduino Wifi Module connection with the web socket in order to have real time updates of the mini-factory"
        ]
    },
    {
        company: "AuralMx",
        acronym: "AuralMx",
        company_logo: "/portfolio-front/aural_logo.png",
        position: "Fullstack web developer",
        date: "Aug 2020 - Aug 2021",
        tech: [
            <JavascriptPlainIcon size={40} />,
            <PhpPlainIcon size={40} />,
            <MysqlPlainIcon size={40} />,
            <VscodePlainIcon size={40} />,
            <JqueryPlainIcon size={40} />,
        ],
        activities: [
            "Coded a web app with a php backend REST API",
            "Developed interactivity for the production control system in Javascript using the JQuery library",
            "Used MySQL as a database for the entire project"
        ]
    },
    {
        company: "Transformadora de Hules y Plásticos",
        acronym: "THP",
        company_logo: "/portfolio-front/thp_logo.png",
        position: "App Developer",
        date: "Dec 2022 - Present",
        tech: [
            <AppSheetLogo size={40} />,
            <GoogleSheetsLogo size={40} />
        ],
        activities: [
            "Developed a production control system for a rubber soles manufacturing company",
            "Used appsheet for the client-side application to build the views and forms related to production",
            "Used google sheets as the database"
        ]
    },
];

export default function Experience({ }: Props) {
    return (
        <section id="experience" className="snap-center min-h-screen max-w-7xl mx-[10%] flex flex-col">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="w-full h-full flex overflow-x-hidden flex-col items-center"
            >
                <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl mt-20 mb-12">Experience</h3>

                <div
                    className="
                        w-full h-full max-w-7xl
                        md:grid md:grid-cols-2 md:gap-5
                    "
                >
                    {cardInformation.map((card, idx) => <ExperienceCard cardContent={card} key={idx} />)}
                </div>
            </motion.div>
        </section>
    );
}
