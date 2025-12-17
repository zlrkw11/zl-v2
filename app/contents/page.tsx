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
      className={`flex flex-col justify-center md:items-center text-gray-700`}
    >
      <div className="md:w-[800px] flex flex-col text-lg gap-2">
        <h1 className="text-lg text-black mr-auto">
          <span className="text-red-600">/</span>
          <span className="dark:text-neutral-400">App</span>
        </h1>
        <div className="flex flex-col gap-2 ml-4 underline underline-offset-2">
          <Link href="/">
            {" "}
            <div>/about</div>
          </Link>

          <Link href="/">
            {" "}
            <div>/projects</div>
          </Link>
          <Link href="/">
            {" "}
            <div>/blogs</div>
          </Link>
          <Link href="/">
            {" "}
            <div>/contents</div>
          </Link>
        </div>
        {/* <Card title="Home" description="As what the name says.." link="/" /> */}
      </div>
    </motion.div>
  );
};

export default Menu;
