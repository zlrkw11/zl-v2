"use client";
import Footer from "../components/footer";
import Sona from "../../public/assets/sona.jpeg";
import Image from "next/image";
import Link from "next/link";
const Line = () => {
  return <div className="border border-black w-full h-0"></div>;
};
const About = () => {
  return (
    <div className="flex flex-col items-center m-4 justify-center ">
      <div className="flex flex-col md:w-[800px] gap-4">
        <h1 id="about-title-1" className="font-bold text-2xl">
          about me
        </h1>
        <Line />
        <div id="image-section">
          {/* <Image src={Sona} width={100} height={100} alt="a picture of sona" /> */}
          image here
        </div>
        <div>
          <p className="text-lg">
            Hello. I'm Ray Zhao; a third year compsi student (yea) at{" "}
            <Link href="https://www.auckland.ac.nz/en.html">
              <span className="text-red-500 font-bold hover:text-red-300">
                UOA
              </span>
            </Link>
            . Even though I have been spending a bit of time grinding solo-duo
            ranked in{" "}
            <Link href="https://www.leagueoflegends.com/en-au/">
              <span className="text-orange-500 font-bold hover:text-orange-300">
                League of Legends
              </span>
            </Link>{" "}
            but I still have the passion as always to learn new skills in
            web-development and try to make something cool and original in
            nowadays' world where everything is instantly made with AI(including
            parts of this paragraph).
          </p>
        </div>{" "}
        <h1 className="mt-4 font-bold text-2xl">why did I make this website</h1>
        <Line />
        <p className="text-lg">
          I always wanted to make a website that is not just simply a portfolio
          for the companies to look at. But instead a website that resembles a
          personal space. Where someone can express their individuality. I
          always think back to the early 2000s where writing your own blogs on
          some HTML page was thing. But it seems like everyone now (including
          myself) is too busy & addicted to Instagram reels. So, brick by brick,
          need to build it like how I built my algorithm.
        </p>
      </div>
    </div>
  );
};

export default About;
