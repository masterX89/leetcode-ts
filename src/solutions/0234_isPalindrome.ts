import type { ListNode } from './0707_MyLinkedList'

const isPalindromeAlgorithms = {
  isPalindromeByArray: function isPalindrome(head: ListNode | null): boolean {
    let curr = head
    const list: ListNode[] = []
    while (curr) {
      list.push(curr)
      curr = curr.next
    }
    let i = 0
    let j = list.length - 1
    while (i <= j) {
      if (list[i].val !== list[j].val) {
        return false
      }
      i++
      j--
    }
    return true
  },
  isPalindromeByRecursion: function isPalindrome(head: ListNode | null): boolean {
    let left = head
    let res = true
    const postTraversal = (head: ListNode | null) => {
      if (head === null) {
        return
      }
      postTraversal(head.next)
      if (left) {
        if (left.val !== head.val) {
          res = false
        }
        left = left.next
      }
    }
    postTraversal(head)
    return res
  },
}

export { isPalindromeAlgorithms }
