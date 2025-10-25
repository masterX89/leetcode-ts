function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [n, k] = nexts(2)
  let people = 0
  let now = 0
  const pq = new PriorityQueue()
  const res = []
  for (let i = 0; i < n; i++) {
    const [a, b, c] = nexts(3)
    while ((pq.size && a > pq.top[0]) || people + c > k) {
      const [nextNow, outPeople] = pq.pop()
      now = nextNow
      people -= outPeople
    }
    now = Math.max(now, a)
    res.push(now)
    people += c
    pq.push(now + b, c)
  }
  return res.join('\n')
}
class PriorityQueue {
  constructor() {
    this.a = []
  }

  push(num, inc) {
    const a = this.a
    let i = a.length
    for (let j; i; i = j) {
      j = i - 1 >> 1
      if (a[j][0] <= num) {
        break
      }
      a[i] = a[j]
    }
    a[i] = [num, inc]
  }

  pop() {
    const a = this.a
    const r = a[0]
    const x = a.pop()
    const k = a.length >> 1
    let i = 0
    for (let j; i < k; i = j) {
      j = (i << 1) + 1
      if (a[j + 1] && a[j + 1][0] < a[j][0]) {
        j++
      }
      if (x[0] <= a[j][0]) {
        break
      }
      a[i] = a[j]
    }
    if (a.length) {
      a[i] = x
    }
    return r
  }

  pushPop(num, inc) {
    const a = this.a
    const r = a[0]
    const k = a.length >> 1
    if (!a.length || r[0] >= num) {
      return [num, inc]
    }
    let i = 0
    for (let j; i < k; i = j) {
      j = (i << 1) + 1
      if (a[j + 1] && a[j + 1][0] < a[j][0]) {
        j++
      }
      if (num <= a[j][0]) {
        break
      }
      a[i] = a[j]
    }
    a[i] = [num, inc]
    return r
  }

  popPush(num, inc) {
    const a = this.a
    const r = a[0]
    const k = a.length >> 1
    let i = 0
    for (let j; i < k; i = j) {
      j = (i << 1) + 1
      if (a[j + 1] && a[j + 1][0] < a[j][0]) {
        j++
      }
      if (num <= a[j][0]) {
        break
      }
      a[i] = a[j]
    }
    a[i] = [num, inc]
    return r
  }

  get size() {
    return this.a.length
  }

  get top() {
    return this.a[0]
  }
}
function makeInputReader(input) {
  const cin = input.trim().split(/ |\n/)
  let cid = 0
  function createNDArray(shape, fillFn) {
    if (shape.length === 0)
      return fillFn()
    const [dim, ...rest] = shape
    return Array.from({ length: dim }, () => createNDArray(rest, fillFn))
  }
  return {
    next: () => Number(cin[cid++]),
    nextstr: () => cin[cid++],
    nextbig: () => BigInt(cin[cid++]),
    nexts: (n, addNum = 0, parse = true) =>
      parse ? cin.slice(cid, cid += n).map(s => Number(s) + addNum) : cin.slice(cid, cid += n),
    nextssort: (n, parse = true, desc = false) =>
      parse
        ? cin.slice(cid, cid += n).map(Number).sort((a, b) => desc ? b - a : a - b)
        : cin.slice(cid, cid += n).sort((a, b) => desc ? b.localeCompare(a) : a.localeCompare(b)),
    nextm: (h, w, parse = true) => {
      const res = []
      for (let i = 0; i < h; i++) {
        const row = cin.slice(cid, cid += w)
        res.push(parse ? row.map(Number) : row)
      }
      return res
    },
    xArray: createNDArray,
  }
}
if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}
module.exports = { main }
