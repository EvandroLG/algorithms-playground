/*
  Path Sum

  Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.
  A leaf is a node with no children.

  Sample Input
  tree =    1
         /     \
        2       3
      /   \   /   \
     4     5 6     7
   /   \
  8     9

  Sample Output
  16
*/

function hasPathSum(root, target) {
  if (!root) {
    return false;
  }

  const sum = target - root.value;

  if (!root.left && !root.right) {
    return sum === 0;
  }

  return hasPathSum(root.left, sum) || hasPathSum(root.right, sum);
}

const assert = require('assert');
const BinaryTree = require('./binary-tree');

const root = new BinaryTree(1);
root.insert(2);
root.insert(3);
root.insert(4);
root.insert(5);
root.insert(6);
root.insert(7);
root.insert(8);
root.insert(9);

assert.ok(hasPathSum(root, 8));
assert.ok(hasPathSum(root, 16));
assert.ok(!hasPathSum(root, 2000));
