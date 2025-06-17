function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [h, w] = lines[0].split(' ').map(Number)
  const maze = lines.slice(1).map(s => s.split(' ').map(BigInt))
  const covered = Array.from({ length: h }, () => Array.from({ length: w }, () => false))
  let res = -Infinity
  function countXOR() {
    let ans = 0n
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (!covered[i][j])
          ans ^= maze[i][j]
      }
    }
    if (ans > res) {
      res = ans
    }
  }
  function dfs(i, j) {
    if (j === w) {
      i++
      j = 0
    }
    if (i === h) {
      countXOR()
      return
    }
    // choose not to cover [i][j]
    dfs(i, j + 1)
    if (!covered[i][j]) {
      // [i][j],[i][j+1]
      if (j + 1 < w && !covered[i][j + 1]) {
        covered[i][j] = true
        covered[i][j + 1] = true
        dfs(i, j + 1)
        covered[i][j] = false
        covered[i][j + 1] = false
      }
      // [i][j],[i+1][j]
      if (i + 1 < h && !covered[i + 1][j]) {
        covered[i][j] = true
        covered[i + 1][j] = true
        dfs(i, j + 1)
        covered[i][j] = false
        covered[i + 1][j] = false
      }
    }
  }
  dfs(0, 0)
  return res.toString()
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
