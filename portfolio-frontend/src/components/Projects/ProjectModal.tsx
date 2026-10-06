
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

type ProjectModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    image: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
};

const ProjectModal = ({
    isOpen,
    onClose,
    title,
    image,
    description,
    technologies,
    githubUrl,
    liveUrl,
}: ProjectModalProps) => {
    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
            onClick={onClose}
        >
            <div
                className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-gray-800 bg-gray-950 shadow-2xl shadow-black/50 animate-[fadeUp_0.25s_ease-out]"
                onClick={(event) => event.stopPropagation()}
            >
                {/* Close Button */}
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close project details"
                    className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-700 bg-gray-950/80 text-gray-300 backdrop-blur-sm transition duration-200 hover:border-gray-600 hover:bg-gray-800 hover:text-white"
                >
                    <FaTimes />
                </button>

                {/* Project Image */}
                <div className="relative aspect-video w-full overflow-hidden">
                    <Image
                        src={image}
                        alt={`${title} project preview`}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div className="p-6 md:p-8">
                    <h3 className="text-2xl font-bold text-white md:text-3xl">
                        {title}
                    </h3>

                    {/* Technologies */}
                    <div className="mt-5 flex flex-wrap gap-2">
                        {technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full border border-gray-700 bg-gray-900 px-3 py-1.5 text-sm text-gray-300"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>

                    {/* Description */}
                    <p className="mt-6 leading-7 text-gray-400">
                        {description}
                    </p>

                    {/* Buttons */}
                    {(githubUrl || liveUrl) && (
                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            {githubUrl && (
                                <a
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-700 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:border-gray-600 hover:bg-gray-800"
                                >
                                    <FaGithub />
                                    View Code
                                </a>
                            )}

                            {liveUrl && (
                                <a
                                    href={liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
                                >
                                    <FaExternalLinkAlt className="text-xs" />
                                    View Live App
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
