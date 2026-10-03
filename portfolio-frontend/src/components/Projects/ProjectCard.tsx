type ProjectCardProps = {
    title: string;
    description: string;
    frontend: string[];
    backend: string[];
    database: string[];
    githubUrl?: string;
    liveUrl?: string;
};

const ProjectCard = ({
    title,
    description,
    frontend,
    backend,
    database,
    githubUrl,
    liveUrl,
}: ProjectCardProps) => {
    return (
        <article className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-700">
            <h3 className="text-2xl font-semibold text-white">
                {title}
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
                {description}
            </p>

            <div className="mt-6 space-y-5">
                <div>
                    <p className="mb-2 text-sm font-medium text-blue-500">
                        Frontend
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {frontend.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="mb-2 text-sm font-medium text-blue-500">
                        Backend
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {backend.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>

                <div>
                    <p className="mb-2 text-sm font-medium text-blue-500">
                        Database
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {database.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full bg-gray-800 px-3 py-1 text-sm text-gray-300"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {(githubUrl || liveUrl) && (
                <div className="mt-8 flex gap-4">
                    {githubUrl && (
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg border border-gray-700 px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
                        >
                            GitHub
                        </a>
                    )}

                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            )}
        </article>
    );
};

export default ProjectCard;