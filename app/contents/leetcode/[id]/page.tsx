import Link from "next/link";
import { LeetCodeProps } from "@/app/types/types";
import { Arimo, Crimson_Text } from "next/font/google";
import "highlight.js/styles/github.css";
import lc from "../../../../public/assets/leetcode.svg";
import Image from "next/image";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
// data import for problems
import { problems1 } from "@/data/problems/problems1";
import { problems2 } from "@/data/problems/problems2";
import { problems3 } from "@/data/problems/problems3";

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

const problems = [...problems1, ...problems2, ...problems3];
const ProblemPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const problem = problems.find((p) => p.id.toString() === id);
  if (!problem) {
    return <div>Problem does not exist~</div>;
  }
  return (
    <div
      className={`md:w-[800px] text-gray-700 m-2 flex flex-col gap-4 ${ArimoFont.className}`}
    >
      <div className="flex gap-4 mr-auto">
        <h1 className={` gap-2 flex text-xl ${crimsonFont.className}`}>
          <p>{problem.id}.</p>
          <p>{problem.title}</p>
          <p className={`text-gray-500 text-base ml-8 mt-auto text-nowrap`}>
            {problem.date}
          </p>
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
      <div className="flex flex-col gap-2 items-center">
        <div className="md:w-[800px] w-[370px]">
          <SyntaxHighlighter
            showLineNumbers
            language="python"
            style={atomOneLight}
          >
            {problem.code}
          </SyntaxHighlighter>
        </div>
        <div className="">{problem.texts}</div>
      </div>
      <h1
        className={`border-l-2 mr-auto border-l-red-600 p-1 text-base ${ArimoFont.className}`}
      >
        Time Complexity:
      </h1>
      {problem.O}
      <h1
        className={`border-l-2 mr-auto border-l-red-600 p-1 text-base ${ArimoFont.className}`}
      >
        Spacial Complexity:
      </h1>
      {problem.S}{" "}
      {problem.link1 && (
        <div className="mt-4 bg-gray-100 py-2 px-1">
          <Link className="flex items-center gap-2 italic" href={problem.link1}>
            <Image src={lc} width={30} height={30} alt="LeetCode" />
            <p className="border-b-2 border-orange-300  hover:text-orange-500">
              {`Go to problem ${problem.id}`}
            </p>
          </Link>
        </div>
      )}
      {problem.link2 && (
        <Link
          href={problem.link2}
          className="underline underline-offset-4 hover:text-gray-500 max-w-[300px]"
        >
          <p>{problem.link2name}</p>
          <p>{problem.des}</p>
        </Link>
      )}
    </div>
  );
};
export default ProblemPage;
