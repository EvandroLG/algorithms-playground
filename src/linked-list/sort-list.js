/*
  Sort List

  Given the head of a linked list, return the list after sorting it in ascending order.

  Example:
  Input: [4,2,1,3]
  Output: [1,2,3,4]
*/

function sortList(head) {
  const sortedArray = fromListToArray(head).sort((a, b) => a - b);
  let i = 0;
  let current = head;

  while (current) {
    current.value = sortedArray[i];
    i++;
    current = current.next;
  }

  return head;
}

function fromListToArray(head) {
  const arr = [];
  let current = head;

  while (current) {
    arr.push(current.value);
    current = current.next;
  }

  return arr;
}

const assert = require('assert');
const list = {
  value: 4,
  next: {
    value: 2,
    next: {
      value: 1,
      next: {
        value: 3,
      },
    },
  },
};

assert.deepStrictEqual(sortList(list), {
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
});
