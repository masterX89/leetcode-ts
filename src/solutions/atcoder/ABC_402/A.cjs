function main(stdin) {
  const lines = stdin.trim().split('\n')
  const S = lines[0].split('')
  let res = ''
  for (const ch of S) {
    if (ch >= 'A' && ch <= 'Z') {
      res += ch
    }
  }
  return res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
