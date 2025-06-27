function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const n = next()
  let y = next()
  y = Math.floor(y / 1000)
  const money = [10, 5, 1]
  for (let i = Math.floor(y / money[0]); i >= 0; i--) {
    const cnti = i * money[0]
    for (let j = Math.min(Math.floor((y - cnti) / money[1]), n); j >= 0; j--) {
      const cntj = j * money[1]
      const k = n - i - j
      const cntk = k * money[2]
      const cnt = cnti + cntj + cntk
      if (cnt === y) {
        return [i, j, k].join(' ')
      }
    }
  }
  return [-1, -1, -1].join(' ')
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
