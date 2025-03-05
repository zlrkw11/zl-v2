import { LeetCodeProps as problem } from "@/app/types/types";

export const problems: problem[] = [
  {
    id: 1,
    title: "Two Sum",
    date: "2025-03-01",
    difficulty: "easy",
    label: ["array", "string"],
    code: `\`\`\`python
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d = {}
        for i, x in enumerate(nums):
            if (y := target - x) in d:
                return [d[y], i]
            d[x] = i
\`\`\``,
    texts: `Initilize a hash table, go over nums using enumerate, each value is x
    if we found a value that it equlas target - x in the hash table, we simply return
    the 2 indices: x and y. Else, we record d[number] = index.`,
    O: "O(n)",
    S: "O(n)",
  },
  {
    id: 4,
    title: "Median of Two Sorted Arrays",
    date: "2025-03-01",
    difficulty: "hard",
    label: ["array", "binary search", "divide and conquer"],
    code: `\`\`\`python
    class Solution(object):
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
  },
  {
    id: 268,
    title: "Product of array except self",
    date: "2025-03-01",
    difficulty: "medium",
    label: ["array", "string"],
    code: "",
    texts: "",
    O: "",
    S: "",
  },
  {
    id: 167,
    title: "Two Sum II",
    date: "2025-03-05",
    difficulty: "medium",
    label: ["2 pointers"],
    code: "",
    texts: "",
    O: "",
    S: "",
  },
];
