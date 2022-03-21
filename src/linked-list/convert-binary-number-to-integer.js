/*
  Convert Binary Number To Integer

  Given head which is a reference node to a singly-linked list.
  The value of each node in the linked list is either 0 or 1.
  The linked list holds the binary representation of a number.

  Example:
  Input: [1,0,1]
  Output: 5
*/

function convertBinaryNumberToInteger(head) {
  let current = head;
  const values = [];

  while (current) {
    values.push(current.value);
    current = current.next;
  }

  const s = values.join('');

  return parseInt(s, 2);
}

const assert = require('assert');
const head = {
  value: 1,
  next: {
    value: 0,
    next: {
      value: 1,
    },
  },
};

assert.equal(convertBinaryNumberToInteger(head), 5);
