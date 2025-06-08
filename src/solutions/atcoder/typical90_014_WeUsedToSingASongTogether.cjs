function main(stdin) {
  // TODO: add tests
  const lines = stdin.trim().split('\n')
  const n = Number(lines[0])
  const students = lines[1].split(' ').map(Number).sort((a, b) => a - b)
  const schools = lines[2].split(' ').map(Number).sort((a, b) => a - b)
  let res = 0
  for (let i = 0; i < n; i++) {
    res += Math.abs(students[i] - schools[i])
  }

  return res.toString()
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
