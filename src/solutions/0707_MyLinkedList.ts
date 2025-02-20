class ListNode {
  val: number
  next: ListNode | null
  prev: ListNode | null

  constructor(val: number = 0, next: ListNode | null = null, prev: ListNode | null = null) {
    this.val = val
    this.next = next
    this.prev = prev
  }
}

class MyLinkedList {
  private _dummyHead: ListNode
  private _dummyTail: ListNode
  private _size: number
  private _strict: boolean

  constructor(strict: boolean = false) {
    this._dummyHead = new ListNode(0)
    this._dummyTail = new ListNode(0)
    this._dummyHead.next = this._dummyTail
    this._dummyTail.prev = this._dummyHead
    this._size = 0
    this._strict = strict
  }

  get(index: number): number {
    const node = this.getAtIndex(index)
    return node ? node.val : -1
  }

  getHeadNode(): ListNode | null {
    return this._size === 0 ? null : this._dummyHead.next
  }

  getTailNode(): ListNode | null {
    return this._size === 0 ? null : this._dummyTail.prev
  }

  getAtIndex(index: number): ListNode | null {
    if (index < 0 || index >= this._size) {
      return null
    }
    let curr = this._dummyHead
    for (let i = 0; i <= index; i++) {
      curr = curr.next!
    }
    return curr
  }

  addAtHead(val: number): void {
    const node = new ListNode(val, this._dummyHead.next, this._dummyHead)
    this._dummyHead.next!.prev = node
    this._dummyHead.next = node
    this._size++
  }

  addAtTail(val: number): void {
    const node = new ListNode(val, this._dummyTail, this._dummyTail.prev)
    this._dummyTail.prev!.next = node
    this._dummyTail.prev = node
    this._size++
  }

  addAtIndex(index: number, val: number): void {
    if (index > this._size) {
      if (this._strict) {
        throw new Error('Index out of bounds')
      }
      return
    }
    let i = 0
    let curr = this._dummyHead
    for (; i <= index; i++) {
      curr = curr.next!
    }
    const node = new ListNode(val, curr, curr.prev)
    curr.prev!.next = node
    curr.prev = node
    this._size++
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this._size) {
      if (this._strict) {
        throw new Error('Index out of bounds')
      }
      return
    }
    let i = 0
    let curr = this._dummyHead
    for (; i <= index; i++) {
      curr = curr.next!
    }
    curr.prev!.next = curr.next
    curr.next!.prev = curr.prev
    this._size--
  }

  size(): number {
    return this._size
  }
}

export { ListNode, MyLinkedList }
