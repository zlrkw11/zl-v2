"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { LeetCodeProps } from "@/app/types/types";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  atomOneDark,
  atomOneLight,
} from "react-syntax-highlighter/dist/esm/styles/hljs";

const ProblemPage = ({ problem }: { problem: any }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const observer = new MutationObserver(() => {
      setIsDark(html.classList.contains("dark"));
    });

    observer.observe(html, { attributes: true, attributeFilter: ["class"] });
    setIsDark(html.classList.contains("dark"));

    return () => observer.disconnect();
  }, []);

  const getDifficultyColor = () => {
    switch (problem.difficulty) {
      case "easy":
        return "text-green-600";
      case "medium":
        return "text-orange-500";
      case "hard":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="flex flex-col items-center m-4 gap-6">
      <div className="flex flex-col md:w-[1000px] gap-6 font-mono">
        {/* Header section */}
        <div className="flex flex-col gap-2 border-b-2 border-red-600 pb-2">
          <div className="flex items-center gap-4 flex-wrap">
            <h1 className="text-xl text-gray-900 dark:text-gray-200">
              /problem_{problem.id}
              <span className="text-red-600">:</span>
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              <span className="text-red-600">//</span> {problem.date}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-lg text-gray-900 dark:text-gray-200">
              {problem.title}
            </span>
            <span
              className={`text-sm font-semibold ${getDifficultyColor()}`}
            >
              [{problem.difficulty.toUpperCase()}]
            </span>
          </div>
        </div>

        {/* Code section */}
        <div className="flex flex-col gap-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span className="text-red-600">//</span> solution.py
          </div>
          <div className="border border-gray-300 dark:border-gray-700 rounded">
            <SyntaxHighlighter
              showLineNumbers
              language="python"
              style={isDark ? atomOneDark : atomOneLight}
              customStyle={{
                margin: 0,
                borderRadius: "0.25rem",
                background: isDark ? "#1e1e1e" : "#fafafa",
              }}
            >
              {problem.code}
            </SyntaxHighlighter>
          </div>
        </div>

        {/* Analysis section */}
        <div className="flex flex-col gap-4 text-sm">
          {problem.texts && (
            <div className="text-gray-700 dark:text-gray-300">
              {problem.texts}
            </div>
          )}

          {/* Complexity analysis */}
          <div className="flex flex-col gap-3 border-l-4 border-red-600 pl-4">
            <div className="flex items-center gap-2">
              <span className="text-red-600">[+]</span>
              <span className="text-red-600">time_complexity</span>
              <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
              <span className="text-gray-900 dark:text-gray-200">
                {problem.O || "N/A"}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600">[+]</span>
              <span className="text-red-600">space_complexity</span>
              <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
              <span className="text-gray-900 dark:text-gray-200">
                {problem.S || "N/A"}
              </span>
            </div>
          </div>

          {/* Links */}
          {problem.link1 && (
            <div className="flex items-center gap-2 pt-2">
              <span className="text-red-600">[+]</span>
              <span className="text-red-600">leetcode_link</span>
              <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
              <Link
                href={problem.link1}
                className="text-gray-900 dark:text-gray-200 underline hover:text-red-600 dark:hover:text-red-500 transition-colors"
                target="_blank"
              >
                problem_{problem.id}
              </Link>
            </div>
          )}
          {problem.link2 && (
            <div className="flex items-center gap-2">
              <span className="text-red-600">[+]</span>
              <span className="text-red-600">{problem.link2name || "reference"}</span>
              <span className="text-gray-600 dark:text-gray-400">:</span>{" "}
              <Link
                href={problem.link2}
                className="text-gray-900 dark:text-gray-200 underline hover:text-red-600 dark:hover:text-red-500 transition-colors"
                target="_blank"
              >
                {problem.des || problem.link2}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProblemPage;
