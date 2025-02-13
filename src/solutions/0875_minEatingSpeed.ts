function minEatingSpeed(piles: number[], h: number): number {
  let l = 1
  let r = Math.max(...piles)
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    const hours = piles.reduce((acc, curr) => acc + Math.ceil(curr / mid), 0)
    if (hours <= h) {
      r = mid - 1
    }
    else {
      l = mid + 1
    }
  }
  return l
};

export { minEatingSpeed }
