type ExperienceCardProps = {
    company: string;
    role: string;
    duration: string;
    location: string;
    description: string[];
};

const ExperienceCard = ({
    company,
    role,
    duration,
    location,
    description,
}: ExperienceCardProps) => {
    return (
        <article className="relative md:pl-12">
            <div className="absolute left-2.5 top-6 hidden h-3 w-3 rounded-full bg-blue-500 ring-4 ring-gray-950 md:block" />

            <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-700">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                    <div>
                        <h3 className="text-xl font-semibold text-white">
                            {role}
                        </h3>

                        <p className="mt-1 text-base font-medium text-blue-500">
                            {company}
                        </p>
                    </div>

                    <div className="text-sm text-gray-500 md:text-right">
                        <p>{duration}</p>
                        <p className="mt-1">{location}</p>
                    </div>
                </div>

                <ul className="mt-6 space-y-3">
                    {description.map((item) => (
                        <li
                            key={item}
                            className="flex gap-3 text-sm leading-7 text-gray-400 md:text-base"
                        >
                            <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />

                            <span>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;