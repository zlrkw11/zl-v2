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
        <h1 className="gap-2 flex text-xl">
          <p>{problem.id}.</p>
          <p>{problem.title}</p>
        </h1>
        <h1
          className={`mt-auto ${
            problem.difficulty === "easy"
              ? "text-green-500"
              : problem.difficulty === "medium"
              ? "text-orange-500"
              : problem.difficulty === "hard"
              ? "text-red-600"
              : ""
          }`}
        >
          {problem.difficulty}
        </h1>
        <p className="">{problem.texts}</p>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  );
};
export default ProblemPage;
