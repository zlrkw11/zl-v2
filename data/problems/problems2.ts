import { LeetCodeProps as problem } from "@/app/types/types";

export const problems2: problem[] = [
  {
    id: 121,
    title: "Best Time to Buy and Sell Stock",
    date: "2025-03-11",
    difficulty: "easy",
    label: ["array", "dynamic programming"],
    code: `from math import inf
from typing import List
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ans, low = 0, float('inf')
        for price in prices:
            ans = max(ans, price-low)
            low = min(price, low)
        return ans
    `,
    texts: `Straightforward dp question. We initialize the max-earning - ans and 
    the lowest price seen - low to be 0 and inf. Run a for-loop and update these 
    2 values. Whenever a higher ans is seen, update it and whenever a lower low
    is seen, update the low to the new price.`,
    O: "O(n)",
    S: "O(1)",
    link1: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    link2: "",
  },
  {
    id: 206,
    title: "Reverse a Linked List",
    date: "2025-03-11",
    difficulty: "easy",
    label: ["linked list", "recursion"],
    code: `class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        curr = head
        while curr:
            next = curr.next 
            curr.next = dummy.next 
            dummy.next = curr
            curr = next
        return dummy.next`,
    texts: `Start by setting up a dummy node as the canvas to make the 'reversed version' 
    of the linked list. We use 'next' to store the next node and use it later. The core of the 
    method is to do 2 things: a link between (every) next node to the head of the dummy chain and 
    make the curr node the head of the dummy chain, repeating these steps for every node.`,
    O: "O(n)",
    S: "O(1)",
    link1: "https://leetcode.com/problems/reverse-linked-list/description/",
    link2: "",
  },
  {
    id: 141,
    title: "Linked List Cycle",
    date: "2025-03-12",
    difficulty: "easy",
    label: ["hash table", "linked list", "2 pointers"],
    code: `class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        fast = head 
        while fast and fast.next:
            head = head.next
            fast = fast.next.next
            if fast is head:
                return True
        return False`,
    texts: `Learnt the Tortoise and the Hare algorithm from this question. The concept is simple
    but genius. Setting up 2 pointers: 1 slow, 1 fast to iterate the linked list starting from head. 
    When the fast node IS the slow node, we know a cycle must exists in this linked list.`,
    O: "O(n)",
    S: "O(1)",
    link1: "https://leetcode.com/problems/linked-list-cycle/description/",
    link2: "",
  },
  {
    id: 2,
    title: "Add Two Numbers",
    date: "2025-3-14",
    difficulty: "medium",
    label: ["linked list", "math", "recursion"],
    code: `class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode()
        curr = dummy
        carry = 0
        
        while l1 or l2 or carry:
            val1 = l1.val if l1 else 0
            val2 = l2.val if l2 else 0
            total = val1 + val2 + carry
            carry = total // 10
            curr.next = ListNode(total % 10)
            curr = curr.next
            if l1:
                l1 = l1.next
            if l2:
                l2 = l2.next

        return dummy.next
    `,
    texts: `Starting off by setting up a dummy node as canvas (as usual). Initialize a carry value (core) for the 
    calculation to be 0. Run a while loop with curr as pointer. As long as either l1, l2 or carry(it takes up a space as a list node) is not 0
    and constantly generate the sum from val1, val2 and carry. Process total by trying to get the new carry (either 1 or 0)
    then calculate the next node's value (anything < 10) and make curr connect to it. Move curr forward along with both l1 and l2
    if they are not 'none'.`,
    O: "O(max(n,m))",
    S: "O(max(n,m))",
    link1: "https://leetcode.com/problems/add-two-numbers/",
    link2: "",
  },
  {
    id: 19,
    title: "Remove Nth Node From End of List",
    date: "2025-03-15",
    difficulty: "medium",
    label: ["linked list", "2 pointers"],
    code: `class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        if head.next == None:
            return None
        fast = head
        slow = head
        count = 0

        while count < n:
            fast = fast.next
            count += 1

        if fast == None:
            return head.next
        
        while fast.next != None:
            fast = fast.next
            slow = slow.next
        
        slow.next = slow.next.next
        return head`,
    texts: `A solution Jeffery made. The idea is to traverse the linked list with a fast pointer first
    for n steps, then start traversing again using both fast and slow pointers. So when the fast pointer
    reaches the second last node, the slow pointer will be pointing to the node right before target as it is n+1 steps
    counted back from the end. Then we connect the current node to the node after target (slow.next.next).`,
    O: "O(L) *length of linked list",
    S: "O(1)",
    link1:
      "https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/",
    link2: "https://github.com/jeffplays2005",
    link2name: "Jeffery Ji's GitHub",
  },
  {
    id: 287,
    title: "Find the Duplicate Number",
    date: "2025-03-16",
    difficulty: "medium",
    label: ["array", "2 pointers", "binary search", "bit manipulation"],
    code: `from typing import List
class Solution:
    def findDuplicate(self, nums: List[int]) -> int:
        d= {nums[i]:0 for i in range(len(nums))}
    
        for i in range(len(nums)):
            if nums[i] in d:
                d[nums[i]]+=1
        
        for key, value in d.items():
            if value > 1:
                return key`,
    texts: `My implementation consists of 3 steps. First, I created a dictionary to store the frequency of each number (default value = 0). Then I 
    iterated through the list to update the frequency of each number. Finally, I check the dictionary and return the number with a frequency greater than 1.`,
    O: "O(n)",
    S: "O(1)",
    link1:
      "https://leetcode.com/problems/find-the-duplicate-number/description/",
    link2: "",
  },
  {
    id: 23,
    title: "Merge k Sorted Lists",
    date: "2025-03-17",
    difficulty: "hard",
    label: ["linked list", "divide and conquer", "heap", "merge sort"],
    code: `from typing import List, Optional
import heapq

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def mergeKLists(self, lists: List[Optional[ListNode]]) -> Optional[ListNode]:
        setattr(ListNode, "__lt__", lambda a,b: a.val < b.val)
        pq = [head for head in lists if head]
        heapq.heapify(pq)
        dummy = curr = ListNode()
        while pq:
            node = heapq.heappop(pq)
            if node.next:
                heapq.heappush(pq, node.next)
            curr.next = node
            curr = curr.next
        return dummy.next`,
    texts: `My implementation uses a heap to store the heads of the linked lists. Set up a dummy node as the head for the answer linked list and a curr as the pointer to create the 
    answer linked list. I then use a while loop to pop the top node from the heap (minimum node). If that node is connected to another node, I push the next node into the heap to make 
    sure every node is involved in the process of comparison and sorting. Then the pointer will establish a link with the node which is popped from the heap, and move forward. Repeat the
    process until the heap - pq is empty. Return the dummy.next as the answer linked list.`,
    O: "O(n)",
    S: "O(1)",
    link1: "https://leetcode.com/problems/merge-k-sorted-lists/description/",
    link2:
      "https://github.com/zlrkw11/leetcode/blob/main/linked_list/hard/merge_k_sorted_lists.md",
    link2name: "Check out the explanation",
  },
  {
    id: 226,
    title: "Invert Binary Tree",
    date: "2025-03-18",
    difficulty: "easy",
    label: ["tree", "dfs", "bfs", "binary tree"],
    code: `from typing import Optional 
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        curr = root 
        if curr:
            temp = curr.left 
            curr.left = curr.right
            curr.right = temp
            self.invertTree(curr.left)
            self.invertTree(curr.right)
        return root`,
    texts: `The implementation is to iterate the binary tree with a pointer - curr. For every curr, swap the left and right child of the node, 
    then recursively call the invertTree() function on the left and right child until all the nodes are processed.`,
    O: "O(n)",
    S: "O(1)",
    link1: "https://leetcode.com/problems/invert-binary-tree/description/",
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
