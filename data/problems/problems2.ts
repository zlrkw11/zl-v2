import { LeetCodeProps as problem } from "@/app/types/types";

export const problems2: problem[] = [
  {
    id: 121,
    title: "Best Time to Buy and Sell Stock",
    date: "2025-03-11",
    difficulty: "easy",
    label: ["array", "dynamic programming"],
    code: `\`\`\`python
from math import inf
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
    code: `\`\`\`python
class Solution:
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
    code: `\`\`\`python
class Solution:
    def hasCycle(self, head: Optional[ListNode]) -> bool:
        fast = head 
        while fast and fast.next:
            head = head.next
            fast = fast.next.next
            if fast is head:
                return True
        return False
    `,
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
    code: `\`\`\`python
class Solution:
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
    code: `\`\`\`python
class Solution:
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
        return head
    `,
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
];
