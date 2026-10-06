const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const sendContactMessage = async (data: {
    name: string;
    email: string;
    message: string;
}) => {
    const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        throw new Error("Failed to send message");
    }

    return response.json();
};