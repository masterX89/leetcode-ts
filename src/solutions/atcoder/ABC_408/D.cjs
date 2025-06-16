function main(stdin) {
  const lines = stdin.trim().split('\n')
  const S = lines.slice(1).filter((_, idx) => idx % 2 !== 0)
  const res = []
  for (const s of S) {
    let min = Infinity
    const right01 = new Map([['0', 0], ['1', 0]])
    for (let i = 0; i < s.length; i++) {
      right01.set(s[i], right01.get(s[i]) + 1)
    }
    let l0 = 0
    const left01 = new Map([['0', 0], ['1', 0]])
    let min01 = 0
    for (let r = 0; r < s.length; r++) {
      right01.set(s[r], right01.get(s[r]) - 1)
      if (s[r] === '0') {
        l0++
      }
      const cnt = l0 + right01.get('1')
      left01.set(s[r], left01.get(s[r]) + 1)
      min01 = Math.min(min01, left01.get('1') - left01.get('0'))
      // left01.get('1') + l0 - left01.get('0') + right01.get('1')
      // l が進むとともにleft01が変化するけど、left01.get('1') + l0 - left01.get('0')の式には最小値があるので
      // loop の必要がない
      // for (let l = 0; l <= r + 1; l++) {
      min = Math.min(min, min01 + cnt)
      // }
    }
    res.push(min)
  }

  return res.join('\n')
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
