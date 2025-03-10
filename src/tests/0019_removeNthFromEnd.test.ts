import { describe, expect, it } from 'vitest'
import { removeNthFromEnd } from '../solutions/0019_removeNthFromEnd'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { head: [1, 2, 3, 4, 5], n: 2, expected: [1, 2, 3, 5] },
  { head: [1, 2, 3, 4, 5], n: 5, expected: [2, 3, 4, 5] },
  { head: [1], n: 1, expected: [] },
  { head: [1, 2], n: 1, expected: [1] },
]

describe('remove Nth node from end of linked list', () => {
  testCases.forEach(({ head, n, expected }) => {
    it(`remove ${n}th from end, ${head} should return ${expected}`, () => {
      const headNode = createSingleLinkedList(head)
      const expectedHead = createSingleLinkedList(expected)
      expect(removeNthFromEnd(headNode, n)).toEqual(expectedHead)
    })
  })
})
