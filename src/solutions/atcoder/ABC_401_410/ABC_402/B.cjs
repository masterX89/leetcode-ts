function main(stdin) {
  const lines = stdin.trim().split('\n')
  const Q = Number(lines[0])
  const queries = lines.slice(1).map(s => s.split(' ').map(Number))
  const queue = []
  const res = []
  for (const query of queries) {
    if (query[0] === 1) {
      queue.push(query[1])
    }
    else if (query[0] === 2) {
      const num = queue.shift()
      res.push(num)
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
