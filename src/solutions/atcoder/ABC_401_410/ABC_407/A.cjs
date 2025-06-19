function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [A, B] = lines[0].split(' ').map(Number)
  const left = A / B - Math.floor(A / B)
  const right = Math.ceil(A / B) - A / B
  return left < right ? Math.floor(A / B) : Math.ceil(A / B)
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
