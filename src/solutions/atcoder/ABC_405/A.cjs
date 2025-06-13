function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [R, X] = lines[0].split(' ').map(Number)
  if (X === 1 && R >= 1600 && R <= 2999) {
    return 'Yes'
  }
  else if (X === 2 && R >= 1200 && R <= 2399) {
    return 'Yes'
  }
  return 'No'
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
