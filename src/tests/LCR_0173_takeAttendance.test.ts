import { describe, expect, it } from 'vitest'
import { takeAttendance } from '../solutions/LCR_0173_takeAttendance'

describe('take attendance find the student', () => {
  it('should return 4', () => {
    expect(takeAttendance([0, 1, 2, 3, 5])).toBe(4)
  })
  it('should return 7', () => {
    expect(takeAttendance([0, 1, 2, 3, 4, 5, 6, 8])).toBe(7)
  })
})
