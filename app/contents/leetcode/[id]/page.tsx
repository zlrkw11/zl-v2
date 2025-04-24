import ProblemPage from "../../../components/ProblemPage";
import { problems1 } from "@/data/problems/problems1";
import { problems2 } from "@/data/problems/problems2";
import { problems3 } from "@/data/problems/problems3";

const problems = [...problems1, ...problems2, ...problems3];

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const problem = problems.find(
    async (p) => p.id.toString() === (await params).id
  );

  if (!problem) {
    return <div>Problem not found.</div>;
  }

  return <ProblemPage problem={problem} />;
}
