/*
  Intersection Of Two Linked Lists

  Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

  Example:
  Input: [4,1,8,4,5], [5,6,1,8,4,5]
  Output: 8
*/

function intersectionOfTwoLinkedLists(headA, headB) {
  let currentA = headA;
  let currentB = headB;
  const memo = new Set();

  while (currentA || currentB) {
    if (currentA) {
      if (memo.has(currentA)) {
        return currentA;
      } else {
        memo.add(currentA);
      }
    }

    if (currentB) {
      if (memo.has(currentB)) {
        return currentB;
      } else {
        memo.add(currentB);
      }
    }

    currentA = currentA?.next;
    currentB = currentB?.next;
  }

  return null;
}

const assert = require('assert');

const headC = {
  value: 4,
  next: {
    value: 5,
    next: null,
  },
};

const headA = {
  value: 1,
  next: {
    value: 2,
    next: headC,
  },
};

const headB = {
  value: 3,
  next: headC,
};

assert.deepEqual(intersectionOfTwoLinkedLists(headA, headB), headC);
