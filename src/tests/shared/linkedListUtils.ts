import type { ListNode } from '../../solutions/0707_MyLinkedList'
import { MyLinkedList } from '../../solutions/0707_MyLinkedList'

function createSingleLinkedList(head: number[]): ListNode | null {
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
  return linkedList.getHeadNode()
}

export { createSingleLinkedList }
