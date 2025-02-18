import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full grid grid-cols-8 items-center">
      <div className="col-start-8 col-span-4 flex justify-center gap-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/">Projects</Link>
        <Link href="/">Blogs</Link>
      </div>
    </div>
  );
};

export default Nav;
