function main(stdin) {
  const lines = stdin.trim().split('\n')
  const p = lines[0]
  const l = Number(lines[1])
  if (p.length >= l) {
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
