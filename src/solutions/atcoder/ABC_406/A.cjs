function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [A, B, C, D] = lines[0].split(' ').map(Number)
  if (C < A || (C === A && D <= B)) {
    return 'Yes'
  }
  return 'No'
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
