/*
  Count Nodes

  Given the root of a complete binary tree, return the number of the nodes in the tree.
  According to Wikipedia, every level, except possibly the last, is completely filled in a complete binary tree, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

  Example:
  Input: [1,2,3,4,5,6]
  Output: 6
*/

function countNodes(root) {
  let counter = 0;

  function traverse(node) {
    if (!node) {
      return;
    }

    counter++;
    traverse(node.left);
    traverse(node.right);
  }

  traverse(root);

  return counter;
}

const assert = require('assert');
const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
    },
    right: {
      value: 5,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
    },
  },
};

assert.equal(countNodes(tree), 6);
