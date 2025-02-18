import { describe, expect, it } from 'vitest'
import { findMedianSortedArrays1, findMedianSortedArrays2 } from '../solutions/0004_findMedianSortedArrays'

const testCases = [
  { nums1: [1, 3], nums2: [2], target: 5, expected: 2 },
  { nums1: [1, 2], nums2: [3, 4], expected: 2.5 },
  { nums1: [2, 4, 6, 15], nums2: [1, 7, 8, 10, 17], expected: 7 },
  { nums1: [2, 4, 6, 15], nums2: [1, 7, 8, 10, 17, 19], expected: 7.5 },
  { nums1: [2, 2, 4, 4], nums2: [2, 2, 2, 4, 4], expected: 2 },
  { nums1: [3], nums2: [-2, -1], expected: -1 },
]

const solutions = [
  { name: 'mergeArrays', fn: findMedianSortedArrays1 },
  { name: 'binarySearch', fn: findMedianSortedArrays2 },
]

describe('minimum moves to equal array elements II', () => {
  solutions.forEach(({ name, fn }) => {
    describe(`${name}`, () => {
      testCases.forEach(({ nums1, nums2, expected }) => {
        it(`${nums1} and ${nums2} should return ${expected}`, () => {
          expect(fn(nums1, nums2)).toBe(expected)
        })
      })
    })
  })
})
