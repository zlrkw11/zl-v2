import fs from "fs";
import path from "path";
import { Arimo } from "next/font/google";
import { use } from "react";
const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const Blog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const filePath = path.join(process.cwd(), "data", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);
  const slug = (await params).slug;
  const blog = blogs.find((b: any) => b.slug === slug);
  if (!blog) {
    return <p>Blog not found!</p>;
  }
  return (
    <div
      className={`${ArimoFont.className} flex flex-col md:w-[800px] items-center text-gray-700 gap-4 m-2`}
    >
      <h1 className="text-lg border-b-2 border-b-red-600 text-black">
        {blog.title}
      </h1>
      <p className="text-gray-500">{blog.date}</p>
      <p
        className="md:min-w-[700px]"
        dangerouslySetInnerHTML={{ __html: blog.text }}
      ></p>
    </div>
  );
};

export default Blog;
