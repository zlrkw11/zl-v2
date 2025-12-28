"use client";
import { Arimo } from "next/font/google";
import { Crimson_Text } from "next/font/google";
import Link from "next/link";
import { motion } from "motion/react";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const crimsonFont = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

// const Card = ({
//   title,
//   description,
//   link,
// }: {
//   title: string;
//   description: string;
//   link: string;
// }) => {
//   return (
//     <div className="dark:text-neutral-500 md:m-2 m-4 p-2 gap-2 flex flex-col w-[370px] md:min-w-[600px] ">
//       <Link href={link}>
//         <h1 className="hover:text-red-600 dark:text-neutral-300 dark:hover:text-neutral-400 dark:hover:underline">
//           ./{title}
//         </h1>
//       </Link>

//       <div className="dark:text-neutral-400">{description}</div>
//     </div>
//   );
// };

const Menu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex flex-col text-gray-700`}
    >
      <div className="w-full h-screen flex flex-col text-lg gap-4 m-8 border-l-2 border-red-700 pl-2 font-mono">
        <h1 className="text-xl text-black mr-auto">
          <span className="dark:text-neutral-400">/App</span>
        </h1>
        <div className="flex flex-col gap-4 ml-8 text-xl border-l-2 border-red-700 pl-2 dark:text-gray-300">
          <Link href="/">
            {" "}
            <div className="hover:underline underline-offset-2">/about</div>
          </Link>

          <Link href="/projects">
            {" "}
            <div className="hover:underline underline-offset-2">/projects</div>
          </Link>
          <Link href="/blogs">
            {" "}
            <div className="hover:underline underline-offset-2">/blogs</div>
          </Link>
          <Link href="/contents">
            {" "}
            <div className="">
              <p className="hover:underline underline-offset-2">/contents</p>
              <div className="border-l-2 border-red-700 pl-2 ml-8 mt-2 flex flex-col gap-2">
                <Link href="/contents/leetcode">
                  {" "}
                  <div className="hover:underline underline-offset-2">
                    /leetcode
                  </div>
                </Link>
                <Link href="/contents/playlist">
                  {" "}
                  <div className="hover:underline underline-offset-2">
                    /playlist
                  </div>
                </Link>
                <Link href="/contents/patchnotes">
                  {" "}
                  <div className="hover:underline underline-offset-2">
                    /patch_notes
                  </div>
                </Link>
                <Link href="/contents/credits">
                  {" "}
                  <div className="hover:underline underline-offset-2">
                    /credits
                  </div>
                </Link>
              </div>
            </div>
          </Link>
        </div>
        {/* <Card title="Home" description="As what the name says.." link="/" /> */}
      </div>
    </motion.div>
  );
};

export default Menu;
