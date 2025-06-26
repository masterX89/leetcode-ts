function main(stdin) {
  const lines = stdin.trim().split('\n')
  const N = Number(lines[0])
  const A = lines[1].split(' ').map(Number)
  const times = new Set()
  const onces = new Map()
  for (let i = 0; i < N; i++) {
    const num = A[i]
    if (!times.has(num)) {
      if (onces.has(num)) {
        onces.delete(num)
        times.add(num)
      }
      else {
        onces.set(num, i + 1)
      }
    }
  }
  let maxKey = -1
  onces.forEach((_, key) => {
    maxKey = Math.max(key, maxKey)
  })
  return maxKey === -1 ? -1 : onces.get(maxKey)
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
