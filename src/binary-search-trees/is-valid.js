/*
  Is Valid

  Given the root of a binary tree, determine if it is a valid binary search tree (BST).
  A valid BST is defined as follows:
  - The left subtree of a node contains only nodes with keys less than the node's key.
  - The right subtree of a node contains only nodes with keys greater than the node's key.
  - Both the left and right subtrees must also be binary search trees.
*/

function isValid(root) {
  return (function isValidHelper(node, low, high) {
    if (!node) {
      return true;
    }

    if (node.value <= low || node.value >= high) {
      return false;
    }

    return (
      isValid(node.left, low, node.value) &&
      isValid(node.right, node.value, high)
    );
  })(root, -Infinity, Infinity);
}

const assert = require('assert');
const tree = {
  value: 2,
  left: { value: 1 },
  right: { value: 3 },
};

assert.ok(isValid(tree));
