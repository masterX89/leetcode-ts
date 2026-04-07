function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [n, m] = nexts(2)
  const s = []
  const t = []
  for (let i = 0; i < n; i++) {
    const str = nextstr()
    s.push(str.split('').slice())
  }
  for (let i = 0; i < m; i++) {
    const str = nextstr()
    t.push(str.split('').slice())
  }
  for (let i = 0; i <= n - m; i++) {
    for (let j = 0; j <= n - m; j++) {
      if (same(i, j)) {
        return `${i + 1} ${j + 1}`
      }
    }
  }
  function same(ii, jj) {
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < m; j++) {
        if (t[i][j] !== s[i + ii][j + jj]) {
          return false
        }
      }
    }
    return true
  }
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
