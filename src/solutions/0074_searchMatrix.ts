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
  const row = r
  if (r === -1) {
    return false
  }
  l = 0
  r = matrix[row].length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (matrix[row][mid] <= target) {
      l = mid + 1
    }
    else {
      r = mid - 1
    }
  }
  return r !== -1 && matrix[row][r] === target
};

export { searchMatrix }
