function main(stdin) {
  const lines = stdin.trim().split('\n')
  const N = Number(lines[0])
  const P = lines[1].split(' ').map(Number)
  const nodes = []
  let firstUp = -1
  for (let i = 1; i < N - 1; i++) {
    if (P[i] > P[i - 1] && P[i] > P[i + 1]) {
      nodes.push(i)
      if (firstUp === -1) {
        firstUp = nodes.length - 1
      }
    }
    if (P[i] < P[i - 1] && P[i] < P[i + 1]) {
      nodes.push(i)
    }
  }
  let res = 0
  if (firstUp === -1)
    return res
  for (let up = firstUp; up < nodes.length; up += 2) {
    const l = up === 0 ? nodes[up] : nodes[up] - nodes[up - 1]
    let r = 0
    if (up === nodes.length - 1) {
      r = 0
    }
    else if (up === nodes.length - 2) {
      r = N - nodes[nodes.length - 1] - 1
    }
    else {
      r = nodes[up + 2] - nodes[up + 1]
    }
    const cnt = l * r
    res += cnt
  }
  return res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
