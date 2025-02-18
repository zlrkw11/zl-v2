import Link from "next/link";
import Image from "next/image";
import Globe from "../public/assets/globe.svg";
import styles from "../app/styles/Home.module.css";
export default function Home() {
  return (
    <div className="flex ">
      <div className="md:ml-24 flex justify-center md:justify-normal md:text-2xl text-2xl mt-4 md:mt-12">
        <ul className="flex flex-col md:gap-3 md:text-left">
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
          </li>{" "}
          <div className="w-12 mt-8 md:mt-4">
            <Link href="/" className="">
              <Image
                src={Globe}
                alt="globe_icon"
                width={30}
                height={30}
                className={`${styles.rotating}`}
              />
            </Link>
          </div>
        </ul>{" "}
      </div>

      <h1 className="flex ml-auto mr-24 mt-56">Welcome to my personal space</h1>
    </div>
  );
}
