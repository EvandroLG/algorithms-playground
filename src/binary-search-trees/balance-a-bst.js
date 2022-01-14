/*
  Balance A Bst

  Given the root of a binary search tree, return a balanced binary search tree with the same node values.
  If there is more than one answer, return any of them.
  A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

  Example:
  Input: [1,null,2,null,3,null,4,null,null]
  Output: [2,1,3,null,null,null,4]
*/

function balanceABst(root) {
  const arr = convertToArray(root);
  return buildTree(arr);
}

function convertToArray(root) {
  const output = [];

  (function traverse(node) {
    if (!node) {
      return;
    }

    traverse(node.left);
    output.push(node.value);
    traverse(node.right);
  })(root);

  return output;
}

function buildTree(arr) {
  return (function helper(left, right) {
    if (left > right) {
      return null;
    }

    const middle = Math.floor((left + right) / 2);

    return {
      value: arr[middle],
      left: helper(left, middle - 1),
      right: helper(middle + 1, right),
    };
  })(0, arr.length - 1);
}

const assert = require('assert');

const tree = {
  value: 1,
  right: {
    value: 2,
    right: {
      value: 3,
      right: {
        value: 4,
      },
    },
  },
};

assert.deepEqual(balanceABst(tree), {
  value: 2,
  left: {
    value: 1,
    left: null,
    right: null,
  },
  right: {
    value: 3,
    left: null,
    right: {
      value: 4,
      left: null,
      right: null,
    },
  },
});
