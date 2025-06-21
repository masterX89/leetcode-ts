function main(stdin) {
  const lines = stdin.trim().split('\n')
  const x = Number(lines[0])
  let res = 0
  if (x >= 38) {
    res = 1
  }
  else if (x >= 37.5 && x < 38) {
    res = 2
  }
  else if (x < 37.5) {
    res = 3
  }
  return res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
