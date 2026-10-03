"use client";

import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-gray-800/70 bg-gray-950/80 px-6 py-4 backdrop-blur-md md:px-8">
            <div className="mx-auto flex max-w-7xl items-center justify-between">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-xl font-bold tracking-tight text-white transition hover:text-blue-500 md:text-2xl"
                >
                    Robin Maurya
                </a>

                {/* Desktop Menu */}
                <div className="hidden items-center gap-7 md:flex">
                    <a
                        href="#home"
                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-blue-500"
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-blue-500"
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-blue-500"
                    >
                        Skills
                    </a>

                    <a
                        href="#experience"
                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-blue-500"
                    >
                        Experience
                    </a>

                    <a
                        href="#projects"
                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-blue-500"
                    >
                        Projects
                    </a>

                    <a
                        href="#certifications"
                        className="text-sm font-medium text-gray-300 transition duration-200 hover:text-blue-500"
                    >
                        Certifications
                    </a>

                    <a
                        href="#contact"
                        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition duration-200 hover:bg-blue-700"
                    >
                        Contact
                    </a>
                </div>

                {/* Mobile Button */}
                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isOpen}
                    className="rounded-lg border border-gray-800 px-3 py-2 text-xl text-white transition hover:bg-gray-800 md:hidden"
                >
                    {isOpen ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="mx-auto mt-4 max-w-7xl border-t border-gray-800/70 pt-4 md:hidden">
                    <div className="flex flex-col gap-1">
                        <a
                            href="#home"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-gray-800 hover:text-blue-500"
                        >
                            Home
                        </a>

                        <a
                            href="#about"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-gray-800 hover:text-blue-500"
                        >
                            About
                        </a>

                        <a
                            href="#skills"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-gray-800 hover:text-blue-500"
                        >
                            Skills
                        </a>

                        <a
                            href="#experience"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-gray-800 hover:text-blue-500"
                        >
                            Experience
                        </a>

                        <a
                            href="#projects"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-gray-800 hover:text-blue-500"
                        >
                            Projects
                        </a>

                        <a
                            href="#certifications"
                            onClick={closeMenu}
                            className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-300 transition hover:bg-gray-800 hover:text-blue-500"
                        >
                            Certifications
                        </a>

                        <a
                            href="#contact"
                            onClick={closeMenu}
                            className="mt-2 rounded-lg bg-blue-600 px-3 py-2.5 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                        >
                            Contact
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;