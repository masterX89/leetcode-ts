import type { ListNode } from './0707_MyLinkedList'

const reverseListAlgorithms = {
  twoPointsReverseList: function reverseList(head: ListNode | null): ListNode | null {
    let curr = head
    let prev = null
    while (curr) {
      const next = curr.next
      curr.next = prev
      prev = curr
      curr = next
    }
    return prev
  },
  recursionReverseList: function reverseList(head: ListNode | null): ListNode | null {
    if (head === null || head.next === null) {
      return head
    }
    const newHead = reverseList(head.next)
    // 5->4->null 4<-3<-...
    head.next.next = head
    head.next = null
    return newHead
  },
}

export { reverseListAlgorithms }
