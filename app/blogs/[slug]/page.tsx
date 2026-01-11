import fs from "fs";
import path from "path";
import Link from "next/link";

const Blog = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const filePath = path.join(process.cwd(), "data", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);
  const slug = (await params).slug;
  const blog = blogs.find((b: any) => b.slug === slug);

  if (!blog) {
    return (
      <div className="flex flex-col items-center m-4 gap-6 font-mono">
        <div className="text-red-600 text-xl">Error: 404 Blog not found</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center m-4 gap-6">
      <div className="flex flex-col md:w-[1000px] gap-6 font-mono">
        {/* Header */}
        <div className="flex flex-col gap-2 border-b-2 border-red-600 pb-2">
          <div className="flex items-center gap-4 flex-wrap">
            <h1 className="text-xl text-gray-900 dark:text-gray-200">
              /blog_{slug}
              <span className="text-red-600">:</span>
            </h1>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              <span className="text-red-600">//</span> {blog.date}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="flex flex-col gap-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span className="text-red-600">//</span> title
          </div>
          <h1 className="text-2xl text-gray-900 dark:text-gray-200 font-semibold">
            {blog.title}
          </h1>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            <span className="text-red-600">//</span> content
          </div>
          <div
            className="text-gray-900 dark:text-gray-200 text-sm leading-relaxed [&_b]:font-semibold [&_b]:text-gray-900 dark:[&_b]:text-gray-200 [&_br]:block"
            dangerouslySetInnerHTML={{ __html: blog.text }}
          />
        </div>

        {/* Back link */}
        <div className="flex items-center gap-2 pt-4 border-t border-gray-300 dark:border-gray-700">
          <span className="text-red-600">$</span>
          <Link
            href="/blogs"
            className="group flex items-center gap-2 text-sm text-gray-900 dark:text-gray-200 hover:text-red-600 dark:hover:text-red-500 transition-all duration-200"
          >
            <span className="text-red-600 group-hover:-translate-x-1 transition-transform duration-200 inline-block">
              ←
            </span>
            <span className="font-semibold">back_to_blogs()</span>
            <span className="text-gray-500 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
              // return to blog list
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
