function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [a, b, c] = lines[0].split(' ').map(BigInt)
  function gcd(a, b) {
    while (b !== 0n) {
      [a, b] = [b, a % b]
    }
    return a
  }
  const edge = gcd(gcd(a, b), c)
  const res = a / edge + b / edge + c / edge - 3n
  return res.toString()
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
