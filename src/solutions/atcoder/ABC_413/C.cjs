function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const q = next()
  // const prefix = xArray([1], () => 0)
  const chunks = []
  let head = 0
  const res = []
  for (let i = 0; i < q; i++) {
    const t = next()
    if (t === 1) {
      const [c, x] = nexts(2)
      chunks.push({ val: x, cnt: c })
      // for (let j = 0; j < c; j++) {
      //   prefix.push(prefix.at(-1) + x)
      // }
    }
    else if (t === 2) {
      let k = next()
      let sum = 0n
      while (k > 0) {
        const front = chunks[head]
        const take = Math.min(k, front.cnt)
        front.cnt -= take
        k -= take
        sum += BigInt(take) * BigInt(front.val)
        if (front.cnt === 0) {
          head++
        }
      }
      res.push(sum.toString())
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
