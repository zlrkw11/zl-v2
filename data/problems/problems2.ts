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
    the base case is met --> when the current node is None. We set up an array to be empty and a depth to be 0
    at the start. Put the node into the array if the we have not put a node for this level yet. Then we call
    the dfs function on the right node first and then the left node. As this will make sure that all the rightmost
    nodes will be processed first because the depth variable is used to make sure that there is only one node from the level can be added to the result array.`,
    O: "O(n)",
    S: "O(h)",
    link1: "https://leetcode.com/problems/binary-tree-right-side-view/",
    link2:
      "https://github.com/zlrkw11/leetcode/blob/main/binary_tree/binary_tree.md",
    link2name: "zl's LeetCode repo notes on DFS",
  },
  {
    id: 1448,
    title: "Count Good Nodes in Binary Tree",
    date: "2025-03-24",
    difficulty: "medium",
    label: [
      "tree",
      "depth-first search",
      "breadth-first search",
      "binary tree",
    ],
    code: `class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        def dfs(node, mx):
            if not node:
                return
            nonlocal ans
            if node.val >= mx:
                mx = node.val
                ans += 1

            dfs(node.left,mx)
            dfs(node.right,mx)

        mx = float("-inf")
        ans = 0
        dfs(root, mx)
        return ans`,
    texts: `The idea for this question is to use DFS to traverse the tree and keep track of the max value. Everytime we 
    visit a node, if the current node has a value that is greater than the max, we increment the answer by 1 and update the max value to 
    the current node's value. Then we call the dfs function on the left and right nodes of the current node. Note: the max value is independent
    on every path because it is passed by value and not by reference. Therefore, we will have 1 mx value on both left and right subtree for every
    node to keep inherit the previous values and update themselves.`,
    O: "O(n)",
    S: "O(h)",
    link1: "https://leetcode.com/problems/count-good-nodes-in-binary-tree/",
    link2: "",
  },
  {
    id: 55,
    title: "Jump Game",
    date: "2025-04-04",
    difficulty: "medium",
    label: ["array", "dynamic programming", "greedy"],
    code: `from typing import List
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        mx = 0
        for i,x in enumerate(nums):
            if mx < i:
                return False
            mx = max(mx, i+x)
        return True`,
    texts: `Intuitive solution. The main idea is to store a mx = 0 as the max position of index we can reach. enumerate the array and 
    get index and the value, update the mx after each iteration finishes using i+x (see if it is bigger). If it's smaller than the current
    index - return false, as it can't reach further positions.`,
    O: "O(n)",
    S: "O(1)",
    link1: "https://leetcode.com/problems/jump-game/description/",
    link2: "https://github.com/zlrkw11/leetcode/blob/main/greedy/p.55.png",
    link2name: "visualize it!",
  },
  {
    id: 53,
    title: "Maximum Subarray",
    date: "2025-06-11",
    difficulty: "medium",
    label: ["sliding window", "array", "dynamic programming"],
    code: `from typing import List
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
       maxSub = nums[0]
       curr = 0
       for n in nums:
           if curr < 0:
               curr = 0
           curr += n
           maxSub = max(maxSub, curr)
       return maxSub`,
    texts: `Linear solution, the main idea is to use a variable -- curr to keep track of the current subarray sum, reset it to 0 if it is negative,
    and update the maxSub variable to be the maximum of itself and curr after each iteration. This way, we can find the maximum subarray sum in O(n) time.`,
    O: "O(n)",
    S: "O(1)",
    link1: "https://leetcode.com/problems/maximum-subarray/",
    link2: "",
  },
  {
    id: 11,
    title: "Container With Most Water",
    date: "2025-06-13",
    difficulty: "medium",
    label: ["array", "2 pointers", "greedy"],
    code: `from typing import List
class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_area = 0
        l,r = 0, len(height)-1
        while l<r:
            area = min(height[l], height[r])*(r-l)
            max_area = max(max_area, area)
            if height[l]<height[r]:
                l+=1
            else:
                r-=1
        return max_area
`,
    texts: `The main idea is to use 2 pointers, one at the start and one at the end of the array. Have a for loop running as long as they don't meet
    and calculate the area upon each iteration and update the max area. If the left pointer's height is smaller than the right pointer's height, we move the left pointer to the right, otherwise we move the right pointer to the left.`,
    O: "O(n)",
    S: "O(1)",
    link1: "https://leetcode.com/problems/container-with-most-water/",
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
