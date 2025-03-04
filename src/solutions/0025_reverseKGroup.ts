import type { ListNode } from './0707_MyLinkedList'

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const isReversible = (node: ListNode | null, k: number) => {
    let p: ListNode | null = node
    for (let i = 0; i < k; i++) {
      if (p === null) {
        return false
      }
      p = p.next
    }
    return true
  }

  let resHead = null
  let tail = head
  let prev = null
  let prevTail = null
  let curr = head
  while (isReversible(curr, k)) {
    for (let i = 0; i < k; i++) {
      if (curr) {
        const next = curr.next
        curr.next = prev
        prev = curr
        curr = next
      }
    }
    if (tail === head) {
      resHead = prev
    }
    if (prevTail) {
      prevTail.next = prev
    }
    prevTail = tail
    tail = curr
  }

  if (prevTail) {
    prevTail.next = curr
  }
  return resHead
};

export { reverseKGroup }
