/*
  Insert Greatest Common Divisors

  Given the head of a linked list head, in which each node contains an integer value.
  Between every pair of adjacent nodes, insert a new node with a value equal to the greatest common divisor of them.
  Return the linked list after insertion.
  The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

  Example:
  Input: [18,6,10,3]
  Output: [18,6,6,2,10,1,3]
*/

function insertGreatestCommonDivisors(head) {
  let current = head;

  while (current) {
    const next = current.next;

    if (next) {
      const value = getGreatestDivisor(current.val, next.val);
      const node = new ListNode(value);
      const n = current.next;
      current.next = node;
      node.next = n;
    }

    current = next;
  }

  return head;
}

function getGreatestDivisor(a, b) {
  if (b > a) {
    return getGreatestDivisor(b, a);
  }

  let greatestDivisor = b;

  while (greatestDivisor > 0) {
    if (a % greatestDivisor === 0 && b % greatestDivisor === 0) {
      return greatestDivisor;
    }

    greatestDivisor--;
  }

  return 1;
}

function ListNode(val) {
  this.val = val === undefined ? 0 : val;
}

function createLinkedList(arr) {
  const head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    const val = arr[i];
    current.next = new ListNode(val);
    current = current.next;
  }

  return head;
}

const assert = require('assert');
const head = createLinkedList([18, 6, 10, 3]);

assert.deepEqual(
  insertGreatestCommonDivisors(head),
  createLinkedList([18, 6, 6, 2, 10, 1, 3])
);
