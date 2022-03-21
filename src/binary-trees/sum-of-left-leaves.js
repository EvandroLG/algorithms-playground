/*
  Sum Of Left Leaves

  Given the root of a binary tree, return the sum of all left leaves.

  Example:
  Input: [3,9,20,null,null,15,7]
  Output: 24
*/

function sumOfLeftLeaves(root) {
  let result = 0;

  (function traverse(node, isLeft) {
    if (!node) {
      return;
    }

    if (isLeft && !node.left && !node.right) {
      result += node.value;
    }

    traverse(node.left, true);
    traverse(node.right, false);
  })(root, false);

  return result;
}

const assert = require('assert');

const tree = {
  value: 3,
  left: {
    value: 9,
  },
  right: {
    value: 20,
    left: {
      value: 15,
    },
    right: {
      value: 7,
    },
  },
};

assert.equal(sumOfLeftLeaves(tree), 24);
