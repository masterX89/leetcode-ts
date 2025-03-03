import { describe, expect, it } from 'vitest'
import { mergeTwoLists } from '../solutions/0021_mergeTwoLists'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { list1: [1, 2, 4], list2: [1, 3, 4], expected: [1, 1, 2, 3, 4, 4] },
  { list1: [], list2: [], expected: [] },
  { list1: [], list2: [0], expected: [0] },
]

describe('merge two non-decreasing lists', () => {
  testCases.forEach(({ list1, list2, expected }) => {
    it(`${list1} merge ${list2} should return ${expected}`, () => {
      const headNode1 = createSingleLinkedList(list1)
      const headNode2 = createSingleLinkedList(list2)
      const expectedHead = createSingleLinkedList(expected)
      expect(mergeTwoLists(headNode1, headNode2)).toEqual(expectedHead)
    })
  })
})
