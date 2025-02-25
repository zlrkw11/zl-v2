"use client";
import Footer from "../components/footer";
import Sona from "../../public/assets/sona.jpeg";
import Image from "next/image";
import Link from "next/link";
import { Arimo } from "next/font/google";
import Nav from "../components/nav";
import "../globals.css";

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

          <div id="image-section">
            {/* <Image src={Sona} width={100} height={100} alt="a picture of sona" /> */}
            image here
          </div>
          <div>
            <p className={`${ArimoFont.className} text-gray-700`}>
              Hello, I'm Ray Zhao. a third year compsi student (yea) at{" "}
              <Link href="https://www.auckland.ac.nz/en.html">
                <span className="text-red-500 font-bold hover:text-red-300">
                  UOA
                </span>
              </Link>{" "}
              and a self-taught web-developer. Even though I have been spending
              a bit of time grinding solo-duo ranked in{" "}
              <Link href="https://www.leagueoflegends.com/en-au/">
                <span className="text-orange-500 font-bold hover:text-orange-300">
                  League of Legends
                </span>
              </Link>{" "}
              but I still have the passion as always to learn new skills in
              web-development and try to make something cool and original in
              nowadays' world where everything is instantly made with AI
              (including parts of this paragraph).
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
                could be confident enough. But I always end up
                procrastinating...
              </p>
              <p>In the software / web industry, I:</p>
              <ul id="list" className="list-disc pl-6 ">
                <li>
                  want to be a dev, not so much of a computer scientist (skill
                  issue tbh)
                </li>
                <li>
                  am more heavy on the frontend (but secrectly I really want to
                  practice and do well in algorithm competitions)
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
            I always wanted to make a website that is not just simply a
            portfolio for the companies to look at. But instead a website that
            resembles a personal space. Where someone can express their
            individuality. I always think back to the early 2000s where writing
            your own blogs on some HTML page was thing. But it seems like
            everyone now (including myself) is too busy & addicted to Instagram
            reels. I also refuse to use anything over commercialzed like
            instagram where it is full of Temu ads. So here it is, a website
            that is made to feel the internet at its purest.
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
