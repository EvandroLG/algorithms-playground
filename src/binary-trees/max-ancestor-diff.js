/*
  Max Ancestor Diff

  Given the root of a binary tree, find the maximum value v for which there exist different nodes a and b where v = |a.val - b.val| and a is an ancestor of b.
  A node a is an ancestor of b if either: any child of a is equal to b or any child of a is an ancestor of b.

  Example:
  Input: [1,null,2,null,0,3]
  Output: 3
*/

function maxAncestorDiff(root) {
  let max = -Infinity;

  (function traverse(node, parents = []) {
    if (!node) {
      return;
    }

    max = Math.max(max, findMaxDiff(parents, node.value));
    const newParents = parents.concat([node.value]);

    traverse(node.left, newParents);
    traverse(node.right, newParents);
  })(root);

  return max;
}

function findMaxDiff(parents, value) {
  return parents.reduce((currentMax, parentValue) => {
    return Math.max(currentMax, Math.abs(value - parentValue));
  }, -Infinity);
}

const assert = require('assert');
const tree = {
  value: 1,
  right: {
    value: 2,
    right: {
      value: 0,
      left: {
        value: 3,
      },
    },
  },
};

assert.equal(maxAncestorDiff(tree), 3);
