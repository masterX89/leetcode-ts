const SortAlgorithms = {
  mergeSort: function sortArray(nums: number[]): number[] {
    const merge = (leftArr: number[], rightArr: number[]): number[] => {
      const resArr = []
      let i = 0
      let j = 0
      while (i < leftArr.length || j < rightArr.length) {
        const a = leftArr[i] ?? Infinity
        const b = rightArr[j] ?? Infinity
        if (a < b) {
          resArr.push(a)
          i++
        }
        else {
          resArr.push(b)
          j++
        }
      }
      return resArr
    }
    const mergeSort = (nums: number[]): number[] => {
      if (nums.length <= 1) {
        return nums
      }
      const mid = Math.floor(nums.length / 2)
      const leftArr = mergeSort(nums.slice(0, mid))
      const rightArr = mergeSort(nums.slice(mid))
      return merge(leftArr, rightArr)
    }
    return mergeSort(nums)
  },
}

export { SortAlgorithms }
