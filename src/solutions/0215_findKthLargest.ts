function findKthLargest(nums: number[], k: number): number {
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
  const pq = new PriorityQueue<number>()
  for (const num of nums) {
    if (pq.size < k) {
      pq.push(num, 0)
    }
    else if (num > pq.top[0]) {
      pq.popPush(num, 0)
    }
  }
  return pq.top[0]
};
export { findKthLargest }
