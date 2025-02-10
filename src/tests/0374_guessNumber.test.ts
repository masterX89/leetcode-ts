import { describe, expect, it } from 'vitest'
import { guessNumber } from '../solutions/0374_guessNumber'

let pick: number = 0
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return -1 if num is higher than the picked number
 *          1 if num is lower than the picked number
 *          otherwise return 0
 * var guess = function(num) {}
 */
const guess = function (num: number): number {
  if (num > pick) {
    return -1
  }
  else if (num < pick) {
    return 1
  }
  return 0
}

describe('guess Number', () => {
  it('[1, 10] pick 6', () => {
    pick = 6
    expect(guessNumber(10)).toBe(pick)
  })
  it('[1, 1] pick 1', () => {
    pick = 1
    expect(guessNumber(1)).toBe(pick)
  })
  it('[1, 2] pick 1', () => {
    pick = 1
    expect(guessNumber(2)).toBe(pick)
  })
})

export { guess }
