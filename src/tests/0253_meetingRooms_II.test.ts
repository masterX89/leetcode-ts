import { describe, expect, it } from 'vitest'
import { minMeetingRooms1, minMeetingRooms2, minMeetingRooms3, minMeetingRooms4 } from '../solutions/0253_meetingRooms_II'

const testCases = [
  { intervals: [[0, 30], [5, 10], [15, 20]], expected: 2 },
  { intervals: [[7, 10], [2, 4]], expected: 1 },
  { intervals: [[13, 15], [1, 13], [6, 9]], expected: 2 },
  { intervals: [[13, 15], [1, 13]], expected: 1 },
]

const solutions = [
  { name: 'diffArray', fn: minMeetingRooms1 },
  { name: 'focusStartEndNode', fn: minMeetingRooms2 },
  { name: 'focusStartEndInterval', fn: minMeetingRooms3 },
  { name: 'PriorityQueue', fn: minMeetingRooms4 },
]

describe('minMeetingRooms_II', () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ intervals, expected }) => {
        it(`${intervals} should return ${expected}`, () => {
          expect(fn(intervals)).toBe(expected)
        })
      })
    })
  })
})
