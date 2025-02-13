function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1]
  }
  let l = 0
  let r = nums.length - 1
  // <target, [] , >target
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] < target) {
      l = mid + 1
    }
    else {
      r = mid - 1
    }
  }
  const left = r
  l = 0
  r = nums.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] > target) {
      r = mid - 1
    }
    else {
      l = mid + 1
    }
  }
  const right = l
  return right - left >= 2 ? [left + 1, right - 1] : [-1, -1]
};

export { searchRange }
