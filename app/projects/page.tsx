"use client";
import { Arimo } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const Project = ({
  name,
  tech,
  des,
  link1,
  image,
  time,
}: {
  name: string;
  tech: string[];
  des: string;
  link1: string;
  image?: string;
  time: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggle = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <div
        className={`md:min-w-[730px] ${ArimoFont.className} border-l-2 border-l-red-600 bg-gradient-to-r from-white to-gray-200`}
      >
        <h1 className="border-b-2 border-dashed border-b-red-600 text-black text-2xl m-2">
          {name}
        </h1>
        <ul className="flex gap-2 m-2">
          {tech.map((s, i) => (
            <li
              className="border border-gray-500 text-sm rounded-full p-1"
              key={i}
            >
              {s}
            </li>
          ))}
        </ul>
        <p className="m-2">{des}</p>

        <div onClick={toggle}>expand</div>
      </div>
      <div
        className={`${
          ArimoFont.className
        } transition-transform ml-auto border w-[200px] mb-4 duration-300 ${
          expanded
            ? "translate-y-0 opacity-100"
            : "translate-y-[-50%] opacity-0"
        } p-2 `}
      >
        <p>Github</p>
        <span>
          <Link href={link1}>WDCC/UASC</Link>
        </span>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <div className="flex flex-col md:w-[800px] items-center text-gray-700">
      <Project
        name="UASC"
        tech={["React", "TailwindCSS", "TypeScript", "Storybook"]}
        des="A fully functional website made for the University of Auckland's Snow Sports Club with a complete user-registration 
        and admin system that can handle large-scale online transfer and bookings with a professional procedure."
        link1="https://github.com/UoaWDCC/uasc-web"
        time="2024.4"
      />
    </div>
  );
};

export default Projects;
