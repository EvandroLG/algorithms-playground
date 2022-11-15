/*
  Bst From Preorder

  Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.
  It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.
  A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val.
  A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.

  Example:
  Input: [8,5,1,7,10,12]
  Output: [8,5,10,1,7,null,12]
*/

function bstFromPreorder(preorder) {
  if (!preorder.length) {
    return null;
  }

  const queue = preorder.slice();
  const rootValue = queue.shift();
  const root = new TreeNode(rootValue);

  while (queue.length) {
    const nodeValue = queue.shift();
    insertNode(root, nodeValue);
  }

  return root;
}

function insertNode(root, value) {
  if (value < root.value) {
    if (!root.left) {
      root.left = new TreeNode(value);
    } else {
      insertNode(root.left, value);
    }
  } else {
    if (!root.right) {
      root.right = new TreeNode(value);
    } else {
      insertNode(root.right, value);
    }
  }
}

function TreeNode(value, left, right) {
  this.value = value === undefined ? 0 : value;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

const assert = require('assert');

const preorder = [8, 5, 1, 7, 10, 12];
const expected = {
  value: 8,
  left: {
    value: 5,
    left: {
      value: 1,
      left: null,
      right: null,
    },
    right: {
      value: 7,
      left: null,
      right: null,
    },
  },
  right: {
    value: 10,
    left: null,
    right: {
      value: 12,
      left: null,
      right: null,
    },
  },
};

assert.deepEqual(bstFromPreorder(preorder), expected);
