function main(stdin) {
  const lines = stdin.trim().split('\n')
  const N = Number(lines[0])
  const nums = lines[1].split(' ').map(Number)
  nums.sort((a, b) => a - b)
  function binarySearch(nums, target) {
    let l = 0
    let r = nums.length
    while (l < r) {
      const c = l + ((r - l) >> 1)
      if (nums[c] >= target) {
        r = c
      }
      else {
        l = c + 1
      }
    }
    return r
  }
  for (let i = N; i >= 1; i--) {
    const index = binarySearch(nums, i)
    if (N - index >= i)
      return i
  }
  return 0
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
