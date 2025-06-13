function main(stdin) {
  const lines = stdin.trim().split('\n')
  const N = Number(lines[0])
  const S = lines.slice(1, N + 1).map(s => s.split(''))
  const T = lines.slice(N + 1).map(s => s.split(''))
  function diffCnt(S, T) {
    let cnt = 0
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        if (S[i][j] !== T[i][j]) {
          cnt++
        }
      }
    }
    return cnt
  }
  function rotate(S) {
    const rot = Array.from({ length: N }, () => Array.from({ length: N }, () => '.'))
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        rot[i][j] = S[N - 1 - j][i]
      }
    }
    return rot
  }
  let grid = S
  let res = Infinity
  for (let i = 0; i < 4; i++) {
    res = Math.min(res, diffCnt(grid, T) + i)
    grid = rotate(grid)
  }
  return res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
