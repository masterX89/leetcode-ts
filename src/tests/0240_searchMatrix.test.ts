import { describe, expect, it } from 'vitest'
import { searchMatrix } from '../solutions/0240_searchMatrix'

const testCases = [
  { matrix: [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ], target: 5, expected: true },
  { matrix: [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ], target: 20, expected: false },
  { matrix: [
    [-5],
  ], target: -5, expected: true },
]
describe('minimum moves to equal array elements II', () => {
  testCases.forEach(({ matrix, target, expected }) => {
    it(`${matrix} should return ${expected}`, () => {
      expect(searchMatrix(matrix, target)).toBe(expected)
    })
  })
})
