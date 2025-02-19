// This question is different from 0436_findRightInterval
// 0436_findRightInterval is about finding the next interval
// But this question is about finding the number of rooms needed.
// O(max(m,n))
function minMeetingRooms1(intervals: number[][]): number {
  const maxEnd = Math.max(...intervals.map(interval => interval[1]))
  const diff = Array.from({ length: maxEnd + 1 }, () => 0)
  for (const interval of intervals) {
    // [start, end - 1] add 1 because the end is free
    const [start, end] = interval
    diff[start]++
    diff[end]--
  }
  const getPrefixSum = (diff: number[]) => {
    let sum = 0
    return diff.map(val => sum += val)
  }
  const rooms = getPrefixSum(diff)
  return Math.max(...rooms)
};

function minMeetingRooms2(intervals: number[][]): number {
  let rooms = 0
  let res = -Infinity
  const starts = intervals.map(interval => ({ time: interval[0], val: 1 }))
  const ends = intervals.map(interval => ({ time: interval[1], val: -1 }))
  // Finish a meeting then start a meeting
  // If time is the same, sort by val
  const events = [...starts, ...ends].sort((a, b) => a.time - b.time || a.val - b.val)
  for (const event of events) {
    rooms += event.val
    res = Math.max(rooms, res)
  }
  return res
}

function minMeetingRooms3(intervals: number[][]): number {
  let res = -Infinity
  let rooms = 0
  const starts = intervals.map(interval => interval[0])
  const ends = intervals.map(interval => interval[1])
  starts.sort((a, b) => a - b)
  ends.sort((a, b) => a - b)
  let i = 0
  let j = 0
  while (i < intervals.length && j < intervals.length) {
    if (starts[i] >= ends[j]) {
      // always finish a meeting firstly if end === start
      j++
      rooms--
    }
    else {
      i++
      rooms++
    }
    res = Math.max(rooms, res)
  }
  return res
}

export { minMeetingRooms1, minMeetingRooms2, minMeetingRooms3 }
