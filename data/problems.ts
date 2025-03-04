import { LeetCodeProps as problem } from "@/app/types/types";

export const problems: problem[] = [
  {
    id: 1,
    title: "Two Sum",
    difficulty: "easy",
    label: ["array", "string"],
    code: `\`\`\`python
from typing import List
from bisect import bisect_left

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        n = len(numbers)
        for i in range(n - 1):
            x = target - numbers[i]
            j = bisect_left(numbers, x, lo=i + 1)
            if j < n and numbers[j] == x:
                return [i + 1, j + 1]
\`\`\``,
    texts: "",
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    difficulty: "hard",
    label: ["array", "binary search", "divide and conquer"],
    code: "",
    texts: "",
  },
  {
    id: 268,
    title: "Product of array except self",
    difficulty: "medium",
    label: ["array", "string"],
    code: "",
    texts: "",
  },
];
