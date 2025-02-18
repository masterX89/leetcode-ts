function findMedianSortedArrays1(nums1: number[], nums2: number[]): number {
  const sorted = [...nums1, ...nums2].sort((a, b) => a - b)
  return (nums1.length + nums2.length) % 2 === 1
    ? sorted[Math.floor((nums1.length + nums2.length) / 2)]
    : (sorted[Math.floor((nums1.length + nums2.length) / 2) - 1] + sorted[Math.floor((nums1.length + nums2.length) / 2)]) / 2
};

function findMedianSortedArrays2(nums1: number[], nums2: number[]): number {
  if (nums1.length > nums2.length) {
    ;[nums1, nums2] = [nums2, nums1]
  }
  // odd: (m + n + 1) / 2, mid, (m + n) / 2
  // [2, 4, 6, 15] , [1, 7, 8, 10, 17]
  //           mid         mid
  // even: (m + n) / 2, mid, (m + n) / 2
  // [2, 4, 6, 15] , [1, 7, 8, 10, 17, 19]
  //           mid         mid
  const countLeft = (nums1.length + nums2.length + 1) >> 1 // [1, (m + n) / 2]
  let l = 0 // [0, m]
  let r = nums1.length - 1
  while (l <= r) {
    const mid1 = l + ((r - l) >> 1)
    const mid2 = countLeft - mid1
    if (nums1[mid1] <= nums2[mid2 - 1]) {
      l = mid1 + 1
    }
    else {
      r = mid1 - 1
    }
  }
  const nums1Bound = l
  // In the loop, mid2 can never be 0.
  // If mid2 is 0, it must occur when nums1.length === nums.length and l === nums1.length.
  // The loop ends when l reaches nums1.length.
  // But nums2Bound can be 0.
  const nums2Bound = countLeft - l
  const nums1LeftMax = nums1Bound === 0 ? -Infinity : nums1[nums1Bound - 1]
  const nums2LeftMax = nums2Bound === 0 ? -Infinity : nums2[nums2Bound - 1]
  const nums1RightMin = nums1Bound === nums1.length ? Infinity : nums1[nums1Bound]
  const nums2RightMin = nums2Bound === nums2.length ? Infinity : nums2[nums2Bound]
  if ((nums1.length + nums2.length) % 2 === 1) {
    return Math.max(nums1LeftMax, nums2LeftMax)
  }
  else {
    return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2
  }
};

export { findMedianSortedArrays1, findMedianSortedArrays2 }
