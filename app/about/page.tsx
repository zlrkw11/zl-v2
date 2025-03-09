"use client";
import Footer from "../components/footer";
import Sona from "../../public/assets/sona.jpeg";
import Image from "next/image";
import Link from "next/link";
import { Arimo } from "next/font/google";
import Nav from "../components/nav";
import "../globals.css";
import me from "../../public/assets/r.jpg";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const About = () => {
  return (
    <div className="flex flex-col items-center m-4 justify-center ">
      <div className="flex flex-col md:w-[800px] gap-8">
        <div className="flex flex-col gap-4">
          <h1
            id="about-title-1"
            className="text-3xl font-bold border-b-2 border-b-red-600"
          >
            about me<span className="text-3xl text-red-600">:</span>
          </h1>

          <div id="image-section" className="flex flex-col items-center">
            <Image src={me} width={200} height={200} alt="a picture of sona" />
            <p className={`text-gray-400 ${ArimoFont.className}`}>
              this is not me actually
            </p>
          </div>
          <div>
            <p className={`${ArimoFont.className} text-gray-700`}>
              Hello, I'm Ray Zhao. a third year compsi student (yea) at{" "}
              <Link href="https://www.auckland.ac.nz/en.html">
                <span className="text-red-500 font-bold hover:text-red-300">
                  UOA
                </span>
              </Link>{" "}
              and a self-taught web-developer. I dedicate most of my leisure
              time to web & software development, not just for financial gain
              but because I'm driven by a passion to create innovative solutions
              that can make some impact on the world using my skills.
            </p>
          </div>
        </div>
        <div className={`flex flex-col gap-4`}>
          <h1
            id="about-title-1"
            className="text-3xl font-bold border-b-2 border-b-red-600"
          >
            more about me<span className="text-3xl text-red-600">:</span>
          </h1>

          <div className={`flex gap-4 ${ArimoFont.className} text-gray-700`}>
            <div className="flex flex-col gap-4">
              <p>
                I always wanted to be extremely competitve in a way that so I
                could prove myself. But I always end up procrastinating...
              </p>
              <p>In the software / web industry, I:</p>
              <ul id="list" className="list-disc pl-6 ">
                <li>
                  want to be a dev, not so much of a computer scientist (skill
                  issue tbh)
                </li>
                <li>
                  am more heavy on the frontend (but secretly I really like
                  LeetCode want to practice and do well in algorithm
                  competitions){" "}
                  <span>
                    <Link
                      className="text-orange-500 hover:text-orange-300 underline"
                      href="/contents/leetcode"
                    >
                      LeetCode Storage Room
                    </Link>
                  </span>
                </li>
                <li>
                  learn things from others quite fast and develop something more
                  on top of it
                </li>
              </ul>
              <p className="font-bold">Fun facts:</p>
              <p>my favourite fruit is watermelon</p>
              <p>still on my way to break my 75kg bench PR</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold border-b-2 border-b-red-600">
            why did I make this website
            <span className="text-3xl text-red-600">:</span>
          </h1>
          <p className={`${ArimoFont.className} text-gray-700`}>
            I’ve always wanted to create a website that's more than just a
            portfolio for companies to browse — a personal space that reflects
            individuality. I often think back to the early 2000s, when crafting
            your own blogs on simple HTML pages was the norm — a raw, unfiltered
            form of self-expression. Nowadays, it feels like everyone, myself
            included, is caught up in the endless doom scroll of Instagram
            reels. I also keep myself away from over-commercialized platforms
            that are cluttered with Temu ads and unauthorized personal data
            tracking algorithms. So here it is — a website designed to capture
            the internet at its purest, a digital space that’s personal,
            creative, and free.
          </p>
        </div>
      </div>
      <Link href="../about/personal">
        <div className="border-black border-b-2 text-center w-[100px] mt-12 transition hover:border-red-600 hover:text-red-600">
          see more
        </div>
      </Link>
    </div>
  );
};

export default About;
