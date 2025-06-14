function main(stdin) {
  const lines = stdin.trim().split('\n')
  const N = Number(lines[0])
  const A = lines[1].split(' ').map(Number)
  const left = new Map()
  const right = new Map()
  for (const num of A) {
    if (right.has(num)) {
      right.set(num, right.get(num) + 1)
    }
    else {
      right.set(num, 1)
    }
  }
  let res = -1
  for (let i = 0; i < N - 1; i++) {
    const num = A[i]
    if (left.has(num)) {
      left.set(num, left.get(num) + 1)
    }
    else {
      left.set(num, 1)
    }
    if (right.has(num)) {
      const cnt = right.get(num)
      if (cnt === 1) {
        right.delete(num)
      }
      else {
        right.set(num, cnt - 1)
      }
    }
    res = Math.max(res, left.size + right.size)
  }
  return res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
