import { describe, expect, it } from 'vitest'
import { sortList } from '../solutions/0148_sortList'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { head: [4, 2, 1, 3], expected: [1, 2, 3, 4] },
  { head: [-1, 5, 3, 4, 0], expected: [-1, 0, 3, 4, 5] },
  { head: [], expected: [] },
]

describe('sort linked list', () => {
  testCases.forEach(({ head, expected }) => {
    it(`sort ${head} should return ${expected}`, () => {
      const headNode = createSingleLinkedList(head)
      const expectedHead = createSingleLinkedList(expected)
      expect(sortList(headNode)).toEqual(expectedHead)
    })
  })
})
