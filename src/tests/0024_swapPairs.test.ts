import { describe, expect, it } from 'vitest'
import { swapPairs } from '../solutions/0024_swapPairs'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { head: [1, 2, 3, 4], expected: [2, 1, 4, 3] },
  { head: [], expected: [] },
  { head: [1], expected: [1] },
  { head: [1, 2, 3], expected: [2, 1, 3] },
]

describe('swap nodes in pair in a linked list', () => {
  testCases.forEach(({ head, expected }) => {
    it(`swap nodes in pair ${head} should return ${expected}`, () => {
      const headNode = createSingleLinkedList(head)
      const expectedHead = createSingleLinkedList(expected)
      expect(swapPairs(headNode)).toEqual(expectedHead)
    })
  })
})
