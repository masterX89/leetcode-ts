function search1(nums: number[], target: number): boolean {
  return nums.includes(target)
};

function search2(nums: number[], target: number): boolean {
  const getPivotIndex = (nums: number[]) => {
    let l = 0
    let r = nums.length - 1
    while (r > 0 && nums[r] === nums[0]) {
      r--
    }
    while (l <= r) {
      const mid = l + ((r - l) >> 1)
      if (nums[mid] < nums[0]) {
        r = mid - 1
      }
      else {
        l = mid + 1
      }
    }
    return l
  }
  const binarySearch = (nums: number[], start: number, end: number, target: number): boolean => {
    let l = start
    let r = end
    // [..., r, l, ...]
    while (l <= r) {
      const mid = l + ((r - l) >> 1)
      if (nums[mid] >= target) {
        r = mid - 1
      }
      else {
        l = mid + 1
      }
    }
    return l !== nums.length && nums[l] === target
  }

  const pivotIndex = getPivotIndex(nums)
  if (pivotIndex === nums.length || target >= nums[0]) {
    return binarySearch(nums, 0, pivotIndex - 1, target)
  }
  else {
    return binarySearch(nums, pivotIndex, nums.length - 1, target)
  }
};

export { search1, search2 }
