import { describe, expect, it } from 'vitest'
import { deleteDuplicates } from '../solutions/0083_deleteDuplicates'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { head: [1, 1, 2], expected: [1, 2] },
  { head: [1, 1, 2, 3, 3], expected: [1, 2, 3] },
]

describe('delete duplicates but leave one in a linked list', () => {
  testCases.forEach(({ head, expected }) => {
    it(`${head} remove duplicates should return ${expected}`, () => {
      const headNode = createSingleLinkedList(head)
      const expectedNode = createSingleLinkedList(expected)
      expect(deleteDuplicates(headNode)).toEqual(expectedNode)
    })
  })
})
