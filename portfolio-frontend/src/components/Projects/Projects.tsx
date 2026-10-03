import ProjectCard from "./ProjectCard";

const Projects = () => {
    return (
        <section
            id="projects"
            className="px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                <p className="mb-2 text-center text-sm font-medium uppercase tracking-wider text-blue-500">
                    Projects
                </p>

                <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
                    Full Stack Projects
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
                    A collection of applications built using modern frontend,
                    backend, and database technologies.
                </p>

                <div className="mt-12 grid gap-6 lg:grid-cols-2">
                    <ProjectCard
                        title="Personal Finance Tracker"
                        description="A full-stack application for tracking income, expenses, budgets, and financial activity."
                        frontend={[
                            "Next.js",
                            "TypeScript",
                            "Tailwind CSS",
                        ]}
                        backend={[
                            "Java",
                            "Spring Boot",
                            "REST API",
                        ]}
                        database={[
                            "MySQL",
                        ]}
                    />

                    <ProjectCard
                        title="Task Management System"
                        description="A full-stack task management application for creating, updating, organizing, and tracking tasks."
                        frontend={[
                            "Next.js",
                            "TypeScript",
                            "Tailwind CSS",
                        ]}
                        backend={[
                            "Java",
                            "Spring Boot",
                            "REST API",
                        ]}
                        database={[
                            "MySQL",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;