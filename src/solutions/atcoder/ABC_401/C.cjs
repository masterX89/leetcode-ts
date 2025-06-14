function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, K] = lines[0].split(' ').map(Number)
  const MOD = 10 ** 9
  const A = Array.from({ length: N + 1 }, () => 1)
  const prefix = Array.from({ length: N + 2 }, () => 0)
  for (let i = 1; i <= K; i++) {
    prefix[i] = (prefix[i - 1] + A[i - 1]) % MOD
  }
  for (let i = K; i <= N; i++) {
    A[i] = (prefix[i] - prefix[i - K] + MOD) % MOD
    prefix[i + 1] = (prefix[i] + A[i]) % MOD
  }
  return A[N] % MOD
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
