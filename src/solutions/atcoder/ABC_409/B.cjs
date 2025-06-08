function main(stdin) {
  const lines = stdin.trim().split('\n')
  const n = Number(lines[0])
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
    return r === nums.length ? -1 : r
  }
  let l = 0
  let r = nums[n - 1]
  while (l <= r) {
    const c = l + ((r - l) >> 1)
    const index = binarySearch(nums, c)
    if (n - index >= c) {
      l = c + 1
    }
    else {
      r = c - 1
    }
  }
  return r
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
