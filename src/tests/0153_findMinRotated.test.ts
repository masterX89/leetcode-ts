import { describe, expect, it } from 'vitest'
import { findMin } from '../solutions/0153_findMinRotated'

const testCases = [
  { nums: [3, 4, 5, 1, 2], expected: 1 },
  { nums: [4, 5, 6, 7, 0, 1, 2], expected: 0 },
  { nums: [11, 13, 15, 17], expected: 11 },
]

describe('find the minium number in a rotated array', () => {
  testCases.forEach(({ nums, expected }) => {
    it(`should return ${expected}`, () => {
      expect(findMin(nums)).toBe(expected)
    })
  })
})
