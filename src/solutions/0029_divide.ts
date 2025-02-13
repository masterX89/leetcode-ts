function divide(dividend: number, divisor: number): number {
  const INF = 2147483647
  const mul = (a: number, k: number): number => {
    let sum = 0
    while (k > 0) {
      if ((k & 1) === 1) {
        sum += a
      }
      k >>= 1
      a += a
    }
    return sum
  }
  if (dividend === 0) {
    return 0
  }
  const negative = Math.sign(dividend) !== Math.sign(divisor)
  const dividendAbs = Math.abs(dividend)
  const divisorAbs = Math.abs(divisor)
  let l = 1
  let r = dividendAbs
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (mul(divisorAbs, mid) <= dividendAbs) {
      l = mid + 1
    }
    else {
      r = mid - 1
    }
  }
  r = negative ? -r : r
  return r > INF ? INF : r
};

export { divide }
