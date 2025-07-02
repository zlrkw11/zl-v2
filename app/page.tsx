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
            className="text-3xl dark:text-neutral-300 font-bold border-b-2 border-b-red-600"
          >
            About me<span className="text-3xl text-red-600">:</span>
          </h1>

          <div id="image-section" className="flex flex-col items-center">
            <Image
              src={me}
              width={200}
              height={200}
              alt="a picture of me"
              className="rounded-full"
            />
            <p
              className={`text-neutral-400 ${ArimoFont.className} text-sm dark:text-neutral-500`}
            >
              2025.04, Auckland, New Zealand
            </p>
          </div>
          <div>
            <p
              className={`${ArimoFont.className} text-gray-700 dark:text-gray-300 text-lg`}
            >
              Hello, I'm Ray Zhao. a third year compsi student at the{" "}
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
            className="text-3xl font-bold border-b-2 border-b-red-600 dark:text-neutral-300"
          >
            More about me<span className="text-3xl text-red-600">:</span>
          </h1>
          <div
            className={`flex gap-4 ${ArimoFont.className} text-gray-700 dark:text-gray-300`}
          >
            <div className="flex flex-col gap-4">
              <p>In the software / web industry, I:</p>
              <ul className="list-disc pl-6 border-l-4 border-red-600 gap-4 flex flex-col">
                <li>want to learn new skills constantly</li>
                <li>
                  am more heavy on the frontend (but I like LeetCode and want to
                  do well in algorithm competitions)<div></div>
                  <span>
                    <Link
                      className="text-gray-400 hover:text-gray-300 underline"
                      href="/contents/leetcode"
                    >
                      {`->`} LeetCode Storage Room
                    </Link>
                  </span>
                </li>
                <li>
                  learn things from others quite fast and develop something more
                  on top of it
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
                  <AccordionTrigger>Programming Languages:</AccordionTrigger>
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
        </div>
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
