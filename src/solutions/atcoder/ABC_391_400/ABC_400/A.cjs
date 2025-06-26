function main(stdin) {
  const lines = stdin.trim().split('\n')
  const A = Number(lines[0])
  return 400 % A === 0 ? Math.floor(400 / A) : -1
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
