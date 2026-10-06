
const About = () => {
    return (
        <section
            id="about"
            className="relative overflow-hidden px-6 py-24 md:py-28"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-3xl" />

            <div className="mx-auto max-w-6xl">
                {/* Section Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="animate-[fadeIn_0.8s_ease-out] text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                        About Me
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Full Stack Developer
                    </h2>

                    <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">
                        Building modern web applications with a strong
                        frontend foundation and growing backend expertise.
                    </p>
                </div>

                {/* Cards */}
                <div className="mt-12 grid gap-6 md:grid-cols-2">
                    {/* Professional Experience */}
                    <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-gray-900/70 hover:shadow-xl hover:shadow-blue-950/20">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-400 transition duration-300 group-hover:scale-110">
                                💼
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    Professional Experience
                                </h3>

                                <p className="mt-1 text-sm text-blue-400">
                                    6+ Years in Web Development
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 leading-7 text-gray-400">
                            I am a Software Engineer with 6+ years of
                            professional experience in web development, with
                            strong expertise in React.js, Next.js, TypeScript,
                            and JavaScript.
                        </p>

                        <p className="mt-4 leading-7 text-gray-400">
                            Currently working at TCS, I contribute to
                            enterprise web applications, application
                            modernization, reusable UI development,
                            performance optimization, testing, and
                            debugging.
                        </p>
                    </div>

                    {/* Full Stack Journey */}
                    <div className="group rounded-2xl border border-gray-800 bg-gray-900/50 p-7 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-purple-500/30 hover:bg-gray-900/70 hover:shadow-xl hover:shadow-purple-950/20">
                        <div className="flex items-center gap-4">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-xl text-purple-400 transition duration-300 group-hover:scale-110">
                                🚀
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white">
                                    Full Stack Journey
                                </h3>

                                <p className="mt-1 text-sm text-purple-400">
                                    Java • Spring Boot • MySQL
                                </p>
                            </div>
                        </div>

                        <p className="mt-6 leading-7 text-gray-400">
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

                {/* Highlights */}
                <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-5 text-center transition duration-300 hover:border-gray-700 hover:bg-gray-900/60">
                        <p className="text-2xl font-bold text-white md:text-3xl">
                            6+
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            Years Experience
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-5 text-center transition duration-300 hover:border-gray-700 hover:bg-gray-900/60">
                        <p className="text-2xl font-bold text-white md:text-3xl">
                            React
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            Frontend Expertise
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-5 text-center transition duration-300 hover:border-gray-700 hover:bg-gray-900/60">
                        <p className="text-2xl font-bold text-white md:text-3xl">
                            Java
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            Backend Focus
                        </p>
                    </div>

                    <div className="rounded-xl border border-gray-800 bg-gray-900/30 p-5 text-center transition duration-300 hover:border-gray-700 hover:bg-gray-900/60">
                        <p className="text-2xl font-bold text-white md:text-3xl">
                            Full Stack
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            Career Direction
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

