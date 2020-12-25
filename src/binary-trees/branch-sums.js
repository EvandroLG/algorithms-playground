/*
  BranchSums

  Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum.
  A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
  Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

  Sample Input
  tree =     1
          /     \
         2       3
       /   \    /  \
      4     5  6    7
    /   \  /
   8    9 10

  Sample Output
  [15, 16, 18, 10, 11]
*/

function branchSumsHelper(root, sum, arr) {
  if (!root) {
    return;
  }

  if (!root.left && !root.right) {
    arr.push(sum + root.value);
    return;
  }

  const value = sum + root.value;
  branchSumsHelper(root.left, value, arr);
  branchSumsHelper(root.right, value, arr);
}

function branchSums(root) {
  const arr = [];
  branchSumsHelper(root, 0, arr);

  return arr;
}

const assert = require('assert');
const BinarySearchTree = require('../binary-search-trees/bst');

const tree = new BinarySearchTree(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(1);
tree.insert(5);
tree.insert(13);
tree.insert(22);
tree.insert(14);

assert.deepEqual(branchSums(tree), [18, 20, 52, 47]);
