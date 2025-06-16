function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, K] = lines[0].split(' ').map(Number)
  const S = lines[1]

  const matrix = Array.from({ length: N + 1 }, () => Array.from({ length: 26 }, () => Infinity))
  for (let j = 0; j < 26; j++) {
    matrix[N][j] = N
  }
  for (let i = N - 1; i >= 0; i--) {
    for (let j = 0; j < 26; j++) {
      matrix[i][j] = S[i].charCodeAt(0) === 'a'.charCodeAt(0) + j ? i : matrix[i + 1][j]
    }
  }

  let res = ''
  let curr = -1
  for (let i = 1; i <= K; i++) {
    for (let dis = 0; dis < 26; dis++) {
      const ch = String.fromCharCode('a'.charCodeAt(0) + dis)
      const next = matrix[curr + 1][dis]
      const possibleNum = N - 1 - next
      if (possibleNum >= K - i) {
        res += ch
        curr = next
        break
      }
    }
  }
  return res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
