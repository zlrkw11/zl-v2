import { LeetCodeProps as problem } from "@/app/types/types";
export const CODE_WRAPPER = (code: string) => `
  <pre style="
    background-color: #e5e7e9;
    color: #1E1E1E;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    white-space: pre-wrap;
    font-family: monospace;
    ">
<code>${code}</code>
  </pre>
`;

export const problems: problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "easy",
    label: ["array", "string"],
    texts: CODE_WRAPPER(`
     `),
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "hard",
    label: ["array", "binary search", "divide and conquer"],
    texts: "",
  },
  {
    id: 268,
    title: "Product of array except self",
    difficulty: "medium",
    label: ["array", "string"],
    texts: "",
  },
];
