import Link from "next/link";
export default function Home() {
  return (
    <div className="">
      <h1 id="home-title" className=""></h1>
      <div className="ml-2 flex justify-center md:justify-normal md:text-base text-lg mt-4 md:mt-0">
        <ul className="flex flex-col md:gap-0 gap-4">
          <li className="group underline-offset-4">
            <Link href="/about">
              <span className="hover:underline">About</span>
            </Link>
            <span className="opacity-0 ml-4 group-hover:opacity-100 ">◂</span>
          </li>
          <li className="group underline-offset-4">
            <span className="hover:underline">Projects</span>{" "}
            <span className="opacity-0 ml-4 group-hover:opacity-100">◂</span>
          </li>
          <li className="group underline-offset-4">
            <span className="hover:underline">Blogs</span>{" "}
            <span className="opacity-0 ml-4 group-hover:opacity-100 ">◂</span>
          </li>
          <li className="group underline-offset-4">
            <span className="hover:underline">Contact</span>{" "}
            <span className="opacity-0 ml-4 group-hover:opacity-100 ">◂</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
