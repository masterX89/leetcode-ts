import type { ListNode } from '../../solutions/0707_MyLinkedList'
import { MyLinkedList } from '../../solutions/0707_MyLinkedList'

interface LinkedListResult {
  head: ListNode | null
  tail: ListNode | null
}

function createSingleLinkedList(head: number[]): ListNode | null {
  const { head: headNoe } = createSingleLinkedListWithTail(head)
  return headNoe
}

function createSingleLinkedListWithTail(head: number[]): LinkedListResult {
  const linkedList = new MyLinkedList(true)
  head.forEach(val => linkedList.addAtTail(val))
  // clear linkedList dummyTail
  const tail = linkedList.getTailNode()
  if (tail) {
    tail.next = null
  }
  // clear linkedList prev
  let p = linkedList.getHeadNode()
  while (p) {
    p.prev = null
    p = p.next
  }
  return { head: linkedList.getHeadNode(), tail }
}

export { createSingleLinkedList, createSingleLinkedListWithTail }
