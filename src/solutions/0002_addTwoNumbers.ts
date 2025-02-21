import { ListNode } from './0707_MyLinkedList'

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let p = l1
  let q = l2
  const dummyHead = new ListNode(-1)
  let curr = dummyHead
  let carry = 0
  while (p || q || carry) {
    const sum = ((p ? p.val : 0) + (q ? q.val : 0) + carry)
    carry = Math.floor(sum / 10)
    curr.next = new ListNode(sum % 10)
    curr = curr.next
    p = p ? p.next : null
    q = q ? q.next : null
  }
  return dummyHead.next
};

export { addTwoNumbers }
