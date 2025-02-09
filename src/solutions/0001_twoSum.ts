function twoSum1(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target)
        return [i, j]
    }
  }
  return [-1, -1]
}

function twoSum2(nums: number[], target: number): number[] {
  const combined = nums.map((val, index) => ({ val, index }))
  combined.sort((a, b) => a.val - b.val)
  let l = 0
  let r = combined.length - 1
  while (l < r) {
    if (combined[l].val + combined[r].val === target) {
      return [combined[l].index, combined[r].index]
    }
    while (l < r && combined[l].val + combined[r].val > target) r--
    while (l < r && combined[l].val + combined[r].val < target) l++
  }
  return [-1, -1]
}

function twoSum3(nums: number[], target: number): number[] {
  const map: Record<number, number> = {}
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    if (Object.hasOwn(map, target - num)) {
      return [i, map[target - num]]
    }
    map[num] = i
  }
  return [-1, -1]
}

export { twoSum1, twoSum2, twoSum3 }
