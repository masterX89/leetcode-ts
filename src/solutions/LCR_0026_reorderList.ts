import { ListNode } from './0707_MyLinkedList'

function reorderList(head: ListNode | null): void {
  const getPrevMidTail = (head: ListNode | null): ListNode | null => {
    let slow: ListNode | null = head
    let fast: ListNode | null = head
    while (slow && fast && fast.next && fast.next.next) {
      slow = slow.next
      fast = fast.next.next
    }
    return slow
  }
  const reverseList = (head: ListNode | null): ListNode | null => {
    let curr = head
    let prev = null
    while (curr) {
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return prev
  }
  const mergeLists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
    const dummyHead = new ListNode(-1)
    let p = l1
    let q = l2
    let curr = dummyHead
    let l1Flag = true
    while (p && q) {
      if (l1Flag) {
        curr.next = p
        p = p.next
      }
      else {
        curr.next = q
        q = q.next
      }
      l1Flag = !l1Flag
      curr = curr.next
    }
    curr.next = p || q
    return dummyHead.next
  }
  const reorder = (head: ListNode | null): ListNode | null => {
    const prevMidTail = getPrevMidTail(head)
    const l1 = head
    let l2 = prevMidTail?.next ?? null
    if (prevMidTail) {
      prevMidTail.next = null
    }
    l2 = reverseList(l2)
    return mergeLists(l1, l2)
  }
  reorder(head)
};

export { reorderList }
