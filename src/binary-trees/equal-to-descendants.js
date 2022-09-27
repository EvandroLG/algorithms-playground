/*
  Equal To Descendants

  Given the root of a binary tree, return the number of nodes where the value of the node is equal to the sum of the values of its descendants.
  A descendant of a node x is any node that is on the path from node x to some leaf node.
  The sum is considered to be 0 if the node has no descendants.

  Example:
  Input: [10,3,4,2,1]
  Output: 2
*/

function equalToDescendants(root) {
  let result = 0;

  (function traverse(node) {
    if (!node) {
      return 0;
    }

    let sum = traverse(node.left) + traverse(node.right);

    if (sum === node.value) {
      result++;
    }

    return node.value + sum;
  })(root);

  return result;
}

const assert = require('assert');
const tree = {
  value: 10,
  left: {
    value: 3,
    left: {
      value: 2,
    },
    right: {
      value: 1,
    },
  },
  right: {
    value: 4,
  },
};

assert.equal(equalToDescendants(tree), 2);
