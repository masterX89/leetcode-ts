function main(stdin) {
  const lines = stdin.trim().split('\n')
  const S = Number(lines[0])
  if (S>=200&&S<=299) {
    return 'Success'
  }
  return 'Failure'
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
