/*
  Breadth First Search

  Write a function takes in a Binary Tree and returns a list with the values of every node tree in horizontal order.

  tree =     10
          /     \
         6       15
       /   \        \
      3     8        20

  Sample Output:
  [10, 6, 15, 3, 8, 20]
*/

function breadthFirstSearch(root) {
  const queue = [root];
  const output = [];

  while (queue.length) {
    const node = queue.shift();
    output.push(node.value);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return output;
}

const assert = require('assert');
const BinarySearchTree = require('../binary-search-trees/bst');

const tree = new BinarySearchTree(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

assert.deepEqual(breadthFirstSearch(tree), [10, 6, 15, 3, 8, 20]);
