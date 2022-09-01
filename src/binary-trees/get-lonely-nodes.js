/*
  Get Lonely Nodes

  In a binary tree, a lonely node is a node that is the only child of its parent node.
  Given the root of a binary tree, return an array containing the values of all lonely nodes in the tree. Return the list in any order.

  Example:
  Input: [1,2,3,null,4]
  Output: [4]
*/

function getLonelyNodes(root) {
  const output = [];

  (function traverse(node) {
    if (!node) {
      return;
    }

    if ((!node.left && node.right) || (node.left && !node.right)) {
      output.push((node.left || node.right).value);
    }

    traverse(node.left);
    traverse(node.right);
  })(root);

  return output;
}

const assert = require('assert');

const tree = {
  value: 1,
  left: {
    value: 2,
    right: {
      value: 4,
    },
  },
  right: {
    value: 3,
  },
};

assert.deepEqual(getLonelyNodes(tree), [4]);
