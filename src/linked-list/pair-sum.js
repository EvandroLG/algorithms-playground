/*
  Pair Sum

  In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node, if 0 <= i <= (n / 2) - 1.
  For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2.
  These are the only nodes with twins for n = 4.
  The twin sum is defined as the sum of a node and its twin.
  Given the head of a linked list with even length, return the maximum twin sum of the linked list.

  Example:
  Input: [5, 4, 2, 1]
  Output: 6
*/

function pairSum(head) {
  const arr = convertToArray(head);
  return maxTwin(arr);
}

function convertToArray(head) {
  let current = head;
  const arr = [];

  while (current) {
    arr.push(current.value);
    current = current.next;
  }

  return arr;
}

function maxTwin(arr) {
  let p1 = 0;
  let p2 = arr.length - 1;
  let max = arr[p1] + arr[p2];

  while (p1 < p2) {
    const sum = arr[p1] + arr[p2];
    max = Math.max(sum, max);
    p1++;
    p2--;
  }

  return max;
}

const assert = require('assert');
const linkedList = {
  value: 5,
  next: {
    value: 4,
    next: {
      value: 2,
      next: {
        value: 1,
      },
    },
  },
};
assert.equal(pairSum(linkedList), 6);
