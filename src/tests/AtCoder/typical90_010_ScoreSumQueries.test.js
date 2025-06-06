import { describe, expect, it } from 'vitest'

const { main } = require('../../solutions/atcoder/typical90_010_ScoreSumQueries.cjs')

const cases = [
  {
    input: `
7
1 72
2 78
2 94
1 23
2 89
1 40
1 75
1
2 6

    `.trim(),
    expected: `
63 261

    `.trim(),
  },
  {
    input: `
7
1 72
2 78
2 94
1 23
2 89
1 40
1 75
10
1 3
2 4
3 5
4 6
5 7
1 5
2 6
3 7
1 6
2 7
    `.trim(),
    expected: `
72 172
23 172
23 183
63 89
115 89
95 261
63 261
138 183
135 261
138 261
    `.trim(),
  },
  {
    input: `
1
1 100
3
1 1
1 1
1 1

    `.trim(),
    expected: `
100 0
100 0
100 0

    `.trim(),
  },
  {
    input: `
20
2 90
1 67
2 9
2 17
2 85
2 43
2 11
1 32
2 16
1 19
2 65
1 14
1 51
2 94
1 4
1 55
2 90
1 89
1 35
2 81
20
3 17
5 5
11 11
8 10
3 13
2 6
3 7
3 5
12 18
4 8
3 16
6 8
3 20
1 12
1 6
5 16
3 10
17 19
4 4
7 15

    `.trim(),
    expected: `
175 430
0 85
0 65
51 16
116 246
67 154
0 165
0 111
213 184
32 156
175 340
32 54
299 511
132 336
67 244
175 314
51 181
124 90
0 17
120 186

    `.trim(),
  },

]

describe('typical90_010', () => {
  cases.forEach(({ input, expected }, index) => {
    it(`case_${index}`, () => {
      expect(main(input).trim()).toBe(expected)
    })
  })
})
