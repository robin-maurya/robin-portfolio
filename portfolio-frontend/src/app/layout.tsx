import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Loader from "@/components/Loader/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined);

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  ...(process.env.GOOGLE_SITE_VERIFICATION
    ? { verification: { google: process.env.GOOGLE_SITE_VERIFICATION } }
    : {}),
  title: "Robin Maurya | TCS System Engineer & Full Stack Developer",
  description:
    "Official portfolio of Robin Maurya, System Engineer at Tata Consultancy Services (TCS) and Full Stack Developer in Delhi, India. Explore his experience, projects, and skills in React, Next.js, TypeScript, Java, and Spring Boot.",
  applicationName: "Robin Maurya Portfolio",
  authors: [{ name: "Robin Maurya" }],
  creator: "Robin Maurya",
  publisher: "Robin Maurya",
  keywords: [
    "Robin Maurya",
    "Robin Maurya TCS",
    "Robin Maurya Tata Consultancy Services",
    "Robin Maurya System Engineer",
    "Robin Maurya portfolio",
    "Full Stack Developer India",
    "React.js Developer",
    "Next.js Developer",
    "Java Spring Boot Developer",
  ],
  ...(siteUrl ? { alternates: { canonical: "/" } } : {}),
  openGraph: {
    type: "profile",
    title: "Robin Maurya | TCS System Engineer & Full Stack Developer",
    description:
      "Meet Robin Maurya, a System Engineer at TCS and Full Stack Developer specializing in React, Next.js, TypeScript, and Java.",
    siteName: "Robin Maurya Portfolio",
    locale: "en_IN",
    ...(siteUrl
        ? {
            images: [
              { url: "/profile-robin-image.jpeg", alt: "Robin Maurya" },
            ],
          }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Robin Maurya | TCS System Engineer & Full Stack Developer",
    description:
      "Official portfolio of Robin Maurya, System Engineer at TCS and Full Stack Developer.",
    ...(siteUrl ? { images: ["/profile-robin-image.jpeg"] } : {}),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Robin Maurya",
              alternateName: "Robinmaurya",
              jobTitle: "System Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Tata Consultancy Services",
                alternateName: "TCS",
              },
              description:
                "System Engineer at TCS and Full Stack Developer specializing in React, Next.js, TypeScript, Java, and Spring Boot.",
              image: "/profile-robin-image.jpeg",
              sameAs: [
                "https://github.com/robin-maurya",
                "https://www.linkedin.com/in/robin-maurya/",
              ],
              ...(siteUrl ? { url: siteUrl } : {}),
            }).replace(/</g, "\\u003c"),
          }}
        />
        <Loader />
        {children}
      </body>
    </html>
  );
}