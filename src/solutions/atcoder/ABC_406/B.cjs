function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, K] = lines[0].split(' ').map(BigInt)
  const nums = lines[1].split(' ').map(BigInt)
  let res = 1n
  const max = 10n ** K
  for (let i = 0; i < N; i++) {
    res = res * nums[i]
    if (res >= max)
      res = 1n
  }
  return res.toString()
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
