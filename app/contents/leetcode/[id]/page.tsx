import ProblemPage from "../../../components/ProblemPage";
import { problems1 } from "@/data/problems/problems1";
import { problems2 } from "@/data/problems/problems2";
import { problems3 } from "@/data/problems/problems3";

const problems = [...problems1, ...problems2, ...problems3];

export default function Page({ params }: { params: { id: string } }) {
  const problem = problems.find((p) => p.id.toString() === params.id);

  if (!problem) {
    return <div>Problem not found.</div>;
  }

  return <ProblemPage problem={problem} />;
}
