import { describe, expect, it } from 'vitest'
import { findRightInterval } from '../solutions/0436_findRightInterval'

const testCases = [
  { intervals: [[1, 2]], expected: [-1] },
  { intervals: [[3, 4], [2, 3], [1, 2]], expected: [-1, 0, 1] },
  { intervals: [[1, 4], [2, 3], [3, 4]], expected: [-1, 2, -1] },
  { intervals: [[1, 1]], expected: [0] },
]
describe('minimum moves to equal array elements II', () => {
  testCases.forEach(({ intervals, expected }) => {
    it(`${intervals} should return ${expected}`, () => {
      expect(findRightInterval(intervals)).toEqual(expected)
    })
  })
})
