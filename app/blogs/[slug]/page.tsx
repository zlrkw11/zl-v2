import fs from "fs";
import path from "path";
import { Arimo } from "next/font/google";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

type BlogProps = {
  params: { slug: string };
};

const Blog = async ({ params }: BlogProps) => {
  const filePath = path.join(process.cwd(), "data", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);

  const blog = blogs.find((b: any) => b.slug === params.slug);
  if (!blog) {
    return <p>Blog not found!</p>;
  }
  return (
    <div
      className={`${ArimoFont.className} flex flex-col w-[800px] items-center text-gray-700 gap-4`}
    >
      <h1 className="text-lg border-b-2 border-b-red-600 text-black">
        {blog.title}
      </h1>
      <p>{blog.date}</p>
      <p>{blog.text}</p>
    </div>
  );
};

export default Blog;
