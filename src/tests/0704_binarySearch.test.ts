import { describe, expect, it } from 'vitest'
import { search1, search2, search3, search4, search5, search6, search7, search8 } from '../solutions/0704_binarySearch'

const testCases = [
  { nums: [-1, 0, 3, 5, 9, 12], target: 5, expected: 3 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 2, expected: -1 },
  { nums: [-1, 0, 3, 5, 9, 12], target: -2, expected: -1 },
  { nums: [-1, 0, 3, 5, 9, 12], target: -1, expected: 0 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 0, expected: 1 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 9, expected: 4 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 12, expected: 5 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 13, expected: -1 },
]

const solutions = [
  { name: 'search1', fn: search1 },
  { name: 'search2', fn: search2 },
  { name: 'search3', fn: search3 },
  { name: 'search4', fn: search4 },
  { name: 'search5', fn: search5 },
  { name: 'search6', fn: search6 },
  { name: 'search7', fn: search7 },
  { name: 'search8', fn: search8 },
]

describe('binary Search', () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, target, expected }) => {
        it(`${name} should return ${expected}`, () => {
          expect(fn(nums, target)).toBe(expected)
        })
      })
    })
  })
})
