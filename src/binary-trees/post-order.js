/*
  Post Order

  Write a function that takes in a Binary Tree and returns a list with the values of every node tree using post-order traversal algorithm.

  tree =     10
          /     \
         6       15
       /   \        \
      3     8        20

  Sample Output:
  [3, 8, 6, 20, 15, 10]
*/

function postOrder(root) {
  const visited = [];

  (function postOrderHelper(node) {
    if (node.left) {
      postOrderHelper(node.left);
    }

    if (node.right) {
      postOrderHelper(node.right);
    }

    visited.push(node.value);
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

assert.deepEqual(postOrder(tree), [3, 8, 6, 20, 15, 10]);
