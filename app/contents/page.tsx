"use client";
import { Arimo } from "next/font/google";
import { Crimson_Text } from "next/font/google";
import Link from "next/link";
import { motion } from "motion/react";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const crimsonFont = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

const Card = ({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="border-b-2 border-b-red-600 dark:text-neutral-500 p-2 md:m-2 m-4 gap-2 flex flex-col w-[370px] md:min-w-[600px] dark:bg-neutral-700 bg-gray-100 bg-opacity-50 rounded-t-md border-2 dark:border-t-0 dark:border-l-0 dark:border-r-0 dark:border-b-2 transition-transform hover:translate-x-[10px] duration-300 ease-in-out">
      <Link href={link}>
        <h1 className="hover:text-red-600 dark:text-neutral-300 dark:hover:text-neutral-400 dark:hover:underline">
          ./{title}
        </h1>
      </Link>

      <div className="dark:text-neutral-400">{description}</div>
    </div>
  );
};

const Menu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col justify-center md:items-center ${ArimoFont.className} text-gray-700`}
    >
      <div className="md:w-[800px] flex flex-col items-center gap-4">
        <div className={` ${crimsonFont.className} md:min-w-[600px] m-4`}>
          <h1 className="text-black dark:text-neutral-300 border-b-2 border-red-600 md:min-w-[600px] w-[370px] text-2xl mb-2 m-4">
            Map
          </h1>
          <p className="text-black dark:text-neutral-400 m-4">
            This page is a road map for this website {`:)`}
          </p>
        </div>

        <h1 className="text-lg text-black m-4">
          <span className="text-red-600">./</span>
          <span className="dark:text-neutral-400">Ground_Level</span>
        </h1>
        {/* <Card title="Home" description="As what the name says.." link="/" /> */}
        <Card
          title="About"
          description="A page for the readers to know more about me and the background of this website."
          link="/"
        />
        <Card
          title="Projects"
          description="Past projects (web-dev & others) I have built both independently and collaboratively."
          link="/projects"
        />
        <Card
          title="Personal Blogs"
          description="A free space to express my personal ideas and thoughts."
          link="/blogs"
        />
        <h1 className="text-lg text-black m-4">
          <span className="text-red-600">./</span>
          <span className="dark:text-neutral-400">B1</span>
        </h1>
        <Card
          title="LeetCode"
          description="This page is an online storage room for all the problems I have solved."
          link="/contents/leetcode"
        />
        <Card
          title="Patch Notes"
          description="A page which records all the updates and version changes of this website."
          link="/contents/patchnotes"
        />

        <h1 className="text-lg text-black m-4">
          <span className="text-red-600">./</span>
          <span className="dark:text-neutral-400">External_Links</span>
        </h1>
        <Card
          title="Github"
          description="A link to my Github profile."
          link="https://github.com/zlrkw11"
        />
        <Card
          title="LinkedIn"
          description="A link to my Linkedin profile."
          link="https://www.linkedin.com/in/ray-zhao-kaede11/"
        />
      </div>
      <div className="text-md mt-12 md:min-w-[600px] flex flex-col gap-4 dark:text-neutral-400 items-center">
        Emails:
        <p className="border-l-2 border-red-600 p-2">Ray040406@gmail.com</p>
        <p className="border-l-2 border-red-600 p-2">
          lzha641@aucklanduni.ac.nz
        </p>
      </div>
      <div className="flex justify-center mt-4">
        <Link href="/contents/credits">
          <p className="border-b-2 border-red-600 hover:text-gray-500 dark:text-neutral-400 dark:hover:text-neutral-100">
            Credits
          </p>
        </Link>
      </div>
    </motion.div>
  );
};

export default Menu;
