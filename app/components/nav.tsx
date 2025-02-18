import Link from "next/link";

const Nav = () => {
  return (
    <div className="w-full grid grid-cols-8 items-center">
      <div className="col-start-8 col-span-4 flex justify-center md:text-xl text-lg gap-4 ">
        <Link className="hover:underline hover:text-red-600" href="/">
          Home
        </Link>
        <Link className="hover:underline hover:text-red-600" href="/about">
          About
        </Link>
        <Link className="hover:underline hover:text-red-600" href="/">
          Projects
        </Link>
        <Link className="hover:underline hover:text-red-600" href="/">
          Blogs
        </Link>
      </div>
    </div>
  );
};

export default Nav;
