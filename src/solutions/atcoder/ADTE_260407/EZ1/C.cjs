function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [n, m] = nexts(2)
  const gds = []
  for (let i = 0; i < n; i++) {
    const [p, c] = nexts(2)
    const f = nexts(c)
    gds.push([p, new Set(f)])
  }
  gds.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1].size - a[1].size
    }
    return a[0] - b[0]
  })
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if ([...gds[j][1]].every(good => gds[i][1].has(good))) {
        if ((gds[i][0] === gds[j][0] && gds[i][1].size > gds[j][1].size) || gds[i][0] < gds[j][0]) {
          return 'Yes'
        }
      }
    }
  }
  return 'No'
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
