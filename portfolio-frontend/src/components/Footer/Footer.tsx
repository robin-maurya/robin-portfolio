"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer className="border-t border-gray-800/70 bg-gray-950">
            <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    {/* Brand */}
                    <div>
                        <a
                            href="#home"
                            className="text-xl font-bold tracking-tight text-white transition hover:text-blue-500"
                        >
                            Robin Maurya
                        </a>

                        <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
                            Full Stack Developer building modern, scalable, and
                            user-friendly web applications.
                        </p>
                    </div>

                    {/* Navigation */}
                    <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
                        <a
                            href="#about"
                            className="text-gray-500 transition hover:text-blue-500"
                        >
                            About
                        </a>

                        <a
                            href="#skills"
                            className="text-gray-500 transition hover:text-blue-500"
                        >
                            Skills
                        </a>

                        <a
                            href="#experience"
                            className="text-gray-500 transition hover:text-blue-500"
                        >
                            Experience
                        </a>

                        <a
                            href="#projects"
                            className="text-gray-500 transition hover:text-blue-500"
                        >
                            Projects
                        </a>

                        <a
                            href="#contact"
                            className="text-gray-500 transition hover:text-blue-500"
                        >
                            Contact
                        </a>
                    </nav>
                </div>

                {/* Divider */}
                <div className="my-8 h-px bg-gray-800" />

                {/* Bottom */}
                <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
                    <p className="text-center text-sm text-gray-600 sm:text-left">
                        © {currentYear} Robin Maurya. All rights reserved.
                    </p>

                    <div className="flex items-center gap-3">
                        {/* GitHub */}
                        <a
                            href="https://github.com/robin-maurya"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 text-gray-500 transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:bg-gray-800 hover:text-white"
                        >
                            <FaGithub />
                        </a>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/robin-maurya/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 text-gray-500 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-500"
                        >
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* Sticky Back to Top */}
            <a
                href="#home"
                aria-label="Back to top"
                className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-gray-700 bg-gray-900/90 text-gray-400 shadow-lg backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-blue-600 hover:text-white ${
                    showBackToTop
                        ? "translate-y-0 opacity-100"
                        : "pointer-events-none translate-y-4 opacity-0"
                }`}
            >
                <FaArrowUp />
            </a>
        </footer>
    );
};

export default Footer;