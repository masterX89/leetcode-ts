function main(stdin) {
  const lines = stdin.trim().split('\n')
  const n = Number(lines[0])

  function isRuled(s) {
    const st = []
    for (const ch of s) {
      if (ch === '(') {
        st.push(ch)
      }
      else if (st[st.length - 1] === '(') {
        st.pop()
      }
      else {
        st.push(ch)
      }
    }
    return st.length === 0
  }
  const res = []
  if (n % 2 !== 0) {
    return res.join('\n')
  }
  for (let i = 0; i < (1 << n); i++) {
    let s = ''
    for (let j = n - 1; j >= 0; j--) {
      if ((i & (1 << j)) === 0) {
        s += '('
      }
      else {
        s += ')'
      }
    }
    if (isRuled(s)) {
      res.push(s)
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
