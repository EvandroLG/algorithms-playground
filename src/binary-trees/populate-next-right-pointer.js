/*
  Populate Next Right Pointer

  You are given a perfect binary tree where all leaves are on the same level, and every parent has two children.
  Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

  Example:
  Input: [1,2,3,4,5,6,7]
  Output: [1,#,2,3,#,4,5,6,7,#]
*/

function populateNextRightPointer(root) {
  let queue = [root];

  while (queue.length) {
    const copy = queue.slice();
    const nextQueue = [];
    queue.length;
    let prev = copy.shift();

    if (prev && prev.left) {
      nextQueue.push(prev.left);
    }

    if (prev && prev.right) {
      nextQueue.push(prev.right);
    }

    while (copy.length) {
      const current = copy.shift();
      prev.next = current;
      prev = current;

      if (current.left) {
        nextQueue.push(current.left);
      }

      if (current.right) {
        nextQueue.push(current.right);
      }
    }

    queue = nextQueue;
  }

  return root;
}

const assert = require('assert');
const tree = {
  value: 1,
  left: {
    value: 2,
    next: null,
  },
  right: {
    value: 3,
    next: null,
  },
  next: null,
};

assert.deepEqual(populateNextRightPointer(tree), {
  value: 1,
  left: {
    value: 2,
    next: {
      value: 3,
      next: null,
    },
  },
  right: {
    value: 3,
    next: null,
  },
  next: null,
});
