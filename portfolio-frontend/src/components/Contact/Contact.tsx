"use client";

import { FormEvent, useState } from "react";
import {
    FaEnvelope,
    FaGithub,
    FaLinkedinIn,
    FaPaperPlane,
} from "react-icons/fa";
import { sendContactMessage } from "@/lib/api";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsSubmitting(true);
        setStatus("");

        try {
            const data = await sendContactMessage(formData);

            console.log("Message sent successfully:", data);

            setStatus("Message sent successfully!");

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            console.error("Error sending message:", error);

            setStatus("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden px-6 py-24 md:py-28"
        >
            {/* Background Glow */}
            <div className="pointer-events-none absolute left-0 top-1/3 -z-10 h-80 w-80 rounded-full bg-blue-600/5 blur-3xl" />

            <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-80 w-80 rounded-full bg-purple-600/5 blur-3xl" />

            <div className="mx-auto max-w-6xl">
                {/* Heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-500">
                        Contact
                    </p>

                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
                        Let&apos;s Work Together
                    </h2>

                    <p className="mt-4 text-base leading-7 text-gray-400 md:text-lg">
                        Have a project, opportunity, or question? Feel free to
                        get in touch. I&apos;d be happy to connect.
                    </p>
                </div>

                {/* Contact Content */}
                <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    {/* Left Side */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm md:p-8">
                        <h3 className="text-2xl font-semibold text-white">
                            Get in touch
                        </h3>

                        <p className="mt-4 leading-7 text-gray-400">
                            I&apos;m always open to discussing new projects,
                            frontend opportunities, full-stack development,
                            or interesting ideas.
                        </p>

                        {/* Email */}
                        <a
                            href="mailto:robinuit2016@gmail.com"
                            className="mt-8 flex items-center gap-4 rounded-xl border border-gray-800 bg-gray-950/50 p-4 transition duration-300 hover:border-blue-500/30 hover:bg-gray-900"
                        >
                            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                                <FaEnvelope />
                            </div>

                            <div>
                                <p className="text-xs uppercase tracking-wider text-gray-500">
                                    Email
                                </p>

                                <p className="mt-1 text-sm text-gray-300">
                                    robinuit2016@gmail.com
                                </p>
                            </div>
                        </a>

                        {/* Social Links */}
                        <div className="mt-6">
                            <p className="text-sm font-medium text-gray-400">
                                Connect with me
                            </p>

                            <div className="mt-3 flex gap-3">
                                <a
                                    href="https://github.com/robin-maurya"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-800 bg-gray-950/50 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:bg-gray-800 hover:text-white"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/robin-maurya/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="flex h-11 w-11 items-center justify-center rounded-lg border border-gray-800 bg-gray-950/50 text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-blue-500"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="rounded-2xl border border-gray-800 bg-gray-900/50 p-6 backdrop-blur-sm md:p-8">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-5"
                        >
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Name
                                </label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Your name"
                                    className="w-full rounded-xl border border-gray-800 bg-gray-950/60 px-4 py-3.5 text-white outline-none transition duration-200 placeholder:text-gray-600 focus:border-blue-500/60 focus:bg-gray-950 focus:ring-2 focus:ring-blue-500/10"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Email
                                </label>

                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="you@example.com"
                                    className="w-full rounded-xl border border-gray-800 bg-gray-950/60 px-4 py-3.5 text-white outline-none transition duration-200 placeholder:text-gray-600 focus:border-blue-500/60 focus:bg-gray-950 focus:ring-2 focus:ring-blue-500/10"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-2 block text-sm font-medium text-gray-300"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    placeholder="Tell me about your project or opportunity..."
                                    className="w-full resize-none rounded-xl border border-gray-800 bg-gray-950/60 px-4 py-3.5 text-white outline-none transition duration-200 placeholder:text-gray-600 focus:border-blue-500/60 focus:bg-gray-950 focus:ring-2 focus:ring-blue-500/10"
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                            >
                                {isSubmitting ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        Send Message
                                        <FaPaperPlane className="text-sm" />
                                    </>
                                )}
                            </button>

                            {/* Status */}
                            {status && (
                                <div
                                    className={`rounded-lg border px-4 py-3 text-center text-sm ${
                                        status.includes("successfully")
                                            ? "border-green-500/20 bg-green-500/10 text-green-400"
                                            : "border-red-500/20 bg-red-500/10 text-red-400"
                                    }`}
                                >
                                    {status}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;