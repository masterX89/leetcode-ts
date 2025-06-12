function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, M] = lines[0].split(' ').map(Number)
  const P = lines.slice(1).map(s => s.split(' ').map(val => val - 1))
  const w = Array.from({ length: N + 1 }, () => 0)
  for (let i = 0; i < M; i++) {
    const [l, r] = P[i]
    w[l] += 1
    w[r + 1] -= 1
  }
  let res = Infinity
  let cnt = 0
  for (let i = 0; i < N; i++) {
    cnt += w[i]
    if (cnt < res)
      res = cnt
  }
  return res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
