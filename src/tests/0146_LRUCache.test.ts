import { describe, expect, it } from 'vitest'
import { LRUCache1, LRUCache2 } from '../solutions/0146_LRUCache'

const solutions = [
  { name: 'without doubly-linked list', LRUClass: LRUCache1 },
  { name: 'with doubly-linked list', LRUClass: LRUCache2 },
]

describe('lRUCache', () => {
  solutions.forEach(({ name, LRUClass }) => {
    describe(`${name}`, () => {
      it('should test my LRUCache', () => {
        const lRUCache = new LRUClass(2)
        lRUCache.put(1, 1) // cache is {1=1}
        lRUCache.put(2, 2) // cache is {1=1, 2=2}
        expect(lRUCache.get(1)).toBe(1)
        lRUCache.put(3, 3) // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
        expect(lRUCache.get(2)).toBe(-1)
        lRUCache.put(4, 4) // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
        expect(lRUCache.get(1)).toBe(-1)
        expect(lRUCache.get(3)).toBe(3)
        expect(lRUCache.get(4)).toBe(4)
      })
      it('hashMap.keys().next().value === 0 should delete', () => {
        const lRUCache = new LRUClass(2)
        lRUCache.put(0, 0) // cache is {0=0}
        lRUCache.put(1, 1) // cache is {0=0,1=1}
        expect(lRUCache.get(0)).toBe(0)
        expect(lRUCache.get(1)).toBe(1)
        lRUCache.put(2, 2) // cache is {1=1,2,2}
        expect(lRUCache.get(0)).toBe(-1)
        expect(lRUCache.get(2)).toBe(2)
      })
    })
  })
})
