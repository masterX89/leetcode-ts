import { describe, expect, it } from 'vitest'
import { solution } from '../solutions/0278_firstBadVersion'

const testCases = [
  { n: 5, bad: 4 },
  { n: 1, bad: 1 },
]
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
function setBadVersion(bad: number) {
  return function isBadVersion(version: number) {
    return version >= bad
  }
}

describe('find first bad version', () => {
  testCases.forEach(({ n, bad }) => {
    const isBadVersion = setBadVersion(bad)
    it(`should return ${bad}`, () => {
      expect(solution(isBadVersion)(n)).toBe(bad)
    })
  })
})
