import { ListNode } from './0707_MyLinkedList'

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const dummyHead = new ListNode(-1, head)
  let curr: ListNode | null = dummyHead
  while (curr && curr.next) {
    if (curr.next.val === val) {
      curr.next = curr.next.next
    }
    else {
      curr = curr.next
    }
  }
  return dummyHead.next
};

export { removeElements }
