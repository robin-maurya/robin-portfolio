"use client";

import { FormEvent, useState } from "react";

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
                const response = await fetch("http://localhost:8080/api/contact", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error("Failed to send message");
                }

                const data = await response.json();

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
            className="px-6 py-24"
        >
            <div className="mx-auto max-w-3xl">
                <p className="mb-2 text-center text-sm font-medium uppercase tracking-wider text-blue-500">
                    Contact
                </p>

                <h2 className="text-center text-3xl font-bold text-white md:text-4xl">
                    Let's Work Together
                </h2>

                <p className="mx-auto mt-4 max-w-2xl text-center text-gray-400">
                    Have a project, opportunity, or question? Feel free to
                    get in touch.
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="mt-10 space-y-6"
                >
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
                            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                        />
                    </div>

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
                            className="w-full rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                        />
                    </div>

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
                            className="w-full resize-none rounded-lg border border-gray-700 bg-gray-900 px-4 py-3 text-white outline-none transition focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>

                    {status && (
                        <p
                            className={`text-center text-sm ${
                                status.includes("successfully")
                                    ? "text-green-400"
                                    : "text-red-400"
                            }`}
                        >
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </section>
    );
};

export default Contact;