import { describe, expect, it } from 'vitest'
import { search1, search2, search3, search4, search5, search6, search7, search8 } from '../solutions/0704_binarySearch'
import { baseBinarySearchCases } from './data/baseBinarySearchCases'

const testCases = [
  ...baseBinarySearchCases,
]

const solutions = [
  { name: 'search1', fn: search1 },
  { name: 'search2', fn: search2 },
  { name: 'search3', fn: search3 },
  { name: 'search4', fn: search4 },
  { name: 'search5', fn: search5 },
  { name: 'search6', fn: search6 },
  { name: 'search7', fn: search7 },
  { name: 'search8', fn: search8 },
]

describe('binary Search', () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ nums, target, expected }) => {
        it(`${name} should return ${expected}`, () => {
          expect(fn(nums, target)).toBe(expected)
        })
      })
    })
  })
})
