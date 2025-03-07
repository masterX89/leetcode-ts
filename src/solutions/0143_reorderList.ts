import type { ListNode } from './0707_MyLinkedList'

function reorderList(head: ListNode | null): void {
  const list = []
  let curr = head
  while (curr) {
    list.push(curr)
    curr = curr.next
  }
  let i = 0
  let j = list.length - 1
  while (i < j) {
    list[i].next = list[j]
    i++
    list[j].next = list[i]
    j--
  }
  list[i].next = null
};

export { reorderList }
