/*
  Find Bottom Left Value

  Given the root of a binary tree, return the leftmost value in the last row of the tree.

  Example:
  Input: [1,2,3,4,null,5,6,null,null,7]
  Output: 7
*/

function findBottomLeftValue(root) {
  let maxLevel = -1;
  let result = null;

  function traverse(node, isLeft, level) {
    if (!node) {
      return;
    }

    if (level > maxLevel && isLeft) {
      result = node.value;
      maxLevel = level;
    }

    if (node.left && node.right) {
      traverse(node.left, true, level + 1);
      traverse(node.right, false, level + 1);
    } else {
      traverse(node.left, true, level + 1);
      traverse(node.right, true, level + 1);
    }
  }

  traverse(root, true, 0);

  return result;
}

const assert = require('assert');

const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: null,
  },
  right: {
    value: 3,
    left: {
      value: 5,
      left: {
        value: 7,
        left: null,
        right: null,
      },
      right: null,
    },
    right: {
      value: 6,
      left: null,
      right: null,
    },
  },
};

assert.strictEqual(findBottomLeftValue(tree), 7);
