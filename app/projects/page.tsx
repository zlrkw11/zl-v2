"use client";
import { Arimo } from "next/font/google";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import arrow from "../../public/assets/arrow.svg";

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
      className={`md:min-w-[730px] ${ArimoFont.className} flex flex-col border-l-2 border-l-red-600 bg-gradient-to-r from-white to-gray-200`}
    >
      <h1 className="border-b-2 border-dashed border-b-red-600 text-black text-2xl m-2">
        {name}
      </h1>
      <ul className="flex gap-2 m-2">
        {tech.map((s, i) => (
          <li
            className="border border-gray-300 bg-gradient-to-tr from-gray-200 to-white text-sm rounded-full p-1"
            key={i}
          >
            {s}
          </li>
        ))}
      </ul>
      <p className="m-2">{des}</p>
      <div className="m-2">
        <p>
          Github repo:
          <Link className="text-gray-500 hover:text-red-600 ml-2" href={link1}>
            {link1}
          </Link>
        </p>
        {link2 && (
          <p>
            Visit:
            <Link
              className="text-gray-500 hover:text-red-600 ml-2"
              href={link2}
            >
              {link2}
            </Link>
          </p>
        )}
      </div>
    </div>
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
        link2="https://uasc.co.nz/"
        time="2024.4"
      />
    </div>
  );
};

export default Projects;
