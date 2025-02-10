const baseBinarySearchCases = [
  { nums: [-1, 0, 3, 5, 9, 12], target: 5, expected: 3 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 2, expected: -1 },
  { nums: [-1, 0, 3, 5, 9, 12], target: -2, expected: -1 },
  { nums: [-1, 0, 3, 5, 9, 12], target: -1, expected: 0 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 0, expected: 1 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 9, expected: 4 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 12, expected: 5 },
  { nums: [-1, 0, 3, 5, 9, 12], target: 13, expected: -1 },
]

export { baseBinarySearchCases }
