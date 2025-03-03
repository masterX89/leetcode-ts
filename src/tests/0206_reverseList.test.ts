import { describe, expect, it } from 'vitest'
import { reverseList1, reverseList2 } from '../solutions/0206_reverseList'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { head: [1, 2, 3, 4, 5], expected: [5, 4, 3, 2, 1] },
  { head: [1, 2], expected: [2, 1] },
  { head: [1], expected: [1] },
  { head: [], expected: [] },
]

const solutions = [
  { name: 'Recursion', fn: reverseList1 },
  { name: 'two points', fn: reverseList2 },
]

describe('reverse single linked list', () => {
  solutions.forEach(({ name, fn }) => {
    describe(`${name} solution`, () => {
      testCases.forEach(({ head, expected }) => {
        it(`reverse ${head}  should return ${expected}`, () => {
          const headNode = createSingleLinkedList(head)
          const expectedHead = createSingleLinkedList(expected)
          expect(fn(headNode)).toEqual(expectedHead)
        })
      })
    })
  })
})
