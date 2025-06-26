function main(stdin) {
  const lines = stdin.trim().split('\n')
  const A = lines[0].split(' ').map(Number)
  for (let i = 0; i < A.length; i++) {
    const x = A[i]
    for (let j = 0; j < A.length; j++) {
      const y = A[j]
      if (A.filter(val => val === x).length >= 3 && A.filter(val => val === y).length >= 2 && x !== y)
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
