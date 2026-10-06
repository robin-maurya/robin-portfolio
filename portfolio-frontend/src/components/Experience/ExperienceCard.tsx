
type ExperienceCardProps = {
    company: string;
    role: string;
    duration: string;
    location: string;
    description: string[];
    current?: boolean;
};

const ExperienceCard = ({
    company,
    role,
    duration,
    location,
    description,
    current = false,
}: ExperienceCardProps) => {
    return (
        <article className="group relative md:pl-14">
            {/* Timeline Dot */}
            <div className="absolute left-[7px] top-8 hidden md:block">
                <div
                    className={`h-4 w-4 rounded-full border-2 border-gray-950 ${
                        current
                            ? "bg-blue-500 shadow-lg shadow-blue-500/40"
                            : "bg-gray-600"
                    }`}
                />
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-gray-900/70 hover:shadow-xl hover:shadow-blue-950/20 md:p-7">
                {/* Header */}
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                        <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-xl font-semibold text-white md:text-2xl">
                                {role}
                            </h3>

                            {current && (
                                <span className="rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400">
                                    Current
                                </span>
                            )}
                        </div>

                        <p className="mt-2 text-base font-medium text-blue-500">
                            {company}
                        </p>
                    </div>

                    <div className="text-sm text-gray-500 md:text-right">
                        <p className="font-medium text-gray-400">
                            {duration}
                        </p>

                        <p className="mt-1">
                            {location}
                        </p>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-800" />

                {/* Responsibilities */}
                <ul className="space-y-4">
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
