import { ListNode } from './0707_MyLinkedList'

function swapPairs(head: ListNode | null): ListNode | null {
  const resHead = new ListNode(-1)
  let prevTail = resHead
  let tail = head
  let prev = null
  let curr = head
  if (head === null || head.next === null) {
    return head
  }
  while (curr && curr.next) {
    prev = curr
    curr = curr.next
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
    // 1 <- 2 -> 3 -> 4
    // t    p    c
    prevTail.next = prev
    if (tail) {
      tail.next = curr
      prevTail = tail
    }
    tail = curr
  }
  return resHead.next
};
export { swapPairs }
