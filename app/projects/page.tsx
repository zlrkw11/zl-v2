"use client";
import { Arimo } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { CodeBracketIcon } from "@heroicons/react/16/solid";
import { WindowIcon } from "@heroicons/react/16/solid";
import { motion } from "motion/react";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

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
  image?: string;
  time: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      className={`md:min-w-[730px] max-w-[330px] ${ArimoFont.className} flex flex-col border-l-2 border-l-red-600 bg-gray-100 dark:bg-neutral-700 bg-opacity-45
        transition-transform duration-300 hover:translate-y-[-10px] hover:shadow-lg ease-in-out`}
    >
      <h1 className="border-b-2 border-dashed border-b-red-600 flex text-gray-500 text-xl m-2 dark:text-neutral-300">
        {name}
        <span className="ml-auto text-lg mt-auto text-gray-400 dark:text-neutral-500">
          {time}
        </span>
      </h1>
      <ul className="md:flex md:gap-2 md:m-2 grid grid-cols-2 m-2">
        {tech.map((s, i) => (
          <li
            className="border border-gray-300 dark:border-neutral-400 dark:text-neutral-400 text-sm md:rounded-full col-span-1 px-2 text-center md:m-0 hover:text-red-600 hover:border-red-600"
            key={i}
          >
            {s}
          </li>
        ))}
      </ul>
      <p className="m-2 border-l-8 border-l-gray-300 dark:border-l-neutral-800 dark:text-neutral-300 p-2 bg-gray-200 dark:bg-neutral-600 rounded-r-sm bg-opacity-50">
        {des}
      </p>
      <div className="m-2 border-l-8 border-l-gray-300 dark:border-l-neutral-800 p-2 bg-gray-200 rounded-r-sm bg-opacity-50 dark:bg-neutral-600">
        <div className="text-nowrap md:flex">
          <CodeBracketIcon className="size-6 dark:text-neutral-300 text-black" />

          <Link
            className="text-gray-500 dark:text-neutral-800 underline dark:hover:text-neutral-400 hover:text-red-600 md:ml-2"
            href={link1}
          >
            {link1}
          </Link>
        </div>
        {link2 && (
          <div className="md:flex">
            <WindowIcon className="size-6 dark:text-neutral-300 text-black" />
            <Link
              className="text-gray-500 dark:text-neutral-800 underline dark:hover:text-neutral-400 hover:text-red-600 md:ml-2"
              href={link2}
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
      className="flex flex-col justify-center md:w-[800px] items-center text-gray-700 gap-8"
    >
      <Project
        name="UASC Web"
        tech={["React", "TailwindCSS", "TypeScript", "Storybook", "Firebase"]}
        des="A fully functional website made for the University of Auckland's Snow Sports Club with a complete user-registration 
        and admin system that can handle large-scale online transfer and bookings with a professional procedure."
        link1="https://github.com/UoaWDCC/uasc-web"
        link2="https://uasc.co.nz/"
        time="2024.04"
      />
      <Project
        name="Personal Portfolio Website"
        tech={["React", "TailwindCSS", "JavaScript", "CSS"]}
        des="A portfolio website I have developed (before this one) completely independently using JavaScript and React. Hosted as a static site using
        Github pages."
        link1="https://github.com/zlrkw11/portfolio-zl"
        link2="https://zlrkw11.github.io/portfolio-zl"
        time="2024.07"
      />
      <Project
        name="Digital Garden"
        tech={["NEXT.JS", "TailwindCSS", "MongoDB", "Google Forms"]}
        des="A web-based online multiplayer game built with NEXT and a team of 6 during the 2024 GDSC Hackathon at the University of Auckland. This game allows
        players to take care of their individual virtual gardens and interact with other players with the implemented friends system."
        link1="https://github.com/Oculux314/digital-garden"
        time="2024.09"
      />
      <Project
        name="Personal Website"
        tech={["NEXT.JS", "TailwindCSS", "CSS", "JSON"]}
        des="A platform I designed, developed and deployed independently. It acts like a portfolio website that 
        showcases my skills, highlights my experiences and additionally, it includes a fully-functioning blogging
        system for me to share my insights."
        link1="https://github.com/zlrkw11/zl-v2"
        link2="https://rayzhao.it.com/"
        time="2025.02"
      />
    </motion.div>
  );
};

export default Projects;
