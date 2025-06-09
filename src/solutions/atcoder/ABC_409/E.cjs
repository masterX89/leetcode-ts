function main(stdin) {
  // TODO: add tests
  const lines = stdin.trim().split('\n')
  const N = Number(lines[0])
  const x = lines[1].split(' ').map(Number)
  const edges = lines.slice(2).map(s => s.split(' ').map(Number))
  const T = Array.from({ length: N }, () => [])
  for (const edge of edges) {
    const [u, v, w] = edge
    T[u - 1].push([v - 1, w])
    T[v - 1].push([u - 1, w])
  }
  let res = 0
  function dfs(node, prev) {
    for (const edge of T[node]) {
      const [v, w] = edge
      if (v === prev)
        continue
      dfs(v, node)
      res += w * Math.abs(x[v])
      x[node] += x[v]
    }
  }
  dfs(0, -1)
  return res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
