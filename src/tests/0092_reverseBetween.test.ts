import { describe, expect, it } from 'vitest'
import { reverseBetween } from '../solutions/0092_reverseBetween'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { head: [1, 2, 3, 4, 5], left: 2, right: 4, expected: [1, 4, 3, 2, 5] },
  { head: [1, 2, 3, 4, 5], left: 1, right: 5, expected: [5, 4, 3, 2, 1] },
  { head: [5], left: 1, right: 1, expected: [5] },
]

describe('reverse single linked list between left and right', () => {
  testCases.forEach(({ head, left, right, expected }) => {
    it(`reverse ${head} should return ${expected}`, () => {
      const headNode = createSingleLinkedList(head)
      const expectedHead = createSingleLinkedList(expected)
      expect(reverseBetween(headNode, left, right)).toEqual(expectedHead)
    })
  })
})
