import Link from "next/link";
import { LeetCodeProps } from "@/app/types/types";
import { Arimo } from "next/font/google";
import { problems } from "@/data/problems";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

type Props = {
  slug: string;
  problem: LeetCodeProps;
};

const ProblemPage = async ({ slug, problem }: Props) => {
  const { id, title, difficulty } = problem;
  return (
    <div
      className={`md:w-[800px] m-2 flex flex-col gap-4 ${ArimoFont.className}`}
    >
      <div className="flex gap-4">
        <p>{id}</p>
        <h1>{title}</h1>
        <h1
          className={`${difficulty == "easy" && `text-green-300`}${
            difficulty == "medium" && `text-orange-300`
          }${difficulty == "hard" && `text-red-600`}`}
        >
          {difficulty}
        </h1>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};
export default ProblemPage;
