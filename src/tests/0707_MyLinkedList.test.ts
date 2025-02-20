import { beforeEach, describe, expect, it } from 'vitest'
import { MyLinkedList } from '../solutions/0707_MyLinkedList'

describe('myLinkedList', () => {
  let linkedList: MyLinkedList
  beforeEach(() => {
    linkedList = new MyLinkedList(true)
  })
  it('should create an empty linked list', () => {
    expect(linkedList.get(0)).toBe(-1)
    expect(linkedList.size()).toBe(0)
    expect(linkedList.getHeadNode()).toBeNull()
    expect(linkedList.getTailNode()).toBeNull()
    expect(linkedList.getAtIndex(0)).toBeNull()
  })

  it('should return the correct node', () => {
    linkedList.addAtHead(1)
    expect(linkedList.getAtIndex(0)).not.toBeNull()
    expect(linkedList.getHeadNode()).not.toBeNull()
    expect(linkedList.getTailNode()).not.toBeNull()
    expect(linkedList.get(0)).toBe(1)
    expect(linkedList.get(2)).toBe(-1)
  })
  it('should add a node at head', () => {
    linkedList.addAtHead(1)
    expect(linkedList.get(0)).toBe(1)
    expect(linkedList.size()).toBe(1)
    linkedList.addAtHead(0)
    expect(linkedList.get(0)).toBe(0)
    expect(linkedList.get(1)).toBe(1)
    expect(linkedList.size()).toBe(2)
  })

  it('should add a node at tail', () => {
    linkedList.addAtTail(0)
    expect(linkedList.size()).toBe(1)
    linkedList.addAtTail(1)
    expect(linkedList.get(0)).toBe(0)
    expect(linkedList.get(1)).toBe(1)
    expect(linkedList.size()).toBe(2)
  })

  it('should add a node at index', () => {
    expect(() => linkedList.addAtIndex(1, 1)).toThrowError('Index out of bounds')
    linkedList.addAtHead(0)
    linkedList.addAtTail(2)
    linkedList.addAtIndex(1, 1)
    expect(linkedList.size()).toBe(3)
    linkedList.addAtIndex(3, 3)
    expect(linkedList.get(0)).toBe(0)
    expect(linkedList.get(1)).toBe(1)
    expect(linkedList.get(2)).toBe(2)
    expect(linkedList.get(3)).toBe(3)
    expect(linkedList.size()).toBe(4)
  })

  it('should delete a node at index', () => {
    expect(() => linkedList.addAtIndex(1, 1)).toThrowError('Index out of bounds')
    linkedList.addAtHead(0)
    linkedList.addAtTail(2)
    linkedList.addAtIndex(1, 1)
    expect(linkedList.size()).toBe(3)
    linkedList.deleteAtIndex(1)
    expect(linkedList.get(0)).toBe(0)
    expect(linkedList.get(1)).toBe(2)
    expect(linkedList.size()).toBe(2)
    linkedList.deleteAtIndex(1)
    expect(linkedList.get(0)).toBe(0)
    expect(linkedList.size()).toBe(1)
  })
})
