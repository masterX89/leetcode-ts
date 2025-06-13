function main(stdin) {
  const lines = stdin.trim().split('\n')
  const N = Number(lines[0])
  const A = lines[1].split(' ').map(BigInt)
  let res = 0n
  const diff = [0n]
  let sum = 0n
  for (let i = 0; i < N; i++) {
    sum += A[i]
    diff.push(sum)
  }
  for (let i = 0; i < N - 1; i++) {
    res += A[i] * (diff[N] - diff[i + 1])
  }
  return res.toString()
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
