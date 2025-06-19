import { describe, expect, it } from 'vitest'

const { main } = require('../B.cjs')

const cases = [
  {
    input: `
  3
1 2 1

  `.trim(),
    expected: `
  1

  `.trim(),
  },
  {
    input: `
  7
1 6 2 10 2 3 2

  `.trim(),
    expected: `
  3

  `.trim(),
  },
]

describe('abc_409_b', () => {
  cases.forEach(({ input, expected }, index) => {
    it(`case_${index}`, () => {
      expect(main(input).toString().trim()).toBe(expected)
    })
  })
})
