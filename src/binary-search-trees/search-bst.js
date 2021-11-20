/*
  Search Bst

  You are given the root of a binary search tree (BST) and an integer value.
  Find the node in the BST that the node's value equals value and return the subtree rooted with that node. If such a node does not exist, return null.

  Example:
  Input: [4,2,7,1,3], 2
  Output: [2, 1, 3]
*/

function searchBst(root, value) {
  if (!root) {
    return null;
  }

  if (root.value === value) {
    return root;
  }

  return searchBst(root.left, value) || searchBst(root.right, value);
}

const assert = require('assert');
const BinarySearchTree = require('./bst');

const root = new BinarySearchTree(4);
root.insert(2);
root.insert(7);
root.insert(1);
root.insert(3);

assert.equal(searchBst(root, 2).value, 2);
