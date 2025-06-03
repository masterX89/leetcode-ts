function main(stdin) {
  const lines = stdin.trim().split('\n')
  const N = Number(lines[0])
  const classLvl = lines[1].split(' ').map(Number)
  const Q = Number(lines[2])
  const stuLvl = lines.slice(3).map(Number)

  classLvl.sort((a, b) => a - b)

  function binarySearch(classLvl, target) {
    let l = 0
    let r = N
    while (l < r) {
      const c = l + ((r - l) >> 1)
      if (classLvl[c] >= target) {
        r = c
      }
      else {
        l = c + 1
      }
    }
    // l/r
    return l === N ? -1 : l
  }
  const res = []
  for (let i = 0; i < Q; i++) {
    const firstGreaterIndex = binarySearch(classLvl, stuLvl[i]) // first classLvl >= target
    let diff = 0
    if (firstGreaterIndex === -1) {
      diff = stuLvl[i] - classLvl[N - 1]
    }
    else if (firstGreaterIndex === 0) {
      diff = classLvl[0] - stuLvl[i]
    }
    else {
      diff = Math.min(classLvl[firstGreaterIndex] - stuLvl[i], stuLvl[i] - classLvl[firstGreaterIndex - 1])
    }
    res.push(Math.abs(diff))
  }

  return res.join('\n')
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
