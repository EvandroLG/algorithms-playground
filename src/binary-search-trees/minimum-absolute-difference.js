/*
  Minimum Absolute Difference
  Given the root of a Binary Search Tree (BST), return the minimum absolute difference between the values of any two different nodes in the tree.

  Example:
  Input: [4,2,6,1,3]
  Output: 1
*/

function getMinimumDifference(root) {
  const nodes = [];

  (function traverse(node) {
    if (!node) {
      return;
    }

    nodes.push(node.value);

    traverse(node.left);
    traverse(node.right);
  })(root);

  let diff = Infinity;

  for (let i = 0; i < nodes.length - 1; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      diff = Math.min(diff, Math.abs(nodes[i] - nodes[j]));
    }
  }

  return diff;
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
    value: 6,
  },
};

assert.equal(getMinimumDifference(tree), 1);
