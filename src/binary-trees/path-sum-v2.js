/*
  Path Sum V2

  Given the root of a binary tree and an integer targetSum, return all root-to-leaf paths where the sum of the node values in the path equals targetSum.
  Each path should be returned as a list of the node values, not node references.
  A root-to-leaf path is a path starting from the root and ending at any leaf node. A leaf is a node with no children.

  Example:
  Input: [5,4,8,11,null,13,4,7,2,null,null,5,1], 22
  Output: [[5,4,11,2],[5,8,4,5]]
*/

function pathSumV2(root, targetSum) {
  const output = [];

  (function traverse(node, sum, path) {
    if (!node) {
      return;
    }

    if (sum - node.value === 0 && !node.left && !node.right) {
      output.push(path.concat(node.value));
    } else {
      traverse(node.left, sum - node.value, path.concat(node.value));
      traverse(node.right, sum - node.value, path.concat(node.value));
    }
  })(root, targetSum, []);

  return output;
}

const assert = require('assert');

const root = {
  value: 5,
  left: {
    value: 4,
    left: {
      value: 11,
      left: {
        value: 7,
      },
      right: {
        value: 2,
      },
    },
  },
  right: {
    value: 8,
    left: {
      value: 13,
    },
    right: {
      value: 4,
      left: {
        value: 5,
      },
      right: {
        value: 1,
      },
    },
  },
};

assert.deepEqual(pathSumV2(root, 22), [
  [5, 4, 11, 2],
  [5, 8, 4, 5],
]);
