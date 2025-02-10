import { describe, expect, it } from 'vitest'
import { twoSum1, twoSum2, twoSum3 } from '../solutions/0001_twoSum'

const testCases = [
  { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
  { nums: [3, 2, 4], target: 6, expected: [1, 2] },
  { nums: [3, 3], target: 6, expected: [0, 1] },
]

const solutions = [
  { name: 'twoSum1', fn: twoSum1 },
  { name: 'twoSum2', fn: twoSum2 },
  { name: 'twoSum3', fn: twoSum3 },
]

describe('twoSum', () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, target, expected }) => {
        it(`${name} should return [${expected}]`, () => {
          expect(fn(nums, target).sort((a, b) => a - b)).toEqual(expected)
        })
      })
    })
  })
})
