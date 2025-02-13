import { describe, expect, it } from 'vitest'
import { searchMatrix } from '../solutions/0074_searchMatrix'

const testCases = [
  { matrix: [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ], target: 3, expected: true },
  { matrix: [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60],
  ], target: 13, expected: false },
  { matrix: [
    [1],
  ], target: 1, expected: true },
]

describe('search a 2D matrix', () => {
  testCases.forEach(({ matrix, target, expected }) => {
    it(`find ${target} should return ${expected}`, () => {
      expect(searchMatrix(matrix, target)).toBe(expected)
    })
  })
})
