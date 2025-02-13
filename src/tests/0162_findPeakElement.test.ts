import { describe, expect, it } from 'vitest'
import { findPeakElement } from '../solutions/0162_findPeakElement'

const testCases = [
  { nums: [1, 2, 3, 1], expected: [2] },
  { nums: [1, 2, 1, 3, 5, 6, 4], expected: [1, 5] },
  { nums: [3, 1], expected: [0] },
  { nums: [1, 3], expected: [1] },
  { nums: [1, 3, 2], expected: [1] },
  { nums: [1, 2, 3], expected: [2] },
  { nums: [3, 2, 1], expected: [0] },
]
describe('find peak element', () => {
  testCases.forEach(({ nums, expected }) => {
    it(`${nums} peakIndex should be one of ${expected}`, () => {
      expect(expected).toContain(findPeakElement(nums))
    })
  })
})
