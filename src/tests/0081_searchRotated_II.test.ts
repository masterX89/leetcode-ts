import { describe, expect, it } from 'vitest'
import { search1, search2 } from '../solutions/0081_searchRotated_II'

const testCases = [
  { nums: [2, 5, 6, 0, 0, 1, 2], target: 0, expected: true },
  { nums: [2, 5, 6, 0, 0, 1, 2], target: 3, expected: false },
  { nums: [1, 0, 1, 1, 1], target: 0, expected: true },
  { nums: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1], target: 2, expected: true },
]

const solutions = [
  { name: 'search1', fn: search1 },
  { name: 'search2', fn: search2 },
]

describe('0033_searchRotated_II', () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, target, expected }) => {
        it(`${nums} should return ${expected}`, () => {
          expect(fn(nums, target)).toBe(expected)
        })
      })
    })
  })
})
