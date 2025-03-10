import { describe, expect, it } from 'vitest'
import { removeElements } from '../solutions/0203_removeElements'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { head: [1, 2, 6, 3, 4, 5, 6], val: 6, expected: [1, 2, 3, 4, 5] },
  { head: [], val: 1, expected: [] },
  { head: [7, 7, 7, 7], val: 7, expected: [] },
]

describe('remove val node from linked list', () => {
  testCases.forEach(({ head, val, expected }) => {
    it(`remove ${val} Node then ${head} should return ${expected}`, () => {
      const headNode = createSingleLinkedList(head)
      const expectedHead = createSingleLinkedList(expected)
      expect(removeElements(headNode, val)).toEqual(expectedHead)
    })
  })
})
