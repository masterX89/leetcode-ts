import { describe, expect, it } from 'vitest'
import { twoSum1 } from '../solutions/0001_twoSum'

describe('twoSum', () => {
  it('should return the index', () => {
    expect(twoSum1([2, 7, 11, 15], 9)).toEqual([0, 1])
    expect(twoSum1([3, 2, 4], 6)).toEqual([1, 2])
    expect(twoSum1([3, 3], 6)).toEqual([0, 1])
  })
})
