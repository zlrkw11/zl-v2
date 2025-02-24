"use client";
import Link from "next/link";
import { useState } from "react";

const isExpanded = () => {
  const [expanded, setExpanded] = useState(false);
  return expanded;
};

const Nav = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex justify-center md:text-xl text-lg gap-4 p-2">
        <Link className="hover:underline hover:text-gray-700" href="/">
          Home
        </Link>
        <Link className="hover:underline hover:text-gray-600 " href="/about">
          About
        </Link>
        <Link className="hover:underline hover:text-gray-600 " href="/">
          Projects
        </Link>
        <Link className="hover:underline hover:text-gray-600 " href="/">
          Blogs
        </Link>{" "}
        <Link className="hover:underline hover:text-gray-600" href="/contents">
          Contents
        </Link>
      </div>
    </div>
  );
};

export default Nav;
