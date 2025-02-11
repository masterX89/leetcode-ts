import { describe, expect, it } from 'vitest'
import { findMin } from '../solutions/0154_findMinRotated_II'

const testCases = [
  { nums: [3, 4, 5, 1, 2], expected: 1 },
  { nums: [4, 5, 6, 7, 0, 1, 2], expected: 0 },
  { nums: [11, 13, 15, 17], expected: 11 },
  { nums: [1, 3, 5], expected: 1 },
  { nums: [2, 2, 2, 0, 1], expected: 0 },
  { nums: [10, 1, 10, 10, 10], expected: 1 },
]

describe('find the minium number in a rotated array', () => {
  testCases.forEach(({ nums, expected }) => {
    it(`should return ${expected}`, () => {
      expect(findMin(nums)).toBe(expected)
    })
  })
})
