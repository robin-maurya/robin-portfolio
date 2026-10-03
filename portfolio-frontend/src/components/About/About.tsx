const About = () => {
    return (
        <section id="about" className="px-6 py-24">
            <div className="mx-auto max-w-6xl">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="mb-2 text-sm font-medium uppercase tracking-wider text-blue-500">
                        About Me
                    </p>

                    <h2 className="text-3xl font-bold text-white md:text-4xl">
                        Full Stack Developer
                    </h2>

                    <p className="mt-4 text-gray-400">
                        Building modern web applications with a strong
                        frontend foundation and growing backend expertise.
                    </p>
                </div>

                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-xl hover:shadow-black/20">
                        <h3 className="text-xl font-semibold text-white">
                            Professional Experience
                        </h3>

                        <p className="mt-4 leading-7 text-gray-400">
                            I am a Software Engineer with around 6 years of
                            professional experience in web development, with
                            strong expertise in React.js, Next.js, TypeScript,
                            and JavaScript.
                        </p>

                        <p className="mt-4 leading-7 text-gray-400">
                            Currently working at TCS, I contribute to
                            enterprise web applications, frontend development,
                            application modernization, testing, performance
                            optimization, and reusable UI development.
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:shadow-xl hover:shadow-black/20">
                        <h3 className="text-xl font-semibold text-white">
                            Full Stack Journey
                        </h3>

                        <p className="mt-4 leading-7 text-gray-400">
                            I am expanding my backend expertise with Java and
                            Spring Boot, building REST APIs and working with
                            MySQL to develop complete full-stack applications.
                        </p>

                        <p className="mt-4 leading-7 text-gray-400">
                            My goal is to build scalable, maintainable, and
                            user-focused applications across both frontend and
                            backend.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;