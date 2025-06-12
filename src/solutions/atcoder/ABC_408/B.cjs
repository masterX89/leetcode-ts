function main(stdin) {
  const lines = stdin.trim().split('\n')
  const A = lines[1].split(' ').map(Number)
  const res = Array.from(new Set(A)).sort((a, b) => a - b)

  return [res.length, res.join(' ')].join('\n')
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
