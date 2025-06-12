function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [X, Y] = lines[0].split(' ').map(Number)
  let cnt = 0
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= 6; j++) {
      if (i + j >= X || Math.abs(i - j) >= Y)
        cnt++
    }
  }
  return cnt / 36
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
