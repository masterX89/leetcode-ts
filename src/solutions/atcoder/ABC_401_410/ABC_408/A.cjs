function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, S] = lines[0].split(' ').map(Number)
  const T = lines[1].split(' ').map(Number)
  let prev = 0
  for (let i = 0; i < N; i++) {
    if (T[i] - prev > S + 0.5) {
      return 'No'
    }
    prev = T[i]
  }
  return 'Yes'
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
