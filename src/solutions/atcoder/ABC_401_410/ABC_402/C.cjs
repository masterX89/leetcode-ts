function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, M] = lines[0].split(' ').map(Number)
  const foods = lines.slice(1, M + 1).map(
    s => new Set(s.split(' ').slice(1).map(s => Number(s) - 1)),
  )
  const dones = lines[M + 1].split(' ').map(s => Number(s) - 1)
  const raws = Array.from({ length: N }, () => [])
  for (let i = 0; i < M; i++) {
    const food = foods[i]
    food.forEach((raw) => {
      raws[raw].push(i)
    })
  }
  let ans = 0
  const res = []
  for (const done of dones) {
    for (const food of raws[done]) {
      foods[food].delete(done)
      if (foods[food].size === 0) ans++
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
