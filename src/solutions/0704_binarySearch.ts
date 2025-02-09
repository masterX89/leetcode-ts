function search1(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  // end: [...,r, l, ...]
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] >= target) {
      // nums[index greater than r] >= target
      r = mid - 1
    }
    else {
      l = mid + 1
    }
  }
  return l !== nums.length && nums[l] === target ? l : -1
};

function search2(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  // end: [...,r, l, ...]
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] <= target) {
      // nums[index less than l] <= target
      l = mid + 1
    }
    else {
      r = mid - 1
    }
  }
  return r !== -1 && nums[r] === target ? r : -1
}

function search3(nums: number[], target: number): number {
  let l = 0
  let r = nums.length
  // end: [...,r/l - 1, r/l, ...]
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] >= target) {
      // nums[index greater than or equal r] >= target
      r = mid
    }
    else {
      l = mid + 1
    }
  }
  return r !== nums.length && nums[r] === target ? r : -1
}

function search4(nums: number[], target: number): number {
  let l = 0
  let r = nums.length
  // end: [...,l - 1, r/l, ...]
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] <= target) {
      // nums[index less than l] <= target
      l = mid + 1
    }
    else {
      r = mid
    }
  }
  return l !== 0 && nums[l - 1] === target ? l - 1 : -1
}

function search5(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  // end: [..., r, l, ...]
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] > target) {
      // nums[index greater than r] > target
      r = mid - 1
    }
    else {
      l = mid + 1
    }
  }
  return r !== -1 && nums[r] === target ? r : -1
}

function search6(nums: number[], target: number): number {
  let l = 0
  let r = nums.length - 1
  // [..., r, l, ...]
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] < target) {
      // nums[index less than l] < target
      l = mid + 1
    }
    else {
      r = mid - 1
    }
  }
  return l !== nums.length && nums[l] === target ? l : -1
}

function search7(nums: number[], target: number): number {
  let l = 0
  let r = nums.length
  // [..., r/l, ...]
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] > target) {
      // nums[index greater than or equal r] > target
      r = mid
    }
    else {
      l = mid + 1
    }
  }
  return l !== 0 && nums[l - 1] === target ? l - 1 : -1
}

function search8(nums: number[], target: number): number {
  let l = 0
  let r = nums.length
  // [..., r/l- 1, r/l, ...]
  while (l < r) {
    const mid = l + ((r - l) >> 1)
    if (nums[mid] < target) {
      // nums[index less than r] < target
      l = mid + 1
    }
    else {
      r = mid
    }
  }
  return r !== nums.length && nums[r] === target ? r : -1
}

export { search1, search2, search3, search4, search5, search6, search7, search8 }
