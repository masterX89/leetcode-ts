import type { ListNode } from './0707_MyLinkedList'

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let p = headB
  let q = headA
  while (p !== q) {
    p = p === null ? headA : p.next
    q = q === null ? headB : q.next
  }
  return p
};

export { getIntersectionNode }
