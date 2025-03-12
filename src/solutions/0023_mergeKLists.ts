import { ListNode } from './0707_MyLinkedList'

const mergeKListsAlgorithms = {
  kPriorityQueueLike: function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const resHead = new ListNode(-1)
    let curr: ListNode | null = resHead
    const pivots: Array<ListNode> = lists.filter(list => list !== null)
    while (pivots.length > 0) {
      let [min, minIndex] = [Infinity, -1]
      pivots.forEach((pivot, index) => {
        if (pivot && pivot.val < min) {
          min = pivot.val
          minIndex = index
        }
      })
      if (curr) {
        curr.next = pivots[minIndex]
        curr = curr.next
      }
      if (pivots[minIndex].next) {
        pivots[minIndex] = pivots[minIndex].next as ListNode
      }
      else {
        pivots.splice(minIndex, 1)
      }
    }
    return resHead.next
  },
  mergeFn: function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const merge = (leftList: ListNode | null, rightList: ListNode | null): ListNode | null => {
      const dummyHead = new ListNode(-1)
      let p = leftList
      let q = rightList
      let curr = dummyHead
      while (p && q) {
        if (p.val < q.val) {
          curr.next = p
          p = p.next
        }
        else {
          curr.next = q
          q = q.next
        }
        curr = curr.next
      }
      curr.next = p || q
      return dummyHead.next
    }
    const mergeKListsFn = (lists: Array<ListNode | null>): ListNode | null => {
      if (lists.length === 0) {
        return null
      }
      if (lists.length === 1) {
        return lists[0]
      }
      const mid = Math.floor(lists.length / 2)
      const leftList = mergeKListsFn(lists.slice(0, mid))
      const rightList = mergeKListsFn(lists.slice(mid))
      return merge(leftList, rightList)
    }
    return mergeKListsFn(lists)
  },
}

export { mergeKListsAlgorithms }
