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
    if (rootX === rootY) {
      return false
    }
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
function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, M] = lines[0].split(' ').map(Number)
  const edges = lines.slice(1).map(s => s.split(' ').map(Number))
  const uf = new UnionFind(N + 1)
  let res = 0
  for (const edge of edges) {
    const [u, v] = edge
    if (uf.isSame(u, v)) {
      res++
    }
    else {
      uf.union(u, v)
    }
  }
  return res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
