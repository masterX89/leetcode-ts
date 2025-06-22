function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [n, q] = lines[0].split(' ').map(Number)
  const queries = lines.slice(1).map(s => s.split(' '))
  const pc = Array.from({ length: n + 1 }, () => '')
  for (const query of queries) {
    const type = Number(query[0])
    const idx = Number(query[1])
    if (type === 1) {
      pc[idx] = pc[0]
    }
    else if (type === 2) {
      pc[idx] += query[2]
    }
    else if (type === 3) {
      pc[0] = pc[idx]
    }
  }
  return pc[0]
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
