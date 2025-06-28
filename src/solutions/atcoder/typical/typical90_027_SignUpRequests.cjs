function main(stdin) {
  const lines = stdin.trim().split('\n')
  const n = Number(lines[0])
  const logins = lines.slice(1)

  const res = []
  const userNames = new Set()
  for (let i = 0; i < n; i++) {
    if (!userNames.has(logins[i])) {
      userNames.add(logins[i])
      res.push(i + 1)
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
