"use client";
import { LeetCodeProps } from "@/app/types/types";
import Link from "next/link";
import { useState } from "react";
import lc from "../../../public/assets/leetcode.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "motion/react";
// Problem data
import { problems1 } from "@/data/problems/problems1";
import { problems2 } from "@/data/problems/problems2";
import { problems3 } from "@/data/problems/problems3";
const allProblems = [...problems1, ...problems2, ...problems3];

type Props = {
  problem: LeetCodeProps;
  index: number;
};

const Problem = ({ problem, index }: Props) => {
  const { id, title, label, difficulty } = problem;

  const getDifficultyColor = () => {
    if (difficulty === "easy") return "text-green-600 dark:text-green-400";
    if (difficulty === "medium") return "text-orange-500 dark:text-orange-400";
    return "text-red-600 dark:text-red-400";
  };

  const getDifficultySymbol = () => {
    if (difficulty === "easy") return "✓";
    if (difficulty === "medium") return "⚠";
    return "✗";
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="font-mono text-sm"
    >
      <Link
        href={`/contents/leetcode/${id}`}
        className="flex items-start gap-3 group hover:bg-gray-100 dark:hover:bg-neutral-700 px-2 py-1 rounded transition-colors"
      >
        <span className="text-gray-400 dark:text-gray-500 text-xs select-none">
          {String(id).padStart(3, "0")}
        </span>

        <div className="flex-1 flex flex-col gap-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-red-600 dark:text-red-400">function</span>
            <span className="text-blue-600 dark:text-blue-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              {title.replace(/\s+/g, "")}()
            </span>
            <span className="text-gray-500 dark:text-gray-400">{"{"}</span>
          </div>

          <div className="pl-4 flex items-center gap-2 text-xs">
            <span className="text-gray-500 dark:text-gray-400">//</span>
            <span className={`${getDifficultyColor()} font-semibold`}>
              @difficulty:
            </span>
            <span className={getDifficultyColor()}>
              {difficulty.toUpperCase()}
            </span>
            {/* <span className={getDifficultyColor()}>
              {getDifficultySymbol()}
            </span> */}
          </div>

          <div className="pl-4 flex items-center gap-2 text-xs flex-wrap">
            <span className="text-gray-500 dark:text-gray-400">//</span>
            <span className="text-purple-600 dark:text-purple-400">tags:</span>
            <span className="text-gray-600 dark:text-gray-300">
              [
              {label.map((l, i) => (
                <span key={i}>
                  <span className="text-gray-500 dark:text-gray-400">"</span>
                  <span>{l}</span>
                  <span className="text-gray-500 dark:text-gray-400">"</span>
                  {i < label.length - 1 && (
                    <span className="text-gray-500 dark:text-gray-400">, </span>
                  )}
                </span>
              ))}
              ]
            </span>
          </div>

          <span className="text-gray-500 dark:text-gray-400">{"}"}</span>
        </div>
      </Link>
    </motion.div>
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
    <div className="flex flex-col items-center gap-6 m-4">
      {/* Terminal-style header */}
      <div className="md:w-[900px] w-full">
        <div className="flex items-center gap-3 mb-2">
          <Image src={lc} width={20} height={20} alt="LeetCode" />
          <h1 className="text-xl font-mono text-gray-800 dark:text-neutral-300 border-b-2 border-b-red-600 pb-1">
            /leetcode/problems.ts
          </h1>
        </div>

        {/* Terminal command style */}
        <div className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span className="text-red-600 dark:text-red-400">$</span>{" "}
          <span className="text-gray-700 dark:text-gray-300">
            cat problems.ts | head -{numberPerPage} | tail -{numberPerPage}
          </span>
        </div>

        {/* File header comment */}
        <div className="font-mono text-xs text-gray-500 dark:text-gray-400 mb-4 border-l-4 border-l-red-600 pl-3">
          <span className="text-gray-500 dark:text-gray-400">//</span>{" "}
          <span className="text-gray-500 dark:text-gray-400">
            Total problems: {allProblems.length} | Page {curr} of {totalPages}
          </span>
        </div>
      </div>

      {/* Problems list - code file style */}
      <div className="md:w-[900px] w-full">
        <div className="bg-gray-50 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded p-4 font-mono text-sm">
          {/* Code block start */}
          <div className="text-gray-500 dark:text-gray-400 text-xs mb-2">
            <span className="text-gray-500 dark:text-gray-400">//</span>{" "}
            <span className="text-gray-500 dark:text-gray-400">
              problems.ts - exported functions
            </span>
          </div>

          <div className="space-y-1">
            {paginatedProblems.map((problem, i) => (
              <Problem key={problem.id} problem={problem} index={i} />
            ))}
          </div>

          {/* Code block end */}
          <div className="text-gray-500 dark:text-gray-400 text-xs mt-4">
            <span className="text-gray-500 dark:text-gray-400">//</span>{" "}
            <span className="text-gray-500 dark:text-gray-400">
              end of file
            </span>
          </div>
        </div>
      </div>

      {/* Terminal-style pagination */}
      <div className="md:w-[900px] w-full">
        <div className="font-mono text-sm flex items-center justify-center gap-4">
          <button
            onClick={Prev}
            disabled={curr === 1}
            className={`px-3 py-1 border border-gray-300 dark:border-neutral-600 rounded transition-colors ${
              curr === 1
                ? "text-gray-300 dark:text-neutral-700 cursor-not-allowed border-gray-200 dark:border-neutral-800"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:border-red-600 dark:hover:border-red-400"
            }`}
          >
            <span className="text-red-600 dark:text-red-400">$</span>{" "}
            <span>prev</span>
          </button>

          <div className="text-gray-500 dark:text-gray-400 px-4">
            <span className="text-gray-500 dark:text-gray-400">//</span>{" "}
            <span>
              page {curr} / {totalPages}
            </span>
          </div>

          <button
            onClick={Next}
            disabled={curr === totalPages}
            className={`px-3 py-1 border border-gray-300 dark:border-neutral-600 rounded transition-colors ${
              curr === totalPages
                ? "text-gray-300 dark:text-neutral-700 cursor-not-allowed border-gray-200 dark:border-neutral-800"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-700 hover:border-red-600 dark:hover:border-red-400"
            }`}
          >
            <span className="text-red-600 dark:text-red-400">$</span>{" "}
            <span>next</span>
          </button>
        </div>

        {/* Quick navigation */}
        <div className="mt-4 font-mono text-xs text-gray-500 dark:text-gray-400 text-center">
          <span className="text-gray-500 dark:text-gray-400">//</span>{" "}
          <span>
            Showing {(curr - 1) * numberPerPage + 1}-
            {Math.min(curr * numberPerPage, allProblems.length)} of{" "}
            {allProblems.length} problems
          </span>
        </div>
      </div>
    </div>
  );
};

export default function Page() {
  return <Suspense fallback={<div>Loading...</div>}>{<LeetCode />}</Suspense>;
}
