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
function main(stdin) {
  const lines = stdin.trim().split('\n')
  // eslint-disable-next-line no-unused-vars
  const [N, _M] = lines[0].split(' ').map(Number)
  const edges = lines.slice(1).map(s => s.split(' ').map(s => Number(s) - 1))
  const deg = Array.from({ length: N }, () => 0)
  const uf = new UnionFind(N)
  const G = Array.from({ length: N }, () => [])
  for (const edge of edges) {
    const [u, v] = edge
    G[u].push(v)
    G[v].push(u)
    deg[u]++
    deg[v]++
    uf.union(u, v)
  }

  if (deg.every(val => val === 2) && uf.size(0) === N) {
    return 'Yes'
  }
  return 'No'
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
