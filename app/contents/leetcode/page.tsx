"use client";
import { LeetCodeProps } from "@/app/types/types";
import Link from "next/link";
import { Arimo } from "next/font/google";
import { Crimson_Text } from "next/font/google";
import { useState, useEffect } from "react";
import lc from "../../../public/assets/leetcode.svg";
import Image from "next/image";

// Problem data
import { problems1 } from "@/data/problems/problems1";
import { problems2 } from "@/data/problems/problems2";
const allProblems = [...problems1, ...problems2];

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "400",
});

const ArimoFontThick = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const crimsonFont = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  problem: LeetCodeProps;
  index: number;
};

const Problem = ({ problem, index }: Props) => {
  const { id, title, label, difficulty } = problem;
  return (
    <div
      className={`${difficulty === "easy" && "border-l-green-600"} ${
        difficulty === "medium" && "border-l-orange-400"
      } ${
        difficulty === "hard" && "border-l-red-600"
      } border-l-2 col-span-1 m-1 p-2 gap-2 flex flex-col h-full ${
        index % 2 === 1 && "bg-gray-100"
      } bg-gray-50`}
    >
      <Link
        href={`/contents/leetcode/${id}`}
        className="flex justify-between items-center"
      >
        <h1 className="hover:text-red-600 hover:underline">
          <span className="font-bold mr-1">{id}.</span>
          {title}
        </h1>
        <div className={`${ArimoFont.className} text-sm`}>
          {difficulty === "easy" && (
            <div className=" text-green-600 rounded-full px-4">EASY</div>
          )}{" "}
          {difficulty === "medium" && (
            <div className=" text-orange-400 rounded-full px-4">MEDIUM</div>
          )}{" "}
          {difficulty === "hard" && (
            <div className=" text-red-600 rounded-full px-4">HARD</div>
          )}
        </div>
      </Link>

      <div className={`flex gap-2 ${ArimoFont.className} text-sm`}>
        {label.map((l, i) => (
          <div
            key={i}
            className={` bg-gray-200 text-gray-700 rounded-full px-2`}
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
};

const LeetCode = () => {
  const numberPerPage = 10;
  const [curr, setCurr] = useState(1);

  const totalPages = Math.ceil(allProblems.length / numberPerPage);

  const paginatedProblems = allProblems.slice(
    (curr - 1) * numberPerPage,
    curr * numberPerPage
  );

  const Next = () => {
    curr < totalPages && setCurr(curr + 1);
  };

  const Prev = () => {
    curr >= 2 && setCurr(curr - 1);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-2">
        <Image src={lc} width={30} height={30} alt="LeetCode" />
        <h1 className={`text-2xl flex ${crimsonFont.className} mt-3`}>
          LeetCode Problems
        </h1>
      </div>
      <div
        className={`${ArimoFontThick.className} md:w-[800px] w-[370px] grid grid-cols-1 gap-2 items-center`}
      >
        {paginatedProblems.map((problem, i) => (
          <Problem key={problem.id} problem={problem} index={i} />
        ))}
        <div className="flex items-center md:w-[800px] w-[370px] mt-4 md:text-lg justify-center border-b">
          <button
            onClick={Prev}
            className={`mr-8  ${curr === 1 && `text-gray-300`}`}
          >
            -1
          </button>
          <h1 className=" text-gray-400">
            {curr} / {totalPages}
          </h1>
          <button
            onClick={Next}
            className={`ml-8 ${curr === totalPages && `text-gray-300`}`}
          >
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default LeetCode;
