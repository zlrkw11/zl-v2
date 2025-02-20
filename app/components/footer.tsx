"use client";
import Image from "next/image";
import Link from "next/link";
import github from "../../public/assets/gh.svg";

const Footer = () => {
  return (
    <div className="flex w-full ml-auto justify-center md:justify-end">
      <div className="flex h-8 mr-4 items-center gap-4 px-4 py-8 ">
        <Link href="https://github.com/zlrkw11">
          <Image src={github} alt="github" width={30} height={30} />
        </Link>
        <p>Copyright © 2025 zlrkw11</p>
      </div>
    </div>
  );
};

export default Footer;
