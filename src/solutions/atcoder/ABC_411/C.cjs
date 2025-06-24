function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [n, q] = nexts(2)
  const block = xArray([n + 2], 0)
  let ans = 0
  const res = []
  for (let i = 0; i < q; i++) {
    const idx = next()
    if (block[idx] === 0) {
      block[idx] = 1
      if (block[idx - 1] === 0) {
        if (block[idx + 1] === 0) {
          ans++
        }
        else {
          ;
        }
      }
      else {
        if (block[idx + 1] === 0) {
          ;
        }
        else {
          ans--
        }
      }
    }
    else {
      block[idx] = 0
      if (block[idx - 1] === 0) {
        if (block[idx + 1] === 0) {
          ans--
        }
        else {
          ;
        }
      }
      else {
        if (block[idx + 1] === 0) {
          ;
        }
        else {
          ans++
        }
      }
    }
    res.push(ans)
  }
  return res.join('\n')
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
