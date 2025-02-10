import { describe, expect, it } from 'vitest'
import { search } from '../solutions/0033_searchRotated'
import { baseBinarySearchCases } from './data/baseBinarySearchCases'

const testCases = [
  ...baseBinarySearchCases,
  { nums: [1], target: 0, expected: -1 },
  { nums: [4, 5, 6, 7, 0, 1, 2], target: 3, expected: -1 },
  { nums: [4, 5, 6, 7, 0, 1, 2], target: 4, expected: 0 },
  { nums: [4, 5, 6, 7, 0, 1, 2], target: 6, expected: 2 },
  { nums: [4, 5, 6, 7, 0, 1, 2], target: 7, expected: 3 },
  { nums: [4, 5, 6, 7, 0, 1, 2], target: 8, expected: -1 },
  { nums: [4, 5, 6, 7, 0, 1, 2], target: -1, expected: -1 },
  { nums: [4, 5, 6, 7, 0, 1, 2], target: 0, expected: 4 },
  { nums: [4, 5, 6, 7, 0, 1, 2], target: 1, expected: 5 },
  { nums: [4, 5, 6, 7, 0, 1, 2], target: 2, expected: 6 },
]

const solutions = [
  { name: 'search', fn: search },
]

describe('rotate Search', () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, target, expected }) => {
        it(`${name} should return ${expected}`, () => {
          expect(fn(nums, target)).toBe(expected)
        })
      })
    })
  })
})
