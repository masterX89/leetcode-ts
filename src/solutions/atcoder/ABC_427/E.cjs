function main(stdin) {
  // eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
  const { next, nextstr, nextbig, nexts, nextssort, nextm, xArray } = makeInputReader(stdin)
  const [h, w] = nexts(2)
  function allClean(board) {
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (board[i][j] === '#') {
          return false
        }
      }
    }
    return true
  }
  function serialize(board) {
    return board.map(row => row.join('')).join('')
  }
  function fallInHole(board, dr, dc) {
    for (let r = 0; r < h; r++) {
      for (let c = 0; c < w; c++) {
        if (board[r][c] === '#') {
          const nr = r + dr
          const nc = c + dc
          if (nr >= 0 && nr < h && nc >= 0 && nc < w && board[nr][nc] === 'T') {
            return true
          }
        }
      }
    }
    return false
  }
  function move(board, dr, dc) {
    const next = board.map(row => [...row])
    if (fallInHole(board, dr, dc)) {
      return null
    }
    for (let r = 0; r < h; r++) {
      for (let c = 0; c < w; c++) {
        if (next[r][c] === 'T') {
          continue
        }
        const pr = r - dr
        const pc = c - dc
        if (pr < 0 || pr >= h || pc < 0 || pc >= w || board[pr][pc] === 'T') {
          next[r][c] = '.'
        }
        else {
          next[r][c] = board[pr][pc]
        }
      }
    }
    return next
  }
  const board = []
  for (let i = 0; i < h; i++) {
    const s = nextstr()
    board.push(s.split(''))
  }

  let res = 0
  const visited = new Set()
  const dic = [[-1, 0], [0, 1], [1, 0], [0, -1]]
  const q = []
  q.push(board.map(row => [...row]))
  let head = 0
  while (head < q.length) {
    const size = q.length - head
    for (let i = 0; i < size; i++) {
      const cur = q[head++].map(row => [...row])
      if (allClean(cur)) {
        return res
      }
      for (const [dr, dc] of dic) {
        const nextBoard = move(cur, dr, dc)
        if (nextBoard === null) {
          continue
        }
        const s = serialize(nextBoard)
        if (!visited.has(s)) {
          q.push(nextBoard)
          visited.add(s)
        }
      }
    }
    res++
  }
  return -1
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
