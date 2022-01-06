/*
  Diameter Of Binary Tree

  Given the root of a binary tree, return the length of the diameter of the tree.
  The diameter of a binary tree is the length of the longest path between any two nodes in a tree.
  This path may or may not pass through the root.
  The length of a path between two nodes is represented by the number of edges between them.

  Example:
  Input: [1,2,3,4,5]
  Output: 3
*/

function diameterOfBinaryTree(root) {
  let diameter = 0;

  (function traverse(node) {
    if (!node) {
      return 0;
    }

    const left = traverse(node.left);
    const right = traverse(node.right);
    diameter = Math.max(diameter, left + right);

    return Math.max(left, right) + 1;
  })(root);

  return diameter;
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

assert.equal(diameterOfBinaryTree(tree), 3);
