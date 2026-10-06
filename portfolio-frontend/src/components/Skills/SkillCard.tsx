
import { IconType } from "react-icons";

type Skill = {
    name: string;
    icon: IconType;
    color: string;
};

type SkillCardProps = {
    title: string;
    description: string;
    skills: Skill[];
};

const SkillCard = ({
    title,
    description,
    skills,
}: SkillCardProps) => {
    return (
        <article className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-gray-900/70 hover:shadow-xl hover:shadow-blue-950/20">
            {/* Heading */}
            <div>
                <h3 className="text-xl font-semibold text-white">
                    {title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                    {description}
                </p>
            </div>

            {/* Skills */}
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {skills.map(({ name, icon: Icon, color }) => (
                    <div
                        key={name}
                        className="group/skill flex items-center gap-2.5 rounded-xl border border-gray-800 bg-gray-950/50 px-3 py-3 transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:bg-gray-800/70"
                    >
                        <Icon
                            className={`shrink-0 text-xl ${color} transition duration-300 group-hover/skill:scale-110`}
                        />

                        <span className="text-sm text-gray-300 transition group-hover/skill:text-white">
                            {name}
                        </span>
                    </div>
                ))}
            </div>
        </article>
    );
};

export default SkillCard;

