"use client";
import Image from "next/image";
import Link from "next/link";
import github from "../../public/assets/gh.svg";

const Footer = () => {
  return (
    <div className="flex ml-auto">
      <div className="flex w-full h-8 mr-4 items-center gap-4 pb-4">
        <Link href="https://github.com/zlrkw11">
          <Image src={github} alt="github" width={30} height={30} />
        </Link>
        <p>Copyright © 2025 zl</p>
      </div>
    </div>
  );
};

export default Footer;
