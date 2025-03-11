class _Node {
  val: number
  next: _Node | null
  random: _Node | null

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.random = (random === undefined ? null : random)
  }
}

function copyRandomList(head: _Node | null, cacheMap: Map<_Node, _Node> = new Map()): _Node | null {
  if (head === null) {
    return null
  }
  const newHead = new _Node(head.val)
  cacheMap.set(head, newHead)
  newHead.next = copyRandomList(head.next, cacheMap)
  if (head.random && cacheMap.has(head.random)) {
    newHead.random = cacheMap.get(head.random) ?? null
  }
  return cacheMap.get(head) ?? null
};

export { _Node, copyRandomList }
