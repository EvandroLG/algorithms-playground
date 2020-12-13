/*
  FindClosestValueInBst

  Write a function that takes in a Binary Search Tree (BST) and a target integer value and returns the closest value to that target value contained in the BST.
  You can assume that there will only be one closest value.
  Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.

  Sample Input
  tree =   10
         /     \
        5      15
      /   \   /   \
     2     5 13   22
   /           \
  1            14
  target = 12
  Sample Output
  13
*/

function findClosestValueInBst(tree, value) {
  let current = tree;
  let closest = tree.value;

  while (current) {
    if (Math.abs(closest - value) > Math.abs(current.value - value)) {
      closest = current.value;
    }

    if (value < current.value) {
      current = current.left;
    } else if (value > current.value) {
      current = current.right;
    }
  }

  return closest;
}

const BinarySearchTree = require('./bst');
const assert = require('assert');

const bst = new BinarySearchTree(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(1);
bst.insert(5);
bst.insert(13);
bst.insert(20);
bst.insert(14);

assert.equal(findClosestValueInBst(bst, 12), 13);
