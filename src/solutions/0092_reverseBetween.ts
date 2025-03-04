import { ListNode } from './0707_MyLinkedList'

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  const resHead = new ListNode(-1)
  let prev = null
  let curr = head
  for (let i = 2; i <= left; i++) {
    if (curr) {
      prev = curr
      curr = curr.next
    }
  }
  if (curr !== head) {
    resHead.next = head
  }
  // res -> 1 -> 2 -> 3 -> 4 -> 5
  //       pT
  const prevTail = prev
  const tail = curr
  // reverse from next node
  if (curr) {
    prev = curr
    curr = curr.next
  }
  for (let i = left + 1; i <= right; i++) {
    if (curr) {
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
  }
  // 1 -> 2 <- 3 <- 4  5
  // r    t         p  c
  if (resHead.next === null) {
    resHead.next = prev
  }
  if (prevTail) {
    prevTail.next = prev
  }
  if (tail) {
    tail.next = curr
  }
  return resHead.next
};
export { reverseBetween }
