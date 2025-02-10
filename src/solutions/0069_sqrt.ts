function mySqrt1(x: number): number {
  let l = 0
  let r = x
  // [..., r, l, ...]
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    // if the num less than l means num ** 2 <= x
    if (mid * mid <= x) {
      l = mid + 1
    }
    else {
      r = mid - 1
    }
  }
  return r
};

// TODO: ニュートン法を使った解法を追加する

export { mySqrt1 }
