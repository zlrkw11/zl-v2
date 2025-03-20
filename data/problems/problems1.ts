import { LeetCodeProps as problem } from "@/app/types/types";

export const problems1: problem[] = [
  {
    id: 1,
    title: "Two Sum",
    date: "2025-03-01",
    difficulty: "easy",
    label: ["array", "string", "hash table"],
    code: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d = {}
        for i, x in enumerate(nums):
            if (y := target - x) in d:
                return [d[y], i]
            d[x] = i`,
    texts: `Initilize a hash table, go over nums using enumerate, each value is x
    if we found a value that it equlas target - x in the hash table, we simply return
    the 2 indices: x and y. Else, we record d[number] = index.`,
    O: "O(n)",
    S: "O(n)",
    link1: "https://leetcode.com/problems/two-sum/",
    link2: "",
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    date: "2025-03-01",
    difficulty: "hard",
    label: ["array", "binary search", "divide and conquer"],
    code: `class Solution(object):
    def findMedianSortedArrays(self, nums1, nums2):
        arr = []*(len(nums1)+len(nums2))
        minimum = min(len(nums1), len(nums2))
        x = 0
        y = 0 
        while True:
            if x == len(nums1): 
                arr += nums2[y::]
                break
            elif y == len(nums2):
                arr += nums1[x::]
                break
    
            if nums1[x] <= nums2[y]:
                arr.append(nums1[x])
                x += 1
            else:
                arr.append(nums2[y])
                y += 1
           
        if len(arr) % 2 == 1:
            return arr[len(arr)//2]

        return float((arr[len(arr)//2] + arr[len(arr)//2 -1]) / 2)`,
    texts: `Interesting problem I did with Nate. The logic is to initilize an empty array of length
    of nums1 plus nums2. Then sort nums1 and nums2 and append the sorted elements until one of them 
    run out of elements. Decide and return the median value based on if the length is odd or even`,
    O: "O(n + m)",
    S: "O(n + m)",
    link1: "https://leetcode.com/problems/median-of-two-sorted-arrays/",
    link2: "",
  },
  {
    id: 238,
    title: "Product of array except self",
    date: "2025-03-01",
    difficulty: "medium",
    label: ["array", "string"],
    code: ``,
    texts: ``,
    O: "",
    S: "",
    link1: "https://leetcode.com/problems/product-of-array-except-self/",
    link2: "",
  },
  {
    id: 167,
    title: "Two Sum II",
    date: "2025-03-05",
    difficulty: "medium",
    label: ["2 pointers"],
    code: `class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        l, r = 0, len(numbers)-1
        while l<r:
            if numbers[l]+numbers[r] > target:
                r -= 1
            elif numbers[l]+numbers[r] < target:
                l+=1
            else:
                return [l+1,r+1]`,
    texts: `My solution simply uses 2 pointers. I think this question is extremely similar with Q.1679 - Max
    number of k-sum pairs as they are both asking to get the sum from a list. To be honest, I feel like they are 
    identical... So, setting 2 pointers at the start & end, run a while loop to check if > target: move right pointer 
    to the left, if < target: move left pointer to the right until we found the answer.`,
    O: "O(n)",
    S: "O(1)",
    link1: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
    link2: "",
  },
  {
    id: 15,
    title: "Three Sum",
    date: "2025-03-05",
    difficulty: "medium",
    label: ["2 pointers", "array", "sorting"],
    code: `\`\`\`python
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        n = len(nums)
        ans = []
        for i in range(n - 2):
            if nums[i] > 0:
                break
            # i is not 0 and i is repeated
            if i and nums[i] == nums[i - 1]:
                continue
            j, k = i + 1, n - 1
            while j < k:
                x = nums[i] + nums[j] + nums[k]
                if x < 0:
                    j += 1
                elif x > 0:
                    k -= 1
                else:
                    ans.append([nums[i], nums[j], nums[k]])
                    j, k = j + 1, k - 1
                    while j < k and nums[j] == nums[j - 1]:
                        j += 1
                    while j < k and nums[k] == nums[k + 1]:
                        k -= 1
        return ans`,
    texts: `I think this is definitely a harder medium question. An evolved version
    of two sum II. As usual, sort the array to be able to identify repeating elements.
    for every nums[i] where 0 <= i < n-2, we set 2 pointers: j = i+1 and k = n-1 in order
    to find the j and k where nums[i] + nums[j] + nums[k] = 0. Meanwhile, for every nums[i], 
    we need to skip repeated elements to satisfy the requirement of "No repeated triplets". 
    I think the hardest part of this problem is that to realize the array is sorted, so having 
    repeated i, j or k values will give the same triplets.`,
    O: "O(n^2)",
    S: "O(n*logn)",
    link1: "https://leetcode.com/problems/3sum/",
    link2: "",
  },
  {
    id: 643,
    title: "Maximum Average Subarray I",
    date: "2025-03-06",
    difficulty: "easy",
    label: ["sliding window", "array"],
    code: `class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        n = len(nums)
        ans = s = sum(nums[:k])
        for i in range(k, n):
            s += nums[i] - nums[i-k]
            ans = max(ans, s)
        return ans/k`,
    texts: `This question requires a sliding window method where we treat 
    'k' items as a unit as it moves across the array. Starting by setting the 
    s to the first k items, using a for-loop, for every item, keeps adding nums[i] and remove the nums[i-k]
    and updates the max_sum after each iteration.`,
    O: "O(n)",
    S: "O(1)",
    link1: "https://leetcode.com/problems/maximum-average-subarray-i/",
    link2: "",
  },
  {
    id: 2390,
    title: "Remove Stars From a String",
    date: "2025-03-07",
    difficulty: "medium",
    label: ["stack", "string"],
    code: `class Solution:
    def removeStars(self, s: str) -> str:
        ans = []
        for c in s:
            if c == '*':
                ans.pop()
            else:
                ans.append(c)
        return ''.join(ans)`,
    texts: `This is probably the smartest way to approach this question. Setting up an
    empty stack - ans, run a for-loop on the string, add the character into the stack if 
    it is not a '*', otherwise remove the last character in the stack. This method perfectly
    demonstrated the principle of stack - Last In First Out.`,
    O: "O(n) *where n = s.length",
    S: "O(1)",
    link1: "https://leetcode.com/problems/removing-stars-from-a-string/",
    link2: "",
  },
  {
    id: 20,
    title: "Valid Parentheses",
    date: "2025-03-09",
    difficulty: "easy",
    label: ["stack", "string"],
    code: `class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        d = {"()","[]","{}"}
        for c in s:
            if c in "([{":
                stack.append(c)
            elif not stack or stack.pop() + c not in d:
                return False
        return not stack`,
    texts: `Reminds me of some CS130 questions. The way to do it is setting up a stack, 
    run a for-loop to check for every element in the string, if the element 
    is a left parentheses, push it into the stack. Otherwise check if the right one is a 
    match with the left one using stack.pop(), if not then cut off the loop and return false.
    After the loop finishes, check whether if the stack is empty(True otherwise False).`,
    O: "O(n) *n = s.length",
    S: "O(n)",
    link1: "https://leetcode.com/problems/valid-parentheses/",
    link2: "",
  },
  {
    id: 704,
    title: "Binary Search",
    date: "2025-03-09",
    difficulty: "easy",
    label: ["array", "binary search"],
    code: `class Solution:
    def search(self, nums: List[int], target: int) -> int:
        low, high = 0, len(nums)-1
        while low <= high:
            mid = (low + high) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                low = mid+1
            else:
                high = mid-1            
        return -1`,
    texts: `The basic idea is to divide the array by 2. Start with a while-loop, keep
    updating the 'mid' value according to low and high. If the mid is the target, return it.
    Otherwise either: higher the low anchor (if mid < target value), to search for the higher half. Or
    lower the high anchor (if mid > target value) to search for the lower half. The while loop will stop
    when low is going over high.`,
    O: "O(nlogn)",
    S: "O(1)",
    link1: "https://leetcode.com/problems/binary-search/",
    link2: "",
  },
  {
    id: 74,
    title: "Search a 2D Matrix",
    date: "2025-03-10",
    difficulty: "medium",
    label: ["array", "matrix", "binary search"],
    code: `class Solution:
    def searchMatrix(self, matrix: List[List[int]], target:int)-> bool: 
        
        low, high = 0, len(matrix)-1

        while low <= high:
            mid1 = low + (high-low)//2

            if matrix[mid1][0] == target:
                return True
            elif matrix[mid1][0] < target and matrix[mid1][-1] < target:
                low = mid1+1
            elif matrix[mid1][0] > target:
                high = mid1-1
            else:
                break
        
        arr = matrix[mid1]
        low, high = 0, len(arr)-1

        while low <= high:
            mid2 = low + (high-low)//2
            if arr[mid2] == target:
                return True
            elif arr[mid2] < target:
                low = mid2+1
            else:
                high = mid2-1

        return False`,
    texts: `The method I came up with is simply: running a binary search on the bigger arrays (low and high stand for 
    the index of the arrays in the matrix) first to decide which array the target value is sitting in. This is 
    done by comparing the target with the first element of each array. After that, we start another binary search on 
    the array that contains the target. This time, we will have low and high to represent the index of the values in the 
    array.`,
    O: "O(log m + log n)",
    S: "O(1)",
    link1: "https://leetcode.com/problems/search-a-2d-matrix/",
    link2: "",
  },
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
  {
    id: 543,
    title: "Diameter of Binary Tree",
    date: "2025-03-19",
    difficulty: "easy",
    label: ["tree", "depth-first search", "binary tree"],
    code: `from typing import Optional
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.diameter = 0
        def dfs(node):
            if not node:
                return 0
            l = dfs(node.left)
            r = dfs(node.right)
            self.diameter = max(self.diameter, l+r)
            return max(l,r)+1
        dfs(root)

        return self.diameter`,
    texts: `My implementation heavily relies on DFS. The main idea is to use a helper function with dfs to recursively calculate the depth of path left and left 
    for every node until we reach the leaf node, then we return the longest path out of the left / right for each node, return the max path + 1(the node itself) 
    back to the parent node and update the diameter if we found a greater diameter with a higher sum of (left + right).`,
    O: "O(n)",
    S: "O(h) *h = tree.height",
    link1: "https://leetcode.com/problems/diameter-of-binary-tree/description/",
    link2: "",
  },
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
    link2name: "zl's LeetCode repo notes on binary tree",
  },
];

// {
//     id: ,
//     title: "",
//     date: "2025--",
//     difficulty: "medium",
//     label: ["", ""],
//     code: `\`\`\`python
//     `,
//     texts: ``,
//     O: "",
//     S: "",
//     link1: "",
//     link2: "",
//   },
