import Link from "next/link";
import { LeetCodeProps } from "@/app/types/types";
import { Arimo, Crimson_Text } from "next/font/google";
import { problems } from "@/data/problems";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github.css";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

const crimsonFont = Crimson_Text({
  subsets: ["latin"],
  weight: "400",
});

type Props = {
  params: {
    id: string;
  };
};

const ProblemPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const problem = problems.find((p) => p.id.toString() === id);
  if (!problem) {
    return <div>Problem does not exist~</div>;
  }
  return (
    <div
      className={`md:w-[800px] m-2 flex flex-col gap-4 ${ArimoFont.className} items-center`}
    >
      <div className="flex gap-4">
        <h1 className={`gap-2 flex text-xl ${crimsonFont.className}`}>
          <p>{problem.id}.</p>
          <p>{problem.title}</p>
        </h1>
        <h1
          className={`border ${
            crimsonFont.className
          } rounded-full px-2 mt-auto ${
            problem.difficulty === "easy"
              ? "text-green-500 border-green-500"
              : problem.difficulty === "medium"
              ? "text-orange-500 border-orange-500"
              : problem.difficulty === "hard"
              ? "text-red-600 border-red-600"
              : ""
          }`}
        >
          {problem.difficulty}
        </h1>
      </div>
      <div className="flex flex-col gap-2">
        <div>
          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {problem.code}
          </ReactMarkdown>
        </div>
        <div>{problem.texts}</div>
      </div>
    </div>
  );
};
export default ProblemPage;
