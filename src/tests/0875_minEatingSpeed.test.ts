import { describe, expect, it } from 'vitest'
import { minEatingSpeed } from '../solutions/0875_minEatingSpeed'

const testCases = [
  { piles: [3, 6, 7, 11], h: 8, expected: 4 },
  { piles: [30, 11, 23, 4, 20], h: 5, expected: 30 },
  { piles: [30, 11, 23, 4, 20], h: 6, expected: 23 },
]
describe('min eating speed', () => {
  testCases.forEach(({ piles, h, expected }) => {
    it(`eat all ${piles} the min speed in ${h} hours should be ${expected}`, () => {
      expect(minEatingSpeed(piles, h)).toBe(expected)
    })
  })
})
