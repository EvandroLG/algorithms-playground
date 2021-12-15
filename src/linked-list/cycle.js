/*
  Cycle

  Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

  Example:
  Input: [3,2,0,-4]
  Output: 2
*/

function cycle(head) {
  const memo = new Map();
  let current = head;

  while (current) {
    if (memo.has(current)) {
      return current;
    }

    memo.set(current);
    current = current.next;
  }

  return null;
}

const assert = require('assert');
const LinkedList = require('./singly-linked-list');

const list = new LinkedList();
list.setHead(3);
list.setTail(2);
list.setTail(0);
list.setTail(-4);
list.tail.next = list.head;

assert.deepEqual(cycle(list.head), list.head);
