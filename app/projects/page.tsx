"use client";
import { Arimo } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import { CodeBracketIcon } from "@heroicons/react/16/solid";
import { WindowIcon } from "@heroicons/react/16/solid";
import { motion, px } from "motion/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import Image, { StaticImageData } from "next/image";
import colab from "@/public/assets/colab.png";
import uasc from "@/public/assets/uasc.png";
const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const images = [colab];

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
  const [expanded, setExpanded] = useState(true);
  const toggle = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      className={`${ArimoFont.className} md:w-[700px] w-[330px] px-4 py-2 flex-col border-l-4 border-l-red-600 dark:bg-neutral-700/75
        transition-transform duration-300 hover:translate-y-[-10px] shadow-lg ease-in-out`}
    >
      <h1 className="border-b-2 border-dashed border-b-red-600 flex text-gray-500 text-xl m-2 dark:text-neutral-300">
        {name}
        <span className="ml-auto text-lg mt-auto text-gray-400 dark:text-neutral-500">
          {time}
        </span>
      </h1>
      <ul className="md:flex md:gap-2 gap-0.5 m-2 grid grid-cols-3">
        {tech.map((s, i) => (
          <li
            className="border-2 border-gray-300 md:text-base duration-300 bg-gray-300/30 dark:border-neutral-400 dark:text-neutral-300 text-xs md:rounded-full px-2 text-center md:m-0 hover:text-red-600 hover:border-red-600"
            key={i}
          >
            {s}
          </li>
        ))}
      </ul>
      <div>
        <ChevronDownIcon
          onClick={toggle}
          className="w-8 h-8 hover:bg-gray-300 bg-gray-200 duration-300 m-2 dark:bg-neutral-500 dark:text-neutral-300"
        />
      </div>
      {expanded && <Image className="mx-2 my-4" src={image || ""} alt="" />}

      <p className="m-2 border-l-8 border-l-gray-300 dark:border-l-red-700 dark:text-neutral-300 p-2 bg-gray-200 dark:bg-neutral-700/50 shadow-md rounded-r-sm bg-opacity-50">
        {des}
      </p>
      <div className="m-2 border-l-8 border-l-gray-300 dark:border-l-red-700 p-2 bg-gray-200 shadow-md rounded-r-sm bg-opacity-50 dark:bg-neutral-600">
        <div className="md:flex">
          <CodeBracketIcon className="size-6 dark:text-neutral-300 text-gray-500" />

          <Link
            className="text-gray-500 dark:text-neutral-300 w-40 break-words md:w-auto col-span-2 underline dark:hover:text-neutral-400 hover:text-red-600 md:ml-2"
            href={link1}
          >
            {link1}
          </Link>
        </div>
        {link2 && (
          <div className="md:flex">
            <WindowIcon className="size-6 dark:text-neutral-300 text-gray-500" />
            <Link
              className="text-gray-500 dark:text-neutral-300 underline w-40 break-words md:w-auto dark:hover:text-neutral-400 hover:text-red-600 md:ml-2"
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
      className="flex flex-col justify-center items-center text-gray-700 gap-8 m-2"
    >
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
        des="A chemical reagent trading platform with a built-in complete user registration and online order processing & tracking system for all universities across New Zealand.
        Deployed in vercel and AWS EC2 with Firebase database handling user storage and data operation. Developed with a team of 6."
        link1="https://github.com/uoa-compsci399-s2-2025/capstone-project-s2-2025-team-2"
        link2="colab.exchange"
        time="2025.03 - 2025.08"
        image={colab}
      />{" "}
      <Project
        name="UASC Web"
        tech={["React", "TailwindCSS", "TypeScript", "Storybook", "Firebase"]}
        des="A fully functional website made for the University of Auckland's Snow Sports Club with a complete user-registration 
        and admin system that can handle large-scale online transfer and bookings with a professional procedure."
        link1="https://github.com/UoaWDCC/uasc-web"
        link2="https://uasc.co.nz/"
        time="2024.04"
        image={uasc}
      />
      <Project
        name="AUSA Web"
        tech={["NEXT.JS", "TailwindCSS", "TSOA", "React", "Motion"]}
        des="A mental wellbeing support website made for the Auckland University Students' Association, consists of a
        fully functional frontend and a complete user registration system. Leading a team of 11."
        link1="https://github.com/UoaWDCC/ausa"
        time="IN DEVELOPMENT"
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
      />{" "}
      <Project
        name="Stock Analyzer"
        tech={["Python", "Git"]}
        des="A cli based stock analyzer that fetches over 4000 real-time tickers from NAZDAQ. Implemented a modular 
        structure which accepts plugins for algorithmic assistance. Provides complete analytics with stock price changes in a timeframe that users can choose."
        link1="https://github.com/zlrkw11/z2x-s"
        time="2025.02 - 2025.06"
      />
    </motion.div>
  );
};

export default Projects;
