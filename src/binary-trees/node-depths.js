/*
  NodeDepths
  The distance between a node in a Binary Tree and the tree's root is called the node's depth.
  Write a function that takes in a Binary Tree and returns the sum of its nodes' depths.
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
  16
  // The depth of the node with value 2 is 1.
  // The depth of the node with value 3 is 1.
  // The depth of the node with value 4 is 2.
  // The depth of the node with value 5 is 2.
  // Etc..
  // Summing all of these depths yields 16.
*/

function nodeDepths(tree, depth = 0) {
  if (!tree) {
    return 0;
  }

  return (
    depth + nodeDepths(tree.left, depth + 1) + nodeDepths(tree.right, depth + 1)
  );
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

assert.equal(nodeDepths(root), 16);
