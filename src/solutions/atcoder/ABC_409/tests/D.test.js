import { describe, expect, it } from 'vitest'

const { main } = require('../D.cjs')

const cases = [
  {
    input: `
3
7
atcoder
1
x
5
snuke

`.trim(),
    expected: `
acodert
x
nsuke

`.trim(),
  },
  {
    input: `
2
6
abllpa
6
abllab
`.trim(),
    expected: `
abllap
ablabl
`.trim(),
  },
  {
    input: `
1
5
aybyb
`.trim(),
    expected: `
abyby
`.trim(),
  },
]
describe('abc_409_d', () => {
  cases.forEach(({ input, expected }, index) => {
    it(`case_${index}`, () => {
      expect(main(input).toString().trim()).toBe(expected)
    })
  })
})
