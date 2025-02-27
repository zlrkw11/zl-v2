import { Props } from "@/app/types/types";
import Link from "next/link";
import { problems } from "@/data/problems";

const Problem = ({ title, slug, label, difficulty }: Props) => {
  return (
    <div className="border-2 col-span-1 m-2 p-2">
      <Link href={`/leetcode/${slug}`} className="flex justify-between">
        <h1>{title}</h1>
        <div>
          {difficulty === "easy" && (
            <div className="border-2 border-green-300 rounded-full px-4">E</div>
          )}
        </div>
      </Link>

      <div className="flex gap-2">
        {label.map((l, i) => (
          <div
            key={i}
            className="border-2 border-gray-200 from-white bg-gradient-to-t to-gray-300 rounded-full px-1"
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
    <div className="w-[800px] grid gird-cols-4 m-2 items-center">
      <h1 className="text-2xl col-span-4 items-center flex justify-center">
        LeetCode Problems
      </h1>
      {problems.map((problem) => (
        <Problem key={problem.id} {...problem} />
      ))}
    </div>
  );
};

export default LeetCode;
