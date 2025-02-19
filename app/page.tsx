import Link from "next/link";
import Image from "next/image";
import Globe from "../public/assets/globe.svg";
import Bulb from "../public/assets/bulb.svg";
import styles from "../app/styles/Home.module.css";
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
      <div className="w-[800px] grid grid-cols-8 gap-4">
        <div className="col-start-1 col-span-6 flex flex-col gap-4">
          <h1 className="flex text-5xl">Welcome to my personal space.</h1>
          <div className="flex gap-4">
            <div className="flex border border-gray-300 rounded-lg p-2 ">
              <p>direct me into zl's digital room</p>
            </div>{" "}
            <button className="">search</button>
          </div>
        </div>
        {/* </ul>{" "} */}
        {/* </div> */}{" "}
        <div className="w-12 col-start-8 col-span-1 flex items-center justify-center">
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
      </div>
    </div>
  );
}
