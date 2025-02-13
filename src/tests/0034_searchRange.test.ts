import { describe, expect, it } from 'vitest'
import { searchRange } from '../solutions/0034_searchRange'

const testCases = [
  { nums: [5, 7, 7, 8, 8, 10], target: 8, expected: [3, 4] },
  { nums: [5, 7, 7, 8, 8, 10], target: 6, expected: [-1, -1] },
  { nums: [5, 7, 8, 8, 10], target: 7, expected: [1, 1] },
  { nums: [5, 6, 6, 6], target: 6, expected: [1, 3] },
  { nums: [6, 6, 6, 7], target: 6, expected: [0, 2] },
  { nums: [6, 6, 6, 6], target: 6, expected: [0, 3] },
  { nums: [], target: 0, expected: [-1, -1] },
]

describe('search range', () => {
  testCases.forEach(({ nums, target, expected }) => {
    it(`${nums} find ${target} should be ${expected}`, () => {
      expect(searchRange(nums, target)).toEqual(expected)
    })
  })
})
