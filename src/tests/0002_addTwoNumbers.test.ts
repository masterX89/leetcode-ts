import type { ListNode } from '../solutions/0707_MyLinkedList'
import { describe, expect, it } from 'vitest'
import { addTwoNumbers } from '../solutions/0002_addTwoNumbers'
import { MyLinkedList } from '../solutions/0707_MyLinkedList'

const testCases = [
  { l1: [2, 4, 3], l2: [5, 6, 4], expected: [7, 0, 8] },
  { l1: [0], l2: [0], expected: [0] },
  { l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9], expected: [8, 9, 9, 9, 0, 0, 0, 1] },
  { l1: [9, 9], l2: [9], expected: [8, 0, 1] },
]

function createLinkedList(head: number[]): ListNode | null {
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

describe('add two numbers', () => {
  testCases.forEach(({ l1, l2, expected }) => {
    it(`${l1} add ${l2} should return ${expected}`, () => {
      const head1 = createLinkedList(l1)
      const head2 = createLinkedList(l2)
      const head = createLinkedList(expected)
      expect(addTwoNumbers(head1, head2)).toEqual(head)
    })
  })
})
