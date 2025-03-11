import { describe, expect, it } from 'vitest'
import { _Node, copyRandomList } from '../solutions/0138_copyRandomList'

const testCases: Array<Array<[number, number | null]>> = [
  [[7, null], [13, 0], [11, 4], [10, 2], [1, 0]],
  [[1, 1], [2, 1]],
  [[3, null], [3, 0], [3, null]],
]

function createRadomLinkedList(head: Array<[number, number | null]>, index: number = 0, hashMap: Map<number, _Node> = new Map()): _Node | null {
  if (index === head.length) {
    return null
  }
  const node = new _Node(head[index][0])
  hashMap.set(index, node)
  node.next = createRadomLinkedList(head, index + 1, hashMap)
  if (head[index][1] !== null && hashMap.has(head[index][1])) {
    node.random = hashMap.get(head[index][1]) ?? null
  }
  return hashMap.get(index) ?? null
}

describe('deep copy random linked List', () => {
  it('check create radom linked list1', () => {
    const head = testCases[0]
    const node4 = new _Node(1)
    const node3 = new _Node(10, node4)
    const node2 = new _Node(11, node3)
    const node1 = new _Node(13, node2)
    const node0 = new _Node(7, node1)
    node1.random = node0
    node2.random = node4
    node3.random = node2
    node4.random = node0
    expect(createRadomLinkedList(head)).toEqual(node0)
  })

  it('check create radom linked list2', () => {
    const head = testCases[1]
    const node1 = new _Node(2)
    const node0 = new _Node(1, node1)
    node0.random = node1
    node1.random = node1
    expect(createRadomLinkedList(head)).toEqual(node0)
  })

  it('check create radom linked list3', () => {
    const head = testCases[2]
    const node2 = new _Node(3)
    const node1 = new _Node(3, node2)
    const node0 = new _Node(3, node1)
    node1.random = node0
    expect(createRadomLinkedList(head)).toEqual(node0)
  })

  testCases.forEach((testCase) => {
    it(`deep copy ${testCase} `, () => {
      const list = createRadomLinkedList(testCase)
      expect(copyRandomList(list)).not.toBe(list)
      expect(copyRandomList(list)).toEqual(list)
    })
  })
})
