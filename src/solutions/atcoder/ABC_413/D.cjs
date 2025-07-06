function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const t = next()
  const res = []
  function isS(nums) {
    // 1
    if (nums.every(num => num === nums[0])) {
      return true
    }
    // -1
    const pl = nums.filter(num => num === nums[0]).length
    const nl = nums.filter(num => num === -nums[0]).length
    const n = nums.length
    if (pl + nl === n && Math.min(pl, nl) === Math.floor(n / 2)) {
      return true
    }
    for (let i = 1; i < nums.length - 1; i++) {
      if (BigInt(nums[i]) * BigInt(nums[i]) !== BigInt(nums[i - 1]) * BigInt(nums[i + 1])) {
        return false
      }
    }
    return true
  }
  for (let tt = 0; tt < t; tt++) {
    const n = next()
    const nums = nexts(n)
    nums.sort((a, b) => Math.abs(a) - Math.abs(b))
    res.push(isS(nums) ? 'Yes' : 'No')
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
