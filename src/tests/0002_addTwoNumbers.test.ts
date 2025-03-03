import { describe, expect, it } from 'vitest'
import { addTwoNumbers } from '../solutions/0002_addTwoNumbers'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { l1: [2, 4, 3], l2: [5, 6, 4], expected: [7, 0, 8] },
  { l1: [0], l2: [0], expected: [0] },
  { l1: [9, 9, 9, 9, 9, 9, 9], l2: [9, 9, 9, 9], expected: [8, 9, 9, 9, 0, 0, 0, 1] },
  { l1: [9, 9], l2: [9], expected: [8, 0, 1] },
]

describe('add two numbers', () => {
  testCases.forEach(({ l1, l2, expected }) => {
    it(`${l1} add ${l2} should return ${expected}`, () => {
      const head1 = createSingleLinkedList(l1)
      const head2 = createSingleLinkedList(l2)
      const head = createSingleLinkedList(expected)
      expect(addTwoNumbers(head1, head2)).toEqual(head)
    })
  })
})
