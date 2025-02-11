function findMin(nums: number[]): number {
  // if all of the numbers are the same or mid is actually mid, the worst situation is O(n)
  let l = 0
  let r = nums.length - 1
  // [..., r, l, ...]
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    // comparing with nums[0] couldn't tell which part mid is in
    if (nums[mid] < nums[l]) {
      // mid - 1 is wrong 'cause mid could be the min
      r = mid
    }
    else if (nums[mid] > nums[r]) {
      l = mid + 1
    }
    else {
      r--
    }
  }
  // l must be less than nums.length
  return nums[l]
};

export { findMin }
