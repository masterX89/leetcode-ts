import { describe, expect, it } from 'vitest'
import { findClosestElements } from '../solutions/0658_findClosestElements'

const testCases = [
  { arr: [1, 2, 3, 4, 5], k: 4, x: 3, expected: [1, 2, 3, 4] },
  { arr: [1, 1, 2, 3, 4, 5], k: 4, x: -1, expected: [1, 1, 2, 3] },
  { arr: [5], k: 1, x: 3, expected: [5] },
]

describe('findK closed elements', () => {
  testCases.forEach(({ arr, k, x, expected }) => {
    it(`${k} elements closed to ${x} in ${arr} is ${expected}`, () => {
      expect(findClosestElements(arr, k, x)).toEqual(expected)
    })
  })
})
