function main(stdin) {
  const lines = stdin.trim().split('\n')
  const N = Number(lines[0])
  const actions = lines.slice(1)
  let status = 'logout'
  let res = 0
  for (const action of actions) {
    if (action === 'login') {
      status = 'login'
    }
    else if (action === 'logout') {
      status = 'logout'
    }
    else if (action === 'private' && status === 'logout') {
      res++
    }
  }
  return res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
