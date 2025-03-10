import { ListNode } from './0707_MyLinkedList'

// TODO: Divide and Conquer
function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
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
};

export { mergeKLists }
