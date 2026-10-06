
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
import type { IconType } from "react-icons";

const technologies = [
  {
    name: "React.js",
    icon: SiReact,
    color: "text-[#61DAFB]",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178C6]",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-[#F7DF1E]",
  },
  {
    name: "Java",
    icon: FaJava,
    color: "text-[#ED8B00]",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "text-[#6DB33F]",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-[#4479A1]",
  },
];

const roles = [
  "Full Stack Developer",
  "Freelancer",
  "Competitive Programmer",
  "Open Source Contributor",
  "Software Engineer",
];

const floatingTechs: Array<{
  name: string;
  icon: IconType;
  color: string;
  left?: string;
  right?: string;
  top: string;
  line: {
    left?: string;
    right?: string;
    top: string;
    width: string;
    height: string;
  };
}> = [
  {
    name: "React.js",
    icon: SiReact,
    color: "text-[#61DAFB]",
    left: "2%",
    top: "8%",
    line: { left: "50%", top: "100%", width: "1px", height: "34px" },
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-[#3178C6]",
    right: "3%",
    top: "6%",
    line: { left: "50%", top: "100%", width: "1px", height: "28px" },
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-[#F7DF1E]",
    right: "-13%",
    top: "30%",
    line: { left: "30%", top: "100%", width: "1px", height: "26px" },
  },
  {
    name: "Java",
    icon: FaJava,
    color: "text-[#ED8B00]",
    left: "-5%",
    top: "62%",
    line: { left: "80%", top: "100%", width: "1px", height: "10px" },
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "text-[#6DB33F]",
    left: "-15%",
    top: "30%",
    line: { left: "72%", top: "34px", width: "1px", height: "22px" },
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-white",
    left: "88%",
    top: "60%",
    line: { left: "16%", top: "33px", width: "1px", height: "10px" },
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-[#4479A1]",
    left: "42%",
    top: "98%",
    line: { left: "50%", top: "-10px", width: "1px", height: "12px" },
  },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const delay =
      !isDeleting && displayText === currentRole
        ? 2000
        : isDeleting && displayText === ""
          ? 500
          : isDeleting
            ? 90
            : 130;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(
            currentRole.slice(0, displayText.length + 1)
          );
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(
            currentRole.slice(0, displayText.length - 1)
          );
        } else {
          setIsDeleting(false);
          setRoleIndex(
            (previous) => (previous + 1) % roles.length
          );
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <>    
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-73px)] items-center overflow-visible px-6 py-12 md:px-10 md:py-4"
    >
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Blue Glow */}
        <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl animate-pulse" />

        {/* Purple Glow */}
        <div className="absolute bottom-10 right-0 h-80 w-80 rounded-full bg-purple-600/10 blur-3xl animate-pulse [animation-delay:1.5s]" />

        {/* Center Glow */}
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />

        {/* Decorative Rings */}
        <div className="absolute left-[8%] top-[20%] h-32 w-32 rounded-full border border-blue-500/10" />

        <div className="absolute bottom-[15%] right-[8%] h-44 w-44 rounded-full border border-purple-500/10" />

        {/* Orbit Dots */}
        <div className="absolute left-[15%] top-[30%] flex h-8 w-8 items-center justify-center rounded-full border border-blue-400/30 bg-blue-500/10">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400/80" />
        </div>

        <div className="absolute right-[20%] top-[25%] flex h-9 w-9 items-center justify-center rounded-full border border-purple-400/30 bg-purple-500/10 [animation-delay:1s]">
          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400/80" />
        </div>

        <div className="absolute bottom-[25%] left-[30%] flex h-7 w-7 items-center justify-center rounded-full border border-cyan-400/25 bg-cyan-500/10 [animation-delay:2s]">
          <div className="h-1 w-1 animate-pulse rounded-full bg-cyan-300/85" />
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* ================= LEFT CONTENT ================= */}
        <div className="text-center lg:text-left">
          {/* Intro */}
          <p className="animate-[fadeIn_0.8s_ease-out] text-base font-medium text-gray-400 md:text-lg">
            Hi, I&apos;m
          </p>

          {/* Name */}
          <h1 className="mt-2 animate-[fadeUp_0.8s_ease-out] text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl">
            Robin Maurya
          </h1>

          {/* Animated Role */}
          <div className="mt-5 flex min-h-[55px] w-full items-center justify-center lg:justify-start">
            <h2 className="flex items-center text-2xl font-semibold text-blue-500 sm:text-3xl md:text-4xl">
              <span className="shrink-0">
                I&apos;m a&nbsp;
              </span>

              <span className="inline-block w-[230px] text-left font-bold sm:w-[300px] md:w-[450px]">
                {displayText}
                <span className="ml-1 font-normal text-blue-400 animate-pulse">
                  |
                </span>
              </span>
            </h2>
          </div>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl animate-[fadeUp_0.8s_ease-out_0.3s_both] text-base leading-7 text-gray-400 md:text-lg lg:mx-0">
            I build modern, scalable, and user-friendly web
            applications using React.js, Next.js, Java, Spring Boot,
            and MySQL.
          </p>

          {/* Technology Badges */}
          <div className="mx-auto mt-7 flex w-full max-w-3xl flex-wrap justify-center gap-2.5 lg:mx-0 lg:justify-start">
            {technologies.map(
              ({ name, icon: Icon, color }, index) => (
                <div
                  key={name}
                  className="group inline-flex animate-[fadeUp_0.6s_ease-out_both] items-center gap-2 whitespace-nowrap rounded-full border border-gray-800 bg-gray-900/70 px-3.5 py-2 text-sm text-gray-300 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-gray-700 hover:bg-gray-800 hover:text-white"
                  style={{
                    animationDelay: `${0.4 + index * 0.08}s`,
                  }}
                >
                  <Icon
                    className={`text-lg ${color} transition duration-300 group-hover:scale-125`}
                  />

                  <span>{name}</span>
                </div>
              )
            )}
          </div>

          {/* Buttons */}
          <div className="mt-9 flex animate-[fadeUp_0.8s_ease-out_0.9s_both] flex-col justify-center gap-4 sm:flex-row lg:justify-start">
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

          {/* Scroll Indicator */}
          {/* <a
            href="#about"
            className="mt-8 inline-flex animate-bounce flex-col items-center gap-2 text-gray-500 transition hover:text-blue-500 lg:items-start"
            aria-label="Scroll to About section"
          >
            <span className="text-xs uppercase tracking-widest">
              Scroll to explore
            </span>

            <span className="text-lg">↓</span>
          </a> */}
        </div>

        {/* ================= RIGHT PHOTO ================= */}
        <div className="relative flex items-center justify-center">
          {/* Outer Glow */}
          <div className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-3xl animate-pulse sm:h-80 sm:w-80 md:h-96 md:w-96" />

          {/* Rotating Ring */}
          <div className="absolute h-72 w-72 animate-[spin_18s_linear_infinite] rounded-full border border-dashed border-blue-500/30 sm:h-80 sm:w-80 md:h-96 md:w-96" />

          {/* Second Ring */}
          <div className="absolute h-60 w-60 animate-[spin_25s_linear_infinite_reverse] rounded-full border border-purple-500/20 sm:h-72 sm:w-72 md:h-80 md:w-80" />

          {/* Decorative Orbit Dot */}
          <div className="absolute h-3 w-3 animate-[spin_6s_linear_infinite] rounded-full bg-blue-400 shadow-lg shadow-blue-500/50 sm:h-4 sm:w-4" />

          {/* Photo Container */}
          <div className="relative z-10 h-64 w-64 overflow-hidden rounded-full border border-gray-700/80 bg-gray-900 shadow-2xl shadow-blue-900/30 sm:h-72 sm:w-72 md:h-80 md:w-80">
            <img
              src="/profile.jpeg"
              alt="Robin Maurya"
              className="h-full w-full object-cover object-top transition duration-700 hover:scale-105"
            />

            {/* Photo Overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-t from-blue-950/20 via-transparent to-transparent" />
          </div>

          {/* Floating Technology Labels */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 sm:block">
            {floatingTechs.map(({ name, icon: Icon, color, left, top, line, right }, index) => (
              <div
                key={name}
                className="absolute animate-[fadeUp_0.8s_ease-out_both]"
                style={{
                  left,
                  right,
                  top,
                  animationDelay: `${0.6 + index * 0.12}s`,
                }}
              >
                <div
                  className="absolute rounded-full bg-gradient-to-b from-blue-400/80 to-cyan-400/10"
                  style={{
                    left: line.left,
                    right: line.right,
                    top: line.top,
                    width: line.width,
                    height: line.height,
                    boxShadow: "0 0 12px rgba(96, 165, 250, 0.5)",
                  }}
                />

                <div className="flex items-center gap-2 rounded-xl border border-gray-800 bg-gray-900/80 px-3 py-2 text-xs text-gray-300 shadow-lg shadow-blue-950/30 backdrop-blur-md">
                  <Icon className={`inline text-base ${color}`} />
                  <span>{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <section className="text-center">
        
      {/* Scroll Indicator */}
      <a
        href="#about"
        className="mt-8 inline-flex animate-bounce flex-col items-center gap-2 text-gray-500 transition hover:text-blue-500 lg:items-center"
        aria-label="Scroll to About section"
      >
        <span className="text-xs uppercase tracking-widest">
          Scroll to explore
        </span>

        <span className="text-lg">↓</span>
      </a>
    </section>
    </>
  );
};

export default Hero;
