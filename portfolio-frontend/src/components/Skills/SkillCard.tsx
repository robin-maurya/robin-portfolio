type SkillCardProps = {
    title: string;
    skills: string[];
};

const SkillCard = ({ title, skills }: SkillCardProps) => {
    return (
        <article className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-xl hover:shadow-black/20">
            <h3 className="text-xl font-semibold text-white">
                {title}
            </h3>

            <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="rounded-full border border-gray-700 bg-gray-950/50 px-3 py-1.5 text-sm text-gray-300 transition duration-200 hover:border-blue-500/50 hover:text-white"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </article>
    );
};

export default SkillCard;