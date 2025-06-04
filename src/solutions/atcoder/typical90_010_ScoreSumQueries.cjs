function main(stdin) {
  const lines = stdin.trim().split('\n')
  const n = Number(lines[0])
  const raw = lines.slice(1, n + 1).map(value => value.split(' ').map(Number))
  const q = Number(lines[n + 1])
  const queries = lines.slice(n + 2).map(value => value.split(' ').map(Number))

  const points = [[0, 0, 0, 0], ...raw]
  let prevC1 = 0
  let prevC2 = 0
  for (let i = 1; i <= n; i++) {
    const c = points[i][0]
    if (c === 1) {
      points[i].push(prevC1, prevC2)
      points[i][1] += points[prevC1][1]
      prevC1 = i
    }
    else {
      points[i].push(prevC1, prevC2)
      points[i][1] += points[prevC2][1]
      prevC2 = i
    }
  }

  const res = []
  for (let i = 0; i < q; i++) {
    // 2,6 -> <2 <=6 (2,6]
    let [l, r] = queries[i]
    l = points[l][2]
    r = points[r][0] !== 1 ? points[r][2] : r
    const res1 = points[r][1] - points[l][1]
    ;[l, r] = queries[i]
    l = points[l][3]
    r = points[r][0] !== 2 ? points[r][3] : r
    const res2 = points[r][1] - points[l][1]
    res.push([res1, res2].join(' '))
  }
  return res.join('\n')
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
