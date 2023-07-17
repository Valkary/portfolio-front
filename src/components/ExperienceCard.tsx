type Props = {
    cardContent: {
        company: string;
        acronym: string;
        company_logo: string;
        position: string;
        date: string;
        tech: JSX.Element[];
        activities: string;
    }
};

export default function ExperienceCard({ cardContent }: Props) {
    const { company, acronym, company_logo, position, date, tech, activities } = cardContent;

    return (
        <article className="h-screen md:h-full rounded-lg space-y-7 flex-shrink-0 flex flex-col items-center justify-center w-full md:w-[600px] xl:w-[900px] snap-center">
            <img
                className="w-fit h-16 md:h-24 xl:h-[150px] object-cover object-center my-2"
                src={company_logo}
                alt={acronym}
                loading="lazy"
            />

            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light uppercase">{position}</h4>
                <p className="font-bold text-2xl mt-1 uppercase">{company}</p>
                <div className="flex flex-row gap-2 items-center">
                    {tech.map((t, id) => <div className="h-full flex items-center" key={id}>{t}</div>)}
                </div>
                <p className="text-lg">{activities}</p>
                <p className="font-bold text-lg tracking-wider text-gray-500 uppercase">{date}</p>
            </div>
        </article>
    );
}
