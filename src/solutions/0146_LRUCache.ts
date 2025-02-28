class LRUCache1 {
  private _capacity: number
  private _hashMap: Map<number, number>

  constructor(capacity: number) {
    this._capacity = capacity
    this._hashMap = new Map()
  }

  get(key: number): number {
    if (this._hashMap.has(key)) {
      const val = this._hashMap.get(key) as number
      this._hashMap.delete(key)
      this._hashMap.set(key, val)
      return val
    }
    return -1
  }

  put(key: number, value: number): void {
    if (this._hashMap.has(key)) {
      this._hashMap.delete(key)
    }
    else if (this._hashMap.size === this._capacity) {
      this._hashMap.delete(this._hashMap.keys().next().value as number)
    }
    this._hashMap.set(key, value)
  }
}

// bidirectional linked list is unnecessary in JavaScript
// see https://github.com/vuejs/core/blob/8bd9cdb77ea82793b3ca81a3fc8007eb9f73a829/packages/runtime-core/src/components/KeepAlive.ts#L61
class DListNode {
  // remember the key to ensure this._hashMap.delete(node.key)
  key: number
  val: number
  prev: DListNode | null
  next: DListNode | null
  constructor(val: number, key: number = -1, next: DListNode | null = null, prev: DListNode | null = null) {
    this.val = val
    this.key = key
    this.next = next
    this.prev = prev
  }
}

class LRUCache2 {
  private _capacity: number
  private _hashMap: Map<number, DListNode>
  private _head: DListNode
  private _tail: DListNode
  private _size: number

  constructor(capacity: number) {
    this._capacity = capacity
    this._hashMap = new Map()
    this._head = new DListNode(-1)
    this._tail = new DListNode(-1)
    this._head.next = this._tail
    this._tail.prev = this._head
    this._size = 0
  }

  _removeNode(node: DListNode) {
    if (node.next && node.prev) {
      node.prev.next = node.next
      node.next.prev = node.prev
      this._size--
    }
  }

  _addTail(node: DListNode) {
    node.next = this._tail
    node.prev = this._tail.prev
    this._tail.prev!.next = node
    this._tail.prev = node
    this._size++
  }

  get(key: number): number {
    if (this._hashMap.has(key)) {
      const node = this._hashMap.get(key) as DListNode
      this._removeNode(node)
      this._addTail(node)
      return node.val
    }
    return -1
  }

  put(key: number, value: number): void {
    if (this._hashMap.has(key)) {
      const node = this._hashMap.get(key) as DListNode
      this._removeNode(node)
    }
    else if (this._size === this._capacity) {
      const node = this._head.next as DListNode
      this._removeNode(node)
      this._hashMap.delete(node.key)
    }
    // set
    const node = new DListNode(value, key)
    this._addTail(node)
    this._hashMap.set(key, node)
  }
}

export { LRUCache1, LRUCache2 }
