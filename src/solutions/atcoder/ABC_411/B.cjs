function main(stdin) {
  const lines = stdin.trim().split('\n')
  const n = Number(lines[0])
  const d = lines[1].split(' ').map(Number)
  const prefix = Array.from({ length: n }, () => 0)
  for (let i = 1; i <= n; i++) {
    prefix[i] = prefix[i - 1] + d[i - 1]
  }
  const res = []
  for (let i = 0; i < n - 1; i++) {
    const ans = []
    for (let j = i + 1; j < n; j++) {
      ans.push(prefix[j] - prefix[i])
    }
    res.push(ans.join(' '))
  }
  return res.join('\n')
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
