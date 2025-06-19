function main(stdin) {
  const lines = stdin.trim().split('\n')
  const S = lines[0].split('')
  const right = 'abcdefghijklmnopqrstuvwxyz'
  for (const ch of right) {
    if (!S.includes(ch))
      return ch
  }
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
