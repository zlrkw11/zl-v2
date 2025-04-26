"use client";
import Image from "next/image";
import Link from "next/link";
import github from "../../public/assets/gh.svg";
const Footer = () => {
  return (
    <div className="flex w-full mt-auto ml-auto justify-center md:justify-end">
      <div className="flex h-8 items-center gap-4 px-4 py-8 ">
        {/* <Image
          src={jas}
          width={50}
          height={50}
          alt="jas by christine"
          className={`${styles.moveUpDown} mr-auto`}
        /> */}
        <Link href="https://github.com/zlrkw11">
          {/* <UserIcon className="size-6 dark:text-neutral-400 text-neutral-700 md:block" /> */}
          <Image width={30} height={30} src={github} alt="github" />
        </Link>
        <p className="dark:text-neutral-300">Copyright © 2025 zlrkw11</p>
      </div>
    </div>
  );
};

export default Footer;
