/*
  Is Complete Tree

  Given the root of a binary tree, determine if it is a complete binary tree.
  In a complete binary tree, every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible.
  It can have between 1 and 2h nodes inclusive at the last level h.

  Example:
  Input: [1,2,3,4,5,null,7]
  Output: false
*/

function isCompleteTree(root) {
  const queue = [root];
  let foundNull = false;

  while (queue.length) {
    const node = queue.shift();

    if (foundNull && node) {
      return false;
    }

    if (!node) {
      foundNull = true;
      continue;
    }

    queue.push(node.left);
    queue.push(node.right);
  }

  return true;
}

const assert = require('assert');
const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
  right: {
    value: 3,
    right: {
      value: 7,
    },
  },
};

assert.ok(!isCompleteTree(tree));
