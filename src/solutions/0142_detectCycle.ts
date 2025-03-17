import type { ListNode } from './0707_MyLinkedList'

const detectCycleAlgorithms = {
  detectCycleBySet: function detectCycle(head: ListNode | null): ListNode | null {
    const cacheSet = new Set<ListNode>()
    let curr: ListNode | null = head
    while (curr && !cacheSet.has(curr)) {
      cacheSet.add(curr)
      curr = curr.next
    }
    return curr
  },
  detectCycleByTwoPoints: function detectCycle(head: ListNode | null): ListNode | null {
    let slow: ListNode | null = head
    let fast: ListNode | null = head
    while (fast) {
      slow = slow?.next ?? null
      fast = fast?.next?.next ?? null
      if (slow === fast) {
        let p = head
        while (p !== slow) {
          p = p?.next ?? null
          slow = slow?.next ?? null
        }
        return p
      }
    }
    return null
  },
}

export { detectCycleAlgorithms }
