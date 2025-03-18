import type { ListNode } from './0707_MyLinkedList'

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (head === null || head.next === null || k === 0) {
    return head
  }
  let slow: ListNode | null = head
  let fast: ListNode | null = head
  let length = 0
  for (let i = 1; i <= k; i++) {
    if (fast) {
      fast = fast.next
      length++
    }
    else {
      break
    }
  }
  if (fast === null) {
    k = k % length
    if (k === 0) {
      return head
    }
    fast = head
    for (let i = 1; i <= k; i++) {
      fast = (fast as ListNode).next
    }
  }
  while (fast && fast.next) {
    slow = (slow as ListNode).next
    fast = fast.next
  }
  const resHead = (slow as ListNode).next
  ;(fast as ListNode).next = head
  ;(slow as ListNode).next = null
  return resHead
};

export { rotateRight }
