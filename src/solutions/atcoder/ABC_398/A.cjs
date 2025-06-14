function main(stdin) {
  const lines = stdin.trim().split('\n')
  const N = Number(lines[0])
  const str = Array.from({ length: N }, () => '-')
  if (N % 2 === 0) {
    str[Math.floor(N / 2)] = '='
    str[Math.floor(N / 2) - 1] = '='
  }
  else {
    str[Math.floor(N / 2)] = '='
  }
  return str.join('')
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
