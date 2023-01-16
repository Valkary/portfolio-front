import { motion } from "framer-motion";

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
        <motion.article
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="
                w-full h-full md:w-2/3 xl:w-[45%] overflow-y-hidden flex flex-col items-center flex-shrink-0 mt-5 
                snap-center bg-[#292929] p-10 rounded-lg gap-5
                "
        >
            <div className="w-full h-1/6 flex flex-row justify-center mb-5">
                <img
                    className="h-full rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                    loading="lazy"
                    alt={company}
                    src={company_logo}
                />
            </div>

            <div className="flex flex-col items-start w-full h-1/3">
                <h4 className="text-3xl font-light">{position}</h4>
                <p className="font-bold text-xl mt-1 text-gray-500">{acronym}</p>

                <div className="flex flex-row gap-3 justify-start my-2">
                    {tech.map((element, idx) =>
                        <div key={idx}>
                            {element}
                        </div>
                    )}
                </div>
                <p className="uppercase py-5 text-gray-500">{date}</p>
            </div>

            <div className="h-1/2 overflow-y-scroll">
                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {activities.map((act, idx) => <li key={idx}>{act}</li>)}
                </ul>
            </div>
        </motion.article>
    );
}
