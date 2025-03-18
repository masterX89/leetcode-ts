import { ListNode } from './0707_MyLinkedList'

function deleteDuplicates(head: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(-1, head)
  let curr: ListNode | null = dummyHead
  while (curr) {
    while (curr.next && curr.next.next && curr.next.val === curr.next.next.val) {
      curr.next = curr.next.next
    }
    curr = curr.next
  }
  return dummyHead.next
};
export { deleteDuplicates }
