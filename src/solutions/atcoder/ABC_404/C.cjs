function main(stdin) {
  const lines = stdin.trim().split('\n')
  // eslint-disable-next-line no-unused-vars
  const [N, _M] = lines[0].split(' ').map(Number)
  const edges = lines.slice(1).map(s => s.split(' ').map(s => Number(s) - 1))
  const deg = Array.from({ length: N }, () => 0)
  const G = Array.from({ length: N }, () => [])
  const visited = Array.from({ length: N }, () => false)
  for (const edge of edges) {
    const [u, v] = edge
    G[u].push(v)
    G[v].push(u)
    deg[u]++
    deg[v]++
  }
  function dfs(u) {
    for (const v of G[u]) {
      if (visited[v])
        continue
      visited[v] = true
      dfs(v)
      // visited[v] = false
    }
  }
  dfs(0)
  if (deg.every(val => val === 2) && visited.every(val => val)) {
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
