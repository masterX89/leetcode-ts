import { describe, expect, it } from 'vitest'
import { findMin, getMinIndex, getPivotIndex } from '../solutions/0154_findMinRotated_II'

const testCases = [
  { nums: [3, 4, 5, 1, 2], expected: 1, pivot: 3 },
  { nums: [4, 5, 6, 7, 0, 1, 2], expected: 0, pivot: 4 },
  { nums: [11, 13, 15, 17], expected: 11, pivot: 0 },
  { nums: [1, 3, 5], expected: 1, pivot: 0 },
  { nums: [2, 2, 2, 0, 1], expected: 0, pivot: 3 },
  { nums: [10, 1, 10, 10, 10], expected: 1, pivot: 1 },
  { nums: [1, 1, 20, 1], expected: 1, pivot: 3 },
]

describe('find the minium number in a rotated array', () => {
  testCases.forEach(({ nums, expected, pivot }) => {
    it(`${nums} pivot should be ${pivot} and return ${expected}`, () => {
      expect(getPivotIndex(nums)).toBe(pivot)
      expect(findMin(nums)).toBe(expected)
    })
  })
})
