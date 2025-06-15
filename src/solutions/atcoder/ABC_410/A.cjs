function main(stdin) {
  const lines = stdin.trim().split('\n')
  const N = Number(lines[0])
  const A = lines[1].split(' ').map(Number)
  const K = Number(lines[2])
  let res = 0
  for (const age of A) {
    if (age >= K)
      res++
  }
  return res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
