/*
  Remove Linked List Elements

  Given the head of a linked list and an integer value, remove all the nodes of the linked list that has Node.value == value, and return the new head.

  Example:
  Input: [1,2,6,3,4,5,6], 6
  Output: [1,2,3,4,5]
*/

function removeLinkedListElements(head, target) {
  let newHead = head;
  let current = head;
  let prev = null;

  while (current) {
    if (current.value === target) {
      if (current === head) {
        newHead = current.next;
      } else {
        prev.next = current.next;
      }
    } else {
      prev = current;
    }

    current = current.next;
  }

  return newHead;
}

const assert = require('assert');

const head = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 2,
        next: null,
      },
    },
  },
};

assert.deepEqual(removeLinkedListElements(head, 2), {
  value: 1,
  next: {
    value: 3,
    next: null,
  },
});
