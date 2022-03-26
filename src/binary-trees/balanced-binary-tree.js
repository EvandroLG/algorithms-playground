/*
  Balanced Binary Tree

  Given a binary tree, determine if it is height-balanced.
  For this problem, a height-balanced binary tree is defined as:
  A binary tree in which the left and right subtrees of every node differ in height by no more than 1.

  Example:
  Input: [3,9,20,null,null,15,7]
  Output: true

*/

function isBalanced(root) {
  if (!root) {
    return true;
  }

  const heightLeft = getHeight(root.left);
  const heightRight = getHeight(root.right);

  if (Math.abs(heightLeft - heightRight) > 1) {
    return false;
  }

  return isBalanced(root.left) && isBalanced(root.right);
}

function getHeight(root, height = 0) {
  if (!root) {
    return height;
  }

  const heightLeft = getHeight(root.left, height + 1);
  const heightRight = getHeight(root.right, height + 1);

  return Math.max(heightLeft, heightRight);
}

const assert = require('assert');

const tree = {
  value: 2,
  left: { value: 1 },
  right: {
    value: 3,
    left: {
      value: 4,
    },
  },
};

assert.ok(isBalanced());
