function main(stdin) {
  // TODO: add tests
  const lines = stdin.trim().split('\n')
  const [n, k] = lines[0].split(' ').map(Number)
  const numsA = lines[1].split(' ').map(Number)
  const numsB = lines[2].split(' ').map(Number)

  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += Math.abs(numsA[i] - numsB[i])
  }

  if (k >= sum && (k - sum) % 2 === 0)
    return 'Yes'
  else return 'No'
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
