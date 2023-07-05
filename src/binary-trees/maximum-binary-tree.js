/*
  Maximum Binary Tree

  You are given an integer array nums with no duplicates.
  A maximum binary tree can be built recursively from nums using the following algorithm:
  - Create a root node whose value is the maximum value in nums.
  - Recursively build the left subtree on the subarray prefix to the left of the maximum value.
  - Recursively build the right subtree on the subarray suffix to the right of the maximum value.
  Recursively build the right subtree on the subarray suffix to the right of the maximum value.

  Example:
  Input: [3,2,1,6,0,5]
  Output: [6,3,5,null,2,0,null,null,1]
*/

function maximumBinaryTree(arr) {
  if (!arr.length) {
    return null;
  }

  const maxValue = Math.max(...arr);
  const root = new TreeNode(maxValue);
  const index = arr.indexOf(maxValue);
  const left = arr.slice(0, index);
  const right = arr.slice(index + 1);

  root.left = maximumBinaryTree(left);
  root.right = maximumBinaryTree(right);

  return root;
}

const assert = require('assert');

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

assert.deepEqual(maximumBinaryTree([3, 2, 1, 6, 0, 5]), {
  val: 6,
  left: {
    val: 3,
    left: null,
    right: {
      val: 2,
      left: null,
      right: {
        val: 1,
        left: null,
        right: null,
      },
    },
  },
  right: {
    val: 5,
    left: {
      val: 0,
      left: null,
      right: null,
    },
    right: null,
  },
});
