/*
  Minimum Depth Binary Tree

  Given a binary tree, find its minimum depth.
  The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

  Example:
  Input: [3,9,20,null,null,15,7]
  Output: 2
*/

function minimumDepthBinaryTree(root) {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  let depth = Infinity;

  if (root.left) {
    depth = Math.min(depth, minimumDepthBinaryTree(root.left));
  }

  if (root.right) {
    depth = Math.min(depth, minimumDepthBinaryTree(root.right));
  }

  return depth + 1;
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

assert.ok(minimumDepthBinaryTree(tree));
