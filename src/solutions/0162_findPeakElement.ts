function findPeakElement(nums: number[]): number {
  if (nums.length === 1) {
    return 0
  }
  let l = 1
  let r = nums.length - 2
  // length >= 3, [..., r, l, ...]
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid
    }
    if (nums[mid] <= nums[mid - 1]) {
      r = mid - 1
    }
    else if (nums[mid] <= nums[mid + 1]) {
      l = mid + 1
    }
  }
  return nums[l] > nums[r] ? l : r
};

export { findPeakElement }
