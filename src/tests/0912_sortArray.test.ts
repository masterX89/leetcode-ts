import { describe, expect, it } from 'vitest'
import { SortAlgorithms } from '../solutions/0912_sortArray'

const testCases = [
  { nums: [5, 2, 3, 1], expected: [1, 2, 3, 5] },
  { nums: [5, 1, 1, 2, 0, 0], expected: [0, 0, 1, 1, 2, 5] },
]
const solutions = [
  // { name: 'mergeSort', fn: SortAlgorithms.mergeSort },
  { name: 'quickSort', fn: SortAlgorithms.quickSort },
]

describe('merge sort', () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, expected }) => {
        it(`mergeSort ${nums} should return ${expected}`, () => {
          expect(fn(nums)).toEqual(expected)
        })
      })
    })
  })
})
