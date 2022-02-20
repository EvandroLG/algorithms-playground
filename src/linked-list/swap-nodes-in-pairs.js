/*
  Swap Nodes In Pairs

  Given a linked list, swap every two adjacent nodes and return its head.
  You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

  Example:
  Input: [1,2,3,4]
  Output: [2, 1, 4, 3]
*/

function swapNodesInPairs(head) {
  if (!head || !head.next) {
    return head;
  }

  const first = head;
  const second = head.next;

  first.next = swapNodesInPairs(second.next);
  second.next = first;

  return second;
}

const assert = require('assert');
const head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

assert.deepEqual(swapNodesInPairs(head), {
  value: 2,
  next: {
    value: 1,
    next: {
      value: 4,
      next: {
        value: 3,
        next: null,
      },
    },
  },
});
