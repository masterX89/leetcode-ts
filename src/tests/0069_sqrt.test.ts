import { describe, expect, it } from 'vitest'
import { mySqrt1 } from '../solutions/0069_sqrt'

const testCases = [
  { x: 4, expected: 2 },
  { x: 8, expected: 2 },
  { x: 2 ** 31 - 1, expected: 46340 },
  { x: 0, expected: 0 },
]

const solutions = [
  { name: 'mySqrt1', fn: mySqrt1 },
]

describe('mysqrt without pow', () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ x, expected }) => {
        it(`${name} should return ${expected}`, () => {
          expect(fn(x)).toBe(expected)
        })
      })
    })
  })
})
