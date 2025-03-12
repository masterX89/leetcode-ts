import { describe, expect, it } from 'vitest'
import { SortAlgorithms } from '../solutions/0912_sortArray'

const testCases = [
  { nums: [5, 2, 3, 1], expected: [1, 2, 3, 5] },
  { nums: [5, 1, 1, 2, 0, 0], expected: [0, 0, 1, 1, 2, 5] },
]

describe('merge sort', () => {
  const { mergeSort } = SortAlgorithms
  testCases.forEach(({ nums, expected }) => {
    it(`mergeSort ${nums} should return ${expected}`, () => {
      expect(mergeSort(nums)).toEqual(expected)
    })
  })
})
