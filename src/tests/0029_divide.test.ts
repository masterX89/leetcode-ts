import { describe, expect, it } from 'vitest'
import { divide } from '../solutions/0029_divide'

const testCases = [
  { dividend: 10, divisor: 3, expected: 3 },
  { dividend: 7, divisor: -3, expected: -2 },
  { dividend: -1, divisor: 1, expected: -1 },
  { dividend: 1, divisor: 2, expected: 0 },
  { dividend: -2147483648, divisor: -1, expected: 2147483647 },
]
describe('divide without multiplication, division, and mod operator', () => {
  testCases.forEach(({ dividend, divisor, expected }) => {
    it(`${dividend} / ${divisor} should return ${expected}`, () => {
      expect(divide(dividend, divisor)).toBe(expected)
    })
  })
})
