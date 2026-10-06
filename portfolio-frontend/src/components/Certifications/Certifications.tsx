import { FaAward, FaExternalLinkAlt } from "react-icons/fa";

const certifications = [
    {
        title: "ReactJS Advanced",
        issuer: "Certification",
        date: "Aug 2025",
        type: "Professional Certification",
        certificateUrl: "#",
    },
    {
        title: "Creative HTML5 & CSS3",
        issuer: "Certification",
        date: "Dec 2025",
        type: "Professional Certification",
        certificateUrl: "#",
    },
    {
        title: "AI Tools Workshop",
        issuer: "Workshop",
        date: "May 2026",
        type: "AI & Productivity",
        certificateUrl: "#",
    },
];

const Certifications = () => {
    return (
        <section
            id="certifications"
            className="relative overflow-hidden px-6 py-24 md:py-28"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />

            <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-purple-600/5 blur-3xl" />

            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                        Certifications
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Certifications & Learning
                    </h2>

                    <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">
                        Continuous learning and professional development in
                        frontend development, AI tools, and modern web
                        technologies.
                    </p>
                </div>

                {/* Certification Cards */}
                <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certifications.map((certification) => (
                        <article
                            key={certification.title}
                            className="group flex flex-col rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-gray-900/70 hover:shadow-xl hover:shadow-blue-950/20"
                        >
                            {/* Icon */}
                            <div className="flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-xl text-blue-500 transition duration-300 group-hover:scale-110 group-hover:bg-blue-500/15">
                                    <FaAward />
                                </div>

                                <span className="rounded-full border border-gray-800 bg-gray-950/60 px-3 py-1 text-xs font-medium text-gray-400">
                                    {certification.date}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="mt-6 flex-1">
                                <p className="text-xs font-medium uppercase tracking-wider text-blue-500">
                                    {certification.type}
                                </p>

                                <h3 className="mt-2 text-xl font-semibold text-white">
                                    {certification.title}
                                </h3>

                                <p className="mt-2 text-sm text-gray-400">
                                    {certification.issuer}
                                </p>
                            </div>

                            {/* Button */}
                            <a
                                href={certification.certificateUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-4 py-2.5 text-sm font-medium text-gray-300 transition duration-300 hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-white"
                            >
                                View Certificate
                                <FaExternalLinkAlt className="text-xs" />
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;