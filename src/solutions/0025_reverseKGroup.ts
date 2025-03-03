import type { ListNode } from './0707_MyLinkedList'

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  const isReversible = (node: ListNode, k: number) => {
    let p: ListNode | null = node
    while (--k && p) {
      p = p.next
    }
    return p !== null
  }
  let resHead = null
  let isFirst = true
  let tail = head
  let prev = null
  let prevTail = null
  let curr = head
  while (isReversible(curr as ListNode, k)) {
    let i = k
    while (i--) {
      const next = (curr as ListNode).next
      ;(curr as ListNode).next = prev
      prev = curr
      curr = next
    }
    if (isFirst) {
      isFirst = false
      resHead = prev
    }
    if (prevTail) {
      prevTail.next = prev
    }
    prevTail = tail
    tail = curr
    prev = null
  }
  if (prevTail) {
    prevTail.next = curr
  }
  return resHead
};

export { reverseKGroup }
