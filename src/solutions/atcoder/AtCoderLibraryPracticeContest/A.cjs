function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [n, q] = nexts(2)
  const uf = new UnionFind(n)
  const res = []
  for (let i = 0; i < q; i++) {
    const [t, u, v] = nexts(3)
    if (t === 0) {
      uf.union(u, v)
    }
    else if (t === 1) {
      res.push(uf.isSame(u, v) ? 1 : 0)
    }
  }
  return res.join('\n')
}
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i)
    this.sizeArr = Array.from({ length: n }, () => 1)
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x])
    }
    return this.parent[x]
  }

  union(x, y) {
    const rootX = this.find(x)
    const rootY = this.find(y)
    if (rootX === rootY)
      return false
    if (this.sizeArr[rootX] < this.sizeArr[rootY]) {
      this.parent[rootX] = rootY
      this.sizeArr[rootY] += this.sizeArr[rootX]
    }
    else {
      this.parent[rootY] = rootX
      this.sizeArr[rootX] += this.sizeArr[rootY]
    }
    return true
  }

  isSame(x, y) {
    return this.find(x) === this.find(y)
  }

  size(x) {
    return this.sizeArr[this.find(x)]
  }
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
