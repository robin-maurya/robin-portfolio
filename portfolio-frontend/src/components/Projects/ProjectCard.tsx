
"use client";

import { useState } from "react";
import Image from "next/image";

import ProjectModal from "./ProjectModal";

type ProjectCardProps = {
    title: string;
    image: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
};

const ProjectCard = ({
    title,
    image,
    description,
    technologies,
    githubUrl,
    liveUrl,
}: ProjectCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <article className="group overflow-hidden rounded-2xl border border-gray-800 bg-gray-900/50 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-gray-900/70 hover:shadow-xl hover:shadow-blue-950/20">
                {/* Image */}
                <div className="relative aspect-video overflow-hidden">
                    <Image
                        src={image}
                        alt={`${title} project preview`}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-70" />
                </div>

                {/* Content */}
                <div className="p-6">
                    <h3 className="text-2xl font-semibold text-white">
                        {title}
                    </h3>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-2">
                        {technologies.slice(0, 5).map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-gray-800 bg-gray-950/60 px-3 py-1 text-xs text-gray-300"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    {/* Short Description */}
                    <p className="mt-4 line-clamp-2 leading-7 text-gray-400">
                        {description}
                    </p>

                    {/* Show More */}
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
                    >
                        Show More
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                            →
                        </span>
                    </button>
                </div>
            </article>

            {/* Modal */}
            <ProjectModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={title}
                image={image}
                description={description}
                technologies={technologies}
                githubUrl={githubUrl}
                liveUrl={liveUrl}
            />
        </>
    );
};

export default ProjectCard;
