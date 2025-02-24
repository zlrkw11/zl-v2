import Link from "next/link";
import fs from "fs";
import path from "path";

// storage for all the blogs
const Blogs = async () => {
  const filePath = path.join(process.cwd(), "data", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);

  return (
    <div>
      <h1>ALL Blogs</h1>
      <ul>
        {blogs.map((blog: any) => (
          <li key={blog.slug}>
            <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
