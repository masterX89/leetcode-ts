import { describe, expect, it } from 'vitest'
import { isPalindromeAlgorithms } from '../solutions/0234_isPalindrome'
import { createSingleLinkedList } from './shared/linkedListUtils'

const testCases = [
  { head: [1, 2, 2, 1], expected: true },
  { head: [1, 2], expected: false },
]

const solutions = [
  { name: 'isPalindromeByArray', fn: isPalindromeAlgorithms.isPalindromeByArray },
  { name: 'isPalindromeByRecursion', fn: isPalindromeAlgorithms.isPalindromeByRecursion },
]

describe('determine whether linked list is a palindrome', () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ head, expected }) => {
        it(`${head} should return ${expected}`, () => {
          const headNode = createSingleLinkedList(head)
          expect(fn(headNode)).toBe(expected)
        })
      })
    })
  })
})
