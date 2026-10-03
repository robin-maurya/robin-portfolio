const certifications = [
    {
        title: "ReactJS Advanced",
        issuer: "Certification",
        date: "Aug 2025",
    },
    {
        title: "Creative HTML5 & CSS3",
        issuer: "Certification",
        date: "Dec 2025",
    },
    {
        title: "AI Tools Workshop",
        issuer: "Workshop",
        date: "May 2026",
    },
];

const Certifications = () => {
    return (
        <section
            id="certifications"
            className="px-6 py-24"
        >
            <div className="mx-auto max-w-6xl">
                <p className="mb-2 text-center text-sm font-medium uppercase tracking-wider text-blue-500">
                    Certifications
                </p>

                <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
                    Certifications & Learning
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
                    Continuous learning and professional development in
                    frontend development and emerging technologies.
                </p>

                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((certification) => (
                        <article
                            key={certification.title}
                            className="rounded-xl border border-gray-800 bg-gray-900/50 p-6 transition duration-300 hover:-translate-y-1 hover:border-gray-700"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 text-xl text-blue-500">
                                ✓
                            </div>

                            <h3 className="mt-6 text-xl font-semibold text-white">
                                {certification.title}
                            </h3>

                            <p className="mt-2 text-sm text-gray-400">
                                {certification.issuer}
                            </p>

                            <p className="mt-4 text-sm text-gray-500">
                                {certification.date}
                            </p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;