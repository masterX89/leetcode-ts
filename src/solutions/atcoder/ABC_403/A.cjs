function main(stdin) {
  const lines = stdin.trim().split('\n')
  const N = Number(lines[0])
  const A = lines[1].split(' ').map(Number)
  let sum = 0
  for (let i = 0; i < N; i += 2) {
    sum += A[i]
  }
  return sum
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
