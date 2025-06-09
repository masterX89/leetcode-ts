function main(stdin) {
  const lines = stdin.trim().split('\n')
  const T = Number(lines[0])
  const strs = []
  for (let i = 0; i < T; i++) {
    strs.push(lines[i * 2 + 2])
  }
  const res = []
  for (const str of strs) {
    let l = 0
    while (l < str.length - 1 && str[l] <= str[l + 1]) l++
    if (l === str.length - 1) {
      res.push(str)
      continue
    }
    let r = l + 1
    while (r < str.length && str[r] <= str[l]) r++
    res.push(str.slice(0, l) + str.slice(l + 1, r) + str.slice(l, l + 1) + str.slice(r))
  }
  return res.join('\n')
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
