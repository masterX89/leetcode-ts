import { describe, expect, it } from 'vitest'
import { guessNumber } from '../solutions/0374_guessNumber'

const testCases = [
  { n: 10, pick: 6, expected: 6 },
  { n: 1, pick: 1, expected: 1 },
  { n: 2, pick: 1, expected: 1 },
]
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return -1 if num is higher than the picked number
 *          1 if num is lower than the picked number
 *          otherwise return 0
 * var guess = function(num) {}
 */

function createGuess(pick: number) {
  return (num: number): number => {
    if (num > pick) {
      return -1
    }
    else if (num < pick) {
      return 1
    }
    return 0
  }
}

let guessRef = (_num: number): number => {
  throw new Error('guess function is not implemented')
}

const guess = (num: number): number => guessRef(num)
describe('guess Number', () => {
  testCases.forEach(({ n, pick, expected }) => {
    it(`${n} pick ${pick} should return ${expected}`, () => {
      guessRef = createGuess(pick)
      expect(guessNumber(n)).toBe(pick)
    })
  })
})

export { guess }
