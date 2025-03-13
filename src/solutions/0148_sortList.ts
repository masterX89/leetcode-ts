import { ListNode } from './0707_MyLinkedList'

function sortList(head: ListNode | null): ListNode | null {
  const merge = (leftList: ListNode | null, rightList: ListNode | null): ListNode | null => {
    const dummyHead = new ListNode(-1)
    let p = leftList
    let q = rightList
    let curr = dummyHead
    while (p && q) {
      if (p.val < q.val) {
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
  }
  const mergeSort = (head: ListNode | null): ListNode | null => {
    if (head === null || head.next === null) {
      return head
    }
    let slow: ListNode = head
    let fast: ListNode = head
    while (fast && fast.next && fast.next.next) {
      slow = slow.next as ListNode
      fast = fast.next.next
    }
    const mid = slow.next
    slow.next = null
    const leftList = mergeSort(head) // [0, mid)
    const rightList = mergeSort(mid) // [mid, end)
    return merge(leftList, rightList)
  }
  return mergeSort(head)
};

export { sortList }
