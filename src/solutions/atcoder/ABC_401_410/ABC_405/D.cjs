function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const INF = Infinity
  const di = [-1, 0, 1, 0]
  const dj = [0, -1, 0, 1]
  const direction = '^<v>'
  const [h, w] = nexts(2)
  const s = xArray([h, w], '')
  for (let i = 0; i < h; i++) {
    const str = nextstr()
    for (let j = 0; j < w; j++) {
      s[i][j] = str[j]
    }
  }
  const q = []
  const dist = xArray([h, w], INF)
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (s[i][j] === 'E') {
        q.push([i, j])
        dist[i][j] = 0
      }
    }
  }
  let head = 0
  while (head < q.length) {
    const [i, j] = q[head++]
    for (let d = 0; d < 4; d++) {
      const ii = i + di[d]
      const jj = j + dj[d]
      if (ii < 0 || jj < 0 || ii >= h || jj >= w)
        continue
      if (s[ii][jj] === '#')
        continue
      if (dist[ii][jj] !== INF)
        continue
      q.push([ii, jj])
      dist[ii][jj] = dist[i][j] + 1
      s[ii][jj] = direction[d ^ 2]
    }
  }
  const res = []
  for (let i = 0; i < h; i++) {
    res.push(s[i].join(''))
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
