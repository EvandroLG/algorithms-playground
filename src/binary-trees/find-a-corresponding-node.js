/*
  Find A Corresponding Node

  Given two binary trees original and cloned and given a reference to a node target in the original tree.
  The cloned tree is a copy of the original tree.
  Return a reference to the same node in the cloned tree.

  Example:
  Input: [7,4,3,null,null,6,19], 3
  Output: 3
*/

function findACorrespondingNode(original, cloned, target) {
  return (function traverse(first, second) {
    if (!first) {
      return null;
    }

    if (first === target) {
      return second;
    }

    return (
      traverse(first.left, second.left) || traverse(first.right, second.right)
    );
  })(original, cloned);
}

const assert = require('assert');

const original = {
  value: 7,
  left: {
    value: 4,
  },
  right: {
    value: 3,
    left: {
      value: 6,
    },
    right: {
      value: 19,
    },
  },
};

const cloned = {
  value: 7,
  left: {
    value: 4,
  },
  right: {
    value: 3,
    left: {
      value: 6,
    },
    right: {
      value: 19,
    },
  },
};

assert.equal(findACorrespondingNode(original, cloned, original.right).value, 3);
