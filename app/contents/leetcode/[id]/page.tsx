import Link from "next/link";
import { LeetCodeProps } from "@/app/types/types";
import { Arimo } from "next/font/google";
import { problems } from "@/data/problems";

const ArimoFont = Arimo({
  subsets: ["latin"],
  weight: "500",
});

type Props = {
  params: {
    id: string;
  };
};

const ProblemPage = ({ params }: Props) => {
  const problem = problems.find((p) => p.id.toString() === params.id);
  if (!problem) {
    return <div>Problem does not exist~</div>;
  }
  return (
    <div
      className={`md:w-[800px] m-2 flex flex-col gap-4 ${ArimoFont.className}`}
    >
      <div className="flex gap-4">
        <p>{problem.id}</p>
        <h1>{problem.title}</h1>
        <h1
          className={`${problem.difficulty == "easy" && `text-green-300`}${
            problem.difficulty == "medium" && `text-orange-300`
          }${problem.difficulty == "hard" && `text-red-600`}`}
        >
          {problem.difficulty}
        </h1>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};
export default ProblemPage;
