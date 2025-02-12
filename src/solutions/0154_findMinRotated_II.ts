/**
 * This function was an experimental approach to find the pivot index.
 * It does not correctly handle all cases (e.g. [1, 1, 20, 1] should expect 3 but return 0)
 * and is kept here for analysis and documentation purposes.
 *
 * @deprecated Use getPivotIndex instead.
 */
function getMinIndex(nums: number[]): number {
  // if all of the numbers are the same
  // or mid is actually mid, the worst situation is O(n)
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
  // but may not be the pivot index
  // e.g. [1, 1, 10, 1], l is 0, but the pivot is 3
  return l
}

function getPivotIndex(nums: number[]): number {
  let l = 0
  let r = nums.length - 1
  while (r > 0 && nums[r] === nums[0]) {
    r--
  }
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
  // if not rotated, l will be nums.length and return 0
  return l !== nums.length ? l : 0
}

function findMin(nums: number[]): number {
  const l = getPivotIndex(nums)
  return nums[l]
};

export { findMin, getMinIndex, getPivotIndex }
