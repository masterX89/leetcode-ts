import { describe, expect, it } from 'vitest'
import { minMoves2 } from '../solutions/0462_minMoves2'

const testCases = [
  { nums: [1, 2, 3], expected: 2 },
  { nums: [1, 10, 2, 9], expected: 16 },
]
describe('minimum moves to equal array elements II', () => {
  testCases.forEach(({ nums, expected }) => {
    it(`${nums} should return ${expected}`, () => {
      expect(minMoves2(nums)).toBe(expected)
    })
  })
})
