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
      className={`flex flex-col md:w-[800px] items-center gap-4 text-gray-700`}
    >
      <div className="md:min-w-[700px]">
        <h1 className="text-3xl text-black border-b-red-600 border-b-2 mb-2 mr-auto">
          Blogs:
        </h1>
      </div>
      <p className={`mb-2 md:min-w-[700px] w-[420px] ${ArimoFont.className} `}>
        I'm not a person who regularly expresses their thoughts. But I do have a
        lot of them going on. I believe that thoughts are a valuable thing
        because they are always real. So, I made this page to write them down.
      </p>
      <ul className={`gap-2 flex flex-col ${ArimoFont.className}`}>
        {blogs.map((blog: any) => (
          <li
            key={blog.slug}
            className="p-2 md:min-w-[700px] w-[420px] border-2 border-l-red-600"
          >
            <Link href={`/blogs/${blog.slug}`}>
              <p className="text-lg text-black hover:text-red-600">
                {blog.title}
              </p>
            </Link>
            <p className="text-gray-500">{blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
