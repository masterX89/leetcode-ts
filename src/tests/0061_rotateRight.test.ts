import { describe, expect, it } from 'vitest'
import { rotateRight } from '../solutions/0061_rotateRight'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { head: [1, 2, 3, 4, 5], k: 2, expected: [4, 5, 1, 2, 3] },
  { head: [0, 1, 2], k: 4, expected: [2, 0, 1] },
  { head: [], k: 0, expected: [] },
  { head: [1], k: 10, expected: [1] },
  { head: [1, 2], k: 0, expected: [1, 2] },
  { head: [1, 2], k: 2, expected: [1, 2] },
]

describe('rotate a linked list K times', () => {
  testCases.forEach(({ head, k, expected }) => {
    it(`${head} rotate ${k} times should return ${expected}`, () => {
      const headNode = createSingleLinkedList(head)
      const expectedNode = createSingleLinkedList(expected)
      expect(rotateRight(headNode, k)).toEqual(expectedNode)
    })
  })
})
