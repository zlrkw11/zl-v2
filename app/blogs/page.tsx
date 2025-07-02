import Link from "next/link";
import fs from "fs";
import path from "path";
import { Arimo } from "next/font/google";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

// storage for all the blogs
const Blogs = async () => {
  const filePath = path.join(process.cwd(), "data", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);

  return (
    <div
      className={`flex flex-col md:w-[800px] gap-4 text-gray-700  m-2 animate-slide-down`}
    >
      <div className="md:min-w-[700px] flex flex-col justify-start">
        <h1 className="text-3xl md:min-w-[800px] text-black border-b-red-600 dark:text-neutral-300 border-b-2 mr-auto">
          Blogs:
        </h1>
      </div>

      <p
        className={`mb-2 md:max-w-[800px] ${ArimoFont.className} dark:text-gray-300 text-lg`}
      >
        While I don’t often voice my thoughts openly, I believe in their
        value—each one represents a genuine perspective. This page serves as a
        space to document and share those reflections, offering insight into my
        thinking and approach.
      </p>

      <ul
        className={`gap-2 flex flex-col ${ArimoFont.className} md:min-w-[700px]`}
      >
        {blogs.map((blog: any) => (
          <li
            key={blog.slug}
            className="transition dark:bg-neutral-600 hover:translate-x-10 duration-100 p-2 border-l-4 border-l-red-600 bg-gray-100 bg-opacity-60 md:min-w-[700px]"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <p className="text-lg text-gray-700 hover:text-red-600 dark:hover:text-neutral-800 dark:text-neutral-300 w-[240px]">
                {blog.title}
              </p>
            </Link>
            <p className="text-neutral-400">{blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
