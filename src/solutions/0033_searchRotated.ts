function search(nums: number[], target: number): number {
  const binarySearch = (nums: number[], start: number, end: number, target: number): number => {
    let l = start
    let r = end
    // [...,r, l, ...]
    while (l <= r) {
      const mid = l + ((r - l) >> 1)
      // nums[index greater than r] >= target
      if (nums[mid] >= target) {
        r = mid - 1
      }
      else {
        l = mid + 1
      }
    }
    return l !== end + 1 && nums[l] === target ? l : -1
  }
  const findRotateIndex = (nums: number[]): number => {
    let l = 0
    let r = nums.length - 1
    // [..., r, l, ...]
    while (l <= r) {
      const mid = l + ((r - l) >> 1)
      if (nums[mid] < nums[0]) {
        // nums[index greater than r] < nums[0]
        r = mid - 1
      }
      else {
        l = mid + 1
      }
    }
    return l !== nums.length ? l : -1
  }

  const isRotated = nums[nums.length - 1] < nums[0]
  if (!isRotated) {
    return binarySearch(nums, 0, nums.length - 1, target)
  }
  else {
    const rotateIndex = findRotateIndex(nums)
    if (target > nums[nums.length - 1]) {
      // [0, rotateIndex - 1]
      return binarySearch(nums, 0, rotateIndex - 1, target)
    }
    else {
      // [rotateIndex, nums.length - 1]
      return binarySearch(nums, rotateIndex, nums.length - 1, target)
    }
  }
};

export { search }
