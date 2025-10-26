function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [n, m, c] = nexts(3)
  const a = nexts(n)
  const freq = new Map()
  for (const pos of a) {
    freq.set(pos, (freq.get(pos) || 0) + 1)
  }
  const b = Array.from(freq.keys()).sort((a, b) => a - b)
  const p = b.map(v => freq.get(v))
  const bb = [...b, ...b.map(v => v + m)]
  const pp = [...p, ...p]

  let r = 0
  let cur = 0n
  let res = 0n
  for (let i = 0; i < b.length; i++) {
    while (cur < BigInt(c)) {
      cur += BigInt(pp[r])
      r++
    }
    if (i === 0) {
      res += BigInt(m + bb[i] - bb[b.length - 1]) * cur
    }
    else {
      res += BigInt(bb[i] - bb[i - 1]) * cur
    }
    cur -= BigInt(pp[i])
  }
  return res.toString()
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
