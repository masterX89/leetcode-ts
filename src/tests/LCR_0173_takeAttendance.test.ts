import { describe, expect, it } from 'vitest'
import { takeAttendance } from '../solutions/LCR_0173_takeAttendance'

const testCases = [
  { records: [0, 1, 2, 3, 5], expected: 4 },
  { records: [0, 1, 2, 3, 4, 5, 6, 8], expected: 7 },
]

const solutions = [
  { name: 'takeAttendance1', fn: takeAttendance },
]

describe('take attendance find the student', () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ records, expected }) => {
        it(`${name} should return ${expected}`, () => {
          expect(fn(records)).toBe(expected)
        })
      })
    })
  })
})
