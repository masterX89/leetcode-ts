function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, M] = lines[0].split(' ').map(Number)
  const edges = lines.slice(1).map(s => s.split(' ').map(Number))
  const G = Array.from({ length: N }, () => [])
  for (let i = 0; i < M; i++) {
    const [u, v, w] = edges[i]
    G[u - 1].push([v - 1, w])
  }
  let res = Infinity
  const visited = Array.from({ length: N }, () => new Set())
  function dfs(node, prevXOR) {
    if (node === N - 1) {
      res = Math.min(res, prevXOR)
    }
    if (visited[node].has(prevXOR))
      return
    visited[node].add(prevXOR)
    for (const [v, w] of G[node]) {
      dfs(v, prevXOR ^ w)
    }
  }
  dfs(0, 0)
  return res === Infinity ? -1 : res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
