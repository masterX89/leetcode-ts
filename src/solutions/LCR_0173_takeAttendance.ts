function takeAttendance1(records: number[]): number {
  // O(log(n))
  let l = 0
  let r = records.length - 1
  // [..., r, l, ...]
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (mid !== records[mid]) {
      // greater than r is the first index !== record
      r = mid - 1
    }
    else {
      l = mid + 1
    }
  }
  return l
};

function takeAttendance2(records: number[]): number {
  // O(n)
  for (let i = 0; i < records.length; i++) {
    if (records[i] !== i)
      return i
  }
  return records.length
}

export { takeAttendance1, takeAttendance2 }
