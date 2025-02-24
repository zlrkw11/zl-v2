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
      className={`flex flex-col w-[800px] ${ArimoFont.className} items-center gap-4 text-gray-700`}
    >
      <h1 className="text-2xl text-red-600 underline mb-2">Blogs</h1>
      <p className="mb-2 md:min-w-[600px] w-[420px]">
        I'm not a person who regularly expresses their thoughts. But I do have a
        lot of them going on. I believe that thoughts are a valuable thing
        because they are always real. So, I made this page to write them down.
      </p>
      <ul className="gap-2 flex flex-col">
        {blogs.map((blog: any) => (
          <li
            key={blog.slug}
            className="p-2 md:min-w-[600px] w-[420px] border-2 border-l-red-600"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <p className="text-lg text-black hover:text-red-600">
                {blog.title}
              </p>
            </Link>
            <p className="">{blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
