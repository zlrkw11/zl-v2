import fs from "fs";
import path from "path";

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
    <div className="flex flex-col w-[800px] items-center">
      <h1>{blog.title}</h1>
      <p>{blog.date}</p>
      <p>{blog.text}</p>
    </div>
  );
};

export default Blog;
