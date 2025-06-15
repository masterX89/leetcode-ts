function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, Q] = lines[0].split(' ').map(Number)
  const X = lines[1].split(' ').map(s => Number(s) - 1)
  const box = Array.from({ length: N }, () => 0)
  const res = []
  for (let i = 0; i < Q; i++) {
    if (X[i] === -1) {
      const min = Math.min(...box)
      let j = 0
      while (j < box.length && box[j] !== min) j++
      box[j]++
      res.push(j + 1)
    }
    else {
      box[X[i]]++
      res.push(X[i] + 1)
    }
  }
  return res.join(' ')
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
