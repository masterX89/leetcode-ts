import { describe, expect, it } from 'vitest'
import { reverseKGroup } from '../solutions/0025_reverseKGroup'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { head: [1, 2, 3, 4, 5], k: 2, expected: [2, 1, 4, 3, 5] },
  { head: [1, 2, 3, 4, 5], k: 3, expected: [3, 2, 1, 4, 5] },
]

describe('reverse single linked list k at a time', () => {
  testCases.forEach(({ head, k, expected }) => {
    it(`reverse ${head} should return ${expected}`, () => {
      const headNode = createSingleLinkedList(head)
      const expectedHead = createSingleLinkedList(expected)
      expect(reverseKGroup(headNode, k)).toEqual(expectedHead)
    })
  })
})
