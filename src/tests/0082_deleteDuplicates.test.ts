import { describe, expect, it } from 'vitest'
import { deleteDuplicates } from '../solutions/0082_deleteDuplicates'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { head: [1, 2, 3, 3, 4, 4, 5], expected: [1, 2, 5] },
  { head: [1, 1, 1, 2, 3], expected: [2, 3] },
]

describe('leaving only distinct numbers from linked list', () => {
  testCases.forEach(({ head, expected }) => {
    it(`${head} should return ${expected}`, () => {
      const headNode = createSingleLinkedList(head)
      const expectedHead = createSingleLinkedList(expected)
      expect(deleteDuplicates(headNode)).toEqual(expectedHead)
    })
  })
})
