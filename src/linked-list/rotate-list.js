/*
  Rotate List

  Given the head of a linked list, rotate the list to the right by k places.

  Example:
  Input: [1,2,3,4,5], 2
  Output: [4,5,1,2,3]
*/

function rotateList(head, k) {
  const size = getSize(head);
  k = k % size;

  if (!head || !k) {
    return head;
  }

  return rotateListHelper(head, k);
}

function getSize(head) {
  let current = head;
  let size = 0;

  while (current) {
    current = current.next;
    size++;
  }

  return size;
}

function rotateListHelper(head, k) {
  if (!k) {
    return head;
  }

  let current = head;
  let prev = null;

  while (true) {
    if (!current.next) {
      break;
    }

    prev = current;
    current = current.next;
  }

  prev.next = null;
  current.next = head;

  return rotateListHelper(current, k - 1);
}

const assert = require('assert');

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
      },
    },
  },
};

assert.deepEqual(rotateList(list, 2), {
  value: 3,
  next: { value: 4, next: { value: 1, next: { value: 2, next: null } } },
});
