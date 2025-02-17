function findRightInterval(intervals: number[][]): number[] {
  const sorted = intervals
    .map((interval, index) => ({ interval: [...interval], index }))
    .sort((a, b) => a.interval[0] - b.interval[0])
  return intervals.map((interval) => {
    let l = 0
    let r = sorted.length - 1
    while (l <= r) {
      const mid = l + ((r - l) >> 1)
      if (sorted[mid].interval[0] >= interval[1]) {
        r = mid - 1
      }
      else {
        l = mid + 1
      }
    }
    return l !== sorted.length ? sorted[l].index : -1
  })
};

export { findRightInterval }
