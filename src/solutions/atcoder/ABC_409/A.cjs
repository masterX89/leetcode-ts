function main(stdin) {
  const lines = stdin.trim().split('\n')
  const n = Number(lines[0])
  const T = lines[1]
  const A = lines[2]

  for (let i = 0; i < n; i++) {
    if (T[i] === 'o' && A[i] === 'o') {
      return 'Yes'
    }
  }
  return 'No'
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
