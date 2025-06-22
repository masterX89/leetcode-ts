function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [n, q] = lines[0].split(' ').map(Number)
  const a = lines[1].split(' ').map(s => Number(s) - 1)
  // 0: white, 1: black
  const block = Array.from({ length: n }, () => 0)
  let ans = 0
  const res = []
  for (let i = 0; i < q; i++) {
    const idx = a[i]
    if (block[idx] === 0) {
      // w -> b
      if (idx === 0 && idx === n - 1) {
        ans++
      }
      else if (idx === 0 && block[idx + 1] === 0) {
        ans++
      }
      else if (idx === n - 1 && block[idx - 1] === 0) {
        ans++
      }
      else if (block[idx - 1] === 0 && block[idx + 1] === 0) {
        ans++
      }
      else if (block[idx - 1] === 1 && block[idx + 1] === 1) {
        ans--
      }
      block[idx] = 1
    }
    else {
      // b -> w
      if (idx === 0 && idx === n - 1) {
        ans--
      }
      else if (idx === 0 && block[idx + 1] === 0) {
        ans--
      }
      else if (idx === n - 1 && block[idx - 1] === 0) {
        ans--
      }
      else if (block[idx - 1] === 0 && block[idx + 1] === 0) {
        ans--
      }
      else if (block[idx - 1] === 1 && block[idx + 1] === 1) {
        ans++
      }
      block[idx] = 0
    }
    res.push(ans)
  }
  return res.join('\n')
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
