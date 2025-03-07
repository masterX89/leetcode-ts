import { describe, expect, it } from 'vitest'
import { reorderList } from '../solutions/0143_reorderList'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { head: [1, 2, 3, 4], expected: [1, 4, 2, 3] },
  { head: [1, 2, 3, 4, 5], expected: [1, 5, 2, 4, 3] },
]

describe('reorder list to L0 Ln L1 Ln-1', () => {
  testCases.forEach(({ head, expected }) => {
    it(`reorder ${head} should return ${expected}`, () => {
      const headNode = createSingleLinkedList(head)
      const expectedHead = createSingleLinkedList(expected)
      reorderList(headNode)
      expect(headNode).toEqual(expectedHead)
    })
  })
})
