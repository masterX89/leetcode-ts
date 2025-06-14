function main(stdin) {
  const lines = stdin.trim().split('\n')
  const N = BigInt(lines[0])
  let l = 0n
  let r = N + 1n
  let res = 0n
  while (l < r) {
    const c = l + ((r - l) / 2n)
    if (c * c * 2n <= N) {
      l = c + 1n
    }
    else {
      r = c
    }
  }
  if (l !== 0) {
    res += l - 1n
  }
  l = 0n
  r = N + 1n
  while (l < r) {
    const c = l + ((r - l) / 2n)
    if (c * c * 4n <= N) {
      l = c + 1n
    }
    else {
      r = c
    }
  }
  if (l !== 0) {
    res += l - 1n
  }
  return res.toString()
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
