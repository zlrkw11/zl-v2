import Link from "next/link";
import fs from "fs";
import path from "path";

// storage for all the blogs
const Blogs = async () => {
  const filePath = path.join(process.cwd(), "data", "blogs.json");
  const fileData = fs.readFileSync(filePath, "utf-8");
  const blogs = JSON.parse(fileData);

  return (
    <div className="flex flex-col items-center gap-6 m-4">
      {/* Terminal-style header */}
      <div className="md:w-[900px] w-full">
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-xl font-mono text-gray-800 dark:text-neutral-300 border-b-2 border-b-red-600 pb-1">
            /blogs/index.ts
          </h1>
        </div>

        {/* Terminal command style */}
        <div className="font-mono text-sm text-gray-600 dark:text-gray-400 mb-4">
          <span className="text-red-600 dark:text-red-400">$</span>{" "}
          <span className="text-gray-700 dark:text-gray-300">
            ls -la blogs/ | grep .md
          </span>
        </div>

        {/* File header comment */}
        <div className="font-mono text-xs text-gray-500 dark:text-gray-400 mb-4 border-l-4 border-l-red-600 pl-3">
          <span className="text-gray-500 dark:text-gray-400">//</span>{" "}
          <span className="text-gray-500 dark:text-gray-400">
            Total blog posts: {blogs.length} | Last updated:{" "}
            {new Date().toISOString().split("T")[0]}
          </span>
        </div>
      </div>

      {/* Blogs list - file listing style */}
      <div className="md:w-[900px] w-full">
        <div className="bg-gray-50 dark:bg-neutral-800 border border-gray-300 dark:border-neutral-700 rounded p-4 font-mono text-sm">
          {/* Code block start */}
          <div className="text-gray-500 dark:text-gray-400 text-xs mb-4">
            <span className="text-gray-500 dark:text-gray-400">//</span>{" "}
            <span className="text-gray-500 dark:text-gray-400">
              blog posts exported from /data/blogs.json
            </span>
          </div>

          {/* File listing header */}
          <div className="hidden md:grid grid-cols-12 gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3 pb-2 border-b border-gray-300 dark:border-neutral-600">
            <div className="col-span-1">type</div>
            <div className="col-span-6">name</div>
            <div className="col-span-3">date</div>
            <div className="col-span-2">size</div>
          </div>

          {/* Blog entries as file listings */}
          <div className="space-y-1">
            {blogs.map((blog: any, index: number) => {
              const date = new Date(blog.date);
              const formattedDate = date
                .toISOString()
                .split("T")[0]
                .replace(/-/g, "/");
              const slug = blog.slug;

              return (
                <Link
                  key={blog.slug}
                  href={`/blogs/${blog.slug}`}
                  className="flex flex-col md:grid md:grid-cols-12 gap-1 md:gap-2 items-start md:items-center py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors group"
                >
                  {/* Mobile layout */}
                  <div className="flex items-center gap-2 w-full md:hidden min-w-0">
                    <span className="text-gray-400 dark:text-gray-500 text-xs select-none flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-red-600 dark:text-red-400 text-xs flex-shrink-0">
                      .json
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 text-xs flex-shrink-0">
                      {slug}.json
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 flex-shrink-0">→</span>
                    <span className="text-gray-700 dark:text-gray-300 text-xs truncate flex-1 min-w-0">
                      {blog.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 md:hidden w-full">
                    <span>{formattedDate}</span>
                    <span className="text-gray-500 dark:text-gray-400">//</span>
                    <span>{Math.floor(Math.random() * 5 + 2)}KB</span>
                  </div>

                  {/* Desktop layout */}
                  {/* File type indicator */}
                  <div className="hidden md:block col-span-1 text-xs">
                    <span className="text-red-600 dark:text-red-400">
                      .json
                    </span>
                  </div>

                  {/* Blog title as filename */}
                  <div className="hidden md:flex col-span-6 items-center gap-2 min-w-0">
                    <span className="text-gray-400 dark:text-gray-500 text-xs select-none flex-shrink-0">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-blue-600 dark:text-blue-400 group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors flex-shrink-0">
                      {slug}.json
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 flex-shrink-0">→</span>
                    <span className="text-gray-700 dark:text-gray-300 text-xs truncate">
                      {blog.title}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="hidden md:block col-span-3 text-xs text-gray-600 dark:text-gray-400">
                    {formattedDate}
                  </div>

                  {/* Size indicator (mock) */}
                  <div className="hidden md:block col-span-2 text-xs text-gray-500 dark:text-gray-400">
                    <span className="text-gray-500 dark:text-gray-400">//</span>{" "}
                    <span>{Math.floor(Math.random() * 5 + 2)}KB</span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Code block end */}
          <div className="text-gray-500 dark:text-gray-400 text-xs mt-4 pt-2 border-t border-gray-300 dark:border-neutral-600">
            <span className="text-gray-500 dark:text-gray-400">//</span>{" "}
            <span className="text-gray-500 dark:text-gray-400">
              end of directory listing
            </span>
          </div>
        </div>
      </div>

      {/* Terminal-style footer */}
      <div className="md:w-[900px] w-full">
        <div className="font-mono text-xs text-gray-500 dark:text-gray-400">
          <span className="text-red-600 dark:text-red-400">$</span>{" "}
          <span className="text-gray-500 dark:text-gray-400">
            // Use arrow keys to navigate, Enter to open
          </span>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
