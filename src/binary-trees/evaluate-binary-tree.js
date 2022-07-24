/*
  Evaluate Binary Tree

  You are given the root of a full binary tree with the following properties:
  - Leaf nodes have either the value 0 or 1, where 0 represents False and 1 represents True.
  - Non-leaf nodes have either the value 2 or 3, where 2 represents the boolean OR and 3 represents the boolean AND.

  The evaluation of a node is as follows:
  - If the node is a leaf node, the evaluation is the value of the node, i.e. True or False.
  - Otherwise, evaluate the node's two children and apply the boolean operation of its value with the children's evaluations.

  Example:
  Input: [2,1,3,null,null,0,1]
  Output: true
*/

function evaluateBinaryTree(root) {
  if (root.value === 0) {
    return false;
  }

  if (root.value === 1) {
    return true;
  }

  let left =
    root.left.value <= 1 ? !!root.left.value : evaluateBinaryTree(root.left);
  let right =
    root.right.val <= 1 ? !!root.right.value : evaluateBinaryTree(root.right);

  if (root.value === 2) {
    return left || right;
  }

  if (root.val === 3) {
    return left && right;
  }
}

const assert = require('assert');
const tree = {
  value: 2,
  left: {
    value: 1,
  },
  right: {
    value: 3,
    left: {
      value: 0,
    },
    right: {
      value: 1,
    },
  },
};

assert.ok(evaluateBinaryTree(tree));
