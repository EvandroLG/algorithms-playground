/*
  Find Leaves Of Binary Tree

  Given the root of a binary tree, collect a tree's nodes as if you were doing this:
  - Collect all the leaf nodes.
  - Remove all the leaf nodes.
  - Repeat until the tree is empty.

  Example:
  Input: [1,2,3,4,5]
  Output: [[4,5,3],[2],[1]]
*/

function findLeavesOfBinaryTree(root) {
  const output = [];

  (function traverse(node) {
    if (!node) {
      return 0;
    }

    const leftHeight = traverse(node.left);
    const rightHeight = traverse(node.right);
    const currentHeight = Math.max(leftHeight, rightHeight) + 1;
    const arr = output[currentHeight - 1];

    if (arr) {
      arr.push(node.value);
    } else {
      output.push([node.value]);
    }

    return currentHeight;
  })(root);

  return output;
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
  },
};

assert.deepEqual(findLeavesOfBinaryTree(tree), [[4, 5, 3], [2], [1]]);
