import { motion } from "framer-motion";
import { GithubOriginalIcon } from "react-devicons";

type Props = {
    cardContent: {
        company: string;
        acronym: string;
        company_logo: string;
        position: string;
        date: string;
        tech: JSX.Element[];
        activities: string[];
    }
};

export default function ExperienceCard({ cardContent }: Props) {
    const { company, acronym, company_logo, position, date, tech, activities } = cardContent;

    return (
        <div className="md:container">
            <div className="border bg-cyan-900 bg-opacity-25 rounded-lg p-6 text-gray-100 relative z-10">
                <div className="flex flex-wrap items-center">
                    <div className="flex w-full h-48 md:h-64 lg:h-72 relative">                        
                        

                    </div>
                    <div className="w-full pt-8 flex flex-col justify-between">
                        <div>
                            <h2 className="font-bold text-2xl uppercase tracking-wide">{position}</h2>
                            <p className="uppercase text-gray-500">{date}</p>
                            <div className="flex flex-wrap text-center pt-4 mb-2 gap-2">
                                {tech.map((element, idx) =>
                                    <div key={idx}>
                                        {element}
                                    </div>
                                )}
                            </div>

                            <p className="text-xs leading-relaxed text-gray-50">
                                This revolutionary
                                email design kit is going to transform the way in which you send
                                modern emails.
                            </p>

                            <ul className="text-xs mt-4 list-disc list-inside text-gray-50 leading-relaxed">
                                <li>Responsive</li>
                                <li> Mobile-friendly</li>
                                <li> Media queries</li>
                                <li> 20MB of JavaScript</li>
                            </ul>
                        </div>

                        <div className="w-full flex justify-center">
                            <a
                                className="w-1/2 h-full flex flex-row justify-center items-center text-xl py-3 rounded-md bg-red-500"
                                href="#"
                            >
                                Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
