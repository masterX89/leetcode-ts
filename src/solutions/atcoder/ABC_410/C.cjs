function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [N, Q] = lines[0].split(' ').map(Number)
  const queries = lines.slice(1).map(s => s.split(' ').map(Number))
  const A = Array.from({ length: N }, (_, index) => index + 1)
  const res = []
  let rot = 0
  for (const query of queries) {
    if (query[0] === 2) {
      const index = (query[1] - 1 + rot) % N
      res.push(A[index])
    }
    else if (query[0] === 1) {
      const index = (query[1] - 1 + rot) % N
      A[index] = query[2]
    }
    else if (query[0] === 3) {
      rot = (query[1] % N + rot) % N
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
