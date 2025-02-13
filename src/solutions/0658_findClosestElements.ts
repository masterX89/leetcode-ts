function findClosestElements(arr: number[], k: number, x: number): number[] {
  let l = 0
  let r = arr.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (arr[mid] <= x) {
      l = mid + 1
    }
    else {
      r = mid - 1
    }
  }
  // find (l, r) without push and unshift each time
  // because might out of bound
  [l, r] = [r, l] // arr[l] <= x, arr[r] > x, but l might be -1
  while (k--) {
    if (l < 0) {
      r++ // r might be length
    }
    else if (r >= arr.length) {
      l--
    }
    else if (x - arr[l] <= arr[r] - x) {
      l--
    }
    else {
      r++
    }
  }
  return arr.slice(l + 1, r)
};

export { findClosestElements }
