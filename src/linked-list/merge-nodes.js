/*
  Merge Nodes

  You are given the head of a linked list, which contains a series of integers separated by 0's.
  The beginning and end of the linked list will have Node.val == 0.

  Example:
  Input: [0,3,1,0,4,5,2,0]
  Output: [4, 11]
*/

function mergeNodes(head) {
  const arr = [];
  let current = head;
  let sum = 0;
  let found = 0;

  while (current) {
    if (current.value === 0) {
      found++;

      if (found === 2) {
        arr.push(sum);
        sum = 0;
        found = 1;
      }
    } else if (found === 1) {
      sum += current.value;
    }

    current = current.next;
  }

  return fromArrayToList(arr);
}

function fromArrayToList(arr) {
  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

function ListNode(value, next) {
  this.value = value;
  this.next = next;
}

const assert = require('assert');

const list = {
  value: 0,
  next: {
    value: 3,
    next: {
      value: 1,
      next: {
        value: 0,
        next: {
          value: 5,
          next: {
            value: 6,
            next: {
              value: 0,
            },
          },
        },
      },
    },
  },
};

assert.deepEqual(mergeNodes(list), {
  value: 4,
  next: {
    value: 11,
    next: undefined,
  },
});
