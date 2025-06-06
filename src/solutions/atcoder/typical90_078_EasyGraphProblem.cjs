function main(stdin) {
  // TODO: add tests
  const lines = stdin.trim().split('\n')
  const [n, m] = lines[0].split(' ').map(Number)
  const edges = lines.slice(1).map(s => s.split(' ').map(Number))
  const g = Array.from({ length: n + 1 }, () => ([]))

  let res = 0
  for (let i = 0; i < m; i++) {
    const [a, b] = edges[i]
    g[a].push(b)
    g[b].push(a)
  }
  for (let i = 1; i <= n; i++) {
    let cnt = 0
    for (let j = 0; j < g[i].length; j++) {
      if (g[i][j] < i) {
        cnt++
      }
      if (cnt > 1) {
        break
      }
    }
    if (cnt === 1) {
      res++
    }
  }
  return res.toString()
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
