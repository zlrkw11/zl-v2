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
      className={`flex flex-col w-full items-center gap-4 text-gray-700  m-2 animate-slide-down`}
    >
      <div className="md:min-w-[800px] flex flex-col justify-start">
        <h1 className="text-3xl md:min-w-[800px] text-black border-b-red-600 dark:text-gray-200 border-b-2 mr-auto">
          Blogs:
        </h1>
      </div>

      {/* <p
        className={`mb-2 md:max-w-[800px] ${ArimoFont.className} dark:text-gray-300 text-lg`}
      >
        While I don’t often voice my thoughts openly, I believe in their
        value—each one represents a genuine perspective. This page serves as a
        space to document and share those reflections, offering insight into my
        thinking and approach.
      </p> */}

      <ul className={`gap-2 flex flex-col dark:text-gray-200 md:min-w-[800px]`}>
        <h1 className="text-xl">/all</h1>
        <h1 className="text-xl">[{blogs.length}]</h1>
        <h1 className="text-2xl">
          This page is currently under construction. Need to remake the entire
          page.
        </h1>
        {blogs.map((blog: any) => (
          // <li
          //   key={blog.slug}
          //   className="transition dark:bg-neutral-600 p-2 border-l-4 border-l-red-600 bg-gray-100 bg-opacity-60 md:min-w-[700px]"
          // >
          //   <p className="text-lg text-gray-700 dark:text-neutral-300">
          //     <Link
          //       className="hover:text-red-600 hover:underline dark:hover:text-neutral-400"
          //       href={`/blogs/${blog.slug}`}
          //     >
          //       {blog.title}
          //     </Link>
          //   </p>

          //   <p className="text-neutral-400">{blog.date}</p>
          // </li>

          <li key={blog.slug} className="mr-auto ">
            <Link href={`/blogs/${blog.slug}`}>
              <div className="flex gap-2">
                <p className={`text-lg ${ArimoFont.className}`}>{`>`}</p>

                <p className="underline underline-offset-2">{blog.title}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
