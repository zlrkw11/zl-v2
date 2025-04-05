"use client";
import Link from "next/link";
import { useState } from "react";
import cv from "../../public/assets/file-text-clean-svgrepo-com.svg";
import linkedin from "../../public/assets/linkedin-rounded-svgrepo-com.svg";
import Image from "next/image";
import { Arimo } from "next/font/google";
const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "400",
});
const isExpanded = () => {
  const [expanded, setExpanded] = useState(false);
  return expanded;
};

const Nav = () => {
  return (
    <div
      className={`${ArimoFont.className} flex items-center justify-center w-full `}
    >
      <div className="flex justify-center md:text-xl text-lg gap-4 p-2">
        <Link className="hover:underline hover:text-gray-600 " href="/">
          About
        </Link>
        <Link className="hover:underline hover:text-gray-600 " href="/projects">
          Projects
        </Link>
        <Link className="hover:underline hover:text-gray-600 " href="/blogs">
          Blogs
        </Link>{" "}
        <Link className="hover:underline hover:text-gray-600" href="/contents">
          Contents
        </Link>{" "}
        <Link className="ml-8" href="/cv">
          <Image src={cv} alt="CV" width={31} height={31} className="" />
        </Link>
        <Link className="" href="https://www.linkedin.com/in/ray-zhao-kaede11/">
          <Image
            src={linkedin}
            alt="Linkedin"
            width={31}
            height={31}
            className=""
          />
        </Link>
      </div>{" "}
    </div>
  );
};

export default Nav;
