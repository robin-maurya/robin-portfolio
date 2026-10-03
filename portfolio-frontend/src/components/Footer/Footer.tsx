const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-gray-800 bg-gray-950 px-6 py-8">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
                <p className="text-sm text-gray-500">
                    © {currentYear} Robin Maurya. All rights reserved.
                </p>

                <div className="flex items-center gap-6">
                    <a
                        href="https://www.linkedin.com/in/robin-maurya/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 transition duration-200 hover:text-blue-500"
                    >
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/robin-maurya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-gray-400 transition duration-200 hover:text-blue-500"
                    >
                        GitHub
                    </a>

                    <a
                        href="#home"
                        className="text-sm text-gray-400 transition duration-200 hover:text-blue-500"
                    >
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;