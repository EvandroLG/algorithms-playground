/*
  Sum Even Grandparent

  Given the root of a binary tree, return the sum of values of nodes with an even-valued grandparent. If there are no nodes with an even-valued grandparent, return 0.
  A grandparent of a node is the parent of its parent if it exists.

  Example:
  Input = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
  Output: 18
*/

function sumEvenGrandparent(root) {
  let sum = 0;

  (function traverse(node, parents = []) {
    if (!node) {
      return;
    }

    const grandparent = parents.at(-2);

    if (grandparent && isEven(grandparent)) {
      sum += node.value;
    }

    traverse(node.left, [...parents, node.value]);
    traverse(node.right, [...parents, node.value]);
  })(root);

  return sum;
}

function isEven(value) {
  return value % 2 === 0;
}

const assert = require('assert');

const tree = {
  value: 6,
  left: {
    value: 7,
    left: {
      value: 2,
      left: {
        value: 9,
      },
    },
    right: {
      value: 7,
      left: {
        value: 1,
      },
      right: {
        value: 4,
      },
    },
  },
  right: {
    value: 8,
    left: {
      value: 1,
    },
    right: {
      value: 3,
      right: {
        value: 5,
      },
    },
  },
};

assert.equal(sumEvenGrandparent(tree), 18);
