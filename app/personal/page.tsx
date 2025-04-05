import Link from "next/link";
import Image from "next/image";
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
      <div
        className={`md:w-[800px] flex flex-col items-center justify-center gap-4 text-gray-700 ${ArimoFont.className}`}
      ></div>
    </div>
  );
}
{
  /*  */
}
