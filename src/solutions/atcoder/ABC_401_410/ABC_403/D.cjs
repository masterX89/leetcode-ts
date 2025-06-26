function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [n, d] = nexts(2)
  const nums = nexts(n)
  const maxNum = Math.max(...nums)
  const freq = xArray([maxNum + 1], () => 0)
  for (const num of nums) {
    freq[num]++
  }
  let res = 0
  function solve(freqD) {
    const n = freqD.length
    const sum = freqD.reduce((prev, curr) => prev + curr, 0)
    const dp = xArray([2, n + 1], () => 0)
    for (let j = 1; j <= n; j++) {
      dp[0][j] = dp[1][j - 1] + freqD[j - 1] // まる
      dp[1][j] = Math.max(dp[0][j - 1], dp[1][j - 1]) // バツ
    }
    return sum - Math.max(dp[0][n], dp[1][n])
  }
  if (d === 0) {
    for (let i = 0; i <= maxNum; i++) {
      if (freq[i] > 0) {
        res += freq[i] - 1
      }
    }
  }
  else {
    for (let si = 0; si < d; si++) {
      const freqD = []
      for (let i = si; i <= maxNum; i += d) {
        freqD.push(freq[i])
      }
      res += solve(freqD)
    }
  }
  return res
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
