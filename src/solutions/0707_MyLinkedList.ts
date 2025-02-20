class Node {
  val: number
  next: Node | null
  prev: Node | null

  constructor(val: number = 0, next: Node | null = null, prev: Node | null = null) {
    this.val = val
    this.next = next
    this.prev = prev
  }
}

class MyLinkedList {
  private _dummyHead: Node
  private _dummyTail: Node
  private _size: number
  private _strict: boolean

  constructor(strict: boolean = false) {
    this._dummyHead = new Node(0)
    this._dummyTail = new Node(0)
    this._dummyHead.next = this._dummyTail
    this._dummyTail.prev = this._dummyHead
    this._size = 0
    this._strict = strict
  }

  get(index: number): number {
    if (index < 0 || index >= this._size) {
      return -1
    }
    let curr = this._dummyHead
    for (let i = 0; i <= index; i++) {
      curr = curr.next!
    }
    return curr.val
  }

  addAtHead(val: number): void {
    const node = new Node(val, this._dummyHead.next, this._dummyHead)
    this._dummyHead.next!.prev = node
    this._dummyHead.next = node
    this._size++
  }

  addAtTail(val: number): void {
    const node = new Node(val, this._dummyTail, this._dummyTail.prev)
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
    const node = new Node(val, curr, curr.prev)
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

export { MyLinkedList }
