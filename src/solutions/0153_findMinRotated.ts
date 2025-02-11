function findMin(nums: number[]): number {
  let l = 0
  let r = nums.length - 1
  // [..., r, l, ...]
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] < nums[0]) {
      r = mid - 1
    }
    else {
      l = mid + 1
    }
  }
  return l !== nums.length ? nums[l] : nums[0]
};

export { findMin }
