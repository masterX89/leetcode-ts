function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [n, m] = nexts(2)
  const edges = xArray([n], () => [])
  for (let i = 0; i < m; i++) {
    const [u, v] = nexts(2)
    const w = nextbig()
    edges[u - 1].push([v - 1, w])
    edges[v - 1].push([u - 1, w])
  }
  let res = Infinity
  const visited = xArray([n], () => false)
  function dfs(node, xor) {
    if (node === n - 1) {
      if (xor < res) {
        res = xor
      }
      return
    }
    for (const [v, w] of edges[node]) {
      if (visited[v]) {
        continue
      }
      visited[v] = true
      dfs(v, xor ^ w)
      visited[v] = false
    }
  }
  visited[0] = true
  dfs(0, 0n)
  visited[0] = false
  return res.toString()
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
