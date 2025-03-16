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
