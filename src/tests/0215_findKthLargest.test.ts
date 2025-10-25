import { describe, expect, it } from 'vitest'
import { findKthLargest } from '../solutions/0215_findKthLargest'

const testCases = [
  { nums: [3, 2, 1, 5, 6, 4], k: 2, expected: 5 },
  { nums: [3, 2, 3, 1, 2, 4, 5, 5, 6], k: 4, expected: 4 },
]

describe('find K-th largest from Array', () => {
  testCases.forEach(({ nums, k, expected }) => {
    it(`find ${k}-th largest from ${nums} should return ${expected}`, () => {
      expect(findKthLargest(nums, k)).toBe(expected)
    })
  })
})
