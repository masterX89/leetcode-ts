import type { ListNode } from './0707_MyLinkedList'

function reverseList1(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) {
    return head
  }
  const newHead = reverseList1(head.next)
  // ...->4<->5
  head.next.next = head
  // ...->4<-5
  head.next = null
  // 5->4
  return newHead
};

function reverseList2(head: ListNode | null): ListNode | null {
  let curr: ListNode | null = head
  let prev = null
  while (curr) {
    const node: ListNode | null = curr.next
    curr.next = prev
    prev = curr
    curr = node
  }
  return prev
}

export { reverseList1, reverseList2 }
