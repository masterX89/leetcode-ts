function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [n, q] = nexts(2)
  const pc = xArray([n + 1], '')
  for (let i = 0; i < q; i++) {
    const [t, p] = nexts(2)
    if (t === 1) {
      pc[p] = pc[0]
    }
    else if (t === 2) {
      const s = nextstr()
      pc[p] += s
    }
    else if (t === 3) {
      pc[0] = pc[p]
    }
  }
  return pc[0]
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
    nexts: (n, parse = true) =>
      parse ? cin.slice(cid, cid += n).map(Number) : cin.slice(cid, cid += n),
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
