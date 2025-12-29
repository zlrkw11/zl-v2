"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center m-4 gap-6"
    >
      <div className="flex flex-col md:w-[1000px] gap-6 font-mono">
        <div className="flex flex-col gap-2 border-b-2 border-red-600 pb-2">
          <h1 className="text-xl text-gray-900 dark:text-gray-200">
            /contents
            <span className="text-red-600">:</span>
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            <span className="text-red-600">//</span> Site navigation map
          </p>
        </div>

        <div className="flex flex-col gap-1 text-sm text-gray-900 dark:text-gray-200">
          <div className="flex items-center gap-2">
            <span className="text-red-600">/</span>
            <span className="text-gray-500 dark:text-gray-400">root</span>
          </div>

          <div className="flex flex-col gap-1 ml-4">
            <Link
              href="/"
              className={`flex items-center gap-2 hover:text-red-600 dark:hover:text-red-500 transition-colors ${
                isActive("/") ? "text-red-600 font-semibold" : ""
              }`}
            >
              <span className="text-gray-500 dark:text-gray-400">├──</span>
              <span className="text-red-600">/about</span>
            </Link>

            <Link
              href="/projects"
              className={`flex items-center gap-2 hover:text-red-600 dark:hover:text-red-500 transition-colors ${
                isActive("/projects") ? "text-red-600 font-semibold" : ""
              }`}
            >
              <span className="text-gray-500 dark:text-gray-400">├──</span>
              <span className="text-red-600">/projects</span>
            </Link>

            <Link
              href="/blogs"
              className={`flex items-center gap-2 hover:text-red-600 dark:hover:text-red-500 transition-colors ${
                isActive("/blogs") ? "text-red-600 font-semibold" : ""
              }`}
            >
              <span className="text-gray-500 dark:text-gray-400">├──</span>
              <span className="text-red-600">/blogs</span>
            </Link>

            {/* Level 1: Contents (with children) */}
            <div className="flex flex-col gap-1">
              <div
                className={`flex items-center gap-2 ${
                  pathname.startsWith("/contents")
                    ? "text-red-600 font-semibold"
                    : ""
                }`}
              >
                <span className="text-gray-500 dark:text-gray-400">└──</span>
                <span className="text-red-600">/contents</span>
              </div>

              {/* Level 2: Contents Children */}
              <div className="flex flex-col gap-1 ml-6">
                <Link
                  href="/contents/leetcode"
                  className={`flex items-center gap-2 hover:text-red-600 dark:hover:text-red-500 transition-colors ${
                    isActive("/contents/leetcode")
                      ? "text-red-600 font-semibold"
                      : ""
                  }`}
                >
                  <span className="text-gray-500 dark:text-gray-400">├──</span>
                  <span className="text-red-600">/leetcode</span>
                </Link>

                <Link
                  href="/contents/patchnotes"
                  className={`flex items-center gap-2 hover:text-red-600 dark:hover:text-red-500 transition-colors ${
                    isActive("/contents/patchnotes")
                      ? "text-red-600 font-semibold"
                      : ""
                  }`}
                >
                  <span className="text-gray-500 dark:text-gray-400">├──</span>
                  <span className="text-red-600">/patchnotes</span>
                </Link>

                <Link
                  href="/contents/credits"
                  className={`flex items-center gap-2 hover:text-red-600 dark:hover:text-red-500 transition-colors ${
                    isActive("/contents/credits")
                      ? "text-red-600 font-semibold"
                      : ""
                  }`}
                >
                  <span className="text-gray-500 dark:text-gray-400">└──</span>
                  <span className="text-red-600">/credits</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-4 border-t border-gray-300 dark:border-gray-700">
          <div className="text-xs text-gray-500 dark:text-gray-400">
            <span className="text-red-600">//</span> Tree structure navigation
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-4">
            <span>
              <span className="text-red-600">├──</span> branch
            </span>
            <span>
              <span className="text-red-600">└──</span> leaf
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;
