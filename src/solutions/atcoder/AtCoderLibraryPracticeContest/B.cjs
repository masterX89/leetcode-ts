class FenwickTree {
  constructor(n) {
    this._n = n
    this.data = Array.from({ length: n }, () => 0)
  }

  add(p, x) {
    p++
    while (p <= this._n) {
      this.data[p - 1] += x
      p += p & -p
    }
  }

  _sum(r) {
    let s = 0
    while (r > 0) {
      s += this.data[r - 1]
      r -= r & -r
    }
    return s
  }

  // [l, r)
  sum(l, r) {
    return this._sum(r) - this._sum(l)
  }
}

function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [n, q] = nexts(2)
  const a = nexts(n)
  const ft = new FenwickTree(n)
  for (let i = 0; i < n; i++) {
    ft.add(i, a[i])
  }
  const res = []
  for (let i = 0; i < q; i++) {
    const t = next()
    if (t === 0) {
      const [p, x] = nexts(2)
      ft.add(p, x)
    }
    else if (t === 1) {
      const [l, r] = nexts(2)
      res.push(ft.sum(l, r))
    }
  }
  return res.join('\n')
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
