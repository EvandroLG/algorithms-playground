/*
  ValidateBst

  Write a function that takes in a potentially invalid Binary Search Tree (BST) and returns a boolean representing whether the BST is valid.
  Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.
  A BST is valid if and only if all of its nodes are valid BST nodes.

  Sample Input
  tree =   10
         /     \
        5      15
      /   \   /   \
     2     5 13   22
   /           \
  1            14

  Sample Output
  true
*/

function validateBstHelper(root, min = -Infinity, max = Infinity) {
  if (!root) {
    return true;
  }

  if (root.value < min || root.value >= max) {
    return false;
  }

  const left = validateBstHelper(root.left, min, root.value);
  const right = validateBstHelper(root.right, root.value, max);

  return left && right;
}

function validateBst(root) {
  return validateBstHelper(root);
}

const assert = require('assert');
const BinarySearchTree = require('./bst');

const bst = new BinarySearchTree(10);
bst.insert(5);
bst.insert(10);
bst.insert(15);
bst.insert(2);
bst.insert(13);
bst.insert(22);

assert.ok(validateBst(bst));
