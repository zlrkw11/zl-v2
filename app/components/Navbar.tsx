"use client";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import { DocumentIcon } from "@heroicons/react/16/solid";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { name: "/about", href: "/" },
  { name: "/blogs", href: "/blogs" },
  { name: "/projects", href: "/projects" },
  { name: "/contents", href: "/contents" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  return (
    <nav className="w-full font-mono border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-900 bg-opacity-90 dark:bg-opacity-90">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-14 items-center justify-between">
          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
            aria-label="Toggle menu"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navigation.map((item) => {
              const isActive = pathName === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm ${
                    isActive
                      ? "text-red-600 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500"
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Right side controls */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/cv"
              className="text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              aria-label="View CV"
            >
              <DocumentIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-gray-300 dark:border-gray-700"
        >
          <div className="px-4 py-3 space-y-2">
            {navigation.map((item) => {
              const isActive = pathName === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block text-sm py-2 ${
                    isActive
                      ? "text-red-600 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-500"
                  } transition-colors`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
