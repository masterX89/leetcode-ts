function main(stdin) {
  const lines = stdin.trim().split('\n')
  const T = lines[0].split('')
  const U = lines[1].split('')
  for (let i = 0; i < T.length; i++) {
    if (U[0] === T[i] || T[i] === '?') {
      let flag = true
      for (let j = 1; j < U.length; j++) {
        if (U[j] === T[i + j] || T[i + j] === '?') {
          continue
        }
        else {
          flag = false
          break
        }
      }
      if (flag)
        return 'Yes'
    }
  }
  return 'No'
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
