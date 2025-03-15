import { describe, expect, it } from 'vitest'
import { scoreOfString } from '../solutions/3110_scoreOfString'

const testCases = [
  { s: 'hello', expected: 13 },
  { s: 'zaz', expected: 50 },
]

describe('calculate sum of gap ascii code ', () => {
  testCases.forEach(({ s, expected }) => {
    it(`${s} should return ${expected}`, () => {
      expect(scoreOfString(s)).toBe(expected)
    })
  })
})
