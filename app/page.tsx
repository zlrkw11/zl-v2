import Link from "next/link";
import Image from "next/image";
import Globe from "../public/assets/globe.svg";
import Bulb from "../public/assets/bulb.svg";
import styles from "../app/styles/Home.module.css";
import { Arimo } from "next/font/google";
import next from "../public/assets/next.svg";
import js from "../public/assets/javascript.svg";
import css from "../public/assets/css.svg";
import ts from "../public/assets/typescript.svg";
import uoa from "../public/assets/The University of Auckland New Zealand.svg";
const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});
export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col m-4">
      {/* <div className="md:ml-24 flex justify-center md:justify-normal md:text-2xl text-2xl mt-4 md:mt-12"> */}
      {/* <ul className="flex flex-col md:gap-3 md:text-left">
          <li className="group underline-offset-4">
            <Link href="/about">
              <span className="hover:underline">About</span>
            </Link>
            <span className="opacity-0 ml-4 group-hover:opacity-100 ">◂</span>
          </li>
          <li className="group underline-offset-4">
            <span className="hover:underline">Projects</span>
            <span className="opacity-0 ml-4 group-hover:opacity-100">◂</span>
          </li>
          <li className="group underline-offset-4">
            <span className="hover:underline">Blogs</span>
            <span className="opacity-0 ml-4 group-hover:opacity-100 ">◂</span>
          </li>
          <li className="group underline-offset-4">
            <span className="hover:underline">Contact</span>
            <span className="opacity-0 ml-4 group-hover:opacity-100 ">◂</span>
          </li>{" "} */}
      {/*
     
        
        <div className="col-start-1 col-span-5 md:col-span-6 flex flex-col gap-4">
          
          <div className="gap-4">
            <div className="flex border border-gray-300 rounded-lg p-2 ">
              <p>Ray Zhao</p>
            </div>{" "}
          </div>
        </div>
    
        <div className="col-start-6 md:col-start-7 col-span-1 flex ">
          {" "}
          <Link href="/about">
            <button className="border border-gray-300 p-2 rounded-lg hover:text-red-600 hover:border-red-600">
              search
            </button>
          </Link>
        </div>

        <div className="col-span-8 mb-8"></div>
        <div
          className={`col-span-4 ${styles["move-up-down2"]} md:col-span-2 w-200px justify-center h-[100px] flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Web developer</p>
        </div>
        <div
          className={`col-span-4 ${styles["move-up-down"]} md:col-span-2 w-200px justify-center h-[100px] flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Fullstack</p>
        </div>
        <div
          className={`col-span-4 ${styles["move-up-down2"]} md:col-span-2 w-200px h-[100px] justify-center flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Project-focused</p>
        </div>
        <div
          className={`col-span-4 ${styles["move-up-down"]} md:col-span-2 w-200px h-[100px] justify-center flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Frontend</p>
        </div>
        <div
          className={`col-span-4 ${styles["move-up-down2"]} md:col-span-2 w-200px justify-center h-[100px] flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Visual Appeal</p>
        </div>
        <div
          className={`col-span-4 ${styles["move-up-down2"]} md:col-span-2 w-200px justify-center h-[100px] flex items-center border border-gray-200 rounded-lg`}
        >
          <p>User Experience</p>
        </div>
        <div
          className={`col-span-4 ${styles["move-up-down"]} md:col-span-2 w-200px h-[100px] justify-center flex items-center border border-gray-200 rounded-lg`}
        >
          <p>User Interface</p>
        </div>
        <div
          className={`col-span-4 ${styles["move-up-down"]} md:col-span-2 w-200px h-[100px] justify-center flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Responsive</p>
        </div>
        <div
          className={`col-span-4 ${styles["move-up-down2"]} md:col-span-2 w-200px justify-center h-[100px] flex items-center border border-gray-200 rounded-lg`}
        >
          <Image src={next} alt="next_icon" width={50} height={50} />
        </div>
        <div
          className={`col-span-4 ${styles["move-up-down2"]} md:col-span-2 w-200px justify-center h-[100px] flex items-center border border-gray-200 rounded-lg`}
        >
          <Image src={js} alt="next_icon" width={50} height={50} />
        </div>
        <div
          className={`col-span-4 ${styles["move-up-down2"]} md:col-span-2 w-200px h-[100px] justify-center flex items-center border border-gray-200 rounded-lg`}
        >
          <Image src={ts} alt="next_icon" width={50} height={50} />
        </div>
        <div
          className={`col-span-4 ${styles["move-up-down"]} md:col-span-2 w-200px h-[100px] justify-center flex items-center border border-gray-200 rounded-lg`}
        >
          <Image src={css} alt="next_icon" width={50} height={50} />
        </div> 
      </div>*/}{" "}
      <div
        className={`md:w-[800px] flex flex-col items-center justify-center gap-4 text-gray-700 ${ArimoFont.className}`}
      >
        <div className="w-[370px] md:w-[600px] border gap-4 flex flex-col h-[250px] bg-gray-200 bg-opacity-25 rounded-sm p-2">
          <h1 className="text-4xl">Ray Zhao</h1>
          <p>Determined admist indifference.</p>
          <p>UNDER CONSTRUCTION...</p>
        </div>
        <div className="flex">
          <Image src={uoa} alt="uoa_logo" width={160} height={160} />
          <div className="flex flex-col mt-4">
            {" "}
            <h1 className="text-xl mt-2 font-bold">University of Auckland</h1>
            <h1>3rd Year Computer Science Student</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /*  */
}
