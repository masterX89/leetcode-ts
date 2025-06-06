function main(stdin) {
  // TODO: add tests
  const lines = stdin.trim().split('\n')
  const [h, w] = lines[0].split(' ').map(Number)

  let res = 0
  if (h === 1 || w === 1) {
    res = Math.max(h, w)
  }
  else {
    res = Math.ceil(h / 2) * Math.ceil(w / 2)
  }

  return res.toString()
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
