/*
  Convert To Greater Sum Tree

  Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus the sum of all keys greater than the original key in BST.

  Example:
  Input: [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
  Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]
*/

function convertToGreaterSumTree(root) {
  const values = [];

  getAllValues(root, values);
  convertToGreaterTree(root, values);

  return root;
}

function getAllValues(root, arr) {
  if (!root) {
    return;
  }

  arr.push(root.value);

  getAllValues(root.left, arr);
  getAllValues(root.right, arr);
}

function convertToGreaterTree(root, values) {
  if (!root) {
    return;
  }

  root.value = values
    .filter((item) => item > root.value)
    .reduce((item, acc) => acc + item, root.value);

  convertToGreaterTree(root.left, values);
  convertToGreaterTree(root.right, values);
}

const assert = require('assert');

const tree = {
  value: 2,
  left: {
    value: 1,
  },
  right: {
    value: 3,
  },
};

assert.deepEqual(convertToGreaterSumTree(tree), {
  value: 5,
  left: {
    value: 6,
  },
  right: {
    value: 3,
  },
});
