const SortAlgorithms = {
  mergeSort: function sortArray(nums: number[]): number[] {
    const merge = (leftArr: number[], rightArr: number[]): number[] => {
      const resArr = []
      let i = 0
      let j = 0
      while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] < rightArr[j]) {
          resArr.push(leftArr[i++])
        }
        else {
          resArr.push(rightArr[j++])
        }
      }
      return resArr.concat(leftArr.slice(i), rightArr.slice(j))
    }
    const sort = (nums: number[]): number[] => {
      if (nums.length <= 1) {
        return nums
      }
      const mid = Math.floor(nums.length / 2)
      const leftArr = sort(nums.slice(0, mid))
      const rightArr = sort(nums.slice(mid))
      return merge(leftArr, rightArr)
    }
    return sort(nums)
  },
  quickSort: function sortArray(nums: number[]): number[] {
    // [1,2,3,4,5] => not balance
    const shuffle = (nums: number[]) => {
      for (let i = nums.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
    const partition = (nums: number[], left: number, right: number): number => {
      const pivot = nums[left]
      // i: nums[i] >= pivot, j: nums[j] <= pivot
      // ..., j(<=pivot), i(>=pivot),...
      let i = left + 1
      let j = right
      while (i <= j) {
        // nums[i] < pivot faster 100x than <= ex. [6,6,6,6] j will be right position
        // [left,right), pivot, [] => not balance
        while (i <= j && nums[i] < pivot) {
          i++
        }
        while (i <= j && nums[j] > pivot) {
          j--
        }
        if (i <= j) {
          ;[nums[i], nums[j]] = [nums[j], nums[i]]
          i++
          j--
        }
      }
      ;[nums[left], nums[j]] = [nums[j], nums[left]]
      return j
    }
    const sort = (nums: number[], left: number, right: number) => {
      if (left >= right) {
        return
      }
      const pivot = partition(nums, left, right)
      sort(nums, left, pivot - 1)
      sort(nums, pivot + 1, right)
    }
    shuffle(nums)
    sort(nums, 0, nums.length - 1)
    return nums
  },
}

export { SortAlgorithms }
