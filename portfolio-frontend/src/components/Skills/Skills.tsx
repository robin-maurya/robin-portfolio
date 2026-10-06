
import {
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiTailwindcss,
    SiRedux,
    SiMui,
    SiBootstrap,
    SiSass,
    SiSpringboot,
    SiSpring,
    SiMysql,
    SiGit,
    SiGithub,
    SiBitbucket,
    SiJenkins,
    SiJest,
    SiFigma,
    SiPostman,
} from "react-icons/si";

import {
    FaJava,
    FaCode,
    FaDatabase,
    FaTools,
} from "react-icons/fa";

import { TbBrandVscode } from "react-icons/tb";
import { BiLogoVisualStudio } from "react-icons/bi";
import { MdDesignServices } from "react-icons/md";

import SkillCard from "./SkillCard";

const Skills = () => {
    return (
        <section
            id="skills"
            className="relative overflow-hidden px-6 py-24 md:py-28"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/4 top-1/3 -z-10 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />

            <div className="pointer-events-none absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-purple-600/5 blur-3xl" />

            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                        Skills
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Technologies I Work With
                    </h2>

                    <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">
                        Technologies and tools I use to build modern,
                        scalable, and maintainable web applications.
                    </p>
                </div>

                {/* Skill Cards */}
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {/* Frontend */}
                    <SkillCard
                        title="Frontend"
                        description="Modern UI development and frontend architecture"
                        skills={[
                            {
                                name: "React.js",
                                icon: SiReact,
                                color: "text-[#61DAFB]",
                            },
                            {
                                name: "Next.js",
                                icon: SiNextdotjs,
                                color: "text-white",
                            },
                            {
                                name: "TypeScript",
                                icon: SiTypescript,
                                color: "text-[#3178C6]",
                            },
                            {
                                name: "JavaScript",
                                icon: SiJavascript,
                                color: "text-[#F7DF1E]",
                            },
                            {
                                name: "HTML5",
                                icon: SiHtml5,
                                color: "text-[#E34F26]",
                            },
                            {
                                name: "CSS3",
                                icon: SiCss,
                                color: "text-[#1572B6]",
                            },
                            {
                                name: "Tailwind CSS",
                                icon: SiTailwindcss,
                                color: "text-[#06B6D4]",
                            },
                            {
                                name: "Redux",
                                icon: SiRedux,
                                color: "text-[#764ABC]",
                            },
                            {
                                name: "Material UI",
                                icon: SiMui,
                                color: "text-[#007FFF]",
                            },
                            {
                                name: "Bootstrap",
                                icon: SiBootstrap,
                                color: "text-[#7952B3]",
                            },
                            {
                                name: "SASS",
                                icon: SiSass,
                                color: "text-[#CC6699]",
                            },
                        ]}
                    />

                    {/* Backend */}
                    <SkillCard
                        title="Backend"
                        description="Java-based backend and REST API development"
                        skills={[
                            {
                                name: "Java",
                                icon: FaJava,
                                color: "text-[#ED8B00]",
                            },
                            {
                                name: "Spring Boot",
                                icon: SiSpringboot,
                                color: "text-[#6DB33F]",
                            },
                            {
                                name: "Spring MVC",
                                icon: SiSpring,
                                color: "text-[#6DB33F]",
                            },
                            {
                                name: "REST APIs",
                                icon: FaCode,
                                color: "text-blue-400",
                            },
                            {
                                name: "Spring Data JPA",
                                icon: SiSpring,
                                color: "text-[#6DB33F]",
                            },
                        ]}
                    />

                    {/* Database */}
                    <SkillCard
                        title="Database"
                        description="Data storage and relational database technologies"
                        skills={[
                            {
                                name: "MySQL",
                                icon: SiMysql,
                                color: "text-[#4479A1]",
                            },
                            {
                                name: "SQL",
                                icon: FaDatabase,
                                color: "text-blue-400",
                            },
                        ]}
                    />

                    {/* Languages */}
                    <SkillCard
                        title="Languages"
                        description="Programming languages used across my projects"
                        skills={[
                            {
                                name: "Java",
                                icon: FaJava,
                                color: "text-[#ED8B00]",
                            },
                            {
                                name: "JavaScript",
                                icon: SiJavascript,
                                color: "text-[#F7DF1E]",
                            },
                            {
                                name: "TypeScript",
                                icon: SiTypescript,
                                color: "text-[#3178C6]",
                            },
                        ]}
                    />

                    {/* Tools */}
                    <div className="md:col-span-2">
                        <SkillCard
                            title="Tools & Practices"
                            description="Development tools, testing, collaboration, and engineering practices"
                            skills={[
                                {
                                    name: "Git",
                                    icon: SiGit,
                                    color: "text-[#F05032]",
                                },
                                {
                                    name: "GitHub",
                                    icon: SiGithub,
                                    color: "text-white",
                                },
                                {
                                    name: "Bitbucket",
                                    icon: SiBitbucket,
                                    color: "text-[#2684FF]",
                                },
                                {
                                    name: "Jenkins",
                                    icon: SiJenkins,
                                    color: "text-[#D24939]",
                                },
                                {
                                    name: "VS Code",
                                    icon: TbBrandVscode,
                                    color: "text-[#007ACC]",
                                },
                                {
                                    name: "IntelliJ IDEA",
                                    icon: BiLogoVisualStudio,
                                    color: "text-purple-400",
                                },
                                {
                                    name: "Jira",
                                    icon: FaTools,
                                    color: "text-[#2684FF]",
                                },
                                {
                                    name: "Postman",
                                    icon: SiPostman,
                                    color: "text-[#FF6C37]",
                                },
                                {
                                    name: "Jest",
                                    icon: SiJest,
                                    color: "text-[#C21325]",
                                },
                                {
                                    name: "Figma",
                                    icon: SiFigma,
                                    color: "text-[#F24E1E]",
                                },
                                {
                                    name: "Agile",
                                    icon: MdDesignServices,
                                    color: "text-blue-400",
                                },
                                {
                                    name: "Generative AI",
                                    icon: FaCode,
                                    color: "text-purple-400",
                                },
                            ]}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
