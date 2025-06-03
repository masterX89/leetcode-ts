const input = require('node:fs').readFileSync('/dev/stdin', 'utf8')

const lines = input.trim().split('\n')
const [H, W] = lines[0].split(' ').map(Number)
const matrix = lines.slice(1).map(nums => (nums.split(' ').map(Number)))

const rowSum = matrix.map(row => row.reduce((prev, curr) => prev + curr, 0))
const colSum = Array.from({ length: W }, () => 0)
for (let j = 0; j < W; j++) {
  for (let i = 0; i < H; i++) {
    colSum[j] += matrix[i][j]
  }
}
const result = []
for (let i = 0; i < H; i++) {
  const row = []
  for (let j = 0; j < W; j++) {
    row.push(rowSum[i] + colSum[j] - matrix[i][j])
  }
  result.push(row.join(' '))
}
console.log(result.join('\n'))
