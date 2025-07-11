function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [n, q] = nexts(2)
  const pigeonToBox = Array.from({ length: n + 1 }, (_, k) => k)
  const boxToLabel = Array.from({ length: n + 1 }, (_, k) => k)
  const labelToBox = Array.from({ length: n + 1 }, (_, k) => k)
  const res = []
  for (let i = 0; i < q; i++) {
    const t = next()
    if (t === 1) {
      const [pigeon, label] = nexts(2)
      pigeonToBox[pigeon] = labelToBox[label]
    }
    else if (t === 2) {
      const [labelA, labelB] = nexts(2)
      ;[labelToBox[labelA], labelToBox[labelB]] = [labelToBox[labelB], labelToBox[labelA]]
      ;[boxToLabel[labelToBox[labelA]], boxToLabel[labelToBox[labelB]]] = [boxToLabel[labelToBox[labelB]], boxToLabel[labelToBox[labelA]]]
    }
    else if (t === 3) {
      const pigeon = next()
      res.push(boxToLabel[pigeonToBox[pigeon]])
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
