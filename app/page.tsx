import Link from "next/link";
import Image from "next/image";
import Globe from "../public/assets/globe.svg";
import Bulb from "../public/assets/bulb.svg";
import styles from "../app/styles/Home.module.css";
import { Arimo } from "next/font/google";
const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});
export default function Home() {
  return (
    <div className="flex justify-center items-center ">
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
      <div
        className={`w-[800px] grid grid-cols-8 gap-4 text-gray-700 ${ArimoFont.className}`}
      >
        <div className="col-start-1 col-span-6 flex flex-col gap-4">
          {/* <h1 className="flex text-5xl">Welcome to my personal space.</h1> */}
          <div className="gap-4">
            <div className="flex border border-gray-300 rounded-lg p-2 ">
              <p>www.zl.digital.domain</p>
            </div>{" "}
          </div>
        </div>
        {/* </ul>{" "} */}
        {/* </div> */}
        <div className="col-start-6 md:col-start-7 col-span-1 flex ">
          {" "}
          <button className="border border-gray-300 p-2 rounded-lg hover:text-red-600 hover:border-red-600">
            <Link href="/about">search</Link>
          </button>
        </div>
        <div className="w-12 col-start-8 col-span-1 flex items-center justify-center">
          {" "}
          <Link href="/" className="">
            <Image
              src={Globe}
              alt="globe_icon"
              width={30}
              height={30}
              className={`${styles.rotating}`}
            />
          </Link>
        </div>{" "}
        <div className="col-span-8 mb-8"></div>
        <div
          className={`${styles["move-up-down2"]} col-span-2 w-200px justify-center h-[100px] flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Web developer</p>
        </div>
        <div
          className={`${styles["move-up-down"]} col-span-2 w-200px justify-center h-[100px] flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Frontend</p>
        </div>
        <div
          className={`${styles["move-up-down2"]} col-span-2 w-200px h-[100px] justify-center flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Project-focused</p>
        </div>
        <div
          className={`${styles["move-up-down"]} col-span-2 w-200px h-[100px] justify-center flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Innovative</p>
        </div>
        <div
          className={`${styles["move-up-down2"]} col-span-2 w-200px justify-center h-[100px] flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Web developer</p>
        </div>
        <div
          className={`${styles["move-up-down2"]} col-span-2 w-200px justify-center h-[100px] flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Frontend</p>
        </div>
        <div
          className={`${styles["move-up-down"]} col-span-2 w-200px h-[100px] justify-center flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Project-focused</p>
        </div>
        <div
          className={`${styles["move-up-down"]} col-span-2 w-200px h-[100px] justify-center flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Innovative</p>
        </div>
        <div
          className={`${styles["move-up-down2"]} col-span-2 w-200px justify-center h-[100px] flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Web developer</p>
        </div>
        <div
          className={`${styles["move-up-down2"]} col-span-2 w-200px justify-center h-[100px] flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Frontend</p>
        </div>
        <div
          className={`${styles["move-up-down2"]} col-span-2 w-200px h-[100px] justify-center flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Project-focused</p>
        </div>
        <div
          className={`${styles["move-up-down"]} col-span-2 w-200px h-[100px] justify-center flex items-center border border-gray-200 rounded-lg`}
        >
          <p>Innovative</p>
        </div>
      </div>
    </div>
  );
}
