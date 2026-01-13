"use client";
import Footer from "./components/footer";
import Image from "next/image";
import Link from "next/link";
import { Arimo } from "next/font/google";
import Nav from "./components/nav";
import me from "../public/assets/1745399851673.jpeg";
import { motion } from "motion/react";
import "./globals.css";
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
      <div className="flex flex-col md:w-[1000px] m-2 gap-8">
        <div className="flex flex-col gap-4">
          <h1
            className={`text-xl border-b-2 border-b-red-600 dark:text-gray-200 font-mono`}
          >
            /about_zl<span className="text-xl text-red-600">:</span>
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
          <div className="font-mono text-sm">
            <div className="flex flex-col gap-2">
              <p>
                <span className="text-gray-500 dark:text-gray-400">//</span>{" "}
                <span className="text-gray-500 dark:text-gray-400">
                  about_zl.ts
                </span>
              </p>
              <p>
                <span className="text-red-600">const</span>{" "}
                <span className="text-black dark:text-gray-200">about</span>{" "}
                <span className="text-gray-600 dark:text-gray-400">=</span>{" "}
                <span className="text-gray-600 dark:text-gray-400">{"{"}</span>
              </p>
            </div>
            <div className="pl-4 flex flex-col gap-2">
              <p>
                <span className="text-red-600">name</span>
                <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
                <span className="text-black dark:text-gray-200">
                  "Ray Zhao"
                </span>
                <span className="text-gray-500 dark:text-gray-400">,</span>
              </p>
              <p>
                <span className="text-red-600">username</span>
                <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
                <span className="text-black dark:text-gray-200">"zlrkw11"</span>
                <span className="text-gray-500 dark:text-gray-400">,</span>
              </p>
              <p>
                <span className="text-red-600">role</span>
                <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
                <span className="text-black dark:text-gray-200">
                  "full stack developer / software engineer"
                </span>
                <span className="text-gray-500 dark:text-gray-400">,</span>
              </p>
              <p>
                <span className="text-red-600">education</span>
                <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
                <span className="text-black dark:text-gray-200">
                  "computer science graduate"
                </span>
                <span className="text-gray-500 dark:text-gray-400">,</span>
              </p>
              <p>
                <span className="text-red-600">university</span>
                <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
                <Link
                  href="https://www.auckland.ac.nz/en.html"
                  className="text-black dark:text-gray-200 underline hover:text-gray-600 dark:hover:text-gray-400"
                >
                  "University of Auckland"
                </Link>
                <span className="text-gray-500 dark:text-gray-400">,</span>
              </p>
              <p>
                <span className="text-red-600">bio</span>
                <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
                <span className="text-black dark:text-gray-200">
                  "I dedicate majority of my time to web & software development,
                  motivated not only by career growth but by a strong passion
                  for building innovative solutions that can make a real impact.
                  Beyond project work, I'm continuously focused on upskilling
                  and expanding my technical capabilities to stay ahead in a
                  fast-evolving industry."
                </span>
                <span className="text-gray-500 dark:text-gray-400">,</span>
              </p>
            </div>
            <div>
              <span className="text-gray-600 dark:text-gray-400">{"}"}</span>
              <span className="text-gray-500 dark:text-gray-400">;</span>
            </div>
          </div>
        </div>
        <div className={`flex flex-col gap-4 `}>
          <h1
            id="about-title-1"
            className={`text-xl border-b-2 border-b-red-600 dark:text-neutral-300 font-mono`}
          >
            /facts<span className="text-xl text-red-600">:</span>
          </h1>
          <div className="font-mono text-sm">
            <div className="flex flex-col gap-3">
              <p>
                <span className="text-red-600">$</span>{" "}
                <span className="text-gray-500 dark:text-gray-400">
                  // facts about me in the industry
                </span>
              </p>
              <ul className="flex flex-col gap-3 list-none border-l-4 border-red-600 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">[1]</span>
                  <span>
                    <span className="text-red-600">favourite techstack</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      :
                    </span>{" "}
                    <span className="text-black dark:text-gray-200">
                      "Typescript, Next.js, TSOA"
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">[2]</span>
                  <span>
                    <span className="text-red-600">role</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      :
                    </span>{" "}
                    <span className="text-black dark:text-gray-200">
                      "full-stack developer"
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">,</span>{" "}
                    <span className="text-red-600">focus</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      :
                    </span>{" "}
                    <span className="text-black dark:text-gray-200">
                      "service API endpoints, business logic, functional
                      components, DevOps"
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">,</span>{" "}
                    <span className="text-red-600">background</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      :
                    </span>{" "}
                    <span className="text-black dark:text-gray-200">
                      "full stack development"
                    </span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">[3]</span>
                  <span>
                    <span className="text-red-600">goal</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      :
                    </span>{" "}
                    <span className="text-black dark:text-gray-200">
                      "build apps that are clean, modular and act like a plugin
                      where you can evolve it constantly."
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">,</span>{" "}
                    <span className="text-red-600">priority</span>
                    <span className="text-gray-600 dark:text-gray-400">
                      :
                    </span>{" "}
                    <span className="text-black dark:text-gray-200">
                      "optimize runtime performance"
                    </span>
                  </span>
                </li>
              </ul>
              <div className="border dark:border-gray-400 opacity-25 md:w-[1000px] my-4 border-dashed border-gray-700"></div>
              <p className="font-mono text-sm font-bold dark:text-gray-200">
                /skills:
              </p>
              <Accordion
                type="multiple"
                defaultValue={["item-1", "item-2", "item-3"]}
                className="w-full dark:text-gray-200"
              >
                <AccordionItem value="item-3">
                  <AccordionTrigger>/techstack</AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4 pb-2 border-b border-gray-300 dark:border-gray-600">
                      <p className="font-mono text-xs text-gray-500 dark:text-gray-400">
                        <span className="text-red-600">//</span>{" "}
                        <span className="text-red-600">[+]</span> language,{" "}
                        <span className="text-red-600">[^]</span> framework,{" "}
                        <span className="text-red-600">[/]</span> DevOps
                        technology, <span className="text-red-600">[*]</span>{" "}
                        DevOps related skills,{" "}
                        <span className="text-red-600">[-]</span> package
                        manager
                      </p>
                    </div>
                    <ul className="flex flex-col gap-2 pl-0 list-none font-mono text-sm">
                      <li className="flex items-center gap-2">
                        <span className="text-red-600">[+]</span>
                        <span>Typescript</span>
                      </li>{" "}
                      <li className="flex items-center gap-2 pl-8">
                        <span className="">----</span>
                        <span className="text-red-600">[^]</span>
                        <span>Typescript Open Api (TSOA)</span>
                      </li>{" "}
                      <li className="flex items-center gap-2 pl-8">
                        <span className="">----</span>
                        <span className="text-red-600">[^]</span>
                        <span>Next.js</span>
                      </li>{" "}
                      <li className="flex items-center gap-2 pl-8">
                        <span className="">----</span>
                        <span className="text-red-600">[^]</span>
                        <span>React</span>
                      </li>{" "}
                      <li className="flex items-center gap-2">
                        <span className="text-red-600">[+]</span>
                        <span>Javascript</span>
                      </li>
                      <li className="flex items-center gap-2 pl-8">
                        <span className="">----</span>
                        <span className="text-red-600">[^]</span>
                        <span>Express.js</span>
                      </li>{" "}
                      <li className="flex items-center gap-2">
                        <span className="text-red-600">[+]</span>
                        <span>Python</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-600">[+]</span>
                        <span>Java</span>
                      </li>
                      <li className="flex items-center gap-2 pl-8">
                        <span className="">----</span>
                        <span className="text-red-600">[^]</span>
                        <span>JAX-RS --[cs331]</span>
                      </li>{" "}
                      <li className="flex items-center gap-2 pl-8">
                        <span className="">----</span>
                        <span className="text-red-600">[^]</span>
                        <span>SpringBoot</span>
                      </li>{" "}
                      <li className="flex items-center gap-2">
                        <span className="text-red-600">[+]</span>
                        <span>C#</span>
                      </li>
                      <li className="flex items-center gap-2 pl-8">
                        <span className="">----</span>
                        <span className="text-red-600">[^]</span>
                        <span>ASP.NET --[cs335]</span>
                      </li>{" "}
                      <li className="flex items-center gap-2">
                        <span className="text-red-600">[+]</span>
                        <span>HTML</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="text-red-600">[+]</span>
                        <span>CSS</span>
                      </li>{" "}
                      <li className="flex items-center gap-2">
                        <span className="">--</span>
                        <span className="text-red-600">[/]</span>
                        <span>AWS</span>
                      </li>{" "}
                      <li className="flex items-center gap-2 pl-10">
                        <span className="">----</span>
                        <span className="text-red-600">[*]</span>
                        <span>EC2</span>
                      </li>{" "}
                      <li className="flex items-center gap-2">
                        <span className="">--</span>
                        <span className="text-red-600">[/]</span>
                        <span>Cloudflare</span>
                      </li>{" "}
                      <li className="flex items-center gap-2">
                        <span className="">--</span>
                        <span className="text-red-600">[/]</span>
                        <span>GitHub</span>
                      </li>{" "}
                      <li className="flex items-center gap-2 pl-10">
                        <span className="">----</span>
                        <span className="text-red-600">[*]</span>
                        <span>GitHub actions</span>
                      </li>{" "}
                      <li className="flex items-center gap-2">
                        <span className=""></span>
                        <span className="text-red-600">[-]</span>
                        <span>PNPM</span>
                      </li>{" "}
                      <li className="flex items-center gap-2 pl-8">
                        <span className="">----</span>
                        <span className="text-red-600">[*]</span>
                        <span>CI-CD pipeline</span>
                      </li>{" "}
                      <li className="flex items-center gap-2 pl-8">
                        <span className="">----</span>
                        <span className="text-red-600">[*]</span>
                        <span>env</span>
                      </li>{" "}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>{" "}
              <div className="mt-4">
                <Link
                  className="px-3 py-1 border border-gray-300 dark:border-neutral-600 rounded transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:border-red-600 dark:hover:border-red-400"
                  href="/contents/leetcode"
                >
                  <span className="text-red-600">→</span> /leetcode_library
                </Link>
              </div>
              {/* here is the quote block */}
              {/* <ul className="list-disc border-r-4 dark:border-red-500 border-red-700 bg-red-400 dark:bg-red-900 dark:text-gray-300 text-white p-2">
              </ul>{" "} */}
            </div>
          </div>{" "}
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col">
            <h1 className="text-xl font-mono border-b-2 border-b-red-600 dark:text-neutral-300">
              /experiences/work
            </h1>
            <div className="flex flex-col gap-4 font-mono">
              <p className="text-gray-700 dark:text-gray-300"></p>
              <ul className="flex flex-col border-l-4 border-red-600 pl-6 dark:text-neutral-300">
                <li className="md:flex items-center gap-3">
                  <span className="text-red-800 ">[2023.2-2025.11]</span>
                  <span>student [BsC: Computer Science]</span>
                  <span>- University of Auckland</span>
                  <span className="text-red-700 font-bold">(graduated)</span>
                </li>{" "}
                <li className="flex items-center gap-3">
                  <span className="text-red-800 font-mono">
                    [2024.2-2024.11]
                  </span>
                  <span>full stack developer</span>{" "}
                  <span>---- Web Development and Consulting Club (WDCC)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-red-800 font-mono">
                    [2025.2-2025.11]
                  </span>
                  <span>tech lead</span>
                  <span>
                    --------------- Web Development and Consulting Club (WDCC)
                  </span>
                </li>
                {/* <li className="flex items-center gap-3">
                  <span className="text-red-600 font-mono">[-]</span>
                  <span></span>
                </li> */}
              </ul>
            </div>
          </div>{" "}
          <div className={`flex flex-col gap-4`}>
            <h1
              id="about-title-1"
              className="text-xl border-b-red-600 font-mono border-b-2 dark:text-neutral-300"
            >
              /contact
            </h1>
            <div className="flex flex-col gap-2 dark:text-neutral-300 font-mono">
              <p className="col-span-1">
                /email<br></br>&nbsp;&nbsp;&nbsp;&nbsp;----ray040406@gmail.com
              </p>
              <p className="col-span-1">
                <Link
                  className="underline"
                  href={"https://github.com/zlrkw11"}
                  target="_blank"
                >
                  /github
                </Link>
              </p>
              <p className="col-span-1">
                <Link
                  className="underline"
                  href={"https://www.linkedin.com/in/ray-zhao-kaede11/"}
                  target="_blank"
                >
                  /linkedin
                </Link>
              </p>
            </div>
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
