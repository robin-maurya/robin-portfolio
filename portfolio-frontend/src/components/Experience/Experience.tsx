import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    return (
        <section
            id="experience"
            className="px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                <p className="mb-2 text-center text-sm font-medium uppercase tracking-wider text-blue-500">
                    Experience
                </p>

                <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
                    Professional Experience
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
                    My professional journey and experience in frontend and
                    full-stack web development.
                </p>

                <div className="relative mt-12 space-y-8">
                    <div className="absolute left-4 top-0 hidden h-full w-px bg-gray-800 md:block" />

                    <ExperienceCard
                        company="Tata Consultancy Services (TCS)"
                        role="System Engineer"
                        duration="Aug 2022 – Present"
                        location="Delhi, India"
                        description={[
                                "Developed and maintained enterprise web applications using React.js, Next.js, TypeScript, and Redux.",
                                "Worked with MySQL for data retrieval, validation, and application-related database operations.",
                                "Migrated existing Drupal websites to Next.js by rebuilding pages and reusable UI components.",
                                "Improved application performance using lazy loading, code splitting, and memoization techniques.",
                                "Implemented unit and integration testing using Jest and React Testing Library.",
                                "Collaborated in Agile teams, participating in code reviews, debugging, and frontend enhancements.",
                            ]}
                    />

                    <ExperienceCard
                        company="PAN Intellecom Ltd."
                        role="Associate Software Engineer"
                        duration="Aug 2020 – Aug 2022"
                        location="Delhi, India"
                        description={[
                            "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
                            "Built and enhanced web pages with a focus on responsive layouts and cross-browser compatibility.",
                            "Identified and resolved UI and functional issues to improve application usability.",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;