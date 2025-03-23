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
  {
    id: 102,
    title: "Binary Tree Level Order Traversal",
    date: "2025-03-22",
    difficulty: "medium",
    label: ["tree", "breadth-first search", "binary tree"],
    code: `from typing import Optional, List
from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        return bfs(root)

def bfs(node):
    if not node:
        return []
    ans = []
    q = deque([node])
    while q:
        lvl = []
        for _ in range(len(q)):
            node = q.popleft()
            lvl.append(node.val)
            if node.left:
                q.append(node.left)
            if node.right:
                q.append(node.right)
        ans.append(lvl)
    return ans`,
    texts: `My implementation uses BFS to traverse the tree by its levels --> Top-down, left to right approach.
    The core idea is to initialize a queue with the root node as the first level and run a for-loop to process every node
    and add itself to the current level array, then add its children to the queue for the next level's processing. Until the
    queue is completely empty.`,
    O: "O(n)",
    S: "O(n)",
    link1:
      "https://leetcode.com/problems/binary-tree-level-order-traversal/description/",
    link2:
      "https://github.com/zlrkw11/leetcode/blob/main/binary_tree/binary_tree.md",
    link2name: "zl's LeetCode repo notes on BFS",
  },
  {
    id: 199,
    title: "Binary Tree Right Side View",
    date: "2025-03-23",
    difficulty: "medium",
    label: [
      "tree",
      "depth-first search",
      "breadth-first search",
      "binary tree",
    ],
    code: `from typing import Optional, List

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def rightSideView(self, root: Optional[TreeNode]) -> List[int]:
        ans = []
        dfs(root, 0, ans)
        return ans

def dfs(node,depth,ans):
    if node is None:
        return
    if len(ans) == depth:
        ans.append(node.val)
    dfs(node.right,depth+1,ans)
    dfs(node.left,depth+1,ans)`,
    texts: `Very interesting problem, the main idea is to use DFS to recursively traverse the tree and
    process nodes from right to left while updating the result array and the depth of the recursion, until
    the base case is met --> when the current node is None.`,
    O: "O(n)",
    S: "O(h)",
    link1: "https://leetcode.com/problems/binary-tree-right-side-view/",
    link2:
      "https://github.com/zlrkw11/leetcode/blob/main/binary_tree/binary_tree.md",
    link2name: "zl's LeetCode repo notes on DFS",
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
