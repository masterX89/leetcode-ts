function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, L] = lines[0].split(' ').map(Number)
  const d = lines[1].split(' ').map(Number)

  if (L % 3 !== 0) {
    return 0
  }
  const dots = Array.from({ length: L }, () => [])
  let dot = 0
  for (let i = 0; i < N; i++) {
    dots[dot].push(i)
    dot = (dot + d[i]) % L
  }

  let res = 0
  for (let i = 0; i < Math.floor(L / 3); i++) {
    if (dots[i].length !== 0 && dots[i + Math.floor(L / 3)].length !== 0 && dots[i + 2 * Math.floor(L / 3)].length !== 0) {
      res += dots[i].length * dots[i + Math.floor(L / 3)].length * dots[i + 2 * Math.floor(L / 3)].length
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
