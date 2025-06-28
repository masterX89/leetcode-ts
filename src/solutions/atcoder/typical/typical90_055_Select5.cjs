function main(stdin) {
  const lines = stdin.trim().split('\n')
  const [n, p, q] = lines[0].split(' ').map(Number)
  const nums = lines[1].split(' ').map(num => (num % p))

  function prod(a, b, p) {
    // 分割代入を使うとTLEになるので、個別に定義すること
    const aH = Math.floor(a / 1e6)
    const aL = a % 1e6
    const bH = Math.floor(b / 1e6)
    const bL = b % 1e6
    const partL = aL * bL
    const partHL = (aL * bH + bL * aH) * 1e6
    const partH = aH * bH * (1e12 % p)
    return (partL + partHL + partH) % p
  }

  let res = 0
  for (let i = 0; i <= n - 5; i++) {
    for (let j = i + 1; j <= n - 4; j++) {
      // prodのネストはTLEの原因になるため、毎回constで中間値を保存すること
      // prod((prod(nums[i],nums[j],p),nums[k],p),...)、ダメ❌です
      const ij = prod(nums[i], nums[j], p)
      for (let k = j + 1; k <= n - 3; k++) {
        const ijk = prod(ij, nums[k], p)
        for (let l = k + 1; l <= n - 2; l++) {
          const ijkl = prod(ijk, nums[l], p)
          for (let m = l + 1; m <= n - 1; m++) {
            const ijklm = prod(ijkl, nums[m], p)
            if (ijklm === q) {
              res++
            }
          }
        }
      }
    }
  }
  return res
}

if (require.main === module) {
  const fs = require('node:fs')
  const input = fs.readFileSync('/dev/stdin', 'utf8')
  console.log(main(input))
}

module.exports = { main }
