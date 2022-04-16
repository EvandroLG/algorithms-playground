/*
  Closest Binary Search Tree Value

  Given the root of a binary search tree and a target value, return the value in the BST that is closest to the target.

  Example:
  Input: [4,2,5,1,3], 3.714286
  Output: 4
*/

function closestBinarySearchTreeValue(root, target) {
  let result = -1;
  let diff = Infinity;

  (function traverse(node) {
    if (!node) {
      return;
    }

    const newDiff = Math.abs(node.value - target);

    if (newDiff < diff) {
      result = node.value;
      diff = newDiff;
    }

    traverse(node.left);
    traverse(node.right);
  })(root);

  return result;
}

const assert = require('assert');

const tree = {
  value: 4,
  left: {
    value: 2,
    left: {
      value: 1,
    },
    right: {
      value: 3,
    },
  },
  right: {
    value: 5,
  },
};

assert.equal(closestBinarySearchTreeValue(tree, 3.714286), 4);
