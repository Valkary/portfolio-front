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
        <div className="md:container my-auto md:my-0">
            <div className="bg-opacity-25 rounded-lg p-6 text-gray-100 relative z-10">
                <div className="flex flex-wrap items-center">
                    <div className="flex w-full h-32">                        
                        

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
                                className="w-1/2 h-full mt-5 flex flex-row justify-center items-center text-xl py-3 rounded-md border-2 bg-transparent border-gray-600 text-white"
                                href="#"
                            >
                                <GithubOriginalIcon color="gray"size={30} />
                                <p className="mx-5">
                                    {"<"}
                                    <span className="text-blue-300">Code</span>
                                    {"/>"}
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
