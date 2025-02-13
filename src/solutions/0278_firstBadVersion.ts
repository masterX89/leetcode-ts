const solution = function (isBadVersion: any) {
  return function (n: number): number {
    let l = 1
    let r = n
    while (l <= r) {
      const mid = l + ((r - l) >> 1)
      if (isBadVersion(mid)) {
        r = mid - 1
      }
      else {
        l = mid + 1
      }
    }
    return l !== n + 1 ? l : -1
  }
}

export { solution }
