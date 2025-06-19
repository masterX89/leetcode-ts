function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [h, w, n] = lines[0].split(' ').map(Number)
  const rubbishes = lines.slice(1, n + 1).map(s => s.split(' ').map(x => Number(x) - 1))
  const q = Number(lines[n + 1])
  const queries = lines.slice(n + 2).map(s => s.split(' ').map((s, idx) => {
    return idx === 0 ? Number(s) : Number(s) - 1
  }))
  const rows = Array.from({ length: h }, () => new Set())
  const cols = Array.from({ length: w }, () => new Set())
  for (let i = 0; i < rubbishes.length; i++) {
    const [x, y] = rubbishes[i]
    rows[x].add(i)
    cols[y].add(i)
  }
  const res = []
  const removed = new Set()
  const removedRows = new Set()
  const removedCols = new Set()
  for (const [type, remove] of queries) {
    if (type === 1) {
      const row = remove
      if (removedRows.has(row)) {
        res.push(0)
        continue
      }
      else {
        let cnt = 0
        for (const rubbish of rows[row]) {
          if (!removed.has(rubbish)) {
            removed.add(rubbish)
            cnt++
          }
        }
        res.push(cnt)
        removedRows.add(row)
      }
    }
    else if (type === 2) {
      const col = remove
      if (removedCols.has(col)) {
        res.push(0)
        continue
      }
      else {
        let cnt = 0
        for (const rubbish of cols[col]) {
          if (!removed.has(rubbish)) {
            removed.add(rubbish)
            cnt++
          }
        }
        res.push(cnt)
        removedCols.add(col)
      }
    }
  }
  return res.join('\n')
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
