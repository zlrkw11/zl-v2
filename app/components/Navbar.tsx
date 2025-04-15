"use client";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Arimo } from "next/font/google";
import { usePathname } from "next/navigation";
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
  const pathName = usePathname();
  return (
    <Disclosure as="nav" className={`${ArimoFont.className}`}>
      <div className="mx-auto w-screen px-2 sm:px-6 lg:px-8 bg-gray-200 bg-opacity-55">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white duration-200 focus:ring-2 focus:ring-gray-300 focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      pathName === item.href
                        ? "bg-red-900 text-gray-100"
                        : "text-gray-700 hover:bg-gray-400 hover:text-white",
                      "rounded-md px-3 py-2 text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                pathName === item.href
                  ? "bg-red-900 text-gray-100"
                  : "text-gray-700 hover:bg-gray-400 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
