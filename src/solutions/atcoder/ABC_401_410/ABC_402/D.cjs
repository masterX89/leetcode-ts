// TLE
function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [n, m] = nexts(2)
  const lines = []
  for (let i = 0; i < m; i++) {
    const [a, b] = nexts(2)
    lines.push([a, b])
  }
  lines.sort((a, b) => {
    if (a[0] === b[0])
      return a[1] - b[1]
    return a[0] - b[0]
  })
  const pa = []
  for (let i = 0; i < lines.length; i++) {
    const [a2, b2] = lines[i]
    let hasPA = false
    for (let j = 0; j < pa.length; j++) {
      const [a1, b1] = pa[j][0]
      if (b2 < b1) {
        if (a2 - a1 === b1 - b2) {
          pa[j].push([a2, b2])
          hasPA = true
        }
      }
      else if (b1 < b2) {
        if (a2 - b1 === a1 - b2 + n) {
          pa[j].push([a2, b2])
          hasPA = true
        }
      }
    }
    if (!hasPA) {
      pa.push([[a2, b2]])
    }
  }
  const nums = pa.map(lines => lines.length)
  const sum = nums.reduce((prev, curr) => prev + curr)
  let res = 0
  for (const num of nums) {
    res += num * (sum - num)
  }
  return Math.floor(res / 2)
}
function makeInputReader(input) {
  const cin = input.trim().split(/ |\n/)
  let cid = 0
  function createNDArray(shape, fillFn) {
    if (shape.length === 0)
      return fillFn()
    const [dim, ...rest] = shape
    return Array.from({ length: dim }, () => createNDArray(rest, fillFn))
  }
  return {
    next: () => Number(cin[cid++]),
    nextstr: () => cin[cid++],
    nextbig: () => BigInt(cin[cid++]),
    nexts: (n, addNum = 0, parse = true) =>
      parse ? cin.slice(cid, cid += n).map(s => Number(s) + addNum) : cin.slice(cid, cid += n),
    nextssort: (n, parse = true, desc = false) =>
      parse
        ? cin.slice(cid, cid += n).map(Number).sort((a, b) => desc ? b - a : a - b)
        : cin.slice(cid, cid += n).sort((a, b) => desc ? b.localeCompare(a) : a.localeCompare(b)),
    nextm: (h, w, parse = true) => {
      const res = []
      for (let i = 0; i < h; i++) {
        const row = cin.slice(cid, cid += w)
        res.push(parse ? row.map(Number) : row)
      }
      return res
    },
    xArray: createNDArray,
  }
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
