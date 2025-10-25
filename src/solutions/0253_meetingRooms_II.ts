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

function minMeetingRooms4(intervals: number[][]): number {
  class PriorityQueue<T = any> {
    private a: [number, T][] = []
    constructor() {
      this.a = []
    }

    push(num: number, inc: T) {
      const a = this.a
      let i = a.length
      for (let j; i; i = j) {
        j = i - 1 >> 1
        if (a[j][0] <= num) {
          break
        }
        a[i] = a[j]
      }
      a[i] = [num, inc]
    }

    pop() {
      const a = this.a
      const r = a[0]
      const x = a.pop()!
      const k = a.length >> 1
      let i = 0
      for (let j; i < k; i = j) {
        j = (i << 1) + 1
        if (a[j + 1] && a[j + 1][0] < a[j][0]) {
          j++
        }
        if (x[0] <= a[j][0]) {
          break
        }
        a[i] = a[j]
      }
      if (a.length) {
        a[i] = x
      }
      return r
    }

    pushPop(num: number, inc: T) {
      const a = this.a
      const r = a[0]
      const k = a.length >> 1
      if (!a.length || r[0] >= num) {
        return [num, inc]
      }
      let i = 0
      for (let j; i < k; i = j) {
        j = (i << 1) + 1
        if (a[j + 1] && a[j + 1][0] < a[j][0]) {
          j++
        }
        if (num <= a[j][0]) {
          break
        }
        a[i] = a[j]
      }
      a[i] = [num, inc]
      return r
    }

    popPush(num: number, inc: T) {
      const a = this.a
      const r = a[0]
      const k = a.length >> 1
      let i = 0
      for (let j; i < k; i = j) {
        j = (i << 1) + 1
        if (a[j + 1] && a[j + 1][0] < a[j][0]) {
          j++
        }
        if (num <= a[j][0]) {
          break
        }
        a[i] = a[j]
      }
      a[i] = [num, inc]
      return r
    }

    get size() {
      return this.a.length
    }

    get top() {
      return this.a[0]
    }
  }
  intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1])
  let res = 0
  const pq = new PriorityQueue<number>()
  for (const interval of intervals) {
    const [s, e] = interval
    while (pq.size && s >= pq.top[0]) {
      pq.pop()
    }
    pq.push(e, 0)
    res = Math.max(res, pq.size)
  }
  return res
}

export { minMeetingRooms1, minMeetingRooms2, minMeetingRooms3, minMeetingRooms4 }
