function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const t = next()
  const res = []
  for (let k = 0; k < t; k++) {
    let ans = 2
    const n = next()
    let min = next()
    const s = nextssort(n - 2)
    let max = next()
    let i = 0
    let j = n - 3
    while (i <= j) {
      if (2 * min >= max) {
        res.push(ans)
        break
      }
      else {
        let l = i
        let r = j
        while (l <= r) {
          const m = l + ((r - l) >> 1)
          if (2 * min < s[m]) {
            r = m - 1
          }
          else {
            l = m + 1
          }
        }
        const idxL = r
        l = i
        r = j
        while (l <= r) {
          const m = l + ((r - l) >> 1)
          if (2 * s[m] >= max) {
            r = m - 1
          }
          else {
            l = m + 1
          }
        }
        const idxR = l
        if (idxL >= idxR) {
          res.push(ans + 1)
          break
        }
        else if (idxL === i - 1 || idxR === j + 1) {
          res.push(-1)
          break
        }
        else {
          min = s[idxL]
          max = s[idxR]
          i = idxL + 1
          j = idxR - 1
          ans += 2
        }
      }
    }
    if (i > j) {
      if (2 * min >= max) {
        res.push(ans)
      }
      else {
        res.push(-1)
      }
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
