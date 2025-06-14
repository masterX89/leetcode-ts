function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, M] = lines[0].split(' ').map(Number)
  let res = 0
  for (let i = 0; i <= M; i++) {
    res += N ** i
  }
  if (res <= 10 ** 9)
    return res
  else return 'inf'
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
