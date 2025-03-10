import type { ListNode } from '../solutions/0707_MyLinkedList'
import { describe, expect, it } from 'vitest'
import { mergeKLists } from '../solutions/0023_mergeKLists'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { lists: [[1, 4, 5], [1, 3, 4], [2, 6]], expected: [1, 1, 2, 3, 4, 4, 5, 6] },
  { lists: [], expected: [] },
  { lists: [[]], expected: [] },
]

describe('merge K sorted list', () => {
  testCases.forEach(({ lists, expected }) => {
    it(`merge ${lists} should return ${expected}`, () => {
      const listHeads: Array<ListNode | null> = lists.map(list => createSingleLinkedList(list))
      const expectedHead = createSingleLinkedList(expected)
      expect(mergeKLists(listHeads)).toEqual(expectedHead)
    })
  })
})
