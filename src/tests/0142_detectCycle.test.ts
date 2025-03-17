import type { ListNode } from '../solutions/0707_MyLinkedList'
import { describe, expect, it } from 'vitest'
import { detectCycleAlgorithms } from '../solutions/0142_detectCycle'
import { createSingleLinkedListWithTail } from './shared/linkedListUtils'

interface firstNodeInCycleInterface {
  headNode: ListNode | null
  expected: ListNode | null
}

const testCases = [
  { head: [3, 2, 0, -4], pos: 1 },
  { head: [1, 2], pos: 0 },
  { head: [1], pos: -1 },
]

const solutions = [
  { name: 'detectCycleBySet', fn: detectCycleAlgorithms.detectCycleBySet },
  { name: 'detectCycleByTwoPoints', fn: detectCycleAlgorithms.detectCycleByTwoPoints },
]

function getFirstNodeInCycle(head: number[], pos: number): firstNodeInCycleInterface {
  const { head: headNode, tail } = createSingleLinkedListWithTail(head)
  let curr: ListNode | null = headNode
  for (let i = 1; i <= pos; i++) {
    curr = curr?.next ?? null
  }
  if (tail) {
    tail.next = curr
  }
  return {
    headNode,
    expected: curr,
  }
}

describe('detect Cycle first node in a linked list', () => {
  solutions.forEach(({ name, fn }) => {
    describe(name, () => {
      testCases.forEach(({ head, pos }) => {
        const { headNode, expected } = getFirstNodeInCycle(head, pos)
        it(`${head} ${pos !== 0 ? `has cycle at ${pos} ` : 'have no cycle'}`, () => {
          expect(fn(headNode)).toEqual(expected)
        })
      })
    })
  })
})
