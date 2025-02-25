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

const getBlogData = () => {
  const filePath = path.join(process.cwd(), "data", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(fileData);
};

export async function generateStaticParams() {
  const blogs = getBlogData();
  return blogs.map((blog: any) => ({
    slug: blog.slug,
  }));
}

const Blog = ({ params }: BlogProps) => {
  const blogs = getBlogData();
  const blog = blogs.find((b: any) => b.slug === params.slug);
  if (!blog) {
    return <p>Blog not found!</p>;
  }
  return (
    <div
      className={`${ArimoFont.className} flex flex-col md:w-[800px] items-center text-gray-700 gap-4`}
    >
      <h1 className="text-lg border-b-2 border-b-red-600 text-black">
        {blog.title}
      </h1>
      <p className="text-gray-500">{blog.date}</p>
      <p
        className="md:min-w-[700px] w-[420px]"
        dangerouslySetInnerHTML={{ __html: blog.text }}
      ></p>
    </div>
  );
};

export default Blog;
