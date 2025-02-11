function search1(nums: number[], target: number): number {
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
    return l // [0, nums.length]
  }

  const rotateIndex = findRotateIndex(nums)
  // didn't rotate: rotateIndex === nums.length => [0, nums.length - 1]
  // rotate: target >= nums[0] => [0, rotateIndex - 1]
  //         otherwise         => [rotateIndex, nums.length - 1]
  if (rotateIndex === nums.length || target >= nums[0]) {
    return binarySearch(nums, 0, rotateIndex - 1, target)
  }
  else {
    return binarySearch(nums, rotateIndex, nums.length - 1, target)
  }
};

function search2(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  // [..., r, l, ...]
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] >= nums[0]) {
      // [0, rotateIndex - 1]
      if (nums[mid] >= target && target >= nums[0]) {
        r = mid - 1
      }
      else {
        l = mid + 1
      }
    }
    else {
      // [rotateIndex, nums.length - 1]
      if (nums[mid] < target && target < nums[0]) {
        // nums[greater than or equal to l] >= target
        l = mid + 1
      }
      else {
        r = mid - 1
      }
    }
  }
  return l !== nums.length && nums[l] === target ? l : -1
}

export { search1, search2 }
