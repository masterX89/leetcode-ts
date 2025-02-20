import type { ListNode } from './0707_MyLinkedList'

function hasCycle(head: ListNode | null): boolean {
  let slow = head
  let fast = head
  while (fast !== null && fast.next !== null) {
    slow = slow!.next
    fast = fast.next.next
    if (fast === slow) {
      return true
    }
  }
  return false
};

export { hasCycle }
