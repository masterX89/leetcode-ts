function searchMatrix(matrix: number[][], target: number): boolean {
  let l = 0
  let r = matrix.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (matrix[mid][0] <= target) {
      l = mid + 1
    }
    else {
      r = mid - 1
    }
  }
  if (r < 0) {
    return false
  }
  let k = r
  while (k >= 0) {
    l = 0
    r = matrix[k].length - 1
    while (l <= r) {
      const mid = l + ((r - l) >> 1)
      if (matrix[k][mid] <= target) {
        l = mid + 1
      }
      else {
        r = mid - 1
      }
    }
    if (r >= 0 && matrix[k][r] === target) {
      return true
    }
    k--
  }
  return false
}

export { searchMatrix }
