/*
  InvertBinaryTree

  Write a function that takes in a Binary Tree and inverts it. In other words, the function should swap every left node in the tree for its corresponding right node.
  Each BinaryTree node has an integer value, a left child node, and a right child node. Children nodes can either be BinaryTree nodes themselves or None / null.

  Sample Input
  tree =    1
         /     \
        2       3
      /   \   /   \
     4     5 6     7
   /   \
  8     9

  Sample Output
         1
      /     \
     3       2
   /   \   /   \
  7     6 5     4
              /   \
             9     8
*/

function invertBinaryTree(root) {
  if (!root) {
    return;
  }

  const right = root.right;
  root.right = root.left;
  root.left = right;

  invertBinaryTree(root.left);
  invertBinaryTree(root.right);
}

const assert = require('assert');
const BinaryTree = require('./binary-tree');

const tree = new BinaryTree(1);
tree.insert(2);
tree.insert(3);

invertBinaryTree(tree);

assert.equal(tree.left.value, 3);
assert.equal(tree.right.value, 2);
