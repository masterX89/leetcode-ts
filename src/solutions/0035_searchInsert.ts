function searchInsert(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] >= target) {
      r = mid - 1
    }
    else {
      l = mid + 1
    }
  }
  return l
};

export { searchInsert }
