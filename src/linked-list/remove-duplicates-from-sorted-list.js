/*
  Remove Duplicates From Sorted List

  Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list.
  Return the linked list sorted as well.

  Example:
  Input: [1,2,3,3,4,4,5]
  Output: [1, 2, 5]
*/

function removeDuplicatesFromSortedList(head) {
  const sentinel = {
    value: 0,
    next: head,
  };

  let predecessor = sentinel;

  while (head) {
    if (head.next && head.value === head.next.value) {
      while (head.next && head.value === head.next.value) {
        head = head.next;
      }

      predecessor.next = head.next;
    } else {
      predecessor = predecessor.next;
    }

    head = head.next;
  }

  return sentinel.next;
}

const assert = require('assert');
const head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 4,
            next: null,
          },
        },
      },
    },
  },
};

assert.deepEqual(removeDuplicatesFromSortedList(head), {
  value: 1,
  next: {
    value: 3,
    next: null,
  },
});
