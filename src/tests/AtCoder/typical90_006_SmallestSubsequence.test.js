import { describe, expect, it } from 'vitest'

const { main } = require('../../solutions/atcoder/typical90_006_SmallestSubsequence.cjs')

const cases = [
  {
    input: `
7 3
atcoder
    `.trim(),
    expected: `
acd
    `.trim(),
  },
  {
    input: `
14 5
kittyonyourlap
    `.trim(),
    expected: `
inlap
    `.trim(),
  },
]

describe('typical90_006', () => {
  cases.forEach(({ input, expected }, index) => {
    it(`case_${index}`, () => {
      expect(main(input).trim()).toBe(expected)
    })
  })
})
