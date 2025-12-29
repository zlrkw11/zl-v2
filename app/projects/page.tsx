"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";
import colab from "@/public/assets/colab.png";
import uasc from "@/public/assets/uasc.png";

const Project = ({
  name,
  tech,
  des,
  link1,
  link2,
  image,
  time,
}: {
  name: string;
  tech: string[];
  des: string;
  link1: string;
  link2?: string;
  image?: string | StaticImageData;
  time: string;
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col md:w-[1000px] w-[330px] gap-4 font-mono border-l-4 border-red-600 pl-4">
      <div className="flex flex-col gap-2 border-b-2 border-red-600 pb-2">
        <div className="flex items-center gap-4 flex-wrap">
          <h1 className="text-xl text-gray-900 dark:text-gray-200">
            /{name.toLowerCase().replace(/\s+/g, "_")}
            <span className="text-red-600">:</span>
          </h1>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            <span className="text-red-600">//</span> {time}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="text-red-600">//</span> tech_stack
        </div>
        <ul className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <li
              key={i}
              className="flex items-center gap-1 text-sm border border-gray-300 dark:border-gray-600 px-2 py-1"
            >
              <span className="text-red-600">[+]</span>
              <span className="text-gray-900 dark:text-gray-200">{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image toggle */}
      {image && (
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setExpanded(!expanded)}
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors text-left"
          >
            <span className="text-red-600">[+]</span>{" "}
            {expanded ? "hide_image" : "show_image"}
          </button>
          {expanded && (
            <div className="border border-gray-300 dark:border-gray-700 rounded">
              <Image
                className="w-full h-auto"
                src={image}
                alt={`${name} screenshot`}
              />
            </div>
          )}
        </div>
      )}

      {/* Description */}
      <div className="flex flex-col gap-2">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <span className="text-red-600">//</span> description
        </div>
        <p className="text-gray-900 dark:text-gray-200 text-sm leading-relaxed">
          {des}
        </p>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-2 border-l-4 border-red-600 pl-4">
        <div className="flex items-center gap-2">
          <span className="text-red-600">[+]</span>
          <span className="text-red-600">github</span>
          <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
          <Link
            href={link1}
            className="text-gray-900 dark:text-gray-200 underline hover:text-red-600 dark:hover:text-red-500 transition-colors break-all"
            target="_blank"
          >
            {link1}
          </Link>
        </div>
        {link2 && (
          <div className="flex items-center gap-2">
            <span className="text-red-600">[+]</span>
            <span className="text-red-600">live_url</span>
            <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
            <Link
              href={link2.startsWith("http") ? link2 : `https://${link2}`}
              className="text-gray-900 dark:text-gray-200 underline hover:text-red-600 dark:hover:text-red-500 transition-colors break-all"
              target="_blank"
            >
              {link2}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col justify-center items-center gap-8 m-4"
    >
      <div className="flex flex-col md:w-[1000px] gap-2 font-mono">
        <h1 className="text-xl border-b-2 border-red-600 pb-2 text-gray-900 dark:text-gray-200">
          /projects
          <span className="text-red-600">:</span>
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          <span className="text-red-600">//</span> A collection of my work
        </p>
      </div>

      <div className="flex flex-col gap-8">
        <Project
          name="Colab"
          tech={[
            "NEXT.JS",
            "TailwindCSS",
            "TSOA",
            "React",
            "AWS",
            "Vercel",
            "Swagger UI",
          ]}
          des="A chemical reagent trading platform with a built-in complete user registration and online order processing & tracking system for all universities across New Zealand. Deployed in vercel and AWS EC2 with Firebase database handling user storage and data operation. Developed with a team of 6."
          link1="https://github.com/uoa-compsci399-s2-2025/capstone-project-s2-2025-team-2"
          link2="colab.exchange"
          time="2025.03 - 2025.08"
          image={colab}
        />
        <Project
          name="UASC Web"
          tech={["React", "TailwindCSS", "TypeScript", "Storybook", "Firebase"]}
          des="A fully functional website made for the University of Auckland's Snow Sports Club with a complete user-registration and admin system that can handle large-scale online transfer and bookings with a professional procedure."
          link1="https://github.com/UoaWDCC/uasc-web"
          link2="https://uasc.co.nz/"
          time="2024.04"
          image={uasc}
        />
        <Project
          name="AUSA Web"
          tech={["NEXT.JS", "TailwindCSS", "TSOA", "React", "Motion"]}
          des="A mental wellbeing support website made for the Auckland University Students' Association, consists of a fully functional frontend and a complete user registration system. Leading a team of 11."
          link1="https://github.com/UoaWDCC/ausa"
          time="IN DEVELOPMENT"
        />
        <Project
          name="Digital Garden"
          tech={["NEXT.JS", "TailwindCSS", "MongoDB", "Google Forms"]}
          des="A web-based online multiplayer game built with NEXT and a team of 6 during the 2024 GDSC Hackathon at the University of Auckland. This game allows players to take care of their individual virtual gardens and interact with other players with the implemented friends system."
          link1="https://github.com/Oculux314/digital-garden"
          time="2024.09"
        />
        <Project
          name="Personal Website"
          tech={["NEXT.JS", "TailwindCSS", "CSS", "JSON"]}
          des="A platform I designed, developed and deployed independently. It acts like a portfolio website that showcases my skills, highlights my experiences and additionally, it includes a fully-functioning blogging system for me to share my insights."
          link1="https://github.com/zlrkw11/zl-v2"
          link2="https://rayzhao.it.com/"
          time="2025.02"
        />
        <Project
          name="Stock Analyzer"
          tech={["Python", "Git"]}
          des="A cli based stock analyzer that fetches over 4000 real-time tickers from NAZDAQ. Implemented a modular structure which accepts plugins for algorithmic assistance. Provides complete analytics with stock price changes in a timeframe that users can choose."
          link1="https://github.com/zlrkw11/z2x-s"
          time="2025.02 - 2025.06"
        />
      </div>
    </motion.div>
  );
};

export default Projects;
