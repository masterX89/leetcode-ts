function minMoves2(nums: number[]): number {
  nums.sort((a, b) => a - b)
  const pivot = nums[Math.floor(nums.length / 2)]
  return nums.reduce((acc, curr) => acc + Math.abs(curr - pivot), 0)
};

export { minMoves2 }
