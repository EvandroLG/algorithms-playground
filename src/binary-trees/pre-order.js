/*
  Pre Order

  Write a function that takes in a Binary Tree and returns a list with the values of every node tree using pre-order traversal algorithm.

  tree =     10
          /     \
         6       15
       /   \        \
      3     8        20

  Sample Output:
  [10, 6, 3, 8, 15, 20]
*/

function preOrder(root) {
  const visited = [];

  (function preOrderHelper(current) {
    visited.push(current.value);

    if (current.left) {
      preOrderHelper(current.left);
    }

    if (current.right) {
      preOrderHelper(current.right);
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

assert.deepEqual(preOrder(tree), [10, 6, 3, 8, 15, 20]);
