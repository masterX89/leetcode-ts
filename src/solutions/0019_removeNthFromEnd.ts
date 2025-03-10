import { ListNode } from './0707_MyLinkedList'

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const resHead = new ListNode(-1, head)
  let slow: ListNode | null = resHead
  let fast: ListNode | null = resHead
  for (let i = 0; i < n; i++) {
    if (fast) {
      fast = fast.next
    }
  }
  while (fast && fast.next) {
    if (slow) {
      slow = slow.next
    }
    fast = fast.next
  }
  if (slow) {
    slow.next = slow?.next?.next ?? null
  }
  return resHead.next
};

export { removeNthFromEnd }
