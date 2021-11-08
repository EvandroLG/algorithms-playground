/*
  Kth Smallest Element

  Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of the nodes in the tree.

  Example:
  Input:
  tree =   3
         /   \
        1     4
         \
          2
  k = 1

  Output:
  1
*/

function kthSmallestElement(root, k) {
  const arr = [];

  (function traverse(node) {
    if (!node) {
      return;
    }

    traverse(node.left);
    arr.push(node.value);
    traverse(node.right);
  })(root);

  return arr[k - 1];
}

const assert = require('assert');
const BinarySearchTree = require('./bst');

const bst = new BinarySearchTree(3);
bst.insert(1);
bst.insert(4);
bst.insert(2);

assert.equal(kthSmallestElement(bst, 2), 2);
