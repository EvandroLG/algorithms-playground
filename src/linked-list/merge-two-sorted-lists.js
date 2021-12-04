/*
  Merge Two Sorted Lists

  You are given the heads of two sorted linked lists list1 and list2.
  Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
  Return the head of the merged linked list.

  Example:
  Input: [1, 2, 4], [1, 3, 4]
  Output: [1, 1, 2, 3, 4, 4]
*/

function ListNode() {
  return {
    value: null,
    next: null,
  };
}

function mergeTwoSortedLists(l1, l2) {
  let newHead = null;
  let current = null;

  (function traverse(node1, node2) {
    if (!node1 && !node2) {
      return;
    }

    if (newHead) {
      current.next = new ListNode();
      current = current.next;
    } else {
      newHead = new ListNode();
      current = newHead;
    }

    if (node1 && !node2) {
      current.value = node1.value;
      return traverse(node1.next, node2);
    }

    if (!node1 && node2) {
      current.value = node2.value;
      return traverse(node1, node2.next);
    }

    if (node1.value < node2.value) {
      current.value = node1.value;
      return traverse(node1.next, node2);
    }

    current.value = node2.value;

    return traverse(node1, node2.next);
  })(l1, l2);

  return newHead;
}

const assert = require('assert');

const l1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 4,
    },
  },
};

const l2 = {
  value: 1,
  next: {
    value: 3,
    next: {
      value: 4,
    },
  },
};

assert.deepEqual(mergeTwoSortedLists(l1, l2), {
  value: 1,
  next: {
    value: 1,
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
});
