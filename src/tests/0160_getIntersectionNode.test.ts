import { describe, expect, it } from 'vitest'
import { getIntersectionNode } from '../solutions/0160_getIntersectionNode'
import { createSingleLinkedList, createSingleLinkedListWithTail } from './shared/linkedListUtils'

const testCases = [
  { intersectVal: 8, listA: [4, 1, 8, 4, 5], listB: [5, 6, 1, 8, 4, 5], skipA: 2, skipB: 3 },
  { intersectVal: 2, listA: [1, 9, 1, 2, 4], listB: [3, 2, 4], skipA: 3, skipB: 1 },
  { intersectVal: 0, listA: [2, 6, 4], listB: [1, 5], skipA: 3, skipB: 2 },
]

describe('get intersection node', () => {
  testCases.forEach(({ intersectVal, listA, listB, skipA, skipB }) => {
    it(`${listA} and ${listB} ${intersectVal !== 0 ? `has ${intersectVal}` : 'have no intersection'}`, () => {
      const { head: headA, tail: tailA } = createSingleLinkedListWithTail(listA.slice(0, skipA))
      const { head: headB, tail: tailB } = createSingleLinkedListWithTail(listB.slice(0, skipB))
      const tailList = createSingleLinkedList(listA.slice(skipA))
      if (tailA) {
        tailA.next = tailList
      }
      if (tailB) {
        tailB.next = tailList
      }
      expect(getIntersectionNode(headA, headB)).toEqual(tailList)
    })
  })
})
