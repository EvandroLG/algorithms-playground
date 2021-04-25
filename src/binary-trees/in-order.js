/*
  In Order

  Write a function that takes in a Binary Tree and returns a list with the values of every node tree using in-order traversal algorithm.

  tree =     10
          /     \
         6       15
       /   \        \
      3     8        20

  Sample Output:
  [3, 6, 8, 10, 15, 20]
*/

function inOrder(root) {
  const visited = [];

  (function inOrderHelper(node) {
    if (node.left) {
      inOrderHelper(node.left);
    }

    visited.push(node.value);

    if (node.right) {
      inOrderHelper(node.right);
    }
  })(root);

  return visited;
}

const assert = require('assert');
const BinarySearchTree = require('../binary-search-trees/bst');

const tree = new BinarySearchTree(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

assert.deepEqual(inOrder(tree), [3, 6, 8, 10, 15, 20]);
