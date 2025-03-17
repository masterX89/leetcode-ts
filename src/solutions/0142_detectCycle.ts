import type { ListNode } from './0707_MyLinkedList'

function detectCycle(head: ListNode | null): ListNode | null {
  if (head === null) {
    return null
  }
  const cacheSet = new Set<ListNode>()
  let curr: ListNode | null = head
  while (curr && !cacheSet.has(curr)) {
    cacheSet.add(curr)
    curr = curr.next
  }
  return curr
};

export { detectCycle }
