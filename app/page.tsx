"use client";
import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";
import { Arimo } from "next/font/google";
import Nav from "./components/nav";
import "../app/globals.css";
import me from "../public/assets/1745399851673.jpeg";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center m-4 justify-center "
    >
      <div className="flex flex-col md:w-[800px] gap-8">
        <div className="flex flex-col gap-4">
          <h1
            id="about-title-1"
            className="text-3xl dark:text-neutral-300 border-b-2 border-b-red-600"
          >
            /about_me<span className="text-3xl text-red-600">:</span>
          </h1>

          {/* <div id="image-section" className="flex flex-col items-center">
            <Image
              src={me}
              width={200}
              height={200}
              alt="a picture of me"
              className="rounded-[16px] shadow-lg] mb-2"
            />
            <p className={`text-neutral-700 text-sm dark:text-neutral-500`}>
              2025.04, Auckland, New Zealand
            </p>
          </div> */}
          <div>
            <p
              className={`${ArimoFont.className} text-gray-700 dark:text-gray-300`}
            >
              Hello, I'm Ray Zhao. a third year Computer Science student at the{" "}
              <Link href="https://www.auckland.ac.nz/en.html">
                <span className="underline hover:text-gray-400">
                  University of Auckland
                </span>
              </Link>{" "}
              and a self-taught web-developer. I dedicate majority of my time to{" "}
              web & software development, motivated not only by career growth
              but by a strong passion for building innovative solutions that can
              make a real impact. Beyond project work, I'm continuously focused
              on upskilling and expanding my technical capabilities to stay
              ahead in a fast-evolving industry.
            </p>
          </div>
        </div>
        <div className={`flex flex-col gap-4`}>
          <h1
            id="about-title-1"
            className="text-3xl border-b-2 border-b-red-600 dark:text-neutral-300"
          >
            /what_i_do<span className="text-3xl text-red-600">:</span>
          </h1>
          <div className={`flex gap-4 text-gray-700 dark:text-gray-300`}>
            <div className="flex flex-col gap-4">
              <p>In the software / web industry, I:</p>
              <ul className="list-disc pl-6 border-l-4 border-red-600 gap-4 flex flex-col">
                <li>want to learn new skills constantly</li>
                <li>
                  I am a full-stack developer currently focused on backend
                  systems & DevOps with a background in frontend development
                  <div>
                    <Link
                      className="text-gray-400 hover:text-gray-300 underline"
                      href="/contents/leetcode"
                    >
                      {`->`} /leetcode
                    </Link>
                  </div>
                </li>
                <li>
                  I strive to build efficient and scalable applications that are
                  modular and extensible. I often spend a lot of time to
                  optimize the runtime of the applications I'm building.
                </li>
              </ul>
              <div className="border dark:border-gray-400 opacity-25 md:w-[800px] my-4 border-dashed border-gray-700"></div>
              <p className="font-bold">Some of my skills:</p>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Frontend</AccordionTrigger>
                  <AccordionContent>
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Backend</AccordionTrigger>
                  <AccordionContent>
                    <li>Express.js</li>
                    <li>TSOA (Typescript Open API)</li>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Programming Languages</AccordionTrigger>
                  <AccordionContent>
                    <li>Typescript</li>
                    <li>Javascript</li>
                    <li>Python</li>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>{" "}
              {/* here is the quote block */}
              {/* <ul className="list-disc border-r-4 dark:border-red-500 border-red-700 bg-red-400 dark:bg-red-900 dark:text-gray-300 text-white p-2">
              </ul>{" "} */}
            </div>
          </div>{" "}
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="text-lg dark:text-neutral-300">
            Things I enjoy outside of coding:
          </h3>

          <ul className="list-disc pl-6 gap-4 flex flex-col py-2 ">
            <li>playing video games</li>
            <li>listening to music</li>
            <li>reading</li>
          </ul>

          <div className={`flex flex-col gap-4`}>
            <h1
              id="about-title-1"
              className="text-xl border-b-red-600 border-b-2 dark:text-neutral-300"
            >
              /get_in_touch:
            </h1>
            <div className="grid grid-cols-3">
              <p className="col-span-1">ray040406@gmail.com</p>
              <p className="col-span-1">
                <Link
                  className="underline"
                  href={"https://github.com/zlrkw11"}
                  target="_blank"
                >
                  github
                </Link>
              </p>
              <p className="col-span-1">
                <Link
                  className="underline"
                  href={"https://www.linkedin.com/in/ray-zhao-kaede11/"}
                  target="_blank"
                >
                  linkedin
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold border-b-2 border-b-red-600  dark:text-neutral-300">
            Why did I make this website
            <span className="text-3xl text-red-600">:</span>
          </h1>
          <div
            className={`${ArimoFont.className} text-gray-700 dark:text-gray-300`}
          >
            I’ve always wanted to create a website that's more than just a
            portfolio for companies to browse — a personal space that reflects
            individuality.<br></br>
            <br></br>{" "}
            <div className="border-l-8 border-gray-300 dark:border-neutral-400 p-2 bg-gray-100 dark:bg-neutral-700">
              I often think back to the early 2000s, when crafting your own
              blogs on simple HTML pages was the norm — a raw, unfiltered form
              of self-expression. Nowadays, it feels like everyone, myself
              included, is caught up in the endless doom scroll of Instagram
              reels.
            </div>
            <br></br> I also keep myself away from over-commercialized platforms
            that are cluttered with Temu ads and unauthorized personal data
            tracking algorithms. So here it is — a website designed to capture
            the internet at its purest, a <span>digital space</span> that’s
            personal, creative, and free.
          </div>
        </div> */}
      </div>
      {/* <Link href="../about/personal">
        <div className="border-black border-b-2 text-center w-[100px] mt-12 transition hover:border-red-600 hover:text-red-600">
          see more
        </div>
      </Link> */}
    </motion.div>
  );
};

export default About;
