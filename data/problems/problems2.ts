import { LeetCodeProps as problem } from "@/app/types/types";

export const problems2: problem[] = [
  {
    id: 100,
    title: "Same Tree",
    date: "2025-03-20",
    difficulty: "easy",
    label: [
      "tree",
      "depth-first search",
      "breadth-first search",
      "binary tree",
    ],
    code: `from typing import Optional
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        def dfs(n1, n2):
            if not n1 and not n2:
                return True
            if not n1 or not n2:
                return False
            if n1.val != n2.val:
                return False
            return dfs(n1.left, n2.left) and dfs(n1.right , n2.right)
        return dfs(p,q)`,
    texts: `The main idea is to use DFS to recursively traverse the tree and compare every left & right node of the 2 trees,
    (new parameter nodes would be left of p and left of q) if the comparison is false, return false immediately to cut off the recursion.`,
    O: "O(n)",
    S: "O(h)",
    link1: "https://leetcode.com/problems/same-tree/description/",
    link2: "",
  },
];
// {
//     id: ,
//     title: "",
//     date: "2025--",
//     difficulty: "medium",
//     label: ["", ""],
//     code: ``,
//     texts: ``,
//     O: "",
//     S: "",
//     link1: "",
//     link2: "",
//   },
