import type { ListNode } from '../solutions/0707_MyLinkedList'
import { describe, expect, it } from 'vitest'
import { mergeKListsAlgorithms } from '../solutions/0023_mergeKLists'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { lists: [[1, 4, 5], [1, 3, 4], [2, 6]], expected: [1, 1, 2, 3, 4, 4, 5, 6] },
  { lists: [], expected: [] },
  { lists: [[]], expected: [] },
]

const solutions = [
  { name: 'kPriorityQueueLike', fn: mergeKListsAlgorithms.kPriorityQueueLike },
  { name: 'mergeFn', fn: mergeKListsAlgorithms.mergeFn },
]

describe('merge K sorted list', () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ lists, expected }) => {
        it(`merge ${lists} should return ${expected}`, () => {
          const listHeads: Array<ListNode | null> = lists.map(list => createSingleLinkedList(list))
          const expectedHead = createSingleLinkedList(expected)
          expect(fn(listHeads)).toEqual(expectedHead)
        })
      })
    })
  })
})
