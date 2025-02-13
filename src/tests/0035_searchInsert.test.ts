import { describe, expect, it } from 'vitest'
import { searchInsert } from '../solutions/0035_searchInsert'

const testCases = [
  { nums: [1, 3, 5, 6], target: 5, expected: 2 },
  { nums: [1, 3, 5, 6], target: 2, expected: 1 },
  { nums: [1, 3, 5, 6], target: 7, expected: 4 },

]

describe('search insert position', () => {
  testCases.forEach(({ nums, target, expected }) => {
    it(`insert ${target} into ${nums} position should be ${expected}`, () => {
      expect(searchInsert(nums, target)).toBe(expected)
    })
  })
})
