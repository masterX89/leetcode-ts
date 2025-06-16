function main(stdin) {
  // TODO: add tests
  const lines = stdin.trim().split('\n')
  const [n, k] = lines[0].split(' ').map(BigInt)
  function eightToNineWithFive(n) {
    let p = 1n
    let cnt = 0n
    while (n !== 0n) {
      cnt += n % 10n * p
      p *= 8n
      n = n / 10n
    }
    p = 1n
    let res = 0n
    while (cnt !== 0n) {
      if (cnt % 9n === 8n) {
        res += 5n * p
      }
      else {
        res += cnt % 9n * p
      }
      p *= 10n
      cnt = cnt / 9n
    }
    return res
  }

  let res = n
  for (let i = 0; i < k; i++) {
    res = eightToNineWithFive(res)
  }
  return res.toString()
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
