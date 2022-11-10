/*
  Sorted List To Bst

  Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height-balanced binary search tree.

  Example:
  Input: [-10,-3,0,5,9]
  Output: [0,-3,9,-10,null,5]
*/

function sortedListToBst(head) {
  const arr = convertToArray(head);
  return buildTree(arr, 0, arr.length - 1);
}

function convertToArray(head) {
  let current = head;
  const arr = [];

  while (current) {
    arr.push(current.value);
    current = current.next;
  }

  return arr;
}

function buildTree(arr, start, end) {
  if (start > end) {
    return null;
  }

  const middle = Math.round((start + end) / 2);
  const root = new TreeNode(arr[middle]);
  root.left = buildTree(arr, start, middle - 1);
  root.right = buildTree(arr, middle + 1, end);

  return root;
}

function TreeNode(val, left, right) {
  this.value = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const assert = require('assert');

const head = {
  value: -10,
  next: {
    value: 0,
    next: {
      value: 5,
    },
  },
};

assert.deepEqual(sortedListToBst(head), {
  value: 0,
  left: {
    value: -10,
    left: null,
    right: null,
  },
  right: {
    value: 5,
    left: null,
    right: null,
  },
});
