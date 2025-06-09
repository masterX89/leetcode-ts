import { describe, expect, it } from 'vitest'

const { main } = require('../C.cjs')

const cases = [
  {
    input: `
5 6
4 3 1 2

`.trim(),
    expected: `
2

`.trim(),
  },
  {
    input: `
4 4
1 1 1

`.trim(),
    expected: `
0

`.trim(),
  },
  {
    input: `
10 12
4 4 5 7 1 7 0 8 5

  `.trim(),
    expected: `
13

  `.trim(),
  },
  {
    input: `
3 3
1 1 1
`.trim(),
    expected: `
1
`.trim(),
  },
]

describe('abc_409_c', () => {
  cases.forEach(({ input, expected }, index) => {
    it(`case_${index}`, () => {
      expect(main(input).toString().trim()).toBe(expected)
    })
  })
})
