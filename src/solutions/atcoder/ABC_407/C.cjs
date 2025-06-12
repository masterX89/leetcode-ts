function main(stdin) {
  const lines = stdin.trim().split('\n')
  const S = lines[0].split('').map(Number)
  let res = 0
  for (let i = S.length - 1; i >= 0; i--) {
    const p = S.length - i
    res += (S[i] - res + 10 * p) % 10
  }
  return S.length + res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
