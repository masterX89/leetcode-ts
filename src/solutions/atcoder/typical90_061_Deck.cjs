function main(stdin) {
  // TODO: add tests
  const lines = stdin.trim().split('\n')
  const q = Number(lines[0])
  const queries = lines.slice(1).map(s => s.split(' ').map(Number))

  const res = []
  const deck = []
  for (let i = 0; i < q; i++) {
    const [t, x] = queries[i]
    if (t === 1) {
      deck.unshift(x)
    }
    else if (t === 2) {
      deck.push(x)
    }
    else if (t === 3) {
      res.push(deck[x - 1])
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
