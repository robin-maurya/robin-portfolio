
"use client";

import { useEffect, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const technologies = [
  { name: "React.js", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Java", icon: FaJava, color: "text-[#ED8B00]" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-[#6DB33F]" },
  { name: "MySQL", icon: SiMysql, color: "text-[#4479A1]" },
];

const roles = [
  "Full Stack Developer",
  "Freelancer",
  "Competitive Programmer",
  "Open Source Contributor",
  "Software Engineer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);


useEffect(() => {
  const currentRole = roles[roleIndex];

  let delay = 180;

  // Typing complete → pause
  if (!isDeleting && displayText === currentRole) {
    delay = 2000;
  }

  // Deleting complete → small pause before next role
  if (isDeleting && displayText === "") {
    delay = 400;
  }

  const timer = setTimeout(() => {
    if (!isDeleting) {
      // Type one character
      setDisplayText(currentRole.slice(0, displayText.length + 1));

      // Start deleting after complete word
      if (displayText.length + 1 === currentRole.length) {
        setIsDeleting(true);
      }
    } else {
      // Delete one character
      setDisplayText(currentRole.slice(0, displayText.length - 1));

      // Move to next role ONLY after completely deleting
      if (displayText.length === 1) {
        setIsDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      }
    }
  }, delay);

  return () => clearTimeout(timer);
}, [displayText, isDeleting, roleIndex]);


  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-73px)] items-center justify-center overflow-hidden px-6 py-10 md:py-14"
    >
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 animate-pulse rounded-full bg-blue-600/10 blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 animate-pulse rounded-full bg-purple-600/10 blur-3xl [animation-delay:1.5s]" />

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500/5" />
      </div>

      <div className="mx-auto w-full max-w-5xl text-center">
        {/* Intro */}
        <p className="animate-[fadeIn_0.8s_ease-out] text-base font-medium text-gray-400 md:text-lg">
          Hi, I&apos;m
        </p>

        {/* Name */}
        <h1 className="mt-2 animate-[fadeUp_0.8s_ease-out] text-5xl font-bold tracking-tight text-white md:text-7xl">
          Robin Maurya
        </h1>

        {/* Animated Role */}
        <div className="mt-5 flex min-h-[48px] w-full items-center justify-center md:min-h-[58px]">
          <h2 className="text-2xl font-semibold text-blue-500 md:text-4xl">
            I&apos;m a{" "}
            <span className="inline-block min-w-[280px] text-left font-bold md:min-w-[390px]">
              {displayText}
              <span className="ml-1 animate-pulse font-normal text-blue-400">
                |
              </span>
            </span>
          </h2>
        </div>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-2xl animate-[fadeUp_0.8s_ease-out_0.3s_both] text-base leading-7 text-gray-400 md:text-lg">
          I build modern, scalable, and user-friendly web applications using
          React.js, Next.js, Java, Spring Boot, and MySQL.
        </p>

        {/* Technology badges */}
        <div className="mx-auto mt-7 flex max-w-4xl flex-wrap justify-center gap-3">
          {technologies.map(({ name, icon: Icon, color }, index) => (
            <div
              key={name}
              className="group flex animate-[fadeUp_0.6s_ease-out_both] items-center gap-2 rounded-full border border-gray-800 bg-gray-900/70 px-4 py-2.5 text-sm text-gray-300 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:bg-gray-800 hover:text-white"
              style={{
                animationDelay: `${0.4 + index * 0.08}s`,
              }}
            >
              <Icon
                className={`text-lg ${color} transition duration-300 group-hover:scale-125`}
              />

              <span>{name}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="mt-9 flex animate-[fadeUp_0.8s_ease-out_0.9s_both] flex-col justify-center gap-4 sm:flex-row">
          <a
            href="#projects"
            className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25"
          >
            View My Work
          </a>

          <a
            href="/Robin_Maurya_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-white transition duration-300 hover:-translate-y-1 hover:border-gray-600 hover:bg-gray-800"
          >
            Download Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <a
          href="#about"
          className="mt-8 inline-flex animate-bounce flex-col items-center gap-2 text-gray-500 transition hover:text-blue-500"
          aria-label="Scroll to About section"
        >
          <span className="text-xs uppercase tracking-widest">
            Scroll to explore
          </span>

          <span className="text-lg">↓</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
