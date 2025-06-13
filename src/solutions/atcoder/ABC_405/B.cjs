function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, M] = lines[0].split(' ').map(Number)
  const A = lines[1].split(' ').map(Number)
  const cnt = Array.from({ length: M }, () => 0)
  for (let i = 0; i < N; i++) {
    A[i]--
    cnt[A[i]]++
  }
  let res = 0
  if (cnt.includes(0))
    return res
  for (let i = N - 1; i >= 0; i--) {
    cnt[A[i]]--
    res++
    if (cnt[A[i]] === 0)
      return res
  }
  return res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
