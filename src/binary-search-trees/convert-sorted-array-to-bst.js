/*
  Convert Sorted Array To Bst

  Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
  A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.

  Example:
  Input: nums = [-10,-3,0,5,9]
  Output: [0,-3,9,-10,null,5]
*/

function helper(arr, left, right) {
  if (left > right) {
    return null;
  }

  const middle = Math.round((left + right) / 2);
  const root = new TreeNode(arr[middle]);
  root.left = helper(arr, left, middle - 1);
  root.right = helper(arr, middle + 1, right);

  return root;
}

function convertSortedArrayToBst(arr) {
  return helper(arr, 0, arr.length - 1);
}

function TreeNode(value, left, right) {
  this.value = value;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

const assert = require('assert');
const root = convertSortedArrayToBst([-10, -3, 0, 5, 9]);

assert.deepEqual(root, {
  value: 0,
  left: {
    value: -3,
    left: { value: -10, left: null, right: null },
    right: null,
  },
  right: {
    value: 9,
    left: { value: 5, left: null, right: null },
    right: null,
  },
});
