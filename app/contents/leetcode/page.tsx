"use client";
import { LeetCodeProps } from "@/app/types/types";
import Link from "next/link";
import { Arimo } from "next/font/google";
import { Crimson_Text } from "next/font/google";
import { useState, useEffect, use } from "react";
import lc from "../../../public/assets/leetcode.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
// Problem data
import { problems1 } from "@/data/problems/problems1";
import { problems2 } from "@/data/problems/problems2";
import { problems3 } from "@/data/problems/problems3";
const allProblems = [...problems1, ...problems2, ...problems3];

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
  const labelCount = label.length;
  return (
    <div
      className={`${difficulty === "easy" && "border-l-green-600"} ${
        difficulty === "medium" && "border-l-orange-400"
      } ${
        difficulty === "hard" && "border-l-red-600"
      } border-l-2 col-span-1 m-1 p-2 gap-2 flex flex-col h-full bg-gray-100 bg-opacity-60 rounded-r-sm animate-slide-in-left`}
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
            <div className=" text-green-500 rounded-full">
              <p className="hidden md:inline-block px-4 italic">EASY</p>
              <p className="md:hidden text-green-600">E</p>
            </div>
          )}{" "}
          {difficulty === "medium" && (
            <div className=" text-orange-400 rounded-full">
              <p className="hidden md:inline-block italic px-4">MEDIUM</p>
              <p className="md:hidden text-orange-400">M</p>
            </div>
          )}{" "}
          {difficulty === "hard" && (
            <div className=" text-red-600 rounded-full">
              <p className="hidden md:inline-block italic px-4">HARD</p>
              <p className="md:hidden  text-red-600">H</p>
            </div>
          )}
        </div>
      </Link>

      <div
        className={`md:flex gap-2 ${ArimoFont.className} text-sm ${
          labelCount > 3 ? "grid grid-cols-2" : "flex"
        }`}
      >
        {label.map((l, i) => (
          <div
            key={i}
            className={`bg-gray-200 text-gray-700 rounded-none px-2 md:text-based text-center text-nowrap`}
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
};

const LeetCode = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const numberPerPage = 10;
  const totalPages = Math.ceil(allProblems.length / numberPerPage);
  const initialPage = Number(searchParams.get("page")) || 1;
  const [curr, setCurr] = useState(initialPage);

  const updatePage = (newPage: number) => {
    setCurr(newPage);
    router.push(`?page=${newPage}`, { scroll: false });
  };

  const paginatedProblems = allProblems.slice(
    (curr - 1) * numberPerPage,
    curr * numberPerPage
  );

  const Next = () => {
    if (curr < totalPages) {
      updatePage(curr + 1);
    }
  };

  const Prev = () => {
    if (curr >= 2) updatePage(curr - 1);
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
        <div className="flex items-center md:w-[800px] w-[370px] mt-4 md:text-lg justify-center">
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

export default function Page() {
  return <Suspense fallback={<div>Loading...</div>}>{<LeetCode />}</Suspense>;
}
