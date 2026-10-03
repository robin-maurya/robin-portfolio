import SkillCard from "./SkillCard";

const Skills = () => {
    return (
        <section
            id="skills"
            className="px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-500">
                        Skills
                    </p>

                    <h2 className="text-3xl font-bold text-white md:text-4xl">
                        Technologies I Work With
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Technologies and tools I use to build modern,
                        scalable, and maintainable web applications.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    <SkillCard
                        title="Frontend"
                        skills={[
                            "React.js",
                            "Next.js",
                            "TypeScript",
                            "JavaScript",
                            "HTML5",
                            "CSS3",
                            "Tailwind CSS",
                            "Redux",
                            "Material UI",
                            "Bootstrap",
                            "SASS",
                        ]}
                    />

                    <SkillCard
                        title="Backend"
                        skills={[
                            "Spring Boot",
                            "Spring MVC",
                            "REST APIs",
                            "Spring Data JPA",
                        ]}
                    />

                    <SkillCard
                        title="Database"
                        skills={[
                            "MySQL",
                            "SQL",
                        ]}
                    />

                    <SkillCard
                        title="Languages"
                        skills={[
                            "Java",
                            "JavaScript",
                            "TypeScript",
                        ]}
                    />

                    <SkillCard
                        title="Tools & Practices"
                        skills={[
                            "Git",
                            "GitHub",
                            "Bitbucket",
                            "Jenkins",
                            "VS Code",
                            "IntelliJ IDEA",
                            "Jira",
                            "Postman",
                            "Jest",
                            "React Testing Library",
                            "Agile",
                            "Figma",
                            "Generative AI Tools",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;