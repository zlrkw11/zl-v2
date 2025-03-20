import { LeetCodeProps as problem } from "@/app/types/types";

export const problems2: problem[] = [
  {
    id: 110,
    title: "balanced binary tree",
    date: "2025-03-20",
    difficulty: "easy",
    label: ["tree", "depth-first search", "binary tree"],
    code: `from typing import Optional
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def height(node):
            if node is None:
                return 0
            left = height(node.left)
            right = height(node.right)
            if left==-1 or right==-1 or abs(left-right)>1:
                return -1
            return max(left, right)+1

        return height(root)>=0`,
    texts: `Rather complicated problem for a easy level. The core of it is to use DFS (bottom-up) to recursively traverse
    the tree and calculate the height of each node's left and right subtree and compare the difference to see if
    it is >1, if so, the condition will be false and return -1 to cut off the recursion. The max(left, right)+1 
    would be added to the return value to calculate the height of the current node which also updates the left and right
    depth for the node above.`,
    O: "O(n)",
    S: "O(h)",
    link1: "https://leetcode.com/problems/balanced-binary-tree/",
    link2:
      "https://github.com/zlrkw11/leetcode/blob/main/binary_tree/binary_tree.md",
  },
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
