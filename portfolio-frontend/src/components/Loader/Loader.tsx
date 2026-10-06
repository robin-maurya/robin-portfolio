"use client";

import { useEffect, useState } from "react";
import "./loader.css";

const technologies = [
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Java",
  "Spring Boot",
  "MySQL",
  "REST API",
  "Redux",
  "Tailwind CSS",
  "Bootstrap",
  "HTML",
  "CSS",
  "Sass",
  "Material UI",
];

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            setIsLoading(false);
          }, 500);

          return 100;
        }

        return prev + 2;
      });
    }, 40);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="loader-screen">
      <div className="loader-wrapper">

        {/* Circular Progress */}
        <div
          className="progress-ring"
          style={{
            background: `conic-gradient(
              from -90deg,
              #ffffff ${progress * 3.6}deg,
              rgba(255, 255, 255, 0.08) ${progress * 3.6}deg
            )`,
          }}
        >
          <div className="progress-ring-inner" />
        </div>

        {/* Outer Ring */}
        <div className="outer-ring">
          <div className="ring-dot" />
        </div>

        {/* Connecting Lines */}
        <div className="connections">
          {technologies.map((_, index) => (
            <span
              key={index}
              className="connection-line"
              style={{
                transform: `rotate(${
                  index * (360 / technologies.length)
                }deg)`,
              }}
            />
          ))}
        </div>

        {/* Technology Nodes */}
        <div className="tech-network">
          {technologies.map((tech, index) => {
            const angle =
              (index * 360) / technologies.length - 90;

            const radius = 190;

            const x =
              Math.cos((angle * Math.PI) / 180) * radius;

            const y =
              Math.sin((angle * Math.PI) / 180) * radius;

            return (
              <div
                key={tech}
                className="tech-node"
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                <span className="node-dot" />
                <span className="tech-name">
                  {tech}
                </span>
              </div>
            );
          })}
        </div>

        {/* Center */}
        <div className="center-core">
          <div className="core-circle">
            <span className="code-icon">
              &lt;/&gt;
            </span>
          </div>

          <div className="developer-name">
            ROBIN
          </div>

          <div className="initializing">
            INITIALIZING<span>...</span>
          </div>
        </div>

        {/* Progress Text */}
        <div className="progress-wrapper">
          <div className="progress-text">
            <span>LOADING PORTFOLIO</span>
            <span>{progress}%</span>
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}