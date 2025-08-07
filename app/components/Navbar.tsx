"use client";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Arimo } from "next/font/google";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import cv from "../../public/assets/file-text-clean-svgrepo-com.svg";
import { DocumentIcon } from "@heroicons/react/16/solid";
import ThemeToggle from "./ThemeToggle";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const navigation = [
  { name: "About", href: "/", current: true },
  { name: "Blogs", href: "/blogs", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Contents", href: "/contents", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open);
  };
  const pathName = usePathname();
  return (
    <div className={`${ArimoFont.className} w-full`}>
      <div className="mx-auto w-full px-8 bg-gray-200 dark:bg-neutral-800 bg-opacity-55">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center md:hidden">
            {/* Mobile menu button*/}
            <button
              onClick={toggleMenu}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 dark:hover:bg-neutral-600 hover:bg-gray-700 hover:text-white duration-200 focus:ring-2 focus:ring-gray-300 focus:outline-hidden focus:ring-inset"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
            </button>
          </div>
          <div className="flex flex-1 sm:justify-start">
            <div className="hidden md:flex items-center">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      pathName === item.href
                        ? "bg-red-900 text-neutral-100"
                        : "text-gray-700 dark:text-neutral-400 hover:bg-gray-400 dark:hover:bg-neutral-700 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium",
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>{" "}
            <div className="ml-auto md:flex hidden md:gap-4">
              <ThemeToggle />
              <Link className="" href="/cv">
                <DocumentIcon className="size-8 text-center dark:text-neutral-300 text-gray-400 mt-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -45 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex-col flex md:hidden bg-gray-200 bg-opacity-55 dark:bg-neutral-800"
        >
          <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col">
            {navigation.map((item) => (
              <Link href={item.href} key={item.name}>
                <div
                  key={item.name}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    pathName === item.href
                      ? "bg-red-900 text-gray-100"
                      : "text-gray-700 dark:text-neutral-400 hover:bg-gray-400 dark:hover:bg-neutral-700  hover:opacity-75 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium",
                  )}
                >
                  {item.name}
                </div>
              </Link>
            ))}{" "}
          </div>{" "}
          <div className="ml-4 w-8 pb-4 flex">
            <ThemeToggle />
            <Link href="/cv">
              <DocumentIcon className="size-8 ml-2 dark:text-neutral-300 text-neutral-400" />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}
