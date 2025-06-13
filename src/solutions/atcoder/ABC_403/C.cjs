function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, M, Q] = lines[0].split(' ').map(Number)
  const queries = lines.slice(1).map(s => s.split(' ').map(Number))
  const access = Array.from({ length: N }, () => new Set())
  let everyOne = []
  for (let i = 0; i < M; i++) {
    everyOne.push(i)
  }
  everyOne = new Set(everyOne)
  const res = []
  for (const query of queries) {
    if (query[0] === 1) {
      access[query[1] - 1].add(query[2] - 1)
    }
    else if (query[0] === 2) {
      access[query[1] - 1] = everyOne
    }
    else if (query[0] === 3) {
      if (access[query[1] - 1].has(query[2] - 1)) {
        res.push('Yes')
      }
      else {
        res.push('No')
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
