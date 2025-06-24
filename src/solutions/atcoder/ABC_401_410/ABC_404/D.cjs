function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [n, m] = nexts(2)
  const c = nexts(n)
  const a = xArray([m], [])
  for (let i = 0; i < m; i++) {
    const k = next()
    a[i] = nexts(k, 1)
  }
  const p3 = xArray([n + 1], 1)
  for (let i = 0; i < n; i++) {
    p3[i + 1] = p3[i] * 3
  }
  const INF = Infinity
  let res = INF
  for (let num = 0; num < p3[n]; num++) {
    const times = xArray([n], 0)
    let cost = 0
    for (let i = 0; i < n; i++) {
      times[i] = Math.floor(num / p3[i]) % 3
      cost += times[i] * c[i]
    }
    for (let i = 0; i < m; i++) {
      let cnt = 0
      for (let j = 0; j < a[i].length; j++) {
        cnt += times[a[i][j]]
      }
      if (cnt < 2) {
        cost = INF
        break
      }
    }
    res = Math.min(res, cost)
  }
  return res
}
function makeInputReader(input) {
  const cin = input.trim().split(/ |\n/)
  let cid = 0
  function createNDArray(shape, fillVal) {
    if (shape.length === 0)
      return fillVal
    const [dim, ...rest] = shape
    return Array.from({ length: dim }, () => createNDArray(rest, fillVal))
  }
  return {
    next: () => Number(cin[cid++]),
    nextstr: () => cin[cid++],
    nextbig: () => BigInt(cin[cid++]),
    nexts: (n, minus = 0, parse = true) =>
      parse ? cin.slice(cid, cid += n).map(val => Number(val) - minus) : cin.slice(cid, cid += n),
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
