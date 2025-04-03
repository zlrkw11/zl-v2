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
    <div className={`flex flex-col md:w-[800px] gap-4 text-gray-700 m-2 `}>
      <div className="md:min-w-[700px] flex flex-col justify-start">
        <h1 className="text-3xl md:min-w-[800px] text-black border-b-red-600 border-b-2 mr-auto">
          Blogs:
        </h1>
      </div>

      <p className={`mb-2 md:max-w-[800px] ${ArimoFont.className} `}>
        I'm not a person who regularly expresses their thoughts. But I do have a
        lot of them going on. I believe that thoughts are a valuable thing
        because they are always real. So, I made this page to write them down.
      </p>

      <ul
        className={`gap-2 flex flex-col ${ArimoFont.className} md:min-w-[700px]`}
      >
        {blogs.map((blog: any) => (
          <li
            key={blog.slug}
            className="transition hover:translate-x-5 duration-300 p-2 border border-l-4 border-r-2 rounded-r-lg border-l-red-600 bg-gray-100 bg-opacity-60 md:min-w-[700px]"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <p className="text-lg text-gray-700 hover:text-red-600">
                {blog.title}
              </p>
            </Link>
            <p className="text-gray-400 italic">{blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
