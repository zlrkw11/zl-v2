import { LeetCodeProps } from "@/app/types/types";
import Link from "next/link";
import { problems } from "@/data/problems";
import { Arimo } from "next/font/google";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "400",
});

const ArimoFontThick = Arimo({
  subsets: ["latin"],
  weight: "500",
});

type Props = {
  problem: LeetCodeProps;
  index: number;
};

const Problem = ({ problem, index }: Props) => {
  const { id, title, label, difficulty } = problem;
  return (
    <div
      className={`${difficulty === "easy" && "border-l-green-600"} ${
        difficulty === "medium" && "border-l-orange-400"
      } ${
        difficulty === "hard" && "border-l-red-600"
      } border-l-2 col-span-1 m-1 p-2 gap-2 flex flex-col h-full ${
        index % 2 === 1 && "bg-gray-100"
      } bg-gray-50`}
    >
      <Link
        href={`/leetcode/${id}`}
        className="flex justify-between items-center"
      >
        <h1 className="hover:text-red-600 hover:underline">
          <span className="font-bold mr-1">{id}.</span>
          {title}
        </h1>
        <div className={`${ArimoFont.className} text-sm`}>
          {difficulty === "easy" && (
            <div className=" text-green-600 rounded-full px-4">EASY</div>
          )}{" "}
          {difficulty === "medium" && (
            <div className=" text-orange-400 rounded-full px-4">MEDIUM</div>
          )}{" "}
          {difficulty === "hard" && (
            <div className=" text-red-600 rounded-full px-4">HARD</div>
          )}
        </div>
      </Link>

      <div className={`flex gap-2 ${ArimoFont.className} text-sm`}>
        {label.map((l, i) => (
          <div
            key={i}
            className={` bg-gray-200 text-gray-700 rounded-full px-2`}
          >
            {l}
          </div>
        ))}
      </div>
    </div>
  );
};

const LeetCode = () => {
  return (
    <div
      className={`${ArimoFontThick.className} md:w-[800px] w-[370px] grid grid-cols-1 gap-2 items-center`}
    >
      <h1 className="text-2xl col-span-1 items-center flex justify-center">
        LeetCode Problems
      </h1>
      {problems.map((problem, i) => (
        <Problem key={problem.id} problem={problem} index={i} />
      ))}
    </div>
  );
};

export default LeetCode;
