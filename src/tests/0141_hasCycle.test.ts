import type { ListNode } from '../solutions/0707_MyLinkedList'
import { describe, expect, it } from 'vitest'
import { hasCycle } from '../solutions/0141_hasCycle'
import { MyLinkedList } from '../solutions/0707_MyLinkedList'

const testCases = [
  { head: [3, 2, 0, -4], pos: 1, expected: true },
  { head: [1, 2], pos: 0, expected: true },
  { head: [1], pos: -1, expected: false },
  { head: [], pos: -1, expected: false },
]

function createLinkedList(head: number[], pos: number): ListNode | null {
  const linkedList = new MyLinkedList(true)
  head.forEach(val => linkedList.addAtTail(val))
  if (linkedList.size() > 0) {
    const tail = linkedList.getTailNode()!
    if (pos !== -1) {
      tail.next = linkedList.getAtIndex(pos)
    }
    else {
      tail.next = null
    }
  }
  return linkedList.getHeadNode()
}

describe('hasCycle', () => {
  testCases.forEach(({ head, pos, expected }) => {
    const loop = pos !== -1 ? 'loop' : 'non-loop'
    it(`${head} with ${loop} should return ${expected}`, () => {
      const headNode = createLinkedList(head, pos)
      expect(hasCycle(headNode)).toBe(expected)
    })
  })
})
