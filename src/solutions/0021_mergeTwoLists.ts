import { ListNode } from './0707_MyLinkedList'

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(-1)
  let curr = dummyHead
  let p = list1
  let q = list2
  while (p && q) {
    if (p.val <= q.val) {
      curr.next = p
      p = p.next
    }
    else {
      curr.next = q
      q = q.next
    }
    curr = curr.next
  }
  curr.next = p || q
  return dummyHead.next
};

export { mergeTwoLists }
