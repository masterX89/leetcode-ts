import { describe, expect, it } from 'vitest'

const { main } = require('../../solutions/atcoder/typical/typical90_022_CubicCake.cjs')

const cases = [
  {
    input: `
2 2 3
    `.trim(),
    expected: `
4
    `.trim(),
  },
  {
    input: `
2 2 4
    `.trim(),
    expected: `
1
    `.trim(),
  },
  {
    input: `
1000000000000000000 999999999999999999 999999999999999998
    `.trim(),
    expected: `
2999999999999999994
    `.trim(),
  },
]

describe('typical90_022', () => {
  cases.forEach(({ input, expected }, index) => {
    it(`case_${index}`, () => {
      expect(main(input).trim()).toBe(expected)
    })
  })
})
