
import ExperienceCard from "./ExperienceCard";

const Experience = () => {
    return (
        <section
            id="experience"
            className="relative overflow-hidden px-6 py-24 md:py-28"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute right-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />

            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                        Experience
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Professional Experience
                    </h2>

                    <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">
                        My professional journey and experience in web
                        development, application modernization, and
                        frontend engineering.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative mt-12 space-y-8">
                    {/* Timeline Line */}
                    <div className="absolute left-[14px] top-0 hidden h-full w-px bg-gradient-to-b from-blue-500/50 via-gray-800 to-transparent md:block" />

                    {/* TCS */}
                    <ExperienceCard
                        company="Tata Consultancy Services (TCS)"
                        role="System Engineer"
                        duration="Aug 2022 – Present"
                        location="Delhi, India"
                        current
                        description={[
                            "Developed and maintained enterprise web applications using React.js, Next.js, TypeScript, and Redux.",
                            "Migrated existing Drupal websites to Next.js by rebuilding pages and reusable UI components.",
                            "Improved application performance using lazy loading, code splitting, and memoization techniques.",
                            "Integrated REST APIs and managed application data and frontend state.",
                            "Implemented unit and integration testing using Jest and React Testing Library.",
                            "Collaborated in Agile teams through code reviews, debugging, development, and frontend enhancements.",
                        ]}
                    />

                    {/* PAN Intellecom */}
                    <ExperienceCard
                        company="PAN Intellecom Ltd."
                        role="Associate Software Engineer"
                        duration="Aug 2020 – Aug 2022"
                        location="Delhi, India"
                        description={[
                            "Developed responsive web interfaces using HTML, CSS, and JavaScript.",
                            "Built and enhanced web pages with a focus on responsive layouts and cross-browser compatibility.",
                            "Identified and resolved UI and functional issues to improve application usability and stability.",
                        ]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
