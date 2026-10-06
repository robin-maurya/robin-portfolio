
import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative overflow-hidden px-6 py-24 md:py-28"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-purple-600/5 blur-3xl" />

            <div className="pointer-events-none absolute bottom-1/4 right-0 -z-10 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />

            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                        Projects
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Featured Projects
                    </h2>

                    <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">
                        A selection of projects demonstrating my experience
                        with modern frontend technologies and Java-based
                        full-stack development.
                    </p>
                </div>

                {/* Project Cards */}
                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    <ProjectCard
                        title="Robin Maurya Portfolio"
                        image="/portfolio.png"
                        description="A modern full-stack developer portfolio built with Next.js and TypeScript, supported by a Java Spring Boot REST API and MySQL database for contact form submissions."
                        technologies={[
                            "Next.js",
                            "React.js",
                            "TypeScript",
                            "Tailwind CSS",
                            "Java",
                            "Spring Boot",
                            "MySQL",
                        ]}
                        githubUrl="https://github.com/robin-maurya/robin-portfolio"
                    />

                    <ProjectCard
                        title="TechNest"
                        image="/technest.png"
                        description="A responsive IT company website built with Next.js and TypeScript, featuring reusable components, authentication flow, Context API state management, responsive navigation, and theme support."
                        technologies={[
                            "Next.js",
                            "React.js",
                            "TypeScript",
                            "styled-components",
                            "Context API",
                        ]}
                        githubUrl="https://github.com/robin-maurya/technest"
                        liveUrl="https://technest-self.vercel.app"
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
