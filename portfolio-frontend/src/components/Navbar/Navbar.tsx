"use client";

import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            const sections = navItems
                .map((item) => document.querySelector(item.href))
                .filter(Boolean);

            let currentSection = "home";

            sections.forEach((section) => {
                if (!section) return;

                const sectionTop = section.getBoundingClientRect().top;

                if (sectionTop <= 150) {
                    currentSection = section.id;
                }
            });

            setActiveSection(currentSection);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Lock background scroll when mobile menu is open
    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = "hidden";
            document.body.style.overflow = "hidden";
            document.body.style.touchAction = "none";
        } else {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        }

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
            document.body.style.touchAction = "";
        };
    }, [isOpen]);

    const handleNavigation = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Navbar */}
            <nav
                className={`fixed left-0 right-0 top-0 z-50 border-b px-6 py-4 transition-all duration-300 md:px-8 ${
                    isScrolled
                        ? "border-gray-800/80 bg-gray-950/90 shadow-lg shadow-black/10 backdrop-blur-xl"
                        : "border-gray-800/70 bg-gray-950/80 backdrop-blur-md"
                }`}
            >
                <div className="mx-auto flex max-w-7xl items-center justify-between">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={handleNavigation}
                        className="group text-xl font-bold tracking-tight text-white md:text-2xl"
                    >
                        Robin
                        <span className="text-blue-500 transition group-hover:text-blue-400">
                            .
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden items-center gap-1 md:flex">
                        {navItems.map((item) => {
                            const sectionId = item.href.substring(1);
                            const isActive =
                                activeSection === sectionId;

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition duration-200 ${
                                        isActive
                                            ? "text-blue-500"
                                            : "text-gray-400 hover:text-white"
                                    }`}
                                >
                                    {item.name}

                                    <span
                                        className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-500 transition-all duration-300 ${
                                            isActive
                                                ? "w-5 opacity-100"
                                                : "w-0 opacity-0"
                                        }`}
                                    />
                                </a>
                            );
                        })}

                        {/* Contact */}
                        <a
                            href="#contact"
                            className="ml-3 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                            Contact
                        </a>
                    </div>

                    {/* Mobile Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen((previous) => !previous)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        className="relative z-[60] flex h-10 w-10 items-center justify-center rounded-lg border border-gray-800 text-gray-300 transition duration-200 hover:border-gray-700 hover:bg-gray-800 hover:text-white md:hidden"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </nav>

            {/* Mobile Full Screen Menu */}
            <div
                className={`fixed inset-0 z-40 h-dvh w-full overflow-hidden bg-gray-950 transition-all duration-300 md:hidden ${
                    isOpen
                        ? "visible opacity-100"
                        : "invisible opacity-0"
                }`}
                style={{
                    touchAction: "none",
                }}
            >
                <div className="flex h-full flex-col px-6 pb-8 pt-28">
                    <div className="flex flex-1 flex-col items-center justify-center gap-3">
                        {navItems.map((item) => {
                            const sectionId = item.href.substring(1);
                            const isActive =
                                activeSection === sectionId;

                            return (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={handleNavigation}
                                    className={`w-full max-w-sm rounded-xl px-6 py-4 text-center text-lg font-medium transition duration-200 ${
                                        isActive
                                            ? "bg-blue-500/10 text-blue-500"
                                            : "text-gray-400 hover:bg-gray-800 hover:text-white"
                                    }`}
                                >
                                    {item.name}
                                </a>
                            );
                        })}

                        {/* Contact */}
                        <a
                            href="#contact"
                            onClick={handleNavigation}
                            className="mt-4 w-full max-w-sm rounded-xl bg-blue-600 px-6 py-4 text-center text-lg font-medium text-white transition duration-300 hover:bg-blue-700"
                        >
                            Contact
                        </a>
                    </div>

                    <p className="text-center text-sm text-gray-600">
                        © {new Date().getFullYear()} Robin Maurya
                    </p>
                </div>
            </div>
        </>
    );
};

export default Navbar;