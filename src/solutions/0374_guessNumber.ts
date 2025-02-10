import { guess } from '../tests/0374_guessNumber.test'

function guessNumber(n: number): number {
  let l = 1
  let r = n
  // [..., r, l, ...]
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if (guess(mid) === 0) return mid
    else if (guess(mid) === -1){
      r = mid -1
    }else if (guess(mid) === 1) {
      l = mid + 1
    }
  }
  return -1
};

export { guessNumber }
