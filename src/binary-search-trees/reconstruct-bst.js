/*
  Reconstruct Bst
  The pre-order traversal of a Binary Tree is a traversal technique that starts at the tree's root node and visits nodes in the following order:

  Current node
  Left subtree
  Right subtree

  Given a non-empty array of integers representing the pre-order traversal of a Binary Search Tree (BST), write a function that creates the relevant BST and returns its root node.
  The input array will contain the values of BST nodes in the order in which these nodes would be visited with a pre-order traversal.
  Each BST node has an integer value, a left child node, and a right child node. A node is said to be a valid BST node if and only if it satisfies the BST property: its value is strictly greater than the values of every node to its left; its value is less than or equal to the values of every node to its right; and its children nodes are either valid BST nodes themselves or None / null.

  Sample Input
  preOrderTraversalValues = [10, 4, 2, 1, 5, 17, 19, 18]

  Sample Output
          10
        /    \
       4      17
     /   \      \
    2     5     19
   /           /
  1           18
*/

class BST {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

function reconstructBstHelper(root, value) {
  if (value < root.value) {
    if (!root.left) {
      root.left = new BST(value);
    } else {
      reconstructBstHelper(root.left, value);
    }
  } else {
    if (!root.right) {
      root.right = new BST(value);
    } else {
      reconstructBstHelper(root.right, value);
    }
  }
}

function reconstructBst(arr) {
  const root = new BST(arr[0]);
  const values = arr.slice(1);

  for (const value of values) {
    reconstructBstHelper(root, value);
  }

  return root;
}

const assert = require('assert');

const arr = [10, 4, 2, 5, 17, 19];
const root = reconstructBst(arr);
const left = root.left;
const right = root.right;

assert.equal(root.value, 10);
assert.equal(left.value, 4);
assert.equal(right.value, 17);
assert.equal(right.right.value, 19);
assert.equal(left.left.value, 2);
assert.equal(left.right.value, 5);
