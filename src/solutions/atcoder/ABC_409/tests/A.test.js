import { describe, expect, it } from 'vitest'

const { main } = require('../A.cjs')

const cases = [
  {
    input: `
4
oxoo
xoox
    `.trim(),
    expected: `
Yes
    `.trim(),
  },
  {
    input: `
5
xxxxx
ooooo

    `.trim(),
    expected: `
No

    `.trim(),
  },
  {
    input: `
10
xoooxoxxxo
ooxooooxoo

    `.trim(),
    expected: `
Yes

    `.trim(),
  },
]

describe('abc_409_a', () => {
  cases.forEach(({ input, expected }, index) => {
    it(`case_${index}`, () => {
      expect(main(input).trim()).toBe(expected)
    })
  })
})
